<template>
    <div class="flex flex-col justify-center items-center bg-gray-300 h-screen text-xl text-gray-700" @click="goHome">
        <p>You did <span class="text-black">Something</span>, you lost</p>
      <button class="hover:cursor-pointer">
        You did <span class="text-white ">Nothing</span> for {{ time }}  
        <span v-if="time > 1"> seconds</span>
        <span v-if="time < 2"> second</span>.
    </button>
    </div>
</template>

<script setup>
import router from '@/router';
import { useStopwatch } from '@/stores/stopwatch';
import { storeToRefs } from 'pinia';

const stopwatch = useStopwatch();
const { reset } = stopwatch;
const goHome = () => {
    reset();
    router.push({ 
      name: 'home' 
    });
}
const { time } = storeToRefs(stopwatch);
</script>