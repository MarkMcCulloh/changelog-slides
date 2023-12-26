<template>
  <!-- Render small github profile pic and name  -->

  <div class="flex flex-row items-center gap-2 absolute left-0 bottom-0 ml-2 mb-2">
    <img :src="image ? image : githubProfilePic" class="rounded-full w-12 h-12" />
    <p class="text-2xl font-bold">{{ displayName }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps(
  {
  githubUsername: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
});

const githubProfilePic = ref('')

onMounted(async () => {
  const url = `https://api.github.com/users/${props.githubUsername}`
  const response = await fetch(url, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_GH_TOKEN}`
    }
  })
  const data = await response.json()
  githubProfilePic.value = data.avatar_url
});


</script>