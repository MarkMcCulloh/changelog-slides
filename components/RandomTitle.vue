<template>
  <h1 style="transition: all 500ms ease;">{{ currentTitle }}</h1>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const titles = [
  "changelog", "winglog", "winglylog", "changelog", "wingydingydog", "winglylanglog", 
  "winglanglog", "wanglog", "inflights", "log(wing)", "changes inflight"
];
const currentTitleIndex = ref(0)
const currentTitle = computed(() => titles[currentTitleIndex.value])

const randomLightColor = ref(`hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)`)

setInterval(async () => {
  // sleep for a random amount of time
  await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 500) + 500))

  // random index
  currentTitleIndex.value = ~~(titles.length * Math.random())
}, 1000)

setInterval(async () => {
  // sleep for a random amount of time
  await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 300) + 100))

  randomLightColor.value = `hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)`
}, 1000)
</script>

<style scoped>
h1 {
  color: v-bind(randomLightColor);
}
</style>
