<script>
export default {
  data() {
    return {
      units: [
        { name: "Копейщик", attack: 4, defense: 5, damage: "1-3", health: 10, speed: 4, growth: 14, value: 80, description: "Иммунитет к кавалерийскому бонусу.", image: "/src/assets/unit_image/castle/pikemen.jpg" },
        { name: "Алебардщик", attack: 6, defense: 5, damage: "2-3", health: 10, speed: 5, growth: 14, value: 115, description: "Иммунитет к кавалерийскому бонусу.", image: "/src/assets/unit_image/castle/halberdier.jpg" },
        { name: "Лучник", attack: 6, defense: 3, damage: "2-3", health: 10, speed: 4, growth: 9, value: 126, description: "Стрелок. 12 выстрелов.", image: "/src/assets/unit_image/castle/archer.jpg" },
        { name: "Арбалетчик", attack: 6, defense: 3, damage: "2-3", health: 10, speed: 6, growth: 9, value: 184, description: "Стрелок. 12 выстрелов. Двойной выстрел.", image: "/src/assets/unit_image/castle/marksman.jpg" },
        { name: "Грифон", attack: 8, defense: 8, damage: "3-6", health: 25, speed: 6, growth: 7, value: 351, description: "Отвечает дважды.", image: "/src/assets/unit_image/castle/griffin.jpg" },
        { name: "Королевский грифон", attack: 9, defense: 9, damage: "3-6", health: 25, speed: 9, growth: 7, value: 448, description: "Отвечает на все атаки.", image: "/src/assets/unit_image/castle/royal_griffin.jpg" },
        { name: "Мечник", attack: 10, defense: 12, damage: "6-9", health: 35, speed: 5, growth: 4, value: 445, description: "", image: "/src/assets/unit_image/castle/swordsman.jpg" },
        { name: "Крестоносец", attack: 12, defense: 12, damage: "7-10", health: 35, speed: 6, growth: 4, value: 558, description: "Двойной удар.", image: "/src/assets/unit_image/castle/crusader.jpg" },
        { name: "Монах", attack: 12, defense: 7, damage: "10-12", health: 30, speed: 5, growth: 3, value: 582, description: "Стрелок. 12 выстрелов.", image: "/src/assets/unit_image/castle/monk.jpg" },
        { name: "Фанатик", attack: 12, defense: 10, damage: "10-12", health: 30, speed: 7, growth: 3, value: 750, description: "Стрелок. 12 выстрелов. Нет штрафа в ближнем бою.", image: "/src/assets/unit_image/castle/zealot.jpg" },
        { name: "Кавалерист", attack: 15, defense: 15, damage: "15-25", health: 100, speed: 7, growth: 2, value: 1946, description: "Кавалерийский бонус.", image: "/src/assets/unit_image/castle/cavalier.jpg" },
        { name: "Чемпион", attack: 16, defense: 16, damage: "20-25", health: 100, speed: 9, growth: 2, value: 2100, description: "Кавалерийский бонус.", image: "/src/assets/unit_image/castle/champion.jpg" },
        { name: "Ангел", attack: 20, defense: 20, damage: "50", health: 200, speed: 12, growth: 1, value: 5019, description: "Повышает мораль. Ненавидит дьяволов.", image: "/src/assets/unit_image/castle/angel.jpg" },
        { name: "Архангел", attack: 30, defense: 30, damage: "50", health: 250, speed: 18, growth: 1, value: 8776, description: "Повышает мораль. Ненавидит дьяволов. Воскрешает.", image: "/src/assets/unit_image/castle/archangel.jpg" },
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
  justify-content: center; 
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
  width: 100%; 
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
