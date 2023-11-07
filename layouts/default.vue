<script setup>
import HeaderComponent from "~/components/main/HeaderComponent.vue";
import FooterComponent from "~/components/main/FooterComponent.vue";
</script>

<template>
    <HeaderComponent />
    <slot />
    <FooterComponent />
</template>
