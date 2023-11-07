<script setup>
import CreatorInfo from "~/components/UI/CreatorInfo.vue";
import { defineProps } from "vue";

const props = defineProps({
    collection: Object,
});

const author = props.collection.author;
</script>

<template>
    <div>
        <div
            class="grid max-w-[20.625rem] grid-cols-3 grid-rows-[20fr_6fr] gap-4"
        >
            <div class="col-start-1 col-end-4 row-start-1">
                <NuxtImg
                    class="w-full"
                    :src="`trending_collections/${collection.imagesTitle}1.png`"
                    :alt="collection.imagesTitle + ' collection first image'"
                />
            </div>
            <div v-for="i in [2, 3]" :key="i" class="col-span-1 row-start-2">
                <NuxtImg
                    :src="`trending_collections/${collection.imagesTitle}${i}.png`"
                    :alt="`${collection.imagesTitle}${i} collection image`"
                />
            </div>
            <div
                class="col-span-1 row-start-2 flex items-center justify-center rounded-[1.25rem] bg-purple"
            >
                <span class="font-second text-xl font-bold">{{
                    collection.counter
                }}</span>
            </div>
        </div>
        <div class="mt-4 flex flex-col gap-2">
            <h3 class="text-xl font-semibold">{{ collection.title }}</h3>
            <creator-info :creator="author" />
        </div>
    </div>
</template>
