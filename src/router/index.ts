/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Gif",
    path: "/:id",
  },
  {
    name: "User",
    path: "/user/:id",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
