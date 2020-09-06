exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getYourArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return onFavoritedArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteFavoritedArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return updateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getCommentsFromArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addCommentsToArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteComment; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

/**
 * 获取文章列表
 * @param {*} params 
 */

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
};
/**
 * 获取用户关注文章列表
 * @param {*} params 
 */

const getYourArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
};
const onFavoritedArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
};
const deleteFavoritedArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
};
const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
};
const createArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles`,
    data
  });
};
const updateArticle = (data, slug) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/articles/${slug}`,
    data
  });
};
const deleteArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  });
};
const getCommentsFromArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
};
const addCommentsToArticle = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  });
};
const deleteComment = (slug, id) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`
  });
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=554e3d93&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\">","</div>",[_vm._ssrNode("<div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div> "),_vm._ssrNode("<ul class=\"tag-list\">","</ul>",_vm._l((_vm.article.tagList),function(tag){return _vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"router-link-active tag-default tag-pill tag-outline",attrs:{"to":{
            name: 'home',
            query: {
              tag: tag,
              tab: 'tag'
            }
          }}},[_vm._v(_vm._s(tag))])],1)}),0)],2),_vm._ssrNode(" <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_c('article-comment',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=554e3d93&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/component/article-meta.vue?vue&type=template&id=2d959216&
var article_metavue_type_template_id_2d959216_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
      name: 'profile',
      params: {
          username: _vm.article.author.username
      }
  }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
          name: 'profile',
          params: {
              username: _vm.article.author.username
          }
    }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" "),(_vm.user && _vm.user.username == _vm.article.author.username)?_vm._ssrNode("<span>","</span>",[_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary",attrs:{"exact":"","to":{
      name: 'editor',
      params: {
        slug: _vm.article.slug
      }
    }}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" "),_c('span',[_vm._v(" Edit Article")])]),_vm._ssrNode(" <span>  </span> <button"+(_vm._ssrAttr("disabled",_vm.deleteDisabled))+" class=\"btn btn-outline-danger btn-sm\"><i class=\"ion-trash-a\"></i> <span> Delete Article</span></button>")],2):_vm._ssrNode(("<span><button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{
        active: _vm.article.author.following
    }))+"><i class=\"ion-plus-round\"></i>\n       \n      Follow Eric Simons\n      <span class=\"counter\">(10)</span></button>\n      \n    <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{
        active: _vm.article.favorited
    }))+"><i class=\"ion-heart\"></i>\n       \n      Favorite Post\n      <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button></span>"))],2)}
var article_metavue_type_template_id_2d959216_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/component/article-meta.vue?vue&type=template&id=2d959216&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/component/article-meta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: "ArticleMeta",
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      errors: '',
      deleteDisabled: false
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },
  methods: {
    async deleteArticle() {
      this.deleteDisabled = true;

      try {
        await Object(api_article["c" /* deleteArticle */])(this.article.slug);
        this.$router.push('/');
      } catch (err) {
        this.errors = err.message;
      }

      this.deleteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/article/component/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var component_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/article/component/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  component_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_2d959216_render,
  article_metavue_type_template_id_2d959216_staticRenderFns,
  false,
  injectStyles,
  null,
  "88a39a4e"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/component/article-comment.vue?vue&type=template&id=2cc86930&
var article_commentvue_type_template_id_2cc86930_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.user)?_vm._ssrNode("<div>","</div>",[_vm._ssrNode(((_vm.errors.length > 0)?("<ul class=\"error-messages\"><li>"+(_vm._ssrList((_vm.errors),function(error){return ("<span>"+_vm._ssrEscape(_vm._s(error))+"</span>")}))+"</li></ul>"):"<!---->")+" <form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.comment.body))+"</textarea></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">Post Comment</button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{ name: 'profile', params: comment.author.username }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode(" \n        "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{ name: 'profile', params: comment.author.username }}},[_vm._v(_vm._s(comment.author.username))]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,'MMM DD, YYYY')))+"</span> <span class=\"mod-options\"><i class=\"ion-trash-a\"></i></span>")],2)],2)})],2):_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_vm._ssrNode("<p>","</p>",[_c('nuxt-link',{attrs:{"to":{ name: 'login' }}},[_vm._v("Sign in")]),_vm._ssrNode("or\n        "),_c('nuxt-link',{attrs:{"to":{ name: 'register' }}},[_vm._v("sign up")]),_vm._ssrNode("to add comments on this article.\n      ")],2)])])])}
var article_commentvue_type_template_id_2cc86930_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/component/article-comment.vue?vue&type=template&id=2cc86930&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/component/article-comment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var article_commentvue_type_script_lang_js_ = ({
  name: "ArticleComment",
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      comments: [],
      comment: {
        body: ""
      },
      addDisabled: false,
      deleteDisabled: false,
      errors: []
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["user"])
  },

  mounted() {
    this.getComments();
  },

  methods: {
    async getComments() {
      try {
        const {
          data
        } = await Object(api_article["h" /* getCommentsFromArticle */])(this.article.slug);
        this.comments = data.comments;
      } catch (err) {
        this.errors = err.message;
      }
    },

    async onSubmit() {
      if (this.comment.body == '') {
        this.errors.push('评论不能为空');
        return;
      }

      if (this.addDisabled) return;
      this.addDisabled = true;

      try {
        await Object(api_article["a" /* addCommentsToArticle */])(this.article.slug, this.comment);
        this.comment.body = "";
        this.getComments();
      } catch (err) {
        this.errors = err.message;
      }

      this.addDisabled = false;
      this.errors = [];
    },

    async deleteComment(id) {
      if (this.deleteDisabled) return;
      this.deleteDisabled = true;

      try {
        await Object(api_article["d" /* deleteComment */])(this.article.slug, id);
        this.getComments();
      } catch (err) {
        this.errors = err.message;
      }

      this.deleteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/article/component/article-comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var component_article_commentvue_type_script_lang_js_ = (article_commentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/component/article-comment.vue



function article_comment_injectStyles (context) {
  
  
}

/* normalize component */

var article_comment_component = Object(componentNormalizer["a" /* default */])(
  component_article_commentvue_type_script_lang_js_,
  article_commentvue_type_template_id_2cc86930_render,
  article_commentvue_type_template_id_2cc86930_staticRenderFns,
  false,
  article_comment_injectStyles,
  null,
  "6ef85b3b"
  
)

/* harmony default export */ var article_comment = (article_comment_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: "ArticleIndex",

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api_article["f" /* getArticle */])(params.slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article
    };
  },

  components: {
    ArticleMeta: article_meta,
    ArticleComment: article_comment
  },

  head() {
    return {
      title: this.article.title + " - RealWord",
      meta: [{
        hid: "description",
        name: "description",
        content: this.article.description
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "0ee540e4"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map