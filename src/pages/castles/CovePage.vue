<script>
import { resourceIcons } from '/src/assets/icons/resourceIcons.js';
import nymph             from '/src/assets/unit_image/cove/nymph.webp';
import oceanid           from '/src/assets/unit_image/cove/oceanid.webp';
import crewMate          from '/src/assets/unit_image/cove/crewmate.webp';
import seaman            from '/src/assets/unit_image/cove/seaman.webp';
import pirate            from '/src/assets/unit_image/cove/pirate.webp';
import corsair           from '/src/assets/unit_image/cove/corsair.webp';
import seaDog            from '/src/assets/unit_image/cove/seadog.webp';
import stormbird         from '/src/assets/unit_image/cove/stormbird.webp';
import ayssid            from '/src/assets/unit_image/cove/ayssid.webp';
import seaWitch          from '/src/assets/unit_image/cove/seawitch.webp';
import sorceress         from '/src/assets/unit_image/cove/sorceress.webp';
import nix               from '/src/assets/unit_image/cove/nix.webp';
import nixWarrior        from '/src/assets/unit_image/cove/nixwarrior.webp';
import seaSerpent        from '/src/assets/unit_image/cove/seaserpent.webp';
import haspid            from '/src/assets/unit_image/cove/haspid.webp';

export default {
  data() {
    return {
      units: [
        { name: "Нимфа", attack: 5, defense: 2, damage: "1-2", health: 4, speed: 6, growth: 16, price: [{ amount: 35, icon: resourceIcons.gold }], value: 57, description: "Иммунитет к заклинаниям холода.", image: nymph },
        { name: "Океанида", attack: 6, defense: 2, damage: "1-3", health: 4, speed: 8, growth: 16, price: [{ amount: 45, icon: resourceIcons.gold }], value: 75, description: "Иммунитет к заклинаниям холода.", image: oceanid },
        { name: "Матрос", attack: 7, defense: 4, damage: "2-4", health: 15, speed: 5, growth: 9, price: [{ amount: 110, icon: resourceIcons.gold }], value: 155, description: "", image: crewMate },
        { name: "Моряк", attack: 8, defense: 6, damage: "3-4", health: 15, speed: 6, growth: 9, price: [{ amount: 140, icon: resourceIcons.gold }], value: 174, description: "", image: seaman },
        { name: "Пират", attack: 8, defense: 6, damage: "3-7", health: 15, speed: 6, growth: 7, price: [{ amount: 225, icon: resourceIcons.gold }], value: 312, description: "Стрелок 4 выстрела. нет штрафа в ближнем бою.", image: pirate },
        { name: "Корсар", attack: 10, defense: 8, damage: "3-7", health: 15, speed: 7, growth: 7, price: [{ amount: 275, icon: resourceIcons.gold }], value: 407, description: "Стрелок 4 выстрела. Нет штрафа в ближнем бою. Безответная атака.", image: corsair },
        { name: "Морской волк", attack: 12, defense: 11, damage: "3-7", health: 15, speed: 8, growth: 7, price: [{ amount: 375, icon: resourceIcons.gold }], value: 602, description: "Стрелок 12 выстрелов. Нет штрафа в ближнем бою. Безответная атака. Точный выстрел.", image: seaDog },
        { name: "Штормовая птица", attack: 10, defense: 8, damage: "6-9", health: 30, speed: 9, growth: 4, price: [{ amount: 275, icon: resourceIcons.gold }], value: 502, description: "Летающий.", image: stormbird },
        { name: "Айсид", attack: 11, defense: 8, damage: "6-10", health: 30, speed: 11, growth: 4, price: [{ amount: 325, icon: resourceIcons.gold }], value: 645, description: "Жестокость.", image: ayssid },
        { name: "Морская ведьма", attack: 12, defense: 7, damage: "10-14", health: 35, speed: 6, growth: 3, price: [{ amount: 515, icon: resourceIcons.gold }], value: 790, description: "Стрелок 12 выстрелов. Колдует после атаки.", image: seaWitch },
        { name: "Колдунья", attack: 12, defense: 9, damage: "10-16", health: 35, speed: 7, growth: 3, price: [{ amount: 565, icon: resourceIcons.gold }], value: 852, description: "Стрелок 12 выстрелов. Колдует после атаки.", image: sorceress },
        { name: "Никс", attack: 13, defense: 16, damage: "18-22", health: 80, speed: 6, growth: 2, price: [{ amount: 1000, icon: resourceIcons.gold }], value: 1415, description: "Стойкий", image: nix },
        { name: "Воин Никс", attack: 14, defense: 17, damage: "18-22", health: 90, speed: 7, growth: 2, price: [{ amount: 1300, icon: resourceIcons.gold }], value: 2116, description: "Очень стойкий", image: nixWarrior },
        { name: "Морской змей", attack: 22, defense: 16, damage: "30-55", health: 180, speed: 9, growth: 1, price: [{ amount: 2200, icon: resourceIcons.gold }], value: 3953, description: "Яд.", image: seaSerpent },
        { name: "Хаспид", attack: 29, defense: 20, damage: "30-55", health: 300, speed: 12, growth: 1, price: [{ amount: 4000, icon: resourceIcons.gold }, { amount: 2, icon: resourceIcons.sulfur }], value: 7220, description: "Яд. Месть.", image: haspid },
      ]
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
          <td>Стоимость:</td>
          <td>
            <div class="price-display">
              <span
                v-for="(resource, idx) in unit.price"
                :key="idx"
                class="resource-item"
              >
                <img :src="resource.icon" alt="resource" class="resource-icon" />
                {{ resource.amount }}
              </span>
            </div>
          </td>
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

.price-display {
  display: flex;
  gap: 8px; 
  align-items: center; 
  justify-content: flex-end; 
  flex-wrap: nowrap; 
}

.resource-item {
  display: flex;
  align-items: center;
  gap: 4px; 
  white-space: nowrap; 
}

.resource-icon {
  width: 16px;
  height: 16px;
  vertical-align: middle;
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
