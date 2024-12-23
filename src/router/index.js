import Vue from "vue";
import VueRouter from "vue-router";

const Login = () => import("../views/LoginView.vue");
const Facts = () => import("../views/FactsView.vue");
const Fact = () => import("../views/FactView.vue");

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },

    {
      path: "/",
      redirect: { name: "facts" },
    },

    {
      path: "/facts",
      name: "facts",
      component: Facts,
      meta: { requiresAuth: true },
    },

    {
      path: "/fact",
      name: "fact",
      component: Fact,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("cat_user");

  if (to.name !== "login" && !isLoggedIn) {
    next({ name: "login" });
  } else if (isLoggedIn && to.name === "login") {
    next("/facts");
  } else {
    next();
  }
});
