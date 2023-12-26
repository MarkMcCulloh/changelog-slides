<template>
<a :href="`https://github.com/winglang/wing/pull/${number}`" class="absolute bottom-0 right-0 p-1">{{ number }}</a>
</template>

<script setup lang="ts">
const props = defineProps(
  {
  number: {
    type: String,
    required: true
  },
});
</script>