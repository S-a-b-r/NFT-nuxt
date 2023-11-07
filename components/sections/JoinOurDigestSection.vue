<template>
    <section
        class="content_container flex flex-col gap-[30px] md:mb-[5rem] md:flex-row md:rounded md:bg-gray lg:gap-[80px]"
    >
        <div
            id="space-bg"
            class="h-[255px] w-[315px] self-center rounded-[20px] md:h-[280px] md:w-[300px] lg:h-[310px] lg:w-1/2"
        ></div>
        <div class="md:self-center lg:w-1/2">
            <div class="mb-[40px]">
                <h2 class="second_title mb-3">Join Our Weekly Degist</h2>
                <p class="lg:text-xl">
                    Get exclusive promotions & updates straight to your inbox
                </p>
            </div>
            <SubscribeDigestComponent></SubscribeDigestComponent>
        </div>
    </section>
</template>

<script setup>
import SubscribeDigestComponent from "../SubscribeDigestComponent.vue";
</script>

<style scoped>
#space-bg {
    background-image: url("/src/assets/images/space.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
