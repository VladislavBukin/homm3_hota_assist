<template>
  <nav class="top-bar">
    <button @click="navigate('/magic')">
      <img src="/src/assets/icons/magic.png" alt="Магия" />
    </button>
    <button @click="navigate('/heroes')">
      <img src="/src/assets/icons/hero.png" alt="Герои" />
    </button>
    <button @click="navigate('/artifacts')">
      <img src="/src/assets/icons/magic.png" alt="Артефакты" />
    </button>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  emits: ['navigate'],
  setup(_, { emit }) {
    const router = useRouter();
    const navigate = (path) => {
      router.push(path);
      emit('navigate');
    };
    return { navigate };
  },
};
</script>

<style>
.top-bar {
  background: #916A49; /* Цвет фона */
  display: flex;
  justify-content: space-around; /* Распределение кнопок */
  align-items: center; /* Центрирование по вертикали */
  padding: 5px 10px; /* Отступы сверху/снизу и слева/справа */
  height: 50px; /* Уменьшенная высота */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Лёгкая тень */
  margin-left: 106px;
  border: 2px solid #FFD700;
}

button {
  background: none; 
  border: none; 
  padding: 0; 
  cursor: pointer; 
  width: 40px; 
  height: 40px; 
  display: flex;
  align-items: center;
  justify-content: center;
}

button img {
  width: 100%; 
  height: 100%; 
  object-fit: fill; 
}

button:hover img {
  transform: scale(1.1); /* Лёгкое увеличение при наведении */
  transition: transform 0.2s ease-in-out; /* Плавный переход */
}
</style>
