<template>
  <div id="app">
    <!-- TopBar -->
    <TopBar />

    <!-- Layout: Sidebar + Main Content -->
    <div class="layout">
      <Sidebar @castle-selected="selectCastle" />
      <div class="content">
        <h2 v-if="selectedCastle">{{ selectedCastle.name }}</h2>
        <ul v-if="selectedCastle">
          <li v-for="unit in selectedCastle.units" :key="unit">{{ unit }}</li>
        </ul>
        <p v-else>Select a castle to see its units.</p>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    TopBar,
    Sidebar,
  },
  data() {
    return {
      selectedCastle: null, // Хранит выбранный замок
    };
  },
  methods: {
    selectCastle(castle) {
      this.selectedCastle = castle; // Обновляем данные о замке
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.layout {
  display: flex;
  flex: 1;
  height: calc(100vh - 60px); /* Высота TopBar */
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background: #f5f5f5;
}

h2 {
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #ddd;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
}
</style>
