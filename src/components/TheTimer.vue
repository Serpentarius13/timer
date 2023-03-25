<template>
  <div>
    <BaseTimerView
      :is-playing="isPlaying"
      :time="timeString"
      @stop="stop"
      @play="play"
      @pause="pause"

    />

   
  </div>
</template>

<script setup>
import BaseTimerView from "./BaseTimerView.vue";
import useTime from "../hooks/useTime";

const { play, stop, pause, timeString, isPlaying } = useTime();


</script>

<style lang="scss" scoped></style>
