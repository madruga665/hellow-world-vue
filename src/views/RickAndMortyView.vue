<template>
  <ViewTemplate>
    <section class="cards-container">
      <span v-if="rickAndMortyCharacters.length <= 0">Carregando...</span>
      <div class="character-card" v-for="character in rickAndMortyCharacters" :key="character.id">
        <img :src="character.image" />
        <footer>
          <h3>
            {{ character.name }}
          </h3>
        </footer>
      </div>
    </section>
  </ViewTemplate>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import ViewTemplate from "../templates/ViewTemplate.vue";
import { IRickAndMortyCharacter } from "@/types";

export default defineComponent({
  name: "RickAndMortyView",
  components: {
    ViewTemplate,
  },
  data() {
    return {
      rickAndMortyCharacters: [] as Array<IRickAndMortyCharacter>,
    };
  },
  methods: {
    async fetchData(): Promise<void> {
      try {
        const response = await axios.get("https://rickandmortyapi.com/api/character/");
        const characters = response.data.results;
        this.rickAndMortyCharacters = characters;
      } catch (error) {
        console.log(error);
      }
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
.character-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid #16a085;
  border-radius: 10px;
  width: 200px;
  height: 250px;
  margin: 10px 35px;
  position: relative;
  transition: 500ms;
  cursor: pointer;
}
.character-card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  transform: scale(1.04);
}

.character-card img {
  width: 100%;
  height: calc(100% - 3rem);
  border-radius: 5px 5px 0 0;
}
.character-card footer {
  position: absolute;
  bottom: 0;
  height: 3rem;
  background-color: #16a085;
  border-radius: 0 0 5px 5px;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
