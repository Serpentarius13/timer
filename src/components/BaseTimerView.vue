<template>
  <BaseTimerBox>
    <div class="timer__top" :style="{ borderColor: fillComputed }">
      <p class="timer__top-time" :style="{ color: fillComputed }">{{ time || 0 }}</p>
    </div>
    <div class="timer__bottom">
      <button class="timer__bottom-play" @click="play">
        <svg
          width="10"
          height="20"
          viewBox="0 0 10 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          v-if="isPlaying"
        >
          <rect x="7" width="3" height="20" fill="white" />
          <rect width="3" height="20" fill="white" />
        </svg>

        <svg
          width="17"
          height="20"
          viewBox="0 0 17 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          v-else
        >
          <path d="M0 20V0L17 10L0 20Z" :fill="fillComputed" />
        </svg>
      </button>
      <button class="timer__bottom-stop" @click="stop">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="20" :fill="fillComputed" />
        </svg>
      </button>
    </div>
  </BaseTimerBox>
</template>

<script setup>
import { computed } from "vue";
import BaseTimerBox from "./BaseTimerBox.vue";

const props = defineProps(["time", "isPlaying"]);

const emit = defineEmits(["play", "stop", "pause"]);

function play() {
  if (props.isPlaying) emit("pause");
  else emit("play");
}

function stop() {
  emit("stop");
}

const fillComputed = computed(() => {
  if (props.isPlaying) return "#fff";
  else return "#9e9e9e";
});
</script>

<style lang="scss" scoped>
$light-grey: #9e9e9e;
$transition: 0.2s ease all;

* {
  transition: $transition;
}
.timer {
  &__wrapper {
    grid-template-rows: 1fr 1fr;
  }
  &__top {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid $light-grey;
    display: flex;
    align-items: center;
    justify-content: center;

    &-time {
      font-size: 2.2rem;
      font-weight: 400;

      color: $light-grey;
      line-height: 2.1rem;
    }
  }

  &__bottom {
    display: flex;
    gap: 4.8rem;

    button {
      width: 2rem;
      aspect-ratio: 1/1;
    }
  }
}
</style>
