<script>
import { resourceIcons } from '/src/assets/icons/resourceIcons.js';
import centaur           from '/src/assets/unit_image/rampart/centaur.webp';
import centaurCaptain    from '/src/assets/unit_image/rampart/centaurcaptain.webp';
import dwarf             from '/src/assets/unit_image/rampart/dwarf.webp';
import battleDwarf       from '/src/assets/unit_image/rampart/battledwarf.webp';
import woodElf           from '/src/assets/unit_image/rampart/woodelf.webp';
import grandElf          from '/src/assets/unit_image/rampart/grandelf.webp';
import pegasus           from '/src/assets/unit_image/rampart/pegasus.webp';
import silverPegasus     from '/src/assets/unit_image/rampart/silverpegasus.webp';
import drendroidGuard    from '/src/assets/unit_image/rampart/dendroidguard.webp';
import drendroidSoldier  from '/src/assets/unit_image/rampart/dendroidsoldier.webp';
import unicorn           from '/src/assets/unit_image/rampart/unicorn.webp';
import warUnicorn        from '/src/assets/unit_image/rampart/warunicorn.webp';
import greenDragon       from '/src/assets/unit_image/rampart/greendragon.webp';
import goldenDragon      from '/src/assets/unit_image/rampart/golddragon.webp';
export default {
  data() {
    return {
      units: [
        { name: "Кентавр",          attack: 5,  defense: 3,  damage: "2-3",   health: 8,   speed: 6,  growth: 14, price: [{amount: 70, icon: resourceIcons.gold},],                                            value: 100,  description: "Большое существо",                                                                          image: centaur },
        { name: "Кентавр Капитан",  attack: 6,  defense: 3,  damage: "2-3",   health: 10,  speed: 8,  growth: 14, price: [{amount: 90, icon: resourceIcons.gold},],                                            value: 138,  description: "Большое существо",                                                                          image: centaurCaptain },
        { name: "Гном",             attack: 6,  defense: 7,  damage: "2-4",   health: 20,  speed: 3,  growth: 8,  price: [{amount: 120, icon: resourceIcons.gold},],                                           value: 138,  description: "Сопротивляемость магии 20%",                                                                image: dwarf },
        { name: "Боевой Гном",      attack: 7,  defense: 7,  damage: "2-4",   health: 20,  speed: 5,  growth: 8,  price: [{amount: 150, icon: resourceIcons.gold},],                                           value: 209,  description: "Сопротивляемость магии 40%",                                                                image: battleDwarf },
        { name: "Эльф",             attack: 9,  defense: 5,  damage: "3-5",   health: 15,  speed: 6,  growth: 7,  price: [{amount: 200, icon: resourceIcons.gold},],                                           value: 234,  description: "Стреляет, 24 выстрела",                                                                     image: woodElf },
        { name: "Великий Эльф",     attack: 9,  defense: 5,  damage: "3-5",   health: 15,  speed: 7,  growth: 7,  price: [{amount: 225, icon: resourceIcons.gold},],                                           value: 331,  description: "Стреляет, 24 выстрела. Двойной выстрел",                                                    image: grandElf },
        { name: "Пегас",            attack: 9,  defense: 8,  damage: "5-9",   health: 30,  speed: 8,  growth: 5,  price: [{amount: 250, icon: resourceIcons.gold},],                                           value: 518,  description: "Большое существо, летающее существо, Подавитель магии",                                     image: pegasus },
        { name: "Серебряный пегас", attack: 9,  defense: 10, damage: "5-9",   health: 30,  speed: 12, growth: 5,  price: [{amount: 275, icon: resourceIcons.gold},],                                           value: 532,  description: "Большое существо, летающее существо, Подавитель магии",                                     image: silverPegasus },
        { name: "Дендроид-страж",   attack: 9,  defense: 12, damage: "10-14", health: 55,  speed: 3,  growth: 3,  price: [{amount: 350, icon: resourceIcons.gold},],                                           value: 517,  description: "Опутывание",                                                                                image: drendroidGuard },
        { name: "Дендроид-солдат",  attack: 9,  defense: 12, damage: "10-14", health: 65,  speed: 4,  growth: 3,  price: [{amount: 425, icon: resourceIcons.gold},],                                           value: 803,  description: "Опутывание",                                                                                image: drendroidSoldier },
        { name: "Единорог",         attack: 15, defense: 14, damage: "18-22", health: 90,  speed: 7,  growth: 2,  price: [{amount: 850, icon: resourceIcons.gold},],                                           value: 1806, description: "Большое существо, Ослепляющий удар, Аура сопротивления магии",                              image: unicorn },
        { name: "Боевой единорог",  attack: 15, defense: 14, damage: "18-22", health: 110, speed: 9,  growth: 2,  price: [{amount: 950, icon: resourceIcons.gold},],                                           value: 2030, description: "Большое существо, Ослепляющий удар, Аура сопротивления магии",                              image: warUnicorn },
        { name: "Зелёный дракон",   attack: 18, defense: 18, damage: "40-50", health: 180, speed: 10, growth: 1,  price: [{amount: 2400, icon: resourceIcons.gold},{amount: 1, icon: resourceIcons.crystal},], value: 4872, description: "Большое существо, летающее существо, дыхание дракона, невоспримчивость к магии 1-3 уровня", image: greenDragon },
        { name: "Золотой дракон",   attack: 27, defense: 27, damage: "40-50", health: 250, speed: 16, growth: 1,  price: [{amount: 4000, icon: resourceIcons.gold},{amount: 2, icon: resourceIcons.crystal},], value: 8613, description: "Большое существо, летающее существо, дыхание дракона, невоспримчивость к магии 1-4 уровня", image: goldenDragon },
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
