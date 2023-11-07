<script setup>
import CategoriesList from '@/components/CategoriesList.vue';

const categories = [
    {
        id: 1,
        iconUrl: 'PaintBrush',
        bgUrl: '7',
        title: 'Art'
    },
    {
        id: 2,
        iconUrl: 'Swatches',
        bgUrl: '4',
        title: 'Collectibles'
    },
    {
        id: 3,
        iconUrl: 'MusicNotes',
        bgUrl: '0',
        title: 'Music'
    },
    {
        id: 4,
        iconUrl: 'Camera',
        bgUrl: '1',
        title: 'Photography'
    },
    {
        id: 5,
        iconUrl: 'VideoCamera',
        bgUrl: '2',
        title: 'Video'
    },
    {
        id: 6,
        iconUrl: 'MagicWand',
        bgUrl: '3',
        title: 'Utility'
    },
    {
        id: 7,
        iconUrl: 'Basketball',
        bgUrl: '5',
        title: 'Sport'
    },
    {
        id: 8,
        iconUrl: 'Planet',
        bgUrl: '6',
        title: 'Virtual Worlds'
    },
]
</script>

<template>
    <section class="content_container">
        <h2 class="second_title mb-10 lg:mb-[3.75rem]">Browse Categories</h2>
        <CategoriesList :categories="categories"/>
    </section>
</template>