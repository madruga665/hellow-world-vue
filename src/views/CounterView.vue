<template>
  <ViewTemplate>
    <div :class="$style['counter-container']">
      <h1>Super Contador</h1>
      <CounterComponent />
    </div>
  </ViewTemplate>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ViewTemplate from "../templates/ViewTemplate.vue";
import CounterComponent from "@/components/CounterComponent.vue";

export default defineComponent({
  name: "CounterView",
  components: {
    ViewTemplate,
    CounterComponent,
  },
});
</script>

<style module>
.counter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
</style>
