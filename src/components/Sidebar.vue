<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import castleImg from '/src/assets/icons/castle.png/';
import rampartImg from '/src/assets/icons/rampart.png/';
import towerImg from '/src/assets/icons/tower.png/';
import infernoImg from '/src/assets/icons/inferno.png/';
import necropolisImg from '/src/assets/icons/necropolis.png/';
import dungeonImg from '/src/assets/icons/dungeon.png/';
import strongholdImg from '/src/assets/icons/stronghold.png/';
import fortressImg from '/src/assets/icons/fortress.png/';
import confluxImg from '/src/assets/icons/conflux.png/';
import coveImg from '/src/assets/icons/cove.png/';
import factoryImg from '/src/assets/icons/factory.png/';
import neutralImg from '/src/assets/icons/neutral.png/';
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
      { name: 'Castle', icon: castleImg, route: '/castles/castle' },
      { name: 'Rampart', icon: rampartImg, route: '/castles/rampart' },
      { name: 'Tower', icon: towerImg, route: '/castles/tower' },
      { name: 'Inferno', icon: infernoImg, route: '/castles/inferno' },
      { name: 'Necropolis', icon: necropolisImg, route: '/castles/necropolis' },
      { name: 'Dungeon', icon: dungeonImg, route: '/castles/dungeon' },
      { name: 'Stronghold', icon: strongholdImg, route: '/castles/stronghold' },
      { name: 'Fortress', icon: fortressImg, route: '/castles/fortress' },
      { name: 'Conflux', icon: confluxImg, route: '/castles/conflux' },
      { name: 'Cove', icon: coveImg, route: '/castles/cove' },
      { name: 'Factory', icon: factoryImg, route: '/castles/factory' },
      { name: 'Neutral', icon: neutralImg, route: '/castles/neutral' },
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
