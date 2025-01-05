<script>
import { resourceIcons } from '/src/assets/icons/resourceIcons.js';
import imp               from '/src/assets/unit_image/inferno/imp.webp';
import familiar          from '/src/assets/unit_image/inferno/familiar.webp';
import gog               from '/src/assets/unit_image/inferno/gog.webp';
import magog             from '/src/assets/unit_image/inferno/magog.webp';
import hellhound         from '/src/assets/unit_image/inferno/hellhound.webp';
import cerberus          from '/src/assets/unit_image/inferno/cerberus.webp';
import demon             from '/src/assets/unit_image/inferno/demon.webp';
import horneddemon       from '/src/assets/unit_image/inferno/horneddemon.webp';
import pitfiend          from '/src/assets/unit_image/inferno/pitfiend.webp';
import pitlord           from '/src/assets/unit_image/inferno/pitlord.webp';
import efreet            from '/src/assets/unit_image/inferno/efreet.webp';
import efreetsultan      from '/src/assets/unit_image/inferno/efreetsultan.webp';
import devil             from '/src/assets/unit_image/inferno/devil.webp';
import archdevil         from '/src/assets/unit_image/inferno/archdevil.webp';

export default {
  data() {
    return {
      units: [
        { name: "Бес",                 attack: 2,  defense: 3,  damage: "1-2",   health: 4,   speed: 5,  growth: 15, price: [{ amount: 50, icon: resourceIcons.gold },],                                             value: 50,   description: "",                                                       image: imp },
        { name: "Чёрт",                attack: 4,  defense: 4,  damage: "1-2",   health: 4,   speed: 7,  growth: 15, price: [{ amount: 60, icon: resourceIcons.gold },],                                             value: 60,   description: "Волшебный канал",                                        image: familiar },
        { name: "Гог",                 attack: 6,  defense: 4,  damage: "2-4",   health: 13,  speed: 4,  growth: 8,  price: [{ amount: 125, icon: resourceIcons.gold },],                                            value: 159,  description: "Стрелок. 12 выстрелов.",                                 image: gog },
        { name: "Магог",               attack: 7,  defense: 4,  damage: "2-4",   health: 13,  speed: 6,  growth: 8,  price: [{ amount: 175, icon: resourceIcons.gold },],                                            value: 240,  description: "Стрелок. 24 выстрелов. Атака огненным шаром",            image: magog },
        { name: "Адская гончая",       attack: 10, defense: 6,  damage: "2-7",   health: 25,  speed: 7,  growth: 5,  price: [{ amount: 200, icon: resourceIcons.gold },],                                            value: 357,  description: "",                                                       image: hellhound },
        { name: "Цербер",              attack: 10, defense: 8,  damage: "2-7",   health: 25,  speed: 8,  growth: 5,  price: [{ amount: 250, icon: resourceIcons.gold },],                                            value: 392,  description: "Тройная атака. Безответная атака.",                      image: cerberus },
        { name: "Демон",               attack: 10, defense: 10, damage: "7-9",   health: 35,  speed: 5,  growth: 4,  price: [{ amount: 250, icon: resourceIcons.gold },],                                            value: 445,  description: "",                                                       image: demon },
        { name: "Рогатый демон",       attack: 10, defense: 10, damage: "7-9",   health: 40,  speed: 6,  growth: 4,  price: [{ amount: 270, icon: resourceIcons.gold },],                                            value: 480,  description: "",                                                       image: horneddemon },
        { name: "Отродье Пропасти",    attack: 13, defense: 13, damage: "13-17", health: 45,  speed: 6,  growth: 3,  price: [{ amount: 500, icon: resourceIcons.gold },],                                            value: 765,  description: "",                                                       image: pitfiend },
        { name: "Властитель Пропасти", attack: 13, defense: 13, damage: "13-17", health: 45,  speed: 7,  growth: 3,  price: [{ amount: 700, icon: resourceIcons.gold },],                                            value: 1224, description: "Призыв демонов.",                                        image: pitlord },
        { name: "Ифрит",               attack: 16, defense: 12, damage: "16-24", health: 90,  speed: 9,  growth: 2,  price: [{ amount: 900, icon: resourceIcons.gold },],                                            value: 1670, description: "Имунитет к огню. Ненавидит Джинов.",                     image: efreet },
        { name: "Ифрит-султан",        attack: 16, defense: 14, damage: "16-24", health: 90,  speed: 13, growth: 2,  price: [{ amount: 1100, icon: resourceIcons.gold },],                                           value: 2343, description: "Имунитет к огню. Ненавидит Джинов. Огненный щит.",       image: efreetsultan },
        { name: "Дьявол",              attack: 19, defense: 21, damage: "30-40", health: 160, speed: 11, growth: 1,  price: [{ amount: 2700, icon: resourceIcons.gold }, {amount: 1, icon: resourceIcons.mercury},], value: 5101, description: "Понижает мораль. Ненавидит Анеглов. Безответная атака.", image: devil },
        { name: "Архангел",            attack: 26, defense: 28, damage: "30-40", health: 200, speed: 17, growth: 1,  price: [{ amount: 5400, icon: resourceIcons.gold }, {amount: 2, icon: resourceIcons.mercury}] , value: 8776, description: "Понижает мораль. Ненавидит Анеглов. Безответная атака.", image: archdevil },
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
