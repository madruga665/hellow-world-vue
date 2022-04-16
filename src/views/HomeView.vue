<template>
<HeaderComponent />
  <Card />
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import HeaderComponent from "../components/HeaderComponent.vue";
import Card from "@/components/Card.vue";

  export default defineComponent({
    name: "HomeView",
    components: {
    HeaderComponent,
    Card
},
  });
</script>