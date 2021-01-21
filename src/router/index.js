import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../components/MainPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/item/:id",
    name: "ItemView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/ItemView"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
