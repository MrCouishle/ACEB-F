import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const TITLE = "eonia";
const routes = [
  {
    path: "*",
    redirect: "/404",
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404.vue"),
    meta: {
      REQUIRED_AUTH: true,
      title: `${TITLE} - Error - 404`,
    },
  },
  {
    path: "/",
    redirect: "/ingreso",
  },
  {
    path: "/ingreso",
    name: "ingreso",
    component: () => import("../views/Ingreso.vue"),
    meta: {
      REQUIRED_AUTH: false,
      title: `${TITLE} - Ingreso`,
    },
  },
];

