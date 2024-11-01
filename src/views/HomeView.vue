
<template>
  <div class="flex justify-center items-center bg-gray-300 h-screen" @click="start();">
    <button class="text-xl hover:cursor-pointer">Click to start doing nothing...</button>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const start = () => {
    router.push({ 
      name: 'doing' 
    });
  }

</script>
