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
  emits: ['navigate'], // Эмитим событие при переходе
  setup(_, { emit }) {
    const router = useRouter();
    const navigate = (path) => {
      router.push(path); // Переход на страницу
      emit('navigate'); // Сбрасываем выбранный замок
    };
    return { navigate };
  },
};
</script>

<style>
.top-bar {
  background: #333; /* Цвет фона */
  color: white; /* Цвет текста */
  display: flex;
  justify-content: space-between; /* Равноудалённые кнопки */
  align-items: center; /* Центрирование кнопок по вертикали */
  padding: 10px 20px; /* Отступы сверху/снизу и слева/справа */
  height: 60px; /* Фиксированная высота */
  width: 100%; /* Во всю ширину экрана */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Лёгкая тень */
}

button {
  background: #555; /* Цвет кнопки */
  color: white; /* Цвет текста кнопки */
  border: none; /* Убираем рамки */
  padding: 10px 20px; /* Внутренние отступы */
  cursor: pointer; /* Курсор при наведении */
  flex-grow: 1; /* Равномерное распределение кнопок */
  text-align: center; /* Текст по центру */
  margin: 0 10px; /* Отступы между кнопками */
}

button:first-child {
  margin-left: 0; /* Убираем отступ у первой кнопки */
}

button:last-child {
  margin-right: 0; /* Убираем отступ у последней кнопки */
}

button:hover {
  background: #777; /* Цвет кнопки при наведении */
}
</style>
