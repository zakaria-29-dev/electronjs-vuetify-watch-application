import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { Carousel3d, Slide } from 'vue-carousel-3d';
Vue.component('carousel-3d', Carousel3d)
Vue.component('slide', Slide)
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa'
    }
});