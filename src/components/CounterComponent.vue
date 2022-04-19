<template>
  <div :class="$style['counter-container']">
    <h1>Counter</h1>
    <div :class="$style['buttons-container']">
      <button @click="decrement">-</button>
      <span>{{ count }}</span>
      <button @click="increment">+</button>
    </div>
    <button :class="$style['reset-button']" @click="reset">Reset</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'CounterComponent',
    setup() {
      const count = ref(0)

      const increment = () => {
        count.value++
      }

      const decrement = () => {
        count.value--
      }

      const reset = () => {
        count.value = 0
      }

      return {
        count,
        increment,
        decrement,
        reset
      }
    }
  })
</script>

<style module>
  .counter-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    border: 2px solid #16a085;
    border-radius: 10px;
    width: 200px;
    height: 300px;
  }
  .buttons-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px;
  }
  .buttons-container button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #16a085;
    background-color: #fff;
    color: #16a085;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: 500ms;
  }
  .buttons-container button:hover {
    background-color: #16a085;
    color: #fff;
  }
  .reset-button {
    border: 1px solid #16a085;
    background: #16a085;
    color: #fff;
    border-radius: 5px;
    padding: 5px;
    width: 100px;
    cursor: pointer;
    transition: 500ms;
  }
</style>