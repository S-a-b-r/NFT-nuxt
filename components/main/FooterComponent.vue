<!-- <script setup>
import SubscribeDigestComponent from "@/components/SubscribeDigestComponent.vue";
</script> -->

<template>
    <section class="bg-gray">
        <div class="content_container py-[40px]">
            <div class="flex flex-col gap-8 lg:flex-row lg:gap-12">
                <div class="lg:mr-8 lg:w-1/4">
                    <div
                        class="footer-subtitle mb-5 flex items-center font-second"
                    >
                        <img src="@images/logo.svg" />
                        <span class="ml-2"> NFT Marketplace </span>
                    </div>
                    <div class="text-gray-100">
                        <p class="mb-5">
                            NFT marketplace UI created with Anima for Figma.
                        </p>
                        <p class="mb-4">Join our community</p>
                        <div class="flex flex-row gap-[10px]">
                            <a href="#">
                                <img src="@images/icons/DiscordLogo-gray.svg" />
                            </a>
                            <a href="#">
                                <img src="@images/icons/YouTubeLogo-gray.svg" />
                            </a>
                            <a href="#">
                                <img src="@images/icons/TwitterLogo-gray.svg" />
                            </a>
                            <a href="#">
                                <img
                                    src="@images/icons/InstagramLogo-gray.svg"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/4">
                    <p class="footer-subtitle">Explore</p>
                    <ul class="text-gray-100 flex flex-col gap-5">
                        <li>
                            <router-link
                                to="/marketplace"
                                class="hover:text-gray-light"
                            >
                                Marketplace
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                to="/ranking"
                                class="hover:text-gray-light"
                            >
                                Ranking
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                to="/wallet"
                                class="hover:text-gray-light"
                            >
                                Connect a wallet
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p class="footer-subtitle">Join Our Weekly Digest</p>
                    <div class="text-gray-100 mb-5">
                        Get exclusive promotions & updates straight to your
                        inbox.
                    </div>
                    <SubscribeDigestComponent></SubscribeDigestComponent>
                </div>
            </div>
            <div
                class="text-gray-100 mt-8 border-t-[1px] border-gray-light pt-5 text-sm md:mt-12 lg:mt-8"
            >
                Ⓒ NFT Market. Use this template freely.
            </div>
        </div>
    </section>
</template>

<style scoped>
.footer-subtitle {
    @apply mb-5 font-second text-xl font-semibold lg:mb-6;
}
</style>
