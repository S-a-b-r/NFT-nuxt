<script setup>
import { defineProps } from "vue";
import TimerCard from "../TimerCard.vue";

const props = defineProps({
    activeAuction: Object,
});
</script>

<template>
    <section
        class="flex h-screen flex-col justify-center md:justify-end"
        :style="`background:linear-gradient(180deg, rgba(162, 89, 255, 0.00) 0%, #A259FF 100%),
            center / cover no-repeat url(${props.activeAuction.bgUrl});`"
    >
        <div
            class="content_container grid gap-y-7 md:grid-cols-[1fr_18.5rem] md:grid-rows-[2.75rem_1fr_3.75rem] md:pb-[3.75rem]"
        >
            <div
                class="flex w-max gap-3 rounded bg-gray px-5 py-2 md:col-end-2"
            >
                <img
                    width="24"
                    height="24"
                    :src="`src/assets/images/avatars/${props.activeAuction.creator.avatarUrl}.png`"
                />
                {{ props.activeAuction.creator.name }}
            </div>
            <div
                class="text-3xl font-semibold text-white md:col-end-2 lg:text-4xl"
            >
                {{ props.activeAuction.title }}
            </div>
            <timer-card
                class="md:col-start-2 md:row-start-2 md:row-end-4"
                :endAuctionTime="props.activeAuction.endAuctionTime"
            ></timer-card>
            <div>
                <UIButton
                    class="w-full justify-center md:w-max md:px-12"
                    iconName="Eye-purple"
                    isWhite
                    >See NFT</UIButton
                >
            </div>
        </div>
    </section>
</template>

<style>
.bg-blur {
    background: rgba(59, 59, 59, 0.5);
    backdrop-filter: blur(5px);
}
</style>
