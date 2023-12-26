<template>
  <pre class="slidev-code shiki shiki-dark github-dark">> "{{ currentDatetime.toISOString() }}"</pre>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentDatetime = ref(new Date())

setInterval(() => {
  currentDatetime.value = new Date()
}, 99)
</script>