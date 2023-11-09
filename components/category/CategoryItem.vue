<script setup>
import { defineProps } from "vue";

const props = defineProps({
    category: Object,
});

const img = useImage();
const backgroundStyle = (bgUrl) => {
    const imgUrl = img(`../images/categories/${bgUrl}.png`);
    return { backgroundImage: `url('${imgUrl}')` };
};
</script>

<template>
    <router-link
        to="/categories"
        class="category_item_wrapper overflow-hidden rounded bg-gray"
    >
        <div
            class="bg-img h-[142px] w-full bg-cover bg-center lg:h-[240px]"
            :style="backgroundStyle(props.category.bgUrl)"
        >
            <div class="bg_blur flex h-full w-full justify-center align-middle">
                <NuxtImg
                    height="80"
                    width="80"
                    class="category_icon"
                    :src="`/categories/icons/${props.category.iconUrl}.svg`"
                />
            </div>
        </div>
        <div class="p-5 font-semibold lg:text-xl">
            {{ props.category.title }}
        </div>
    </router-link>
</template>

<style scoped>
.category_item_wrapper:hover .category_icon {
    transition: 0.2s;
    width: 130px;
}

.bg_blur {
    backdrop-filter: blur(5px);
}
</style>
