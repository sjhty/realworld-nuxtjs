<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input v-model="article.title" type="text" class="form-control form-control-lg" placeholder="Article Title" />
              </fieldset>
              <fieldset class="form-group">
                <input v-model="article.description" type="text" class="form-control" placeholder="What's this article about?" />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="article.body"
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input v-model="tags" type="text" class="form-control" placeholder="Enter tags" @keypress.enter.prevent="addTag(tags)"/>
                <div class="tag-list">
                  <span class="tag-default tag-pill" v-for="(tag, index) in article.tagList" :key="tag">
                    <i class="ion-close-round" @click="deleteTag(index)"></i>
                    {{ tag }}
                  </span>
                </div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click.prevent="onSubmit" :disabled="addDisabled">Publish Article</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle, createArticle, updateArticle } from '@/api/article'
export default {
  middleware: 'authenticated',
  name: 'editorIndex',
  data() {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tagList: []
      },
      tags: '',
      errors: '',
      addDisabled: false,
      slug: this.$route.params.slug
    }
  },
  async mounted() {
    try {
      const { data } = await getArticle(this.slug)
      this.article = data.article
    } catch(err) {
      this.errors = err.message
    }
  },
  methods: {
    async onSubmit() {
      this.addDisabled = true
      try {
        const request = this.slug ? updateArticle : createArticle
        console.log(this.article)
        const { data } = await request({article: this.article}, this.slug)
        const { slug } = data.article
        this.$router.push({
          name: 'article',
          params: {
            slug
          }
        })
      } catch(err) {
        this.errors = err.message
      }
      this.addDisabled = false
    },

    addTag(tag) {
      if (this.article.tagList.indexOf(tag) == -1) {
        this.article.tagList.push(tag)
      }
      this.tags = '' 
    },

    deleteTag(_index) {
      this.article.tagList.splice(_index, 1)
    }
  }

};
</script>

<style>
</style>