<template>
  <nav class="top-bar">
    <button @click="navigate('/magic')">Магия</button>
    <button @click="navigate('/heroes')">Герои</button>
    <button @click="navigate('/artifacts')">Артефакты</button>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const navigate = (path) => {
      router.push(path);
    };
    return { navigate };
  },
};
</script>

<style>
.top-bar {
  background: #333;
  color: white;
  display: flex;
  justify-content: space-between; /* Равноудалённые кнопки */
  align-items: center;
  padding: 10px 20px;
  height: 60px; /* Фиксированная высота */
  width: 100%; /* Занимает всю ширину */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
button {
  background: #555;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  flex-grow: 1; /* Делаем кнопки одинакового размера */
  text-align: center;
  margin: 0 10px; /* Расстояние между кнопками */
}
button:first-child {
  margin-left: 0; /* Убираем отступ у первой кнопки */
}
button:last-child {
  margin-right: 0; /* Убираем отступ у последней кнопки */
}
button:hover {
  background: #777;
}
</style>
