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
    path: "/giph",
  },
  {
    name: "User",
    path: "/user",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.onError((error, to) => {
  if (error.message.includes("Failed to fetch dynamically imported module")) {
    window.location = to.fullPath;
  }
});

export default router;
