<script setup>
import { defineProps } from "vue";
import CreatorItem from "@/components/CreatorItem.vue";

const props = defineProps({
    creators: Array,
});

props.creators.forEach(
    (creator) => (creator.class = getVisibleClass(creator.id))
);

function getVisibleClass(id) {
    if (id < 6) return "flex";
    if (id == 6) return "hidden md:flex";
    if (id > 6) return "hidden lg:flex";
}
</script>

<template>
    <div
        class="grid grid-cols-1 grid-rows-5 gap-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-3"
    >
        <CreatorItem
            v-for="user in props.creators"
            :key="user.id"
            :user="user"
        />
    </div>
</template>
