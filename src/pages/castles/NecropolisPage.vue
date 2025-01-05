<script>
import { resourceIcons }  from '/src/assets/icons/resourceIcons.js';
import skeleton           from '/src/assets/unit_image/necropolis/skeleton.webp';
import skeletonwarrior    from '/src/assets/unit_image/necropolis/skeletonwarrior.webp';
import walkingdead        from '/src/assets/unit_image/necropolis/walkingdead.webp';
import zombie             from '/src/assets/unit_image/necropolis/zombie.webp';
import wight              from '/src/assets/unit_image/necropolis/wight.webp';
import wraith             from '/src/assets/unit_image/necropolis/wraith.webp';
import vampire            from '/src/assets/unit_image/necropolis/vampire.webp';
import vampirelord        from '/src/assets/unit_image/necropolis/vampirelord.webp';
import lich               from '/src/assets/unit_image/necropolis/lich.webp';
import powerlich          from '/src/assets/unit_image/necropolis/powerlich.webp';
import blackknight        from '/src/assets/unit_image/necropolis/blackknight.webp';
import dreadknight        from '/src/assets/unit_image/necropolis/dreadknight.webp';
import bonedragon         from '/src/assets/unit_image/necropolis/bonedragon.webp';
import ghostdragon        from '/src/assets/unit_image/necropolis/ghostdragon.webp';

export default {
  data() {
    return {
      units: [
        { name: "Скелет",             attack: 5,  defense: 4,  damage: "1-3",   health: 6,   speed: 4,  growth: 12, price: [{ amount: 60, icon: resourceIcons.gold }],                                               value: 60,   description: "",                                      image: skeleton },
        { name: "Скелет-воин",        attack: 6,  defense: 6,  damage: "1-3",   health: 6,   speed: 5,  growth: 12, price: [{ amount: 70, icon: resourceIcons.gold }],                                               value: 85,   description: "",                                      image: skeletonwarrior },
        { name: "Ходячий мертвец",    attack: 5,  defense: 5,  damage: "2-3",   health: 15,  speed: 3,  growth: 8,  price: [{ amount: 100, icon: resourceIcons.gold }],                                              value: 98,  description:  "",                                      image: walkingdead },
        { name: "Зомби",              attack: 5,  defense: 5,  damage: "2-3",   health: 20,  speed: 4,  growth: 8,  price: [{ amount: 125, icon: resourceIcons.gold }],                                              value: 128,  description: "Болезнь.",                              image: zombie },
        { name: "Дух",                attack: 5,  defense: 5,  damage: "3-5",   health: 18,  speed: 5,  growth: 7,  price: [{ amount: 200, icon: resourceIcons.gold }],                                              value: 252,  description: "Регенерация.",                          image: wight },
        { name: "Привидение",         attack: 7,  defense: 7,  damage: "3-5",   health: 18,  speed: 7,  growth: 7,  price: [{ amount: 230, icon: resourceIcons.gold }],                                              value: 315,  description: "Регенерация. Высасывает ману.",         image: wraith },
        { name: "Вампир",             attack: 10, defense: 9,  damage: "5-8",   health: 30,  speed: 6,  growth: 4,  price: [{ amount: 360, icon: resourceIcons.gold }],                                              value: 555,  description: "Безответная атака.",                    image: vampire },
        { name: "Вампир-лорд",        attack: 10, defense: 10, damage: "5-10",  health: 40,  speed: 9,  growth: 4,  price: [{ amount: 500, icon: resourceIcons.gold }],                                              value: 783,  description: "Безответная атака. Высасывает жизнь.",  image: vampirelord },
        { name: "Лич",                attack: 13, defense: 10, damage: "11-13", health: 30,  speed: 6,  growth: 3,  price: [{ amount: 550, icon: resourceIcons.gold }],                                              value: 848,  description: "Стрелок 12 выстрелов. Облако смерти.",  image: lich },
        { name: "Могучий лич",        attack: 13, defense: 10, damage: "11-15", health: 40,  speed: 7,  growth: 3,  price: [{ amount: 600, icon: resourceIcons.gold }],                                              value: 1079,  description: "Стрелок 24 выстрелов. Облако смерти.", image: powerlich },
        { name: "Чёрный рыцарь",      attack: 16, defense: 16, damage: "15-30", health: 120, speed: 7,  growth: 2,  price: [{ amount: 1200, icon: resourceIcons.gold }],                                             value: 2087, description: "Проклятье.",                            image: blackknight },
        { name: "Зловещий рыцарь",    attack: 18, defense: 18, damage: "15-30", health: 120, speed: 9,  growth: 2,  price: [{ amount: 1500, icon: resourceIcons.gold }],                                             value: 2382, description: "Проклятье. Смертельный удар.",          image: dreadknight },
        { name: "Костяной дракон",    attack: 17, defense: 15, damage: "25-50", health: 150, speed: 9,  growth: 1,  price: [{ amount: 1800, icon: resourceIcons.gold }],                                             value: 3382, description: "Понижает мораль.",                      image: bonedragon },
        { name: "Призрачный дракон",  attack: 19, defense: 17, damage: "25-50", health: 200, speed: 14, growth: 1,  price: [{ amount: 3000, icon: resourceIcons.gold }, { amount: 1, icon: resourceIcons.mercury }], value: 4696, description: "Понижает мораль. Старение",             image: ghostdragon },
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
