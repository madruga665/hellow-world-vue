import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import RickAndMortyView from "./views/RickAndMortyView.vue";
import FormsView from "./views/FormsView.vue";
import CounterView from "./views/CounterView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/rickandmorty",
    component: RickAndMortyView,
  },
  {
    path: "/forms",
    component: FormsView,
  },
  {
    path: "/counter",
    component: CounterView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
