<template>
  <div class="slider">
    <h2 class="slider__title">{{ type == 'movie' ? "Фильмы" : 'Сериалы' }}</h2>
    <swiper  :breakpoints="option" :spaceBetween="25" slidesPerView="5"
      class="slider__swiper">
      <swiper-slide @click="getFilmById(item, id)" class="slider__item" v-for="(item, index) in movieOrTv" :key="index">
        <img v-lazy="imgPath + item.poster_path" alt="" class="slider__img">
      </swiper-slide>
    </swiper>
    <InfoBlock/>
  </div>
</template>

<script setup>
import { usePopular } from '@/stores/popular.js'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useFilmById } from '@/stores/InfoBlock.js';
import { computed, ref } from 'vue'
import InfoBlock from '@/components/InfoBlock.vue'
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
const imgPath = import.meta.env.VITE_IMG_PATH
const popularStore = usePopular()
const filmByIdStore = useFilmById()
const props = defineProps({
  type: String
})
popularStore.getPopular(props)
const modules = [Navigation]
const movieOrTv = computed(() => popularStore[props.type])
const option = {
  '768': {
    slidesPerView: 3,
    spaceBetween: 25,
  },
  '1200': {
    slidesPerView: 4,
    spaceBetween: 25,
  },
  '1600': {
    slidesPerView: 5,
    spaceBetween: 25,
  }
}
</script>

<style></style>