<template>
  <div id="app">
    <TopBar />
    <div style="display: flex;">
      <CastleBar />
      <router-view />
    </div>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import CastleBar from './components/CastleBar.vue';

export default {
  components: {
    TopBar,
    CastleBar,
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  color: #2c3e50;
}
</style>
