import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStopwatch = defineStore('stopwatch', () => {
    const time = ref(0);
    const interval = ref(null);

    const start = () => {
        if(!interval.value) {
            interval.value = setInterval(() => {
                time.value++;
            },1000);
        }
    }

    const stop = () => {
        clearInterval(interval.value);
        interval.value = null;
    }

    const reset = () => {
        stop();
        time.value = 0;
    }

    const formattedTime = computed(()=>{
        const minutes = String(Math.floor(time.value / 60)).padStart(2,'0');
        const seconds = String(time.value % 60).padStart(2,'0');
        return `${minutes}:${seconds}`;
    })
    return { time, start, stop, reset, formattedTime};
});