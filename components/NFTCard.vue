<script setup>
import { defineProps } from "vue";
import { getBg } from "~/hooks/backgroundImg";

const props = defineProps({
    nftInfo: Object,
});

const bgStyle = getBg(`NFT/${props.nftInfo.imageUrl}.png`);
</script>

<template>
    <div
        class="overflow-hidden rounded"
        :class="props.nftInfo.custom_class ?? ''"
    >
        <div class="h-[238px] w-full bg-cover bg-center" :style="bgStyle"></div>
        <div class="bg-gray p-5 pb-6">
            <div class="text-xl font-semibold">
                {{ props.nftInfo.title }}
            </div>
            <div class="mt-1 flex">
                <UICreator :creator="props.nftInfo.creator" />
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
