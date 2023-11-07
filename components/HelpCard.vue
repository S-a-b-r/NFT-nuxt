<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    helpCardInfo: Object,
});
</script>

<template>
    <div class="flex w-full justify-between rounded bg-gray p-5 md:flex-col">
        <div class="w-5/12 self-center md:mb-5 md:w-full">
            <img
                class="h-[100px] w-[100px] md:m-auto md:h-[160px] md:w-[160px] lg:h-[250px] lg:w-[250px]"
                :src="props.helpCardInfo.imgUrl"
            />
        </div>
        <div class="w-7/12 md:w-full md:text-center">
            <h3 class="mb-2 font-semibold lg:text-xl">
                {{ props.helpCardInfo.title }}
            </h3>
            <div class="text-sm leading-5 lg:text-base">
                {{ props.helpCardInfo.description }}
            </div>
        </div>
    </div>
</template>
