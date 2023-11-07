<script setup>
import NFTCardsList from '@/components/NFTCardsList.vue';
const nftCards = [
    {
        id:1,
        title: 'Distant Galaxy',
        creator: {
            avatarUrl: '1',
            name: 'MoonDancer'
        },
        imageUrl: '1',
        price: '1.63 ETH',
        hightBid: '0.33 wETH',
        tabletShow: true,
    },
    {
        id:2,
        title: 'Life on Edena',
        creator: {
            avatarUrl: '2',
            name: 'NebulaKid'
        },
        imageUrl: '2',
        price: '1.63 ETH',
        hightBid: '0.33 wETH',
        tabletShow: true,
    },
    {
        id:3,
        title: 'AstroFiction',
        creator: {
            avatarUrl: '3',
            name: 'Spaceone'
        },
        imageUrl: '3',
        price: '1.63 ETH',
        hightBid: '0.33 wETH',
        custom_class: "md:hidden lg:block",
    },

];
</script>

<template>
    <section class="content_container grid gap-10 md:grid-cols-2">
        <div class="md:row-end-2">
            <h2 class="second_title">Discover More NFTs</h2>
            <div>Explore new trending NFTs</div>
        </div>
        <NFTCardsList class="md:col-span-2" :nftCards="nftCards" />
        <div class="md:col-start-2 md:row-start-1 relative">
            <UIButton class="justify-center w-full md:px-12 md:w-max md:absolute right-0 bottom-0" iconName="Eye-purple" isTransparent>See all</UIButton>
        </div>
    </section>
</template>