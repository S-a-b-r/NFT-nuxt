<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    user: Object,
});
</script>

<template>
    <div
        class="w-full flex-nowrap gap-5 rounded bg-gray p-5 lg:flex-wrap lg:justify-center lg:text-center"
        :class="user.class"
    >
        <div class="relative">
            <div
                class="absolute left-[-10px] top-[-10px] z-10 w-[1.875rem] rounded-full bg-black py-1 text-center font-second lg:left-[-45px] lg:top-[-5px]"
            >
                {{ props.user.id }}
            </div>
            <img
                class="h-[3.75rem] w-[3.75rem] self-center lg:h-[7.5rem] lg:w-[7.5rem]"
                :src="`/src/assets/images/avatars/${props.user.avatarUrl}.png`"
            />
        </div>
        <div class="flex flex-col justify-between">
            <h5 class="text-xl font-semibold">
                {{ props.user.name }}
            </h5>
            <div>
                <span class="text-gray-light">Total Sales:</span>
                <span class="ml-2 font-second">{{
                    props.user.totalSales
                }}</span>
            </div>
        </div>
    </div>
</template>
