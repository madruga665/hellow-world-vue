<template>
  <div :class="$style['character-card']" >
    <img :class="$style['character-image']" :src="image" />
    <footer>
      <h4>
        {{ name }}
      </h4>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CharacterCard",
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
});
</script>

<style module>
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

.character-image {
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