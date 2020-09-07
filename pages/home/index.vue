<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">拉勾教育</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <nuxt-link class="nav-link" :class="{ active: tab === 'your_feed' }" exact :to="{ name: 'home', query: { tab: 'your_feed' } }">Your Feed</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" :class="{ active: tab === 'global_feed' }" exact :to="{ name: 'home' }">Global Feed</nuxt-link>
              </li>
              <li class="nav-item" v-if="tag">
                <nuxt-link class="nav-link" :class="{ active: tab === 'tag' }" exact :to="{ name: 'home', query: { tab: 'tag', tag } }"># {{ tag }}</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="article-preview" v-for="article in articles" :key="article.slug">
            <div class="article-meta">
              <nuxt-link :to="{name: 'profile', params: { username: article.author.username }}">
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link
                  class="author"
                  :to="{name: 'profile', params: { username: article.author.username }}"
                >{{ article.author.username}}</nuxt-link>
                <span class="date">{{ article.createdAt | date}}</span>
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
            <nuxt-link class="preview-link" :to="{name: 'article', params: { slug: article.slug }}">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>
          <nav>
            <ul class="pagination">
              <li data-test="page-link-1" class="page-item" v-for="item in totalPage" :key="item" :class="{ active: item === page }">
                
                <nuxt-link class="page-link" :to="{name: 'home', query: { page: item, tag: $route.query.tag, tab: tab }}">{{ item }}</nuxt-link>
              </li>
              
            </ul>
          </nav>
        </div>
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link class="tag-pill tag-default" :to="{name: 'home', query: { tag: tag, tab: 'tag' }}" v-for="tag in tags" :key="tag">{{ tag }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { 
  getArticles,
  getYourArticles,
  onFavoritedArticle,
  deleteFavoritedArticle 
} from "@/api/article";
import { getTags } from "@/api/tag";
import { mapState } from "vuex"
export default {
  name: "HomeIndex",
  async asyncData({query}) {
    const page = Number.parseInt(query.page || 1)
    const limit = 10
    const tab = query.tab || 'global_feed'
    const tag = query.tag
    const localArticles = tab !== 'your_feed' ? getArticles : getYourArticles
    const [ articleRes, tagRes ] = await Promise.all([
      localArticles({
          limit, 
          offset: (page - 1)*limit,
          tag
      }),   
      getTags()
    ]) 

    const { articles, articlesCount } = articleRes.data
    const { tags } = tagRes.data
    articles.forEach(article => article.onFavoritedDisabled = false)
    return {
      articles,
      articlesCount,
      tags,
      limit,
      page,
      tab,
      tag
    };
  },
  watchQuery: ['page', 'tag', 'tab'],
  computed: {
    ...mapState(['user']),
    totalPage () {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },
  methods: {
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