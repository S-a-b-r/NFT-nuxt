<script setup>
import { defineProps } from 'vue';

defineProps({
    count: String,
});
</script>

<template>
    <div class="flex flex-col">
        <span class="font-second text-xl font-semibold lg:text-2xl">
            {{ count }}
        </span>
        <slot class="lg:text-[1.5rem]"></slot>
    </div>
</template>
