import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    
    component: () =>
      import( "../views/AboutView.vue"),
  },
  {
    path: "/products",
    name: "products",

    component: () => import("../views/ProductsView.vue"),
    props: () => {
      return {
        title: "Desayunos",
        subtitle: "Contamos con desayunos nutritivos y deliciosos.",
        price: "Precio: $2.000",
        quantity: "Cantidad: Para dos personas",
      };
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
