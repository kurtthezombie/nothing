<template>
    <div class="flex justify-center items-center h-screen bg-gray-300" @click="hunong" @mousemove="hunong">
        <button class="text-xl hover:cursor-pointer" >You have been doing <span class="text-white">Nothing</span> for {{ time }} 
            <span v-if="time > 1">seconds</span>
            <span v-if="time < 2">second</span>.</button>
    </div>
</template>

<script setup>
import router from '@/router/index.js';
import { useStopwatch } from '../stores/stopwatch.js';
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue';
const stopwatch = useStopwatch();
const { time } = storeToRefs(stopwatch);
const { start, stop } = stopwatch;

const hunong = () => {
    stop();
    router.push({ 
      name: 'stop' 
    });
}

onMounted(() => {
    start();
})
</script>