<script setup>
import CollectionComponent from "~/components/CollectionComponent.vue";

const collections = [
    {
        id: 1,
        title: "DSGN Animals",
        imagesTitle: "animals",
        author: {
            avatarUrl: "5",
            name: "MrFox",
        },
        counter: "1025+",
        class: "grid",
    },
    {
        id: 2,
        title: "Magic Mushrooms",
        imagesTitle: "mushrooms",
        author: {
            avatarUrl: "6",
            name: "Shoroomie",
        },
        counter: "1025+",
        class: "hidden md:grid",
    },
    {
        id: 3,
        title: "Disco Machines",
        imagesTitle: "robots",
        author: {
            avatarUrl: "10",
            name: "BeKind2Robots",
        },
        counter: "1025+",
        class: "hidden lg:grid",
    },
];
</script>

<template>
    <section class="content_container">
        <div class="mb-10">
            <h2 class="second_title">Trending Collection</h2>
            <div class="mt-2">
                Checkout our weekly updated trending collection.
            </div>
        </div>
        <div class="flex justify-between">
            <CollectionComponent
                v-for="collection in collections"
                :key="collection.id"
                :collection="collection"
                :class="collection.class"
            ></CollectionComponent>
        </div>
    </section>
</template>
