<template>
    <div class="top">
<h2 class="top__title">ТОП<span>10</span></h2>
<swiper :spaceBetween="25" slidesPerView="3"
      class="top__swiper">
      <swiper-slide :title="slide.title" class="top__swiper-item" v-for="(slide,index) in topMovies" :key="index" >
        <div class="top__swiper-content">{{ index + 1 }}</div>
        <img v-lazy="imgPath + slide.poster_path" alt="" class="top__swiper-img">
      </swiper-slide>
    </swiper>

    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { computed, ref } from 'vue'
import 'swiper/css';

import {useTop} from '@/stores/top.js'
const useStore = useTop()
useStore.getTop()
const topMovies = computed(()=> useStore.getTop10)
const imgPath = import.meta.env.VITE_IMG_PATH
</script>

<style lang="scss" scoped>

</style>