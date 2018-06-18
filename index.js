import Vue from 'vue'

//播放进度控件
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

//轮播图控件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

//自定义控件
import App from './src/components/App.vue'
import store from './src/store/store.js'

//各个组件的配置
Vue.config.productionTip = false
Vue.use(MuseUI);
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})