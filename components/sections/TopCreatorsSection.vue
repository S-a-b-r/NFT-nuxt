<script setup>
import CreatorsList from '@/components/CreatorsList.vue';
const creators = [
    {
        id: 1,
        avatarUrl: '20',
        name: 'Keepitreal',
        totalSales: '34.53 ETH',
    },
    {
        id: 2,
        avatarUrl: '1',
        name: 'DigiLab',
        totalSales: '32.13 ETH',
    },
    {
        id: 3,
        avatarUrl: '2',
        name: 'GravityOne',
        totalSales: '28.93 ETH',
    },
    {
        id: 4,
        avatarUrl: '3',
        name: 'Juanie',
        totalSales: '25.30 ETH',
    },
    {
        id: 5,
        avatarUrl: '4',
        name: 'BlueWhale',
        totalSales: '22.22 ETH',
    },
    {
        id: 6,
        avatarUrl: '5',
        name: 'Mr Fox',
        totalSales: '19.28 ETH',
    },
    {
        id: 7,
        avatarUrl: '6',
        name: 'Shroomie',
        totalSales: '18.28 ETH',
    },
    {
        id: 8,
        avatarUrl: '7',
        name: 'Robotica',
        totalSales: '18.28 ETH',
    },
    {
        id: 9,
        avatarUrl: '8',
        name: 'RustyRobot',
        totalSales: '18.28 ETH',
    },
    {
        id: 10,
        avatarUrl: '9',
        name: 'Animakid',
        totalSales: '18.28 ETH',
    },
    {
        id: 11,
        avatarUrl: '10',
        name: 'Dotgu',
        totalSales: '18.28 ETH',
    },
    {
        id: 12,
        avatarUrl: '13',
        name: 'Ghiblier',
        totalSales: '18.28 ETH',
    },
]

</script>

<template>
    <section class="content_container 
        md:grid md:grid-cols-[1fr_1fr] md:grid-rows-[93px_360px] md:gap-y-10
        lg:grid-cols-[2fr_1fr] lg:grid-rows-[91px_774px] lg:gap-y-[3.75rem]">
        <div class="md:col-end-2 mb-10 md:mb-0">
            <h2 class="second_title mb-2 lg:mb-3">Top Creators</h2>
            <div class="lg:text-xl">
                Checkout Top Rated Creators on the NFT Marketplace
            </div>
        </div>
        <CreatorsList class="md:row-start-2 md:col-span-2" :creators="creators" />
        <div class="mt-10 md:row-start-1 md:col-start-2 md:mt-2 md:relative">
            <UIButton class="w-full justify-center md:w-max md:px-[3.12rem] md:absolute bottom-0 right-0" iconName="RocketLaunch-purple" isTransparent>View Rankings</UIButton>
        </div>
    </section>
</template>