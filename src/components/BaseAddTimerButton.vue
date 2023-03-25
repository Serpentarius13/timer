<template>
  <button @click="$emit('addTimer')">
    <BaseTimerBox>
      <img src="/icons/plus.svg" alt="Иконка плюс" />
    </BaseTimerBox>
  </button>
</template>

<script setup>
import BaseTimerBox from "./BaseTimerBox.vue";
</script>

<style lang="scss" scoped>
button {
    max-height: 12rem;
}
</style>
