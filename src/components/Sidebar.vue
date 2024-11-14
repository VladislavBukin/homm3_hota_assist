<template>
  <aside class="sidebar">
    <div 
      class="castle" 
      v-for="castle in castles" 
      :key="castle.name" 
      @click="navigateToCastle(castle)"
    >
      <img :src="castle.icon" :alt="castle.name" />
    </div>
  </aside>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const navigateToCastle = (castle) => {
      router.push(castle.route); // Переход на страницу замка
    };
    return {
      navigateToCastle,
      castles: [
        { name: 'Castle', icon: '/src/assets/icons/castle.png', route: '/castles/castle' },
        { name: 'Rampart', icon: '/src/assets/icons/rampart.png', route: '/castles/rampart' },
        { name: 'Tower', icon: '/src/assets/icons/tower.png', route: '/castles/tower' },
        { name: 'Inferno', icon: '/src/assets/icons/inferno.png', route: '/castles/inferno' },
        { name: 'Necropolis', icon: '/src/assets/icons/necropolis.png', route: '/castles/necropolis' },
        { name: 'Dungeon', icon: '/src/assets/icons/dungeon.png', route: '/castles/dungeon' },
        { name: 'Stronghold', icon: '/src/assets/icons/stronghold.png', route: '/castles/stronghold' },
        { name: 'Fortress', icon: '/src/assets/icons/fortress.png', route: '/castles/fortress' },
        { name: 'Conflux', icon: '/src/assets/icons/conflux.png', route: '/castles/conflux' },
        { name: 'Cove', icon: '/src/assets/icons/cove.png', route: '/castles/cove' },
        { name: 'Factory', icon: '/src/assets/icons/factory.png', route: '/castles/factory' },
        { name: 'Neutral', icon: '/src/assets/icons/neutral.png', route: '/castles/neutral' },
      ],
    };
  },
};
</script>

<style>
.sidebar {
  width: 100px;
  background: #916A49;
  color: white;
  height: 862px; 
  overflow-y: auto;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Центрирование кнопок */
  margin-left: 0px;
  border: 2px solid #FFD700;
}
.castle {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 10px;
}
.castle img {
  width: 75px; /* Фиксированная ширина */
  height: 50px; /* Фиксированная высота */
  object-fit: fill; 
  border-radius: 5px; /* Радиус углов (опционально) */
}
</style>
