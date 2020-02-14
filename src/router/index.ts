import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home.vue"
import RecipePage from "@/views/RecipePage.vue"
import SearchResults from "@/views/SearchResults.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/recipe/:id",
    name: "recipe",
    component: RecipePage
  },
  {
    path: "/search",
    name: "search",
    component: SearchResults
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
