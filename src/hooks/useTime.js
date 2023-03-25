import { reactive, ref, watch } from "vue";

import { computed } from "@vue/reactivity";

import clearAllIntervals from "../features/js/clearAllIntervals";

export default function () {
  const isPlaying = ref(false);

  const time = reactive({
    hours: null,
    minutes: null,
    seconds: null,
  });

  const timeString = computed(() => {
    const filteredTime = Object.values(time).filter(Boolean);
    return filteredTime.join(":");
  });

  function stop() {
    isPlaying.value = false;

    disableTimer();
    clearTimer();
  }

  function play() {
    isPlaying.value = true;

    time.seconds++;

    enableTimer();
  }

  function pause() {
    isPlaying.value = false;
    disableTimer();
  }

  function addOneSecond() {
    time.seconds++;
  }

  function enableTimer() {
    setInterval(addOneSecond, 1000);
  }

  function disableTimer() {
    clearAllIntervals();
  }
  function clearTimer() {
    Object.keys(time).forEach((key) => {
      time[key] = null;
    });
  }

  watch(time, () => {
    if (time.seconds == 60) {
      time.seconds = 0;
      time.minutes++;
    }
    if (time.minutes == 60) {
      time.minutes = 0;
      time.hours++;
    }
  });

  return { timeString, play, pause, stop, isPlaying };
}
