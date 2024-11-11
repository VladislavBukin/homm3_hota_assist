<template>
  <div id="app">
    <!-- TopBar -->
    <TopBar @navigate="handleNavigate" />

    <!-- Layout: Sidebar + Main Content -->
    <div class="layout">
      <Sidebar />
      <div class="content">
        <!-- Здесь рендерится выбранная страница замка -->
        <router-view />
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
  methods: {
    handleNavigate() {
      // При переходе сбрасываем состояние (если нужно).
    },
  },
};
</script>

<style>
html,body{
	padding:0;
	marging:10;
}
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
</style>
