<template>
  <aside class="sidebar">
    <div 
      class="castle" 
      v-for="castle in castles" 
      :key="castle.name" 
      @click="selectCastle(castle)"
    >
      <img :src="castle.icon" :alt="castle.name" />
    </div>
  </aside>
</template>

<script>
export default {
  emits: ['castle-selected'],
  data() {
    return {
      castles: [
        { name: 'Castle', icon: '/src/assets/icons/castle.png', route: '/castles/castle' },
        { name: 'Rampart', icon: '/src/assets/icons/rampart.png', route: '/castles/rampart' },
        { name: 'Tower', icon: '/src/assets/icons/tower.png', route: '/castles/tower' },
        { name: 'Inferno', icon: '/src/assets/icons/inferno.png', route: '/castles/inferno' },
        { name: 'Inferno', icon: '/src/assets/icons/inferno.png', route: '/castles/inferno' },
        { name: 'Inferno', icon: '/src/assets/icons/inferno.png', route: '/castles/inferno' },
        { name: 'Inferno', icon: '/src/assets/icons/inferno.png', route: '/castles/inferno' },
        { name: 'Inferno', icon: '/src/assets/icons/inferno.png', route: '/castles/inferno' },
        { name: 'Factory', icon: '/src/assets/icons/factory.png', route: '/castles/factory' },
        { name: 'Neutral', icon: '/src/assets/icons/neutral.png', route: '/castles/neutral' },
      ],
    };
  },
  methods: {
    selectCastle(castle) {
      this.$emit('castle-selected', castle);
    },
  },
};
</script>

<style>
.sidebar {
  width: 200px;
  background: #222;
  color: white;
  height: 100%; /* Занимает оставшуюся высоту */
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Центрирование кнопок */
}
.castle {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 10px;
}
.castle img {
  width: 40px;
  height: 40px;
  object-fit: contain; /* Корректное отображение иконок */
}
</style>
