import { createRouter, createWebHistory } from "vue-router";
import SignIn from "../views/SignIn.vue";
import DashBoard from "../views/DashBoard.vue";

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/dash-board",
    name: "DashBoard",
    component: DashBoard,
    beforeEnter(to, from, next) {
      console.log(to, from);
      const user = JSON.parse(localStorage.getItem("userLogin"));
      if (user[0].type === "ADMIN") {
        next();
      } else {
        alert("Ban khong co quyen truy cap vao trang nay");
        next("/");
      }
    },
  },
];
// {
//   path: "/about",
//   name: "about",
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () =>
//     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
// },

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
