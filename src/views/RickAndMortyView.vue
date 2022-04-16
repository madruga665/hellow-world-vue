<template>
  <ViewTemplate>
    <section>
      pagina do Rick and Morty
    </section>
  </ViewTemplate>
  <router-view></router-view>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import ViewTemplate from "../templates/ViewTemplate.vue";

  export default defineComponent({
    name: "RickAndMortyView",
    components: {
      ViewTemplate,
    },
  });
</script>
