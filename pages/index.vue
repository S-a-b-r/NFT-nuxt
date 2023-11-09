<script setup>
import MainSection from "~/components/sections/MainSection.vue";
import TrendingCollectionSection from "~/components/sections/TrendingCollectionSection.vue";
import TopCreatorsSection from "~/components/sections/TopCreatorsSection.vue";
import CategoriesSection from "~/components/sections/CategoriesSection.vue";
</script>

<template>
    <MainSection />
    <TrendingCollectionSection />
    <TopCreatorsSection />
    <CategoriesSection />
    <DiscoverMoreSection />
    <ActiveAuction :activeAuction="activeAuctionInfo" />
    <HowItWorksSection />
    <JoinOurDigestSection />
</template>
