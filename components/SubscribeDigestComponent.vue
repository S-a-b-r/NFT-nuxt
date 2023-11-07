<script setup></script>

<template>
    <div class="flex flex-col gap-4 md:flex-row md:gap-0">
        <input
            class="w-full rounded-[1.25rem] px-5 py-4 text-black md:rounded-r-none"
            placeholder="Enter Your Email"
        />
        <div class="md:rounded-r-full md:bg-white">
            <UIButton class="w-full justify-center" iconName="Mail" isPurple>
                Subscribe
            </UIButton>
        </div>
    </div>
</template>
