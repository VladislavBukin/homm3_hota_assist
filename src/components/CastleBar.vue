<template>
  <div class="castle-bar">
    <button v-for="castle in castles" :key="castle.name" @click="goToCastle(castle.route)">
      {{ castle.name }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      castles: [
        { name: "Замок 1", route: "castle1" },
        { name: "Замок 2", route: "castle2" },
        { name: "Замок 3", route: "castle3" },
        { name: "Замок 4", route: "castle4" },
        { name: "Замок 5", route: "castle5" },
        { name: "Замок 6", route: "castle6" },
        { name: "Замок 7", route: "castle7" },
        { name: "Замок 8", route: "castle8" },
        { name: "Замок 9", route: "castle9" },
        { name: "Замок 10", route: "castle10" },
        { name: "Замок 11", route: "castle11" },
	  ],
    };
  },
  methods: {
    goToCastle(route) {
      this.$router.push(`/castle/${route}`);
    },
  },
};
</script>

<style>
.castle-bar {
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #444;
  padding: 10px;
  color: white;
}
button {
  background: none;
  color: white;
  border: none;
  margin-bottom: 10px;
  cursor: pointer;
}
button:hover {
  text-decoration: underline;
}
</style>
