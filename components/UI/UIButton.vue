<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
    iconName: String,

    //Colors Button
    isPurple: Boolean,
    isWhite: Boolean,
    isTransparent: Boolean,
});

const btnClass = computed(() => [
    { "bg-purple": props.isPurple },
    { "bg-none border border-solid border-purple": props.isTransparent },
    { "bg-white text-black": props.isWhite },
]);
</script>

<template>
    <button
        class="flex items-center rounded-[20px] px-8 py-4 font-semibold"
        :class="btnClass"
    >
        <img
            v-if="props.iconName"
            class="mr-3"
            :src="`/src/assets/images/icons/${iconName}.svg`"
            width="20"
            height="20"
        />
        <slot></slot>
    </button>
</template>
