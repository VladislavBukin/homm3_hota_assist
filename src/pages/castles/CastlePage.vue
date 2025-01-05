<script>
import { resourceIcons } from '/src/assets/icons/resourceIcons.js';
import pikemen        from '/src/assets/unit_image/castle/pikeman.webp';
import halberdier     from '/src/assets/unit_image/castle/halberdier.webp';
import archer         from '/src/assets/unit_image/castle/archer.webp';
import marksman       from '/src/assets/unit_image/castle/marksman.webp';
import griffin        from '/src/assets/unit_image/castle/griffin.webp';
import royalGriffin   from '/src/assets/unit_image/castle/royalgriffin.webp';
import swordsman      from '/src/assets/unit_image/castle/swordsman.webp';
import crusader       from '/src/assets/unit_image/castle/crusader.webp';
import monk           from '/src/assets/unit_image/castle/monk.webp';
import zealot         from '/src/assets/unit_image/castle/zealot.webp';
import cavalier       from '/src/assets/unit_image/castle/cavalier.webp';
import champion       from '/src/assets/unit_image/castle/champion.webp';
import angel          from '/src/assets/unit_image/castle/angel.webp';
import archangel      from '/src/assets/unit_image/castle/archangel.webp';

export default {
  data() {
    return {
      units: [
        { name: "Копейщик",           attack: 4,  defense: 5,  damage: "1-3",   health: 10,  speed: 4,  growth: 14, price: [{ amount: 60, icon: resourceIcons.gold },], value: 80,   description: "Иммунитет к кавалерийскому бонусу.",               image: pikemen },
        { name: "Алебардщик",         attack: 6,  defense: 5,  damage: "2-3",   health: 10,  speed: 5,  growth: 14, price: [{ amount: 75, icon: resourceIcons.gold },], value: 115,  description: "Иммунитет к кавалерийскому бонусу.",               image: halberdier },
        { name: "Лучник",             attack: 6,  defense: 3,  damage: "2-3",   health: 10,  speed: 4,  growth: 9,  price: [{ amount: 100, icon: resourceIcons.gold },], value: 126,  description: "Стрелок. 12 выстрелов.",                           image: archer },
        { name: "Арбалетчик",         attack: 6,  defense: 3,  damage: "2-3",   health: 10,  speed: 6,  growth: 9,  price: [{ amount: 150, icon: resourceIcons.gold },], value: 184,  description: "Стрелок. 12 выстрелов. Двойной выстрел.",          image: marksman },
        { name: "Грифон",             attack: 8,  defense: 8,  damage: "3-6",   health: 25,  speed: 6,  growth: 7,  price: [{ amount: 200, icon: resourceIcons.gold },], value: 351,  description: "Отвечает дважды.",                                 image: griffin },
        { name: "Королевский грифон", attack: 9,  defense: 9,  damage: "3-6",   health: 25,  speed: 9,  growth: 7,  price: [{ amount: 240, icon: resourceIcons.gold },], value: 448,  description: "Отвечает на все атаки.",                           image: royalGriffin },
        { name: "Мечник",             attack: 10, defense: 12, damage: "6-9",   health: 35,  speed: 5,  growth: 4,  price: [{ amount: 300, icon: resourceIcons.gold },], value: 445,  description: "",                                                 image: swordsman },
        { name: "Крестоносец",        attack: 12, defense: 12, damage: "7-10",  health: 35,  speed: 6,  growth: 4,  price: [{ amount: 400, icon: resourceIcons.gold },], value: 558,  description: "Двойной удар.",                                    image: crusader },
        { name: "Монах",              attack: 12, defense: 7,  damage: "10-12", health: 30,  speed: 5,  growth: 3,  price: [{ amount: 400, icon: resourceIcons.gold },], value: 582,  description: "Стрелок. 12 выстрелов.",                           image: monk },
        { name: "Фанатик",            attack: 12, defense: 10, damage: "10-12", health: 30,  speed: 7,  growth: 3,  price: [{ amount: 450, icon: resourceIcons.gold },], value: 750,  description: "Стрелок. 12 выстрелов. Нет штрафа в ближнем бою.", image: zealot },
        { name: "Кавалерист",         attack: 15, defense: 15, damage: "15-25", health: 100, speed: 7,  growth: 2,  price: [{ amount: 1000, icon: resourceIcons.gold },], value: 1946, description: "Кавалерийский бонус.",                             image: cavalier },
        { name: "Чемпион",            attack: 16, defense: 16, damage: "20-25", health: 100, speed: 9,  growth: 2,  price: [{ amount: 1200, icon: resourceIcons.gold },], value: 2100, description: "Кавалерийский бонус.",                             image: champion },
        { name: "Ангел",              attack: 20, defense: 20, damage: "50",    health: 200, speed: 12, growth: 1,  price: [{ amount: 3000, icon: resourceIcons.gold }, {amount: 1, icon: resourceIcons.gem},], value: 5019, description: "Повышает мораль. Ненавидит дьяволов.",             image: angel },
        { name: "Архангел",           attack: 30, defense: 30, damage: "50",    health: 250, speed: 18, growth: 1,  price: [{ amount: 5000, icon: resourceIcons.gold }, {amount: 3, icon: resourceIcons.gem}] , value: 8776, description: "Повышает мораль. Ненавидит дьяволов. Воскрешает.", image: archangel },
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
  gap: 8px; /* Отступ между ресурсами */
  align-items: center; /* Выровнять элементы по центру по вертикали */
  justify-content: flex-end; /* Выровнять весь блок стоимости по правому краю */
  flex-wrap: nowrap; /* Запретить перенос на новую строку */
}

.resource-item {
  display: flex;
  align-items: center;
  gap: 4px; /* Отступ между иконкой и числом */
  white-space: nowrap; /* Запретить перенос внутри одного ресурса */
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
