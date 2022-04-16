import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import RickAndMortyView from "./views/RickAndMortyView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/rickandmorty",
    component: RickAndMortyView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
