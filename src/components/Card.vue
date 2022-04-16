<template>
  <div class="card">
    <div class="content-container">
      <p>{{ content }}</p>
    </div>
    <footer class="title-container">
      <h2>{{ title }}</h2>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardComponent",
  props: {
    title: String,
    content: String,
  },
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid #16a085;
  border-radius: 1rem;
  position: relative;
  width: 300px;
  height: 400px;
  transition: 500ms;
}
.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
}
.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  background: #16a085;
  border-radius: 0 0 1rem 1rem;
  position: absolute;
  bottom: 0;
  color: #fff;
}
.content-container {
  padding: 0.5rem;
  width: 100%;
  height: calc(100% - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
