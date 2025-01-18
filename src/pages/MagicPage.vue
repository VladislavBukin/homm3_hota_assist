<script>
import { spells } from '/src/assets/spells.js';

export default {
  data() {
    return {
      showFilter: false,
      magicSchools: ["Огонь", "Вода", "Воздух", "Земля"],
      magicLevels: [1, 2, 3, 4, 5],
      magicSkillLevels: ["Нет", "Базовый", "Продвинутый", "Эксперт"],
      spellcastingSkillLevels: ["Нет", "Базовый", "Продвинутый", "Эксперт"],
      selectedSchools: [],
      selectedLevels: [],
      magicSkill: "Нет",
      spellcastingSkill: "Нет",
      magicPower: 10, // Сила магии по умолчанию
      spells, // Используем импортированные данные
    };
  },
  computed: {
    filteredSpells() {
      return this.spells.filter(spell => {
        const matchesSchool = this.selectedSchools.length
          ? this.selectedSchools.includes(spell.school)
          : true;
        const matchesLevel = this.selectedLevels.length
          ? this.selectedLevels.includes(spell.level)
          : true;
        return matchesSchool && matchesLevel;
      });
    },
  },
  methods: {
    toggleFilter() {
      this.showFilter = !this.showFilter;
    },
    getSpellDescription(spell) {
      let description = spell.descriptions[this.magicSkill] || spell.descriptions["Нет"];
      if (spell.dealsDamage) {
        const damage = this.calculateSpellDamage(spell);
        description += ` Урон: ${damage}`;
      }
      return description;
    },
    calculateSpellDamage(spell) {
      if (!spell.dealsDamage) {
        return null; // Заклинание не наносит урон
      }
      const skillFactor = this.getSkillFactor(this.magicSkill);
      const spellcastingBonus = this.getSpellcastingBonus(this.spellcastingSkill);
      if (spell.damageFormula) {
        return spell.damageFormula(this.magicPower, skillFactor, spellcastingBonus);
      }
      return (spell.baseDamage || 0) + this.magicPower * skillFactor + spellcastingBonus;
    },
    calculateManaCost(spell) {
      if (spell.manaCosts && spell.manaCosts[this.magicSkill]) {
        return spell.manaCosts[this.magicSkill];
      }
      return spell.baseManaCost || 1;
    },
    getSkillFactor(skill) {
      switch (skill) {
        case "Базовый":
          return 1.1;
        case "Продвинутый":
          return 1.25;
        case "Эксперт":
          return 1.5;
        default:
          return 1;
      }
    },
    getSpellcastingBonus(skill) {
      switch (skill) {
        case "Базовый":
          return 5;
        case "Продвинутый":
          return 10;
        case "Эксперт":
          return 20;
        default:
          return 0;
      }
    },
  },
};
</script>

<template>
  <div class="magic-page">
    <header>
      <button class="filter-toggle" @click="toggleFilter">Фильтр</button>
      <div v-if="showFilter" class="filter-section">
        <div class="filter-row">
          <div class="filter-group">
            <h3>Школа магии</h3>
            <div>
              <label v-for="school in magicSchools" :key="school">
                <input type="checkbox" v-model="selectedSchools" :value="school" />
                {{ school }}
              </label>
            </div>
          </div>
          <div class="filter-group">
            <h3>Уровень магии</h3>
            <div>
              <label v-for="level in magicLevels" :key="level">
                <input type="checkbox" v-model="selectedLevels" :value="level" />
                {{ level }}
              </label>
            </div>
          </div>
          <div class="filter-group">
            <h3>Владение школой магии</h3>
            <select v-model="magicSkill" class="styled-select">
              <option v-for="skill in magicSkillLevels" :key="skill" :value="skill">
                {{ skill }}
              </option>
            </select>
          </div>
          <div class="filter-group">
            <h3>Уровень волшебства</h3>
            <select v-model="spellcastingSkill" class="styled-select">
              <option v-for="skill in spellcastingSkillLevels" :key="skill" :value="skill">
                {{ skill }}
              </option>
            </select>
          </div>
          <div class="filter-group">
            <h3>Сила магии</h3>
            <input type="number" v-model.number="magicPower" class="styled-input" placeholder="Введите силу магии" />
          </div>
        </div>
      </div>
    </header>
    <main class="spells">
      <div v-for="spell in filteredSpells" :key="spell.id" class="spell-card">
        <img :src="spell.icon" :alt="spell.name" class="spell-icon" />
        <div class="spell-details">
          <h4>{{ spell.name }}</h4>
          <p>Мана: {{ calculateManaCost(spell) }}</p>
          <p v-if="spell.dealsDamage">Урон: {{ calculateSpellDamage(spell) }}</p>
          <p>{{ getSpellDescription(spell) }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.magic-page {
  padding: 1rem;
}
.filter-toggle {
  margin: 1rem 0;
  background-color: var(--primary-color);
  color: var(--on-primary-color);
  border: none;
  border-radius: 8px;
  padding: 0.6em 1.2em;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
}
.filter-toggle:hover {
  background-color: var(--primary-hover-color);
}
.filter-section {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.filter-group {
  flex: 1;
  min-width: 200px;
}
.filter-group h3 {
  margin-bottom: 0.5rem;
  color: var(--text-color-primary);
}
label {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
label input {
  margin-right: 0.5rem;
}
select.styled-select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid gold;
  border-radius: 8px;
  background-color: var(--card-background-color);
  color: var(--text-color-primary);
  font-size: 1rem;
  appearance: none;
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 0.65em auto;
}
select.styled-select:focus {
  outline: 2px solid var(--primary-color);
}
select.styled-select option {
  background-color: rgb(70, 43, 26);
  color: var(--text-color-primary);
  border: 1px solid gold;
}
input.styled-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid gold;
  border-radius: 8px;
  background-color: var(--background-color);
  color: var(--text-color-primary);
  font-size: 1rem;
}
.spells {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}
.spell-card {
  background: var(--card-background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.5rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.spell-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 0.5rem;
}
.spell-details h4 {
  margin: 0.5rem 0;
  color: var(--text-color-primary);
}
.spell-details p {
  margin: 0.2rem 0;
  color: var(--text-color-secondary);
}
</style>
