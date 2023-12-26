<template>
  <!-- Render list of small github profile pic and name  -->

  <div class="flex flex-row items-center gap-2 absolute left-0 bottom-0 ml-2 mb-2">
    <div v-for="githubProfilePic in githubProfilePics" :key="githubProfilePic.name">
      <img :src="githubProfilePic.image" class="rounded-full w-12 h-12" />
      <p class="text-2xl font-bold">{{ githubProfilePic.name }}</p>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps(
  {
  userData: {
    type: Array,
    required: true
  },
  // displayName: {
  //   type: String,
  //   required: true
  // },
  // image: {
  //   type: String,
  //   required: false
  // },
});

const githubProfilePics = ref<any[]>([])

onMounted(async () => {
  for (const userData of props.userData as any[]) {
    if (userData.image) {
      githubProfilePics.value.push({
        name: userData.displayName,
        image: userData.image
      });
      continue;
    }

    const url = `https://api.github.com/users/${userData.id}`
    const response = await fetch(url, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GH_TOKEN}`
      }
    })
    const data = await response.json()      
    githubProfilePics.value.push({
        name: userData.displayName,
        image: data.avatar_url
      });
  }
});


</script>