<template>
    <header
        class="container flex items-center justify-between px-[1.88rem] py-4 md:px-[3.12rem]"
    >
        <div class="flex items-center font-second">
            <img src="@images/logo.svg" />
            <span class="ml-2 text-xl">NFT Marketplace </span>
        </div>
        <nav>
            <img class="lg:hidden" src="@images/icons/List.svg" />
            <ul class="hidden h-full items-center lg:flex">
                <li class="mr-2 px-5">
                    <router-link to="/">Marketplace</router-link>
                </li>
                <li class="mr-2 px-5">
                    <router-link to="/">Rankings</router-link>
                </li>
                <li class="mr-2 px-5">
                    <router-link to="/">Connect a wallet</router-link>
                </li>
                <li class="mr-2 px-5">
                    <UIButton iconName="User" isPurple> Sign Up </UIButton>
                </li>
            </ul>
        </nav>
    </header>
</template>