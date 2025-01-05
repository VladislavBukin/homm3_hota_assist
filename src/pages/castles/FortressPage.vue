<script>
import { resourceIcons } from '/src/assets/icons/resourceIcons.js';
import gnoll             from '/src/assets/unit_image/fortress/gnoll.webp';
import gnollmarauder     from '/src/assets/unit_image/fortress/gnollmarauder.webp';
import lizardman         from '/src/assets/unit_image/fortress/lizardman.webp';
import lizardWarrior     from '/src/assets/unit_image/fortress/lizardwarrior.webp';
import serpentFly        from '/src/assets/unit_image/fortress/serpentfly.webp';
import dragonFly         from '/src/assets/unit_image/fortress/dragonfly.webp';
import basilisk          from '/src/assets/unit_image/fortress/basilisk.webp';
import greaterBasilisk   from '/src/assets/unit_image/fortress/greaterbasilisk.webp';
import gorgon            from '/src/assets/unit_image/fortress/gorgon.webp';
import mightyGorgon      from '/src/assets/unit_image/fortress/mightygorgon.webp';
import wyvern            from '/src/assets/unit_image/fortress/wyvern.webp';
import wyvernMonarch     from '/src/assets/unit_image/fortress/wyvernmonarch.webp';
import hydra             from '/src/assets/unit_image/fortress/hydra.webp';
import chaosHydra        from '/src/assets/unit_image/fortress/chaoshydra.webp';

export default {
  data() {
    return {
      units: [
        { name: "Гнолл",             attack: 3,  defense: 5,  damage: "2-3",   health: 6,   speed: 4,  growth: 12, price: [{ amount: 50, icon: resourceIcons.gold }],                                              value: 56,   description: "",                                image: gnoll },
        { name: "Гнолл-Мародёр",     attack: 4,  defense: 6,  damage: "2-3",   health: 6,   speed: 5,  growth: 12, price: [{ amount: 70, icon: resourceIcons.gold }],                                              value: 90,   description: "",                                image: gnollmarauder },
        { name: "Ящер",              attack: 5,  defense: 6,  damage: "2-3",   health: 14,  speed: 4,  growth: 9,  price: [{ amount: 110, icon: resourceIcons.gold }],                                             value: 126,  description: "Стрелок. 12 выстрелов.",          image: lizardman },
        { name: "Ящер-воин",         attack: 6,  defense: 8,  damage: "2-5",   health: 15,  speed: 5,  growth: 9,  price: [{ amount: 140, icon: resourceIcons.gold }],                                             value: 156,  description: "Стрелок. 24 выстрела.",           image: lizardWarrior },
        { name: "Змий",              attack: 7,  defense: 9,  damage: "2-5",   health: 20,  speed: 9,  growth: 8,  price: [{ amount: 220, icon: resourceIcons.gold }],                                             value: 268,  description: "Снятие заклинаний",               image: serpentFly },
        { name: "Ядовитый Змий",     attack: 8,  defense: 10, damage: "2-5",   health: 20,  speed: 13, growth: 8,  price: [{ amount: 240, icon: resourceIcons.gold }],                                             value: 312,  description: "Снятие заклинаний. Слабость.",    image: dragonFly },
        { name: "Вазилиск",          attack: 11, defense: 11, damage: "6-10",  health: 35,  speed: 5,  growth: 4,  price: [{ amount: 325, icon: resourceIcons.gold }],                                             value: 552,  description: "Окаменение.",                     image: basilisk },
        { name: "Великий Вазилиск",  attack: 12, defense: 12, damage: "6-10",  health: 40,  speed: 7,  growth: 4,  price: [{ amount: 400, icon: resourceIcons.gold }],                                             value: 714,  description: "Окаменение.",                     image: greaterBasilisk },
        { name: "Горгона",           attack: 10, defense: 14, damage: "12-16", health: 70,  speed: 5,  growth: 3,  price: [{ amount: 525, icon: resourceIcons.gold }],                                             value: 890,  description: "",                                image: gorgon },
        { name: "Могучая Горгона",   attack: 11, defense: 16, damage: "12-16", health: 70,  speed: 6,  growth: 3,  price: [{ amount: 600, icon: resourceIcons.gold }],                                             value: 1028, description: "Смертельный взгляд",              image: mightyGorgon },
        { name: "Виверна",           attack: 14, defense: 14, damage: "14-18", health: 70,  speed: 7,  growth: 2,  price: [{ amount: 800, icon: resourceIcons.gold }],                                             value: 1350, description: "",                                image: wyvern },
        { name: "Виверна-монарх",    attack: 14, defense: 14, damage: "18-22", health: 70,  speed: 11, growth: 2,  price: [{ amount: 1100, icon: resourceIcons.gold }],                                            value: 1518, description: "Смертельный яд.",                 image: wyvernMonarch },
        { name: "Гидра",             attack: 16, defense: 18, damage: "25-45", health: 175, speed: 5,  growth: 1,  price: [{ amount: 2200, icon: resourceIcons.gold }],                                            value: 4120, description: "Мультиатака. Безответная атака.", image: hydra },
        { name: "Гидра хаоса",       attack: 18, defense: 20, damage: "25-45", health: 250, speed: 7,  growth: 1,  price: [{ amount: 3500, icon: resourceIcons.gold }, { amount: 1, icon: resourceIcons.sulfur }], value: 5931, description: "Мультиатака. Безответная атака.", image: chaosHydra },
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
