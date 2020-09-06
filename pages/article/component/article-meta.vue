<template>
  <div class="article-meta">
    <nuxt-link
      :to="{
        name: 'profile',
        params: {
            username: article.author.username
        }
    }"
    >
      <img :src="article.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link
        :to="{
            name: 'profile',
            params: {
                username: article.author.username
            }
      }"
        class="author"
      >{{ article.author.username }}</nuxt-link>
      <span class="date">{{ article.createdAt | date('MMM DD, YYYY')}}</span>
    </div>
    <span v-if="user && user.username == article.author.username">
      <nuxt-link exact :to="{
        name: 'editor',
        params: {
          slug: article.slug
        }
      }" class="btn btn-sm btn-outline-secondary">
        <i class="ion-edit"></i>
        <span>&nbsp;Edit Article</span>
      </nuxt-link>
      <span>&nbsp;&nbsp;</span>
      <button class="btn btn-outline-danger btn-sm" @click="deleteArticle" :disabled="deleteDisabled">
        <i class="ion-trash-a"></i>
        <span>&nbsp;Delete Article</span>
      </button>
    </span>
    <span v-else>
      <button 
      class="btn btn-sm btn-outline-secondary"
      :class="{
          active: article.author.following
      }"
      >
        <i class="ion-plus-round"></i>
        &nbsp;
        Follow Eric Simons
        <span class="counter">(10)</span>
      </button>
      &nbsp;&nbsp;
      <button 
      class="btn btn-sm btn-outline-primary"
      :class="{
          active: article.favorited
      }"
      >
        <i class="ion-heart"></i>
        &nbsp;
        Favorite Post
        <span class="counter">({{ article.favoritesCount }})</span>
      </button>
    </span>
    
  </div>
</template>

<script>
import { deleteArticle } from '@/api/article'
import { mapState } from 'vuex'
export default {
  name: "ArticleMeta",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      errors: '',
      deleteDisabled: false
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    async deleteArticle() {
      this.deleteDisabled = true
      try {
        await deleteArticle(this.article.slug)
        this.$router.push('/')
      } catch(err) {
        this.errors = err.message
      }
      this.deleteDisabled = false
    }
  }
};
</script>

<style>
</style>