<template>
  <div class="container">
    <Card title="Hello World 1" content="This is a simple card">
      <img src="../assets/logo.png" alt="Vue logo" width="80" height="80">
    </Card>
        <Card title="Hello World 2 " content="This is a simple card">
      <img src="../assets/logo.png" alt="Vue logo" width="80" height="80">
    </Card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Card from "./Card.vue";

export default defineComponent({
    name: "CardContainer",
    components: { Card }
});
</script>
<style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    width: 100%;
    height: 100%;
  }
</style>
