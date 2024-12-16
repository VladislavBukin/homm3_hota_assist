<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    // Массив кнопок с иконками и маршрутами
    const buttons = [
      { src: '/src/assets/icons/magic.png', alt: 'Магия', route: '/magic' },
      { src: '/src/assets/icons/hero.png', alt: 'Герои', route: '/heroes' },
      { src: '/src/assets/icons/magic.png', alt: 'Артефакты', route: '/artifacts' },
    ];

    const navigate = (path) => {
      router.push(path); // Переход на указанный маршрут
    };

    return { buttons, navigate };
  },
};
</script>

<template>
  <nav class="top-bar">
    <button v-for="(icon, index) in buttons" :key="index" @click="navigate(icon.route)">
      <img :src="icon.src" :alt="icon.alt" />
    </button>
  </nav>
</template>

<style scoped>
.top-bar {
  background: #916A49; /* Цвет фона */
  display: flex;
  justify-content: space-around; /* Распределение кнопок */
  align-items: center; /* Центрирование по вертикали */
  padding: 5px 10px; /* Отступы сверху/снизу и слева/справа */
  height: 50px; /* Высота панели */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  margin-left: 106px; /* Отступ слева */
  border: 2px solid #FFD700; /* Рамка */
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
  transform: scale(1.1); 
  transition: transform 0.2s ease-in-out; /* Плавный переход */
}
</style>
