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
  {
    path: "/inicio",
    name: "inicio",
    component: () => import("../views/Inicio.vue"),
    meta: {
      REQUIRED_AUTH: true,
      title: `${TITLE} - Inicio `,
    },
    children: [
      {
        path: "/administracion",
        name: "administracion",
        component: () => import("../views/empresa/admin.vue"),
        meta: {
          REQUIRED_AUTH: true,
          title: `${TITLE} - administración`,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const AUTH = sessionStorage.usuario;
  document.title = to.meta.title;
  const REQUIRED_AUTH = to.matched.some((record) => record.meta.REQUIRED_AUTH);
  const CURENT_USU = AUTH ? JSON.parse(atob(AUTH)) : null;

  if (REQUIRED_AUTH && !CURENT_USU) next("ingreso");
  else if (!REQUIRED_AUTH && CURENT_USU && to.path !== "/inicio") next("inicio");
  else next();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

export default router;
