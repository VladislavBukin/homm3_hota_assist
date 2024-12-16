<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const selectedCastle = ref(null); // Отслеживание выбранного замка

    // Обработчик выбора замка
    const selectCastle = (castle) => {
      selectedCastle.value = castle.name; // Устанавливаем выбранный замок
      router.push(castle.route); // Переход на страницу замка
    };

    // Список замков с их иконками и маршрутами
    const castles = [
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
    ];

    return {
      selectCastle,
      selectedCastle,
      castles,
    };
  },
};
</script>

<template>
  <aside class="sidebar">
    <div 
      class="castle" 
      v-for="castle in castles" 
      :key="castle.name" 
      @click="selectCastle(castle)"
      :class="{ selected: castle.name === selectedCastle }"
    >
      <img :src="castle.icon" :alt="castle.name" />
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 98px;
  background: #916A49;
  color: white;
  height: 100%;
  overflow-y: auto;
  padding: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #FFD700;
  justify-content: space-between;
}

.castle {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 5px 0; /* Упрощение маргинов */
}

.castle img {
  width: 75px; /* Фиксированная ширина */
  height: 60px; /* Фиксированная высота */
  object-fit: fill;
  border-radius: 5px; /* Радиус углов */
}

.castle.selected {
  border: 2px solid #FFD700; /* Золотая рамка для выбранного элемента */
  border-radius: 5px; /* Совпадение радиуса с иконкой */
}
</style>
