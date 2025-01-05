<script>
import { resourceIcons }   from '/src/assets/icons/resourceIcons.js';
import halfling            from '/src/assets/unit_image/factory/halfling.webp';
import halflingGrenadier   from '/src/assets/unit_image/factory/halflinggrenadier.webp';
import mechanic            from '/src/assets/unit_image/factory/mechanic.webp';
import engineer            from '/src/assets/unit_image/factory/engineer.webp';
import armadillo           from '/src/assets/unit_image/factory/armadillo.webp';
import bellwetherArmadillo from '/src/assets/unit_image/factory/bellwetherarmadillo.webp';
import automaton           from '/src/assets/unit_image/factory/automaton.webp';
import sentinelAutomaton   from '/src/assets/unit_image/factory/sentinelAutomaton.webp';
import sandworm            from '/src/assets/unit_image/factory/sandworm.webp';
import olgoiKhorkhoi       from '/src/assets/unit_image/factory/olgoikhorkhoi.webp';
import gunslinger          from '/src/assets/unit_image/factory/gunslinger.webp';
import bountyHunter        from '/src/assets/unit_image/factory/bountyhunter.webp';
import couatl              from '/src/assets/unit_image/factory/couatl.webp';
import crimsonCouatl       from '/src/assets/unit_image/factory/crimsonCouatl.webp';
import dreadnought         from '/src/assets/unit_image/factory/dreadnought.webp';
import juggernaut          from '/src/assets/unit_image/factory/juggernaut.webp';

export default {
  data() {
    return {
      units: [
        { name: "Полурослик", attack: 4, defense: 2, damage: "1-3", health: 4, speed: 5, growth: 15, price: [{ amount: 40, icon: resourceIcons.gold }], value: 75, description: "Стрелок 24 выстрела. Положительная удача.", image: halfling },
        { name: "Полурослик-Гренадер", attack: 5, defense: 2, damage: "2-3", health: 4, speed: 6, growth: 15, price: [{ amount: 60, icon: resourceIcons.gold }], value: 95, description: "Стрелок 24 выстрела. Положительная удача. Точные выстрелы.", image: halflingGrenadier },
        { name: "Механик", attack: 6, defense: 5, damage: "2-4", health: 14, speed: 6, growth: 8, price: [{ amount: 140, icon: resourceIcons.gold }], value: 186, description: "Огненная атака. Ремонт.", image: mechanic },
        { name: "Инженер", attack: 7, defense: 5, damage: "2-5", health: 16, speed: 7, growth: 8, price: [{ amount: 170, icon: resourceIcons.gold }], value: 278, description: "Огненная атака. Ремонт.", image: engineer },
        { name: "Броненосец", attack: 5, defense: 10, damage: "3-5", health: 25, speed: 4, growth: 6, price: [{ amount: 200, icon: resourceIcons.gold }], value: 198, description: "", image: armadillo },
        { name: "Броненосец-Вожак", attack: 5, defense: 11, damage: "3-5", health: 25, speed: 6, growth: 6, price: [{ amount: 230, icon: resourceIcons.gold }], value: 256, description: "", image: bellwetherArmadillo },
        { name: "Автоматон", attack: 12, defense: 10, damage: "7", health: 30, speed: 8, growth: 5, price: [{ amount: 350, icon: resourceIcons.gold }], value: 669, description: "Детонация.", image: automaton },
        { name: "Автоматон-Часовой", attack: 12, defense: 10, damage: "9", health: 30, speed: 9, growth: 5, price: [{ amount: 450, icon: resourceIcons.gold }], value: 947, description: "Детонаци. Безответная атака.", image: sentinelAutomaton },
        { name: "Песчаный червь", attack: 13, defense: 12, damage: "12-16", health: 50, speed: 8, growth: 3, price: [{ amount: 575, icon: resourceIcons.gold }], value: 991, description: "Иммунитет к ослеплению и окаменению.", image: sandworm },
        { name: "Олгой-Хорхой", attack: 15, defense: 12, damage: "12-16", health: 60, speed: 10, growth: 3, price: [{ amount: 650, icon: resourceIcons.gold }], value: 1220, description: "Иммунитет к ослеплению и окаменению. Пожиратель", image: olgoiKhorkhoi },
        { name: "Стрелок", attack: 17, defense: 12, damage: "14-24", health: 45, speed: 7, growth: 2, price: [{ amount: 800, icon: resourceIcons.gold }], value: 1351, description: "Стрелок 16 выстрелов. Упреждающий выстрел.", image: gunslinger },
        { name: "Охотник за головами", attack: 18, defense: 14, damage: "14-24", health: 45, speed: 8, growth: 2, price: [{ amount: 1100, icon: resourceIcons.gold }], value: 1454, description: "Стрелок 24 выстрела. Упреждающий выстрел.", image: bountyHunter },
        { name: "Коатль", attack: 17, defense: 17, damage: "25-45", health: 160, speed: 11, growth: 1, price: [{ amount: 2000, icon: resourceIcons.gold },], value: 3574, description: "Медитация.", image: couatl },
        { name: "Багровый коатль", attack: 21, defense: 21, damage: "25-45", health: 200, speed: 15, growth: 1, price: [{ amount: 3500, icon: resourceIcons.gold }, { amount: 1, icon: resourceIcons.crystal }], value: 5341, description: "Боевая медитация.", image: crimsonCouatl },
        { name: "Дредноут", attack: 18, defense: 20, damage: "40-50", health: 200, speed: 6, growth: 1, price: [{ amount: 2500, icon: resourceIcons.gold }, { amount: 1, icon: resourceIcons.crystal }], value: 3879, description: "Тепловой удар.", image: dreadnought },
        { name: "Джаггернаут", attack: 23, defense: 23, damage: "40-50", health: 300, speed: 7, growth: 1, price: [{ amount: 4000, icon: resourceIcons.gold }, { amount: 2, icon: resourceIcons.crystal }], value: 6433, description: "Тепловой удар.", image: juggernaut },
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
