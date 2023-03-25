<template>
  <div>
    <BaseTimerView :is-playing="isPlaying" time="1:23:23" @stop="stop" @play="play" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseTimerView from "./BaseTimerView.vue";

const isPlaying = ref(false);

function stop() {
  isPlaying.value = false;
}

function play() {
  isPlaying.value = true;
}



</script>

<style lang="scss" scoped></style>
