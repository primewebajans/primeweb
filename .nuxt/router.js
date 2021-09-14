import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1ad90cb3 = () => interopDefault(import('..\\pages\\biz-kimiz.vue' /* webpackChunkName: "pages/biz-kimiz" */))
const _3690a605 = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _b606080c = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _b34d49e4 = () => interopDefault(import('..\\pages\\blog-left-sidebar.vue' /* webpackChunkName: "pages/blog-left-sidebar" */))
const _02cac5c3 = () => interopDefault(import('..\\pages\\iletisim.vue' /* webpackChunkName: "pages/iletisim" */))
const _284ca82d = () => interopDefault(import('..\\pages\\ne-yapiyoruz.vue' /* webpackChunkName: "pages/ne-yapiyoruz" */))
const _652eb8b1 = () => interopDefault(import('..\\pages\\ne-yaptik.vue' /* webpackChunkName: "pages/ne-yaptik" */))
const _8a4f39d2 = () => interopDefault(import('..\\pages\\service-details.vue' /* webpackChunkName: "pages/service-details" */))
const _87b275d2 = () => interopDefault(import('..\\pages\\blog-detay\\_slug.vue' /* webpackChunkName: "pages/blog-detay/_slug" */))
const _33c956ff = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/biz-kimiz",
    component: _1ad90cb3,
    name: "biz-kimiz"
  }, {
    path: "/blog",
    component: _3690a605,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _b606080c,
    name: "blog-details"
  }, {
    path: "/blog-left-sidebar",
    component: _b34d49e4,
    name: "blog-left-sidebar"
  }, {
    path: "/iletisim",
    component: _02cac5c3,
    name: "iletisim"
  }, {
    path: "/ne-yapiyoruz",
    component: _284ca82d,
    name: "ne-yapiyoruz"
  }, {
    path: "/ne-yaptik",
    component: _652eb8b1,
    name: "ne-yaptik"
  }, {
    path: "/service-details",
    component: _8a4f39d2,
    name: "service-details"
  }, {
    path: "/blog-detay/:slug?",
    component: _87b275d2,
    name: "blog-detay-slug"
  }, {
    path: "/",
    component: _33c956ff,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
