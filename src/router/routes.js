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
  { path: '/homm3_hota_assist/castles/castle', component: CastlePage },
  { path: '/homm3_hota_assist/castles/rampart', component: RampartPage },
  { path: '/homm3_hota_assist/castles/tower', component: TowerPage },
  { path: '/homm3_hota_assist/castles/inferno', component: InfernoPage },
  { path: '/homm3_hota_assist/castles/necropolis', component: NecropolisPage },
  { path: '/homm3_hota_assist/castles/dungeon', component: DungeonPage },
  { path: '/homm3_hota_assist/castles/stronghold', component: StrongholdPage },
  { path: '/homm3_hota_assist/castles/fortress', component: FortressPage },
  { path: '/homm3_hota_assist/castles/conflux', component: ConfluxPage },
  { path: '/homm3_hota_assist/castles/cove', component: CovePage },
  { path: '/homm3_hota_assist/castles/factory', component: FactoryPage }, // Маршрут Factory
  { path: '/homm3_hota_assist/castles/neutral', component: NeutralPage }, // Маршрут Neutral
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
