<script setup>
import { defineProps } from "vue";

const props = defineProps({
    category: Object,
});
</script>

<template>
    <router-link
        to="/categories"
        class="category_item_wrapper overflow-hidden rounded bg-gray"
    >
        <div
            class="h-[142px] w-full bg-cover bg-center lg:h-[240px]"
            :style="`background-image:url('src/assets/images/categories/${props.category.bgUrl}.png')`"
        >
            <div class="bg_blur flex h-full w-full justify-center align-middle">
                <img
                    height="80"
                    width="80"
                    class="category_icon"
                    :src="`src/assets/images/categories/icons/${props.category.iconUrl}.svg`"
                />
            </div>
        </div>
        <div class="p-5 font-semibold lg:text-xl">
            {{ props.category.title }}
        </div>
    </router-link>
</template>

<style>
.category_item_wrapper:hover .category_icon {
    transition: 0.2s;
    width: 130px;
}

.bg_blur {
    backdrop-filter: blur(5px);
}
</style>
