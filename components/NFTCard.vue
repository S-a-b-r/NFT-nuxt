<script setup>
import { defineProps } from "vue"

const props = defineProps({
    nftInfo: Object,
})
</script>

<template>
    <div
        class="overflow-hidden rounded"
        :class="props.nftInfo.custom_class ?? ''"
    >
        <div
            class="h-[238px] w-full bg-cover bg-center"
            :style="`background-image:url('src/assets/images/NFT/${props.nftInfo.imageUrl}.png')`"
        ></div>
        <div class="bg-gray p-5 pb-6">
            <div class="text-xl font-semibold">
                {{ props.nftInfo.title }}
            </div>
            <div class="mt-1 flex">
                <img
                    width="24"
                    height="24"
                    :src="`src/assets/images/avatars/${props.nftInfo.creator.avatarUrl}.png`"
                />
                <div class="ml-3">{{ props.nftInfo.creator.name }}</div>
            </div>
            <div class="mt-6 flex justify-between">
                <div class="flex flex-col gap-2 text-sm">
                    <div class="text-gray-light">Price</div>
                    <div class="font-second">
                        {{ props.nftInfo.price }}
                    </div>
                </div>
                <div class="flex flex-col gap-2 text-right text-sm">
                    <div class="text-gray-light">Highest Bid</div>
                    <div class="font-second">
                        {{ props.nftInfo.hightBid }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
