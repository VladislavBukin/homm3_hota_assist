<script>
import { resourceIcons } from '/src/assets/icons/resourceIcons.js';
import Peasant           from '/src/assets/unit_image/neutral/peasant.webp';
import Rogue             from '/src/assets/unit_image/neutral/rogue.webp';
import Boar              from '/src/assets/unit_image/neutral/boar.webp';
import Leprechaun        from '/src/assets/unit_image/neutral/Leprechaun.webp';
import Mummy             from '/src/assets/unit_image/neutral/mummy.webp';
import Nomad             from '/src/assets/unit_image/neutral/nomad.webp';
import Sharpshooter      from '/src/assets/unit_image/neutral/sharpshooter.webp';
import Satyr             from '/src/assets/unit_image/neutral/satyr.webp';
import Troll             from '/src/assets/unit_image/neutral/troll.webp';
import Goldgolem         from '/src/assets/unit_image/neutral/goldgolem.webp';
import Fangarm           from '/src/assets/unit_image/neutral/fangarm.webp';
import Diamondgolem      from '/src/assets/unit_image/neutral/diamondgolem.webp';
import Enchanter         from '/src/assets/unit_image/neutral/enchanter.webp';
import Faeriedragon      from '/src/assets/unit_image/neutral/faeriedragon.webp';
import Rustdragon        from '/src/assets/unit_image/neutral/rustdragon.webp';
import Crystaldragon     from '/src/assets/unit_image/neutral/crystaldragon.webp';
import Azuredragon       from '/src/assets/unit_image/neutral/azuredragon.webp';
import Steelgolem       from '/src/assets/unit_image/neutral/Steelgolem.webp';

export default {
  data() {
    return {
      units: [
        { name: "Крестьянин", attack: 1, defense: 1, damage: "1-1", health: 1, speed: 3, growth: 25, price: [{ amount: 10, icon: resourceIcons.gold }], value: 15, description: "", image: Peasant },
        { name: "Вор", attack: 8, defense: 3, damage: "2-4", health: 10, speed: 6, growth: 8, price: [{ amount: 100, icon: resourceIcons.gold }], value: 135, description: "Шпион", image: Rogue },
        { name: "Наездник на кабане", attack: 6, defense: 5, damage: "2-3", health: 15, speed: 6, growth: 8, price: [{ amount: 150, icon: resourceIcons.gold }], value: 145, description: "", image: Boar },
        { name: "Лепрекон", attack: 8, defense: 5, damage: "3-5", health: 15, speed: 5, growth: 9, price: [{ amount: 100, icon: resourceIcons.gold }], value: 190, description: 'Колдует заклинание "Удача".', image: Leprechaun },
        { name: "Мумия", attack: 7, defense: 7, damage: "3-5", health: 30, speed: 5, growth: 7, price: [{ amount: 300, icon: resourceIcons.gold }], value: 270, description: "Проклинает врагов", image: Mummy },
        { name: "Кочевник", attack: 9, defense: 8, damage: "2-6", health: 30, speed: 7, growth: 7, price: [{ amount: 200, icon: resourceIcons.gold }], value: 345, description: "Ходит по пескам", image: Nomad },
        { name: "Сатир", attack: 10, defense: 11, damage: "6-10", health: 35, speed: 7, growth: 4, price: [{ amount: 300, icon: resourceIcons.gold }], value: 518, description: 'Колдует заклинание "Радость".', image: Satyr },
        { name: "Снайпер", attack: 12, defense: 10, damage: "8-10", health: 15, speed: 9, growth: 4, price: [{ amount: 400, icon: resourceIcons.gold }], value: 585, description: "Стрелок 32 выстрела. Нет шрафов за расстояние и препятсвия.", image: Sharpshooter },
        { name: "Стальной голем", attack: 10, defense: 11, damage: "6-8", health: 45, speed: 6, growth: 4, price: [{ amount: 400, icon: resourceIcons.gold }], value: 597, description: "Сопротивление магии.", image: Steelgolem },
        { name: "Золотой голем", attack: 11, defense: 12, damage: "8-10", health: 50, speed: 5, growth: 3, price: [{ amount: 500, icon: resourceIcons.gold }], value: 600, description: "Сопротивление магии.", image: Goldgolem },
        { name: "Алмазный голем", attack: 13, defense: 12, damage: "10-24", health: 60, speed: 5, growth: 2, price: [{ amount: 750, icon: resourceIcons.gold }], value: 775, description: "Сопротивление магии.", image: Diamondgolem },
        { name: "Фангарм", attack: 12, defense: 12, damage: "8-12", health: 50, speed: 6, growth: 3, price: [{ amount: 600, icon: resourceIcons.gold }], value: 929, description: "Иммунитет к заклинаниям разума. Всегда отвечает. Гипнотизирует врагов.", image: Fangarm },
        { name: "Тролль", attack: 14, defense: 7, damage: "10-15", health: 40, speed: 7, growth: 3, price: [{ amount: 500, icon: resourceIcons.gold }], value: 1024, description: "Регенерация", image: Troll },
        { name: "Чародей", attack: 17, defense: 12, damage: "14", health: 30, speed: 9, growth: 2, price: [{ amount: 750, icon: resourceIcons.gold },], value: 1210, description: "Нет штрафа в ближнем бою. Нет штрафа по припятсвию. Колдует массовые заклинания.", image: Enchanter },
        { name: "Ржавый дракон", attack: 30, defense: 30, damage: "50", health: 750, speed: 17, growth: 1, price: [{ amount: 15000, icon: resourceIcons.gold }, { amount: 14, icon: resourceIcons.sulfur }], value: 26433, description: "Огненная атака. Ядовитая атака. Плюётся кислотой.", image: Rustdragon },
        { name: "Сказочный дракон", attack: 20, defense: 20, damage: "20-30", health: 500, speed: 15, growth: 1, price: [{ amount: 10000, icon: resourceIcons.gold }, { amount: 8, icon: resourceIcons.gem }], value: 30501, description: "Защищён волшебным зеркалом. Колдует атакующие заклинания", image: Faeriedragon},
        { name: "Кристальный дракон ", attack: 40, defense: 40, damage: "60-75", health: 800, speed: 16, growth: 1, price: [{ amount: 20000, icon: resourceIcons.gold }, { amount: 10, icon: resourceIcons.crystal }], value: 39338, description: "Производит кристалы. Устойчив к магии", image: Crystaldragon },
        { name: "Лазурный дракон", attack: 50, defense: 50, damage: "70-80", health: 1000, speed: 19, growth: 1, price: [{ amount: 30000, icon: resourceIcons.gold }, { amount: 20, icon: resourceIcons.mercury }], value: 78845, description: "Ледяная атака. Иммунитет к магии. Страх. Бесстрашный", image: Azuredragon },
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
