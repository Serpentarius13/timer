<template>
  <div class="time__wrapper">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
$grey: #696969;
.time {
  &__wrapper {
    width: 22.5rem;
    height: 12rem;

    display: grid;

    grid-template-columns: 1fr;

    place-items: center;

    background-color: $grey;

    @media (max-width: 400px) {
        width: 15rem;
    }
  }
}
</style>
