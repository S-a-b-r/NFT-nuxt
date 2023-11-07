<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
    endAuctionTime: Object,
});

let endAuctionHours = ref(props.endAuctionTime.endAuctionHours);
let endAuctionMinutes = ref(props.endAuctionTime.endAuctionMinutes);
let endAuctionSeconds = ref(props.endAuctionTime.endAuctionSeconds);

setInterval(() => {
    endAuctionSeconds.value--;

    if (endAuctionSeconds.value == 0) {
        endAuctionMinutes.value--;
        endAuctionSeconds.value = 60;
    }

    if (endAuctionMinutes.value == 0) {
        endAuctionHours.value--;
        endAuctionMinutes.value = 60;
        endAuctionSeconds.value = 60;
    }
}, 1 * 1000);
</script>

<template>
    <div class="bg-blur rounded p-7 font-second text-sm">
        <div class="mb-2">Auction ends in:</div>
        <div class="flex justify-between">
            <div class="flex flex-col">
                <div class="text-3xl font-semibold">{{ endAuctionHours }}</div>
                <div>Hours</div>
            </div>
            <div class="text-3xl">:</div>
            <div class="flex flex-col">
                <div class="text-3xl font-semibold">
                    {{ endAuctionMinutes }}
                </div>
                <div>Minutes</div>
            </div>
            <div class="text-3xl">:</div>
            <div class="flex flex-col">
                <div class="text-3xl font-semibold">
                    {{ endAuctionSeconds }}
                </div>
                <div>Seconds</div>
            </div>
        </div>
    </div>
</template>
