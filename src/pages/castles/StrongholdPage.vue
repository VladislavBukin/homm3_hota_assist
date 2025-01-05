<script>
import { resourceIcons } from '/src/assets/icons/resourceIcons.js';
import goblin            from '/src/assets/unit_image/stronghold/goblin.webp';
import hobgoblin         from '/src/assets/unit_image/stronghold/hobgoblin.webp';
import wolfrider         from '/src/assets/unit_image/stronghold/wolfrider.webp';
import wolfraider        from '/src/assets/unit_image/stronghold/wolfraider.webp';
import orc               from '/src/assets/unit_image/stronghold/orc.webp';
import orcchieftain      from '/src/assets/unit_image/stronghold/orcchieftain.webp';
import ogre              from '/src/assets/unit_image/stronghold/ogre.webp';
import ogremage          from '/src/assets/unit_image/stronghold/ogremage.webp';
import roc               from '/src/assets/unit_image/stronghold/roc.webp';
import thunderbird       from '/src/assets/unit_image/stronghold/thunderbird.webp';
import cyclops           from '/src/assets/unit_image/stronghold/cyclops.webp';
import cyclopsking       from '/src/assets/unit_image/stronghold/cyclopsking.webp';
import behemoth          from '/src/assets/unit_image/stronghold/behemoth.webp';
import ancientbehemoth   from '/src/assets/unit_image/stronghold/ancientbehemoth.webp';

export default {
  data() {
    return {
      units: [
        { name: "Гоблин",              attack: 4,  defense: 2,  damage: "1-2",   health: 5,   speed: 5,  growth: 15, price: [{ amount: 40, icon: resourceIcons.gold }],                                               value: 60,    description: "",                                       image: goblin },
        { name: "Хобгоблин",           attack: 5,  defense: 3,  damage: "1-2",   health: 5,   speed: 7,  growth: 15, price: [{ amount: 50, icon: resourceIcons.gold }],                                               value: 78,    description: "",                                       image: hobgoblin },
        { name: "Наездник на волках",  attack: 7,  defense: 5,  damage: "2-4",   health: 10,  speed: 6,  growth: 9,  price: [{ amount: 100, icon: resourceIcons.gold }],                                              value: 130,   description: "",                                       image: wolfrider },
        { name: "Налётчик",            attack: 8,  defense: 5,  damage: "3-4",   health: 10,  speed: 8,  growth: 9,  price: [{ amount: 140, icon: resourceIcons.gold }],                                              value: 203,   description: "Атакует дважды.",                        image: wolfraider },
        { name: "Орк",                 attack: 8,  defense: 4,  damage: "2-5",   health: 15,  speed: 4,  growth: 7,  price: [{ amount: 150, icon: resourceIcons.gold }],                                              value: 192,   description: "Стрелок 12 выстрелов.",                  image: orc },
        { name: "Орк-Вождь",           attack: 8,  defense: 4,  damage: "2-5",   health: 20,  speed: 5,  growth: 7,  price: [{ amount: 165, icon: resourceIcons.gold }],                                              value: 240,   description: "Стрелок 24 выстрела.",                   image: orcchieftain },
        { name: "Огр",                 attack: 13, defense: 7,  damage: "6-12",  health: 40,  speed: 4,  growth: 4,  price: [{ amount: 300, icon: resourceIcons.gold }],                                              value: 416,   description: "",                                       image: ogre },
        { name: "Огр-маг",             attack: 13, defense: 7,  damage: "6-12",  health: 60,  speed: 5,  growth: 4,  price: [{ amount: 400, icon: resourceIcons.gold }],                                              value: 672,   description: "Жажда крови.",                           image: ogremage },
        { name: "Птица Рух",           attack: 13, defense: 11, damage: "11-15", health: 60,  speed: 7,  growth: 3,  price: [{ amount: 600, icon: resourceIcons.gold }],                                              value: 1027,  description: "",                                       image: roc },
        { name: "Птица грома",         attack: 13, defense: 11, damage: "11-15", health: 60,  speed: 11, growth: 3,  price: [{ amount: 700, icon: resourceIcons.gold }],                                              value: 1106,  description: "Удар молнии",                            image: thunderbird },
        { name: "Циклоп",              attack: 15, defense: 12, damage: "16-20", health: 70,  speed: 6,  growth: 2,  price: [{ amount: 750, icon: resourceIcons.gold }],                                              value: 1266,  description: "Стрелок 16 выстрелов. Разрушает стены.", image: cyclops },
        { name: "Циклоп-Король",       attack: 17, defense: 13, damage: "16-20", health: 70,  speed: 8,  growth: 2,  price: [{ amount: 1100, icon: resourceIcons.gold }],                                             value: 1443,  description: "Стрелок 24 выстрела. Разрушает стены.",  image: cyclopsking },
        { name: "Чудище",              attack: 17, defense: 17, damage: "30-50", health: 160, speed: 6,  growth: 1,  price: [{ amount: 1500, icon: resourceIcons.gold }],                                             value: 3162,  description: "Пронзающие когти.",                      image: behemoth },
        { name: "Древнее Чудище",      attack: 19, defense: 19, damage: "30-50", health: 300, speed: 9,  growth: 1,  price: [{ amount: 3000, icon: resourceIcons.gold }, { amount: 1, icon: resourceIcons.crystal }], value: 6168,  description: "Смертельные пронзающие когти",           image: ancientbehemoth },
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
