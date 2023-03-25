<template>
  <main class="timers">
    <TheTimer v-for="(_, ix) in timers" :key="ix" />

    <BaseAddTimerButton @addTimer="addTimer" />
  </main>
</template>

<script setup>
import { ref } from "vue";

import BaseAddTimerButton from "./components/BaseAddTimerButton.vue";
import TheTimer from "./components/TheTimer.vue";

const timers = ref([0]);

function addTimer() {
  timers.value.push(0);
}
</script>

<style lang="scss" scoped>
.timers {
  width: 100%;

  max-width: 77.5rem;
  margin: 7.2rem auto;

  display: grid;

  row-gap: 4.5rem;

  column-gap: 5rem;

  grid-template-columns: repeat(3, 1fr);


  justify-items: center;
  align-items: flex-start;


  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    justify-items: flex-end;
    *:nth-child(even) {
      justify-self: flex-start;
    }
  }

}
</style>
