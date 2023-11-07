<script setup>
import { defineProps } from "vue";
import NFTCard from "@/components/NFTCard.vue";

const props = defineProps({
    nftCards: Array,
});
</script>

<template>
    <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <NFTCard
            v-for="nftInfo in props.nftCards"
            :key="nftInfo.id"
            :nftInfo="nftInfo"
        />
    </div>
</template>
