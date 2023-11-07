<script setup>
import MainSection from "~/components/sections/MainSection.vue";
import TrendingCollectionSection from "~/components/sections/TrendingCollectionSection.vue";
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
