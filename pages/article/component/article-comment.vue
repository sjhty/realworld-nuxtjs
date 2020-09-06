<template>
  <div>
    <div v-if="user">
      <ul class="error-messages" v-if="errors.length > 0">
        <li>
          <span v-for="error in errors" :key="error">{{ error }}</span>
        </li>
      </ul>
      <form class="card comment-form" @submit.prevent="onSubmit">
        <div class="card-block">
          <textarea
            v-model="comment.body"
            class="form-control"
            placeholder="Write a comment..."
            rows="3"
          ></textarea>
        </div>
        <div class="card-footer">
          <img :src="user.image" class="comment-author-img" />
          <button class="btn btn-sm btn-primary">Post Comment</button>
        </div>
      </form>

      <div class="card" v-for="comment in comments" :key="comment.id">
        <div class="card-block">
          <p class="card-text">{{ comment.body }}</p>
        </div>
        <div class="card-footer">
          <nuxt-link
            class="comment-author"
            :to="{ name: 'profile', params: comment.author.username }"
          >
            <img :src="comment.author.image" class="comment-author-img" />
          </nuxt-link>&nbsp;
          <nuxt-link
            :to="{ name: 'profile', params: comment.author.username }"
            class="comment-author"
          >{{ comment.author.username }}</nuxt-link>
          <span class="date-posted">{{ comment.createdAt | date('MMM DD, YYYY')}}</span>
          <span class="mod-options" @click="deleteComment(comment.id)">
            <i class="ion-trash-a"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-xs-12 col-md-8 offset-md-2">
        <p>
          <nuxt-link :to="{ name: 'login' }" class>Sign in</nuxt-link>or
          <nuxt-link :to="{ name: 'register' }" class>sign up</nuxt-link>to add comments on this article.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getCommentsFromArticle,
  addCommentsToArticle,
  deleteComment,
} from "@/api/article";
import { mapState } from "vuex";
export default {
  name: "ArticleComment",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      comments: [],
      comment: {
        body: "",
      },
      addDisabled: false,
      deleteDisabled: false,
      errors: []
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  mounted() {
    this.getComments()
  },
  methods: {
    async getComments() {
      try {
        const { data } = await getCommentsFromArticle(this.article.slug);
        this.comments = data.comments;
      } catch (err) {
        
        this.errors = err.message;
      }
    },
    async onSubmit() {
      if (this.comment.body == '') {
        this.errors.push('评论不能为空') 
        return
      }
      if (this.addDisabled) return;
      this.addDisabled = true;
      try {
        await addCommentsToArticle(this.article.slug, this.comment);
        this.comment.body = "";
        this.getComments();
      } catch (err) {
        this.errors = err.message;
      }
      this.addDisabled = false;
      this.errors = []
    },
    async deleteComment(id) {
      if (this.deleteDisabled) return;
      this.deleteDisabled = true;
      try {
        await deleteComment(this.article.slug, id);
        this.getComments();
      } catch (err) {
        this.errors = err.message;
      }
      this.deleteDisabled = false;
    },
  },
};
</script>

<style>
</style>