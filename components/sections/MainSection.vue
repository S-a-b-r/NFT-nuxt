<script setup>
import CreatorInfo from "~/components/UI/CreatorInfo.vue";
import StatsComponent from "~/components/StatsComponent.vue";

const statsItems = [
    { id: 1, count: "240k+", title: "Total Sale" },
    { id: 2, count: "100k+", title: "Auctions" },
    { id: 3, count: "240k+", title: "Artists" },
];
const creatorMainBanner = {
    name: "Animakid",
    avatarUrl: "20",
};
</script>

<template>
    <section
        class="content_container md:grid md:grid-cols-2 md:grid-rows-[138px_66px_60px_57px] md:gap-x-[30px] md:gap-y-[20px] lg:grid-rows-[347px_60px_77px] lg:gap-y-[30px]"
    >
        <div class="mb-5 md:row-start-1 md:row-end-3 lg:row-end-2">
            <h1 class="title mb-3 md:mb-5">
                Discover Digital Art & Collect NFTs
            </h1>
            <div class="lg:text-xl lg:leading-[2.2rem]">
                NFT Marketplace UI Created With Anima For Figma. Collect, Buy
                And Sell Art From More Than 20k NFT Artists.
            </div>
        </div>
        <div class="md:col-start-2 md:row-start-1 md:row-end-4">
            <div class="mb-10 rounded-[20px] bg-gray">
                <NuxtImg class="w-full" src="image_first.png" placeholder />
                <div class="p-5">
                    <h2 class="mb-3 text-xl">Space Walking</h2>
                    <CreatorInfo :creator="creatorMainBanner" />
                    <div class="flex">
                        <NuxtImg width="24" height="24" src="avatars/20.png" />
                        <span class="ml-3">Animakid</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="md:row-span-1">
            <UIButton
                class="mb-10 w-full justify-center md:mb-5 md:w-max md:px-12"
                :is-purple="true"
                :icon-name="'RocketLaunch'"
            >
                Get Started
            </UIButton>
        </div>
        <div class="md:row-span-1">
            <div class="flex justify-between lg:w-11/12">
                <StatsComponent
                    v-for="statsItem in statsItems"
                    :key="statsItem.id"
                    :count="statsItem.count"
                    >Total Sale</StatsComponent
                >
            </div>
        </div>
    </section>
</template>
