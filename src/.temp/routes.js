const c1 = () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/kenyasullivan/development/sasl/src/templates/MarkdownPage.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/kenyasullivan/development/sasl/src/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/kenyasullivan/development/sasl/src/pages/Index.vue")

export default [
  {
    path: "/docs/writing-content/",
    component: c1
  },
  {
    path: "/docs/settings/",
    component: c1
  },
  {
    path: "/docs/sidebar/",
    component: c1
  },
  {
    path: "/docs/installation/",
    component: c1
  },
  {
    path: "/docs/deploying/",
    component: c1
  },
  {
    path: "/docs/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
