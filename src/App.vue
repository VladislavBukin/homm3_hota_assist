<template>
  <div id="app">
    <!-- TopBar -->
    <TopBar @navigate="handleNavigate" />

    <!-- Layout: Sidebar + Main Content -->
    <div class="layout">
      <Sidebar @castle-selected="selectCastle" />
      <div class="content">
        <!-- Если замок выбран, показываем его данные -->
        <div v-if="selectedCastle">
          <h2>{{ selectedCastle.name }}</h2>
          <ul>
            <li v-for="unit in selectedCastle.units" :key="unit">{{ unit }}</li>
          </ul>
        </div>

        <!-- Если замок не выбран, показываем страницы через роутер -->
        <router-view v-else />
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
      selectedCastle: null, // Для хранения выбранного замка
    };
  },
  methods: {
    // Сбрасываем замок при переходе на страницы через TopBar
    handleNavigate() {
      this.selectedCastle = null;
    },
    // Выбираем замок из Sidebar
    selectCastle(castle) {
      this.selectedCastle = castle;
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
