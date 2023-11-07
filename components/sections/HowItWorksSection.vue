<script setup>
import HelpCard from "@/components/HelpCard.vue";

const imagesPath = 'src/assets/images/info_card_icons/';

const helpCards = [
    {
        imgUrl: imagesPath + 'HelpIcon2.png',
        title: 'Setup Your wallet',
        description: 'Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.'
    },
    {
        imgUrl: imagesPath + 'HelpIcon1.png',
        title: 'Create Collection',
        description: 'Upload your work and setup your collection. Add a description, social links and floor price.'
    },
    {
        imgUrl: imagesPath + 'HelpIcon3.png',
        title: 'Start Earning',
        description: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.'
    },
]
</script>

<template>
    <section class="content_container">
        <h2 class="second_title mb-2">How It Works</h2>
        <div class="mb-10 lg:mb-12">Find out how to get started</div>
        <div class="flex gap-5 flex-col md:flex-row">
            <HelpCard v-for="helpCard in helpCards" :helpCardInfo="helpCard" :key="helpCard.title" />
        </div>
    </section>
</template>