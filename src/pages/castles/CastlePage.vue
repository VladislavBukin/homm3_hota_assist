<template>
  <div class="units-container">
    <!-- Перебираем строки -->
    <div
      v-for="(row, rowIndex) in rows"
      :key="rowIndex"
      class="row"
      :class="{ centered: isLastRow(rowIndex) }"
    >
      <!-- Перебираем юниты внутри строки -->
      <div
        class="unit-block"
        v-for="unit in row"
        :key="unit.name"
      >
        <div class="unit-header">{{ unit.name }}</div>
        <div class="unit-image-placeholder">[Изображение]</div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      units: [
        { name: "Копейщик", attack: 4, defense: 5, damage: "1-3", health: 10, speed: 4, growth: 14, value: 80, description: "Иммунитет к кавалерийскому бонусу." },
        { name: "Алебардщик", attack: 6, defense: 5, damage: "2-3", health: 10, speed: 5, growth: 14, value: 115, description: "Иммунитет к кавалерийскому бонусу." },
        { name: "Лучник", attack: 6, defense: 3, damage: "2-3", health: 10, speed: 4, growth: 9, value: 126, description: "Стрелок. 12 выстрелов." },
        { name: "Арбалетчик", attack: 6, defense: 3, damage: "2-3", health: 10, speed: 6, growth: 9, value: 184, description: "Стрелок. 12 выстрелов. Двойной выстрел." },
        { name: "Грифон", attack: 8, defense: 8, damage: "3-6", health: 25, speed: 6, growth: 7, value: 351, description: "Отвечает дважды." },
        { name: "Королевский грифон", attack: 9, defense: 9, damage: "3-6", health: 25, speed: 9, growth: 7, value: 448, description: "Отвечает на все атаки." },
        { name: "Мечник", attack: 10, defense: 12, damage: "6-9", health: 35, speed: 5, growth: 4, value: 445, description: "" },
        { name: "Крестоносец", attack: 12, defense: 12, damage: "7-10", health: 35, speed: 6, growth: 4, value: 558, description: "Двойной удар." },
        { name: "Монах", attack: 12, defense: 7, damage: "10-12", health: 30, speed: 5, growth: 3, value: 582, description: "Стрелок. 12 выстрелов." },
        { name: "Фанатик", attack: 12, defense: 10, damage: "10-12", health: 30, speed: 7, growth: 3, value: 750, description: "Стрелок. 12 выстрелов. Нет штрафа в ближнем бою." },
        { name: "Кавалерист", attack: 15, defense: 15, damage: "15-25", health: 100, speed: 7, growth: 2, value: 1946, description: "Кавалерийский бонус." },
        { name: "Чемпион", attack: 16, defense: 16, damage: "20-25", health: 100, speed: 9, growth: 2, value: 2100, description: "Кавалерийский бонус." },
        { name: "Ангел", attack: 20, defense: 20, damage: "50", health: 200, speed: 12, growth: 1, value: 5019, description: "Повышает мораль. Ненавидит дьяволов." },
        { name: "Архангел", attack: 30, defense: 30, damage: "50", health: 250, speed: 18, growth: 1, value: 8776, description: "Повышает мораль. Ненавидит дьяволов. Воскрешает." },
      ],
    };
  },
  computed: {
    rows() {
      const unitsPerRow = 4; // Количество блоков в строке
      const rows = [];
      for (let i = 0; i < this.units.length; i += unitsPerRow) {
        rows.push(this.units.slice(i, i + unitsPerRow));
      }
      return rows;
    },
  },
  methods: {
    isLastRow(rowIndex) {
      return rowIndex === this.rows.length - 1;
    },
  },
};
</script>

<style>
.units-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.row.centered {
  justify-content: center; /* Центрируем элементы последней строки */
}

.unit-block {
  width: 250px;
  background: #3b2a1a;
  color: white;
  border: 4px solid #d4af37; /* Золотая рамка */
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Times New Roman", serif;
}

.unit-header {
  font-size: 18px;
  font-weight: bold;
  color: #ffd700; /* Золотой текст */
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
  border: 2px solid #ffd700; /* Рамка вокруг изображения */
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
  color: #ffd700; /* Золотые подписи */
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
