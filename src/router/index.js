import { createRouter, createWebHistory } from 'vue-router';
import MagicView from '../views/MagicView.vue';
import HeroesView from '../views/HeroesView.vue';
import ArtifactsView from '../views/ArtifactsView.vue';
import CastleView from '../views/CastleView.vue';

const routes = [
  { path: '/magic', component: MagicView },
  { path: '/heroes', component: HeroesView },
  { path: '/artifacts', component: ArtifactsView },
  { path: '/castle/:castleId', component: CastleView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
