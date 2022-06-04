<template>
  <ViewTemplate>
    <span v-if="rickAndMortyCharacters.length <= 0">Carregando...</span>
    <section class="cards-container">
      <CharacterCard
        :name="character.name"
        :image="character.image"
        :key="character.id"
        v-for="character in rickAndMortyCharacters"
      />
    </section>
  </ViewTemplate>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ViewTemplate from "../templates/ViewTemplate.vue";
import { IRickAndMortyCharacter } from "../types";
import { getAllCharacters } from "../services/RickAndMortyService";
import CharacterCard from "@/components/CharacterCard.vue";

export default defineComponent({
  name: "RickAndMortyView",
  components: {
    ViewTemplate,
    CharacterCard,
  },
  data() {
    return {
      rickAndMortyCharacters: [] as Array<IRickAndMortyCharacter>,
    };
  },
  methods: {
    async fetchData(): Promise<void> {
        const characters = await getAllCharacters();
        this.rickAndMortyCharacters = characters;
    },
  },
  mounted() {
    this.fetchData();
  },
});
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 15px;
  width: 100%;
}
</style>
