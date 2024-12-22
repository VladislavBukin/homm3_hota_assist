<script>
import gremlinImage from "/src/assets/unit_image/tower/gremlin.jpg";
import masterGremlinImage from "/src/assets/unit_image/tower/master_gremlin.jpg";
import stoneGargoyleImage from "/src/assets/unit_image/tower/stone_gargoyle.jpg";
import obsidianGargoyleImage from "/src/assets/unit_image/tower/obsidian_gargoyle.jpg";
import stoneGolemImage from "/src/assets/unit_image/tower/stone_golem.jpg";
import ironGolemImage from "/src/assets/unit_image/tower/iron_golem.jpg";
import mageImage from "/src/assets/unit_image/tower/mage.jpg";
import archMageImage from "/src/assets/unit_image/tower/arch_mage.jpg";
import genieImage from "/src/assets/unit_image/tower/genie.jpg";
import masterGenieImage from "/src/assets/unit_image/tower/master_genie.jpg";
import nagaImage from "/src/assets/unit_image/tower/naga.jpg";
import nagaQueenImage from "/src/assets/unit_image/tower/naga_queen.jpg";
import giantImage from "/src/assets/unit_image/tower/Giant.jpg";
import titanImage from "/src/assets/unit_image/tower/Titan.jpg";

export default {
  data() {
    return {
      units: [
        { name: "Гремлин", attack: 3, defense: 3, damage: "1-2", health: 4, speed: 4, growth: 16, value: 44, description: "", image: gremlinImage },
        { name: "Мастер-Гремлин", attack: 4, defense: 4, damage: "1-2", health: 4, speed: 5, growth: 16, value: 66, description: "Стрелок, 8 выстрелов.", image: masterGremlinImage },
        { name: "Каменная горгулья", attack: 6, defense: 6, damage: "2-3", health: 16, speed: 6, growth: 9, value: 165, description: "Летающее существо.", image: stoneGargoyleImage },
        { name: "Обсидиановая горгулья", attack: 7, defense: 7, damage: "2-3", health: 16, speed: 9, growth: 9, value: 201, description: "Летающее существо.", image: obsidianGargoyleImage },
        { name: "Каменный голем", attack: 7, defense: 10, damage: "4-5", health: 30, speed: 3, growth: 6, value: 250, description: "Голем, поглощение магии.", image: stoneGolemImage },
        { name: "Железный голем", attack: 9, defense: 10, damage: "4-5", health: 35, speed: 5, growth: 6, value: 412, description: "Голем, поглощение магии.", image: ironGolemImage },
        { name: "Маг", attack: 11, defense: 8, damage: "7-9", health: 25, speed: 5, growth: 4, value: 570, description: "нет штрафа в ближнем бою, нет штрафа при стрельбе через крепостные стены, снижает стоимость заклинаний на 2.", image: mageImage },
        { name: "Архимаг", attack: 12, defense: 9, damage: "7-9", health: 30, speed: 7, growth: 4, value: 680, description: "нет штрафа в ближнем бою, нет штрафа при стрельбе через крепостные стены, снижает стоимость заклинаний на 2.", image: archMageImage },
        { name: "Джинн", attack: 12, defense: 12, damage: "13-16", health: 40, speed: 7, growth: 3, value: 884, description: "Летающее существо, ненавидит инфритов.", image: genieImage },
        { name: "Верховный Джинн", attack: 12, defense: 12, damage: "13-16", health: 40, speed: 11, growth: 3, value: 942, description: "Летающее существо, ненавидит инфритов, способен колдовать.", image: masterGenieImage },
        { name: "Нага", attack: 16, defense: 13, damage: "20", health: 110, speed: 5, growth: 2, value: 2016, description: "Большое существо, безответная атака.", image: nagaImage },
        { name: "Королева Наг", attack: 16, defense: 13, damage: "30", health: 110, speed: 7, growth: 2, value: 2840, description: "Большое существо, безответная атака.", image: nagaQueenImage },
        { name: "Гигант", attack: 19, defense: 16, damage: "40-60", health: 150, speed: 7, growth: 1, value: 3718, description: "Невосприимчивость к управлению разумом", image: giantImage },
        { name: "Титан", attack: 24, defense: 24, damage: "40-60", health: 300, speed: 11, growth: 1, value: 7500, description: "Невосприимчивость к управлению разумом, стрелок 24 выстрела, нет штрафа в ближнем бою, ненавидит черных драконов.", image: titanImage },
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
