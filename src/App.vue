<template>
  <Header />
  <CardContainer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import CardContainer from "./components/CardContainer.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    CardContainer,
  },
});
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
