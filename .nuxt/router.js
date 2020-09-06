import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _18c03322 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _6073cad7 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _a3844f1e = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _215f5e9e = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _e80c53ca = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _0cf15965 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _53cad804 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _18c03322,
    children: [{
      path: "",
      component: _6073cad7,
      name: "home"
    }, {
      path: "/login",
      component: _a3844f1e,
      name: "login"
    }, {
      path: "/register",
      component: _a3844f1e,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _215f5e9e,
      name: "profile"
    }, {
      path: "/settings",
      component: _e80c53ca,
      name: "settings"
    }, {
      path: "/editor/:slug",
      component: _0cf15965,
      name: "editor"
    }, {
      path: "/editor",
      component: _0cf15965,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _53cad804,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
