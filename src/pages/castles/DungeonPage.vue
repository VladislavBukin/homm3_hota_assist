<script>
import { resourceIcons } from '/src/assets/icons/resourceIcons.js';
import troglodyte         from '/src/assets/unit_image/dungeon/troglodyte.webp';
import infernaltroglodyte from '/src/assets/unit_image/dungeon/infernaltroglodyte.webp';
import harpy              from '/src/assets/unit_image/dungeon/harpy.webp';
import harpyhag           from '/src/assets/unit_image/dungeon/harpyhag.webp';
import beholder           from '/src/assets/unit_image/dungeon/beholder.webp';
import evileye            from '/src/assets/unit_image/dungeon/evileye.webp';
import medusa             from '/src/assets/unit_image/dungeon/medusa.webp';
import medusaqueen        from '/src/assets/unit_image/dungeon/medusaqueen.webp';
import minotaur           from '/src/assets/unit_image/dungeon/minotaur.webp';
import minotaurking       from '/src/assets/unit_image/dungeon/minotaurking.webp';
import manticore          from '/src/assets/unit_image/dungeon/manticore.webp';
import scorpicore         from '/src/assets/unit_image/dungeon/scorpicore.webp';
import reddragon          from '/src/assets/unit_image/dungeon/reddragon.webp';
import blackdragon        from '/src/assets/unit_image/dungeon/blackdragon.webp';

export default {
  data() {
    return {
      units: [
        { name: "Троглодит",          attack: 4,  defense: 3,  damage: "1-3",   health: 5,   speed: 4,  growth: 14, price: [{ amount: 50, icon: resourceIcons.gold }],                                              value: 59,   description: "Слепой.",                                                              image: troglodyte },
        { name: "Адский троглодит",   attack: 5,  defense: 4,  damage: "1-3",   health: 6,   speed: 5,  growth: 14, price: [{ amount: 65, icon: resourceIcons.gold }],                                              value: 84,   description: "Слепой.",                                                              image: infernaltroglodyte },
        { name: "Гарпия",             attack: 6,  defense: 5,  damage: "1-4",   health: 14,  speed: 6,  growth: 8,  price: [{ amount: 130, icon: resourceIcons.gold }],                                             value: 154,  description: "Атакует и возвращается ",                                              image: harpy },
        { name: "Гарпия-ведьма",      attack: 6,  defense: 6,  damage: "1-4",   health: 14,  speed: 9,  growth: 8,  price: [{ amount: 170, icon: resourceIcons.gold }],                                             value: 238,  description: "Атакует и возвращается. Безответная атака.",                           image: harpyhag },
        { name: "Созерцатель",        attack: 7,  defense: 5,  damage: "3-5",   health: 22,  speed: 5,  growth: 7,  price: [{ amount: 250, icon: resourceIcons.gold }],                                             value: 336,  description: "Стрелок 12 выстелов. Нет штрафа в ближнем бою.",                       image: beholder },
        { name: "Злобоглаз",          attack: 8,  defense: 6,  damage: "3-5",   health: 22,  speed: 7,  growth: 7,  price: [{ amount: 280, icon: resourceIcons.gold }],                                             value: 367,  description: "Стрелок 24 выстелов. Нет штрафа в ближнем бою.",                       image: evileye },
        { name: "Медуза",             attack: 9,  defense: 9,  damage: "6-8",   health: 25,  speed: 5,  growth: 5,  price: [{ amount: 300, icon: resourceIcons.gold }],                                             value: 517,  description: "Стрелок 4 выстрелов. Может окаменить врага. Нет штрафа в ближнем бою", image: medusa },
        { name: "Королева медуз",     attack: 9,  defense: 9,  damage: "6-8",   health: 30,  speed: 6,  growth: 5,  price: [{ amount: 330, icon: resourceIcons.gold }],                                             value: 577,  description: "Стрелок 8 выстрелов. Может окаменить врага. Нет штрафа в ближнем бою", image: medusaqueen },
        { name: "Минотавр",           attack: 14, defense: 12, damage: "12-20", health: 50,  speed: 6,  growth: 4,  price: [{ amount: 500, icon: resourceIcons.gold }],                                             value: 835,  description: "Высокая мораль",                                                       image: minotaur },
        { name: "Король минотавров",  attack: 15, defense: 15, damage: "12-20", health: 50,  speed: 8,  growth: 4,  price: [{ amount: 575, icon: resourceIcons.gold }],                                             value: 1068, description: "Высокая мораль",                                                       image: minotaurking },
        { name: "Мантикора",          attack: 15, defense: 13, damage: "14-20", health: 80,  speed: 7,  growth: 2,  price: [{ amount: 850, icon: resourceIcons.gold }],                                             value: 1547, description: "",                                                                     image: manticore },
        { name: "Скорпикора",         attack: 16, defense: 14, damage: "14-20", health: 80,  speed: 11, growth: 2,  price: [{ amount: 1050, icon: resourceIcons.gold }],                                            value: 1589, description: "Паралезует ядом",                                                      image: scorpicore },
        { name: "Красный дракон",     attack: 19, defense: 19, damage: "40-50", health: 180, speed: 11, growth: 1,  price: [{ amount: 2500, icon: resourceIcons.gold }, { amount: 1, icon: resourceIcons.sulfur }], value: 4702, description: "Иммунитет к заклинаниям 1–3 уровня. Атака по области.",                image: reddragon },
        { name: "Чёрный дракон",      attack: 25, defense: 25, damage: "40-50", health: 300, speed: 15, growth: 1,  price: [{ amount: 4000, icon: resourceIcons.gold }, { amount: 2, icon: resourceIcons.sulfur }], value: 8721, description: "Иммунитет к магии. Огненная атака. Ненавидит Титанов",                 image: blackdragon },
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
