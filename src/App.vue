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
    },
  },
};
</script>

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

<style>
html,body{
	padding:0px;
	margin:0px;
  /*height: 1080px;
  width: 1920px;*/
  overflow: hidden; /* Отключаем прокрутку на уровне страницы */

}
#app {
  display: flex;
  flex-direction: column;
  background: rgb(70, 43, 26);
  height: 100vh;
  overflow: hidden; 

}

.layout {
  display: flex;
  flex: 1;
  height: calc(100vh - 60px);
  overflow: hidden; 
 
}

.content {
  flex: 1;
  color: white;
  padding: 20px;
  overflow-y: auto;
  background: rgb(70, 43, 26);
}
</style>
