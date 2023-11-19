<script setup>
defineProps({
    creator: Object,
});
</script>

<template>
    <div class="flex gap-2">
        <NuxtImg
            width="24"
            height="24"
            :src="`avatars/${creator.avatarUrl}.png`"
        />
        <span>{{ creator.name }}</span>
    </div>
</template>
