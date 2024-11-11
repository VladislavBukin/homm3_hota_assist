import { createRouter, createWebHistory } from 'vue-router';
import MagicPage from '../pages/MagicPage.vue';
import HeroesPage from '../pages/HeroesPage.vue';
import ArtifactsPage from '../pages/ArtifactsPage.vue';

// Импорты страниц замков
import CastlePage from '../pages/castles/CastlePage.vue';
import RampartPage from '../pages/castles/RampartPage.vue';
import TowerPage from '../pages/castles/TowerPage.vue';
import InfernoPage from '../pages/castles/InfernoPage.vue';
import NecropolisPage from '../pages/castles/NecropolisPage.vue';
import DungeonPage from '../pages/castles/DungeonPage.vue';
import StrongholdPage from '../pages/castles/StrongholdPage.vue';
import FortressPage from '../pages/castles/FortressPage.vue';
import ConfluxPage from '../pages/castles/ConfluxPage.vue';
import CovePage from '../pages/castles/CovePage.vue';
import FactoryPage from '../pages/castles/FactoryPage.vue'; // Импорт Factory
import NeutralPage from '../pages/castles/NeutralPage.vue'; // Импорт Neutral

const routes = [
  { path: '/', redirect: '/magic' },
  { path: '/magic', component: MagicPage },
  { path: '/heroes', component: HeroesPage },
  { path: '/artifacts', component: ArtifactsPage },
  // Маршруты замков
  { path: '/castles/castle', component: CastlePage },
  { path: '/castles/rampart', component: RampartPage },
  { path: '/castles/tower', component: TowerPage },
  { path: '/castles/inferno', component: InfernoPage },
  { path: '/castles/necropolis', component: NecropolisPage },
  { path: '/castles/dungeon', component: DungeonPage },
  { path: '/castles/stronghold', component: StrongholdPage },
  { path: '/castles/fortress', component: FortressPage },
  { path: '/castles/conflux', component: ConfluxPage },
  { path: '/castles/cove', component: CovePage },
  { path: '/castles/factory', component: FactoryPage }, // Маршрут Factory
  { path: '/castles/neutral', component: NeutralPage }, // Маршрут Neutral
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
