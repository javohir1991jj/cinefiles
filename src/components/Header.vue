<template>
    <header class="header">
        <nav class="nav">
            <div class="container">
                <div class="nav__content">
                    <a href="" class="logo">
                        <img src="@/assets/images/logo.svg" alt="">
                    </a>
                    <ul class="nav__list" :class="{active: }">
                        <li v-for="(link, index) in links" :key="index">
                            <router-link :to="link.url" class="nav__link">{{ link.name }}</router-link>

                        </li>
                        <li>
                            <router-link to="/search">
                                <img src="@/assets/images/search.svg" alt="">
                            </router-link>
                        </li>
                    </ul>
                    <button class="menu"><img src="assets/images/menu.svg" alt="">
                    </button>
                </div>
            </div>
        </nav>
        <Upcoming/>
    </header>
</template>

<script setup>
import Upcoming from '@/components/Upcoming.vue'
const menuIsActive
const links = [
    {
        name: 'Главная',
        url: '/'
    },
    {
        name: 'Фильмы',
        url: '/movie'
    },
    {
        name: 'Сериалы',
        url: '/tv'
    },
]

</script>

<style lang="scss" scoped></style>