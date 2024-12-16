<script>
export default {
  data() {
    return {
      units: [
        { name: "Кентавр", attack: 5, defense: 3, damage: "2-3", health: 8, speed: 6, growth: 14, value: 100, description: "Большое существо", image: '/src/assets/unit_image/rampart/centaur.jpg' },
        { name: "Кентавр Капитан", attack: 6, defense: 3, damage: "2-3", health: 10, speed: 8, growth: 14, value: 138, description: "Большое существо", image: '/src/assets/unit_image/rampart/centaur_captain.jpg' },
        { name: "Гном", attack: 6, defense: 7, damage: "2-4", health: 20, speed: 3, growth: 8, value: 138, description: "Сопротивляемость магии 20%", image: '/src/assets/unit_image/rampart/dwarf.jpg' },
        { name: "Боевой Гном", attack: 7, defense: 7, damage: "2-4", health: 20, speed: 5, growth: 8, value: 209, description: "Сопротивляемость магии 40%", image: '/src/assets/unit_image/rampart/battle_dwarf.jpg' },
        { name: "Эльф", attack: 9, defense: 5, damage: "3-5", health: 15, speed: 6, growth: 7, value: 234, description: "Стреляет, 24 выстрела", image: '/src/assets/unit_image/rampart/wood_elf.jpg' },
        { name: "Великий Эльф", attack: 9, defense: 5, damage: "3-5", health: 15, speed: 7, growth: 7, value: 331, description: "Стреляет, 24 выстрела. Двойной выстрел", image: '/src/assets/unit_image/rampart/grand_elf.jpg' },
        { name: "Пегас", attack: 9, defense: 8, damage: "5-9", health: 30, speed: 8, growth: 5, value: 518, description: "Большое существо, летающее существо, Подавитель магии", image: '/src/assets/unit_image/rampart/pegasus.jpg' },
        { name: "Серебряный пегас", attack: 9, defense: 10, damage: "5-9", health: 30, speed: 12, growth: 5, value: 532, description: "Большое существо, летающее существо, Подавитель магии", image: '/src/assets/unit_image/rampart/silver_pegasus.jpg' },
        { name: "Дендроид-страж", attack: 9, defense: 12, damage: "10-14", health: 55, speed: 3, growth: 3, value: 517, description: "Опутывание", image: '/src/assets/unit_image/rampart/drendroid_guard.jpg' },
        { name: "Дендроид-солдат", attack: 9, defense: 12, damage: "10-14", health: 65, speed: 4, growth: 3, value: 803, description: "Опутывание", image: '/src/assets/unit_image/rampart/drendroid_soldier.jpg' },
        { name: "Единорог", attack: 15, defense: 14, damage: "18-22", health: 90, speed: 7, growth: 2, value: 1806, description: "Большое существо, Ослепляющий удар, Аура сопротивления магии", image: '/src/assets/unit_image/rampart/unicorn.jpg' },
        { name: "Боевой единорог", attack: 15, defense: 14, damage: "18-22", health: 110, speed: 9, growth: 2, value: 2030, description: "Большое существо, Ослепляющий удар, Аура сопротивления магии", image: '/src/assets/unit_image/rampart/war_unicorn.jpg' },
        { name: "Зелёный дракон", attack: 18, defense: 18, damage: "40-50", health: 180, speed: 10, growth: 1, value: 4872, description: "Большое существо, летающее существо, дыхание дракона, невоспримчивость к магии 1-3 уровня", image: '/src/assets/unit_image/rampart/green_dragon.jpg' },
        { name: "Золотой дракон", attack: 27, defense: 27, damage: "40-50", health: 250, speed: 16, growth: 1, value: 8613, description: "Большое существо, летающее существо, дыхание дракона, невоспримчивость к магии 1-4 уровня", image: '/src/assets/unit_image/rampart/golden_dragon.jpg' },
      ],
    };
  },
};
</script>

<template>
  <div class="units-flex-container">
    <div
      v-for="(unit, index) in units"
      :key="unit.name"
      class="unit-block"
    >
      <div class="unit-header">{{ unit.name }}</div>
      <div class="unit-image-placeholder">
        <img :src="unit.image" :alt="`Изображение ${unit.name}`" class="unit-image" />
      </div>
      <table class="unit-stats">
        <tr>
          <td>Атака:</td>
          <td>{{ unit.attack }}</td>
        </tr>
        <tr>
          <td>Защита:</td>
          <td>{{ unit.defense }}</td>
        </tr>
        <tr>
          <td>Урон:</td>
          <td>{{ unit.damage }}</td>
        </tr>
        <tr>
          <td>Здоровье:</td>
          <td>{{ unit.health }}</td>
        </tr>
        <tr>
          <td>Скорость:</td>
          <td>{{ unit.speed }}</td>
        </tr>
        <tr>
          <td>Прирост:</td>
          <td>{{ unit.growth }}</td>
        </tr>
        <tr>
          <td>Ai value:</td>
          <td>{{ unit.value }}</td>
        </tr>
      </table>
      <div class="unit-footer">
        {{ unit.description }}
      </div>
    </div>
  </div>
</template>

<style>
.units-flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Центрирование всей строки */
  gap: 20px;
  padding: 20px;
}

.unit-block {
  background: #3b2a1a;
  color: white;
  border: 4px solid #d4af37;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Terminus", serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
  width: 100%; /* По умолчанию один блок на строку */
}

/* Медиа-запросы для адаптивности */
@media (min-width: 600px) {
  .unit-block {
    width: calc(50% - 20px); /* Два блока в строке */
  }
}

@media (min-width: 1000px) {
  .unit-block {
    width: calc(25% - 20px); /* Четыре блока в строке */
  }
}

@media (min-width: 1400px) {
  .unit-block {
    width: calc(16.666% - 20px); /* Шесть блоков в строке */
  }
}

.unit-header {
  font-size: 18px;
  font-weight: bold;
  color: #ffd700;
  margin-bottom: 10px;
  text-shadow: 1px 1px 2px black;
}

.unit-image-placeholder {
  width: 150px;
  height: 150px;
  background: #6d503b;
  color: #ffd700;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin-bottom: 10px;
  border: 2px solid #ffd700;
}

.unit-image {
  width: 150px;
  height: 150px;
  object-fit: fill;
}

.unit-stats {
  width: 100%;
  margin-bottom: 10px;
  border-collapse: collapse;
}

.unit-stats td {
  font-size: 14px;
  color: white;
  padding: 5px;
}

.unit-stats td:first-child {
  text-align: left;
  color: #ffd700;
}

.unit-stats td:last-child {
  text-align: right;
}

.unit-footer {
  font-size: 12px;
  color: #ddd;
  margin-top: 10px;
  border-top: 1px solid #ffd700;
  padding-top: 5px;
}
</style>
