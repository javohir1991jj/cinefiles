
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import noImg from '@/assets/images/no images.png'
import Loadimg from '@/assets/images/loading img.gif'
import Casts from '@/components/Ul/Casts.vue'
import BtnMore from '@/components/Ul/BtnMore.vue'
import App from './App.vue'
import router from './router'
import "swiper/css";
import './assets/style/main.scss'
import lazyPlugin from 'vue3-lazy'
const app = createApp(App)
const lazyLoad = {
    error: noImg,
    loading: Loadimg
}
app.component('Casts', Casts)
app.component('BtnMore', BtnMore)
app.use(createPinia())
app.use(router)
app.use(lazyPlugin,lazyLoad)
app.mount('#app')
