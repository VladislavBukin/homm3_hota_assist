<script>
import { resourceIcons } from '/src/assets/icons/resourceIcons.js';
import pixie             from '/src/assets/unit_image/conflux/pixie.webp';
import sprite            from '/src/assets/unit_image/conflux/sprite.webp';
import airElemental      from '/src/assets/unit_image/conflux/airelemental.webp';
import stormElemental    from '/src/assets/unit_image/conflux/stormelemental.webp';
import waterElemental    from '/src/assets/unit_image/conflux/waterelemental.webp';
import iceElemental      from '/src/assets/unit_image/conflux/iceelemental.webp';
import fireElemental     from '/src/assets/unit_image/conflux/fireelemental.webp';
import energyElemental   from '/src/assets/unit_image/conflux/energyelemental.webp';
import earthElemental    from '/src/assets/unit_image/conflux/earthelemental.webp';
import magmaElemental    from '/src/assets/unit_image/conflux/magmaelemental.webp';
import psychicElemental  from '/src/assets/unit_image/conflux/psychicelemental.webp';
import magicElemental    from '/src/assets/unit_image/conflux/magicelemental.webp';
import firebird          from '/src/assets/unit_image/conflux/firebird.webp';
import phoenix           from '/src/assets/unit_image/conflux/phoenix.webp';

export default {
  data() {
    return {
      units: [
        { name: "Пикси",                     attack: 1,  defense: 1,  damage: "1-2",   health: 3,   speed: 7,   growth: 20, price: [{ amount: 25, icon: resourceIcons.gold }],                                               value: 55,   description: "", image: pixie },
        { name: "Фея",                       attack: 2,  defense: 2,  damage: "1-3",   health: 3,   speed: 9,   growth: 20, price: [{ amount: 30, icon: resourceIcons.gold }],                                               value: 95,   description: "Безответная атака.", image: sprite },
        { name: "Воздушный элементаль",      attack: 9,  defense: 9,  damage: "2-8",   health: 25,  speed: 7,   growth: 6,  price: [{ amount: 250, icon: resourceIcons.gold }],                                              value: 356,  description: "Иммунитет к метиоритному дождю. Уязвимость к молниям. Противоположность земле.", image: airElemental },
        { name: "Штормовой элементаль",      attack: 9,  defense: 9,  damage: "2-8",   health: 25,  speed: 8,   growth: 6,  price: [{ amount: 275, icon: resourceIcons.gold }],                                              value: 486,  description: "Стрелок 24 выстрела. Иммунитет к метиоритному дождю. Уязвимость к молниям. Противоположность земле. Колдует заклинание.", image: stormElemental },
        { name: "Водный элементаль",         attack: 8,  defense: 10, damage: "3-7",   health: 30,  speed: 5,   growth: 6,  price: [{ amount: 300, icon: resourceIcons.gold }],                                              value: 315,  description: "Иммунитет к заклинаниям холода. Уязвимость к огню. Противоположность огню.", image: waterElemental },
        { name: "Ледяной элементаль",        attack: 8,  defense: 10, damage: "3-7",   health: 30,  speed: 6,   growth: 6,  price: [{ amount: 375, icon: resourceIcons.gold }],                                              value: 380,  description: "Стрелок 24 выстрела. Иммунитет к заклинаниям холода. Уязвимость к огню. Противоположность огню. Колдует заклинание.", image: iceElemental },
        { name: "Огненный элементаль",       attack: 10, defense: 6,  damage: "4-6",   health: 35,  speed: 6,   growth: 5,  price: [{ amount: 350, icon: resourceIcons.gold }],                                              value: 345,  description: "Иммунитет к огню. Уязвимость к холоду. противоположность воде.", image: fireElemental },
        { name: "Энергетический элементаль", attack: 12, defense: 8,  damage: "4-6",   health: 35,  speed: 8,   growth: 5,  price: [{ amount: 400, icon: resourceIcons.gold }],                                              value: 470,  description: "Иммунитет к огню. Уязвимость к холоду. противоположность воде. Колдует заклинание.", image: energyElemental },
        { name: "Земляной элементаль",       attack: 8,  defense: 12, damage: "5-9",   health: 40,  speed: 4,   growth: 4,  price: [{ amount: 400, icon: resourceIcons.gold }],                                              value: 330,  description: "Иммунитет к молнии. Уязвимость к метиоритному дождю. Противоположность воздуху.", image: earthElemental },
        { name: "Магмовый элементаль",       attack: 10, defense: 12, damage: "6-10",  health: 40,  speed: 6,   growth: 4,  price: [{ amount: 500, icon: resourceIcons.gold }],                                              value: 490,  description: "Иммунитет к молнии. Уязвимость к метиоритному дождю. Противоположность воздуху. Колдует заклинание.", image: magmaElemental },
        { name: "Психический элементаль",    attack: 15, defense: 13, damage: "10-20", health: 75,  speed: 7,   growth: 2,  price: [{ amount: 750, icon: resourceIcons.gold }],                                              value: 1669, description: "Мультиатака. Безответная атака. Магическая атака.", image: psychicElemental },
        { name: "Магический элементаль",     attack: 15, defense: 13, damage: "15-25", health: 80,  speed: 9,   growth: 2,  price: [{ amount: 800, icon: resourceIcons.gold }],                                             value: 2012, description: "Мультиатака. Безответная атака. Магическая атака. Иммунитет к магии.", image: magicElemental },
        { name: "Огненная птица",            attack: 18, defense: 18, damage: "30-40", health: 150, speed: 15,  growth: 1,  price: [{ amount: 1500, icon: resourceIcons.gold }],                                             value: 4336, description: "Иммунитет к огню. Огненная атака.", image: firebird },
        { name: "Феникс",                    attack: 21, defense: 18, damage: "30-40", health: 200, speed: 21,  growth: 1,  price: [{ amount: 2000, icon: resourceIcons.gold }, { amount: 1, icon: resourceIcons.mercury }], value: 6721, description: "Иммунитет к огню. Огненная атака. Возрождается.", image: phoenix },
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
