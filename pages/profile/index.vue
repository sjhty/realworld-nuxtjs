<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p>{{ profile.bio }}</p>
            <button class="btn btn-sm btn-outline-secondary action-btn" v-if="profile.username !== user.username" @click="onFollow" :disabled="followDisabled">
              <i class="ion-plus-round"></i>
              &nbsp;
              {{ profile.following ? 'Unfollow' : 'Follow' }}
              {{ profile.username }}
            </button>
            <nuxt-link to="/settings" class="btn btn-sm btn-outline-secondary action-btn" v-else>
              <i class="ion-gear-a"></i> Edit Profile Settings
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link :to="{
                  name: 'profile'
                }" class="nav-link" exact :class="{ active: tab === 'my'}">My Articles</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link :to="{
                  name: 'profile',
                  query: {
                    tab: 'favorited'
                  }
                }" class="nav-link" exact :class="{ active: tab === 'favorited'}" >Favorited Articles</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="article-preview" v-for="article in articles" :key="article.slug">
            <div class="article-meta">
              <nuxt-link :to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }">
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link :to="{
                  name: 'profile',
                  params: {
                    username: article.author.username
                  }
                }" class="author">{{ article.author.username }}</nuxt-link>
                <span class="date">{{ article.createdAt | date('MMM DD, YYYY')}}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{ active:article.favorited }"
                @click="onFavorited(article)" 
                :disabled="article.onFavoritedDisabled"
              >
                <i class="ion-heart"></i>
                {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link :to="{
              name: 'article', 
              params: { slug: article.slug }
            }" class="preview-link">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description}}</p>
              <span>Read more...</span>
              <ul class="tag-list" v-for="tag in article.tagList" :key="tag">
                <li class="tag-default tag-pill tag-outline">{{ tag }}</li>
              </ul>
            </nuxt-link>
          </div>
          <nav>
            <ul class="pagination">
              <li data-test="page-link-1" class="page-item" v-for="item in totalPage" :key="item" :class="{ active: item === page }">
                
                <nuxt-link class="page-link" :to="{name: 'profile', query: { page: item, tab: tab }}">{{ item }}</nuxt-link>
              </li>
              
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProfile, followUser, unFollowUser } from "@/api/profile";
import { 
  getArticles,
  onFavoritedArticle,
  deleteFavoritedArticle 
} from '@/api/article'
import { mapState } from "vuex";
export default {
  name: "ProfileIndex",
  middleware: "authenticated",
  data() {
    return {
      errors: "",
      followDisabled: false
    };
  },
  async asyncData({ params, query, redirect }) {
    const username = encodeURI(params.username);
    if (!username) {
      redirect("/");
    }

    const tab = query.tab || 'my'
    const page = parseInt(query.page) || 1
    const limit = 2
    const body = {
      limit: limit,
      offset: (page - 1) * limit
    }

    if (tab == 'my') {
      body.author = username
    } else {
      body.favorited = username
    }


    try {
      const [ proRes, artRes ] = await Promise.all([
        getProfile(username),
        getArticles(body)
      ]) 
      const { profile } = proRes.data
      const { articles, articlesCount } = artRes.data
      return {
        profile,
        articles,
        articlesCount,
        username,
        limit,
        page,
        tab
      }
    } catch (err) {
      //this.errors = err.message;
      redirect('/')
    }
  },
  watchQuery: ['tab', 'page'],
  computed: {
    ...mapState(["user"]),
    totalPage () {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },
  methods: {
    async onFollow() {
      const requset = this.profile.following ? unFollowUser : followUser
      this.followDisabled = true
      try {
        await requset(this.username)
        this.profile.following = !this.profile.following
      } catch (error) {
        this.errors = error.message
      }
      this.followDisabled = false
    },
    async onFavorited(article) {
      if (this.user) {
        article.onFavoritedDisabled = true
        if (article.favorited) {
          await deleteFavoritedArticle(article.slug)
          article.favorited = false
          article.favoritesCount += -1
        } else {
          await onFavoritedArticle(article.slug)
          article.favorited = true
          article.favoritesCount += 1
        }
        article.onFavoritedDisabled = false
      } else {
        this.$router.push('/login')
      }
    }
  }
};
</script>

<style>
</style>