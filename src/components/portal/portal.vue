<template>
    <div class="portal">
        <nav class="content">
                <ul>
                    <li class="select">个性推荐</li>
                    <li>歌单</li>
                    <li>主播电台</li>
                    <li>排行榜</li>
                    <li>歌手</li>
                    <li>最新音乐</li>
                </ul>

                <div class="recommend">
                    <section class="recommend_swiper">
                        <swiper :options="swiperOption" ref="mySwiper">
                            <!-- slides -->
                            <swiper-slide><img src="../../assets/pic/sider1.jpg"/></swiper-slide>
                            <swiper-slide><img src="../../assets/pic/sider2.jpg"/></swiper-slide>
                            <swiper-slide><img src="../../assets/pic/sider3.jpg"/></swiper-slide>
                            <swiper-slide><img src="../../assets/pic/sider4.jpg"/></swiper-slide>
                            <swiper-slide><img src="../../assets/pic/sider5.jpg"/></swiper-slide>
                            <swiper-slide><img src="../../assets/pic/sider6.jpg"/></swiper-slide> 
                            <!-- Optional controls -->
                            <div class="swiper-pagination"  slot="pagination"></div>
                            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                            <div class="swiper-scrollbar"   slot="scrollbar"></div> -->

                        </swiper>
                    </section>


                    <div>
                        <div class="recommend_list">
                            <div>推荐歌单</div>
                            <div>更多</div>
                        </div>

                        <div class="music_list">
                            <div class="music_list_row">
                                <div class="list">
                                    <img src="../../assets/pic/musiclist1.jpg"/>
                                    <p>123321</p>
                                </div>
                                <div class="list">
                                    <img src="../../assets/pic/musiclist1.jpg"/>
                                    <p>123321</p>
                                </div>
                                <div class="list">
                                    <img src="../../assets/pic/musiclist1.jpg"/>
                                    <p>123321</p>
                                </div>
                                <div class="list">
                                    <img src="../../assets/pic/musiclist1.jpg"/>
                                    <p>123321</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    
                </div>
        </nav>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            swiperOption: {
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                // ...
                pagination :{
                    el: '.swiper-pagination',
                    clickable :true
                },
               // clickable :true,
                slideToClickedSlide: true,
                loop : true,
                slidesPerView: 3,
                centeredSlides: true
            }
        }
    },
    methods: mapMutations([
      'changeName', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    ]),
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
}



</script>
<style lang="sass" rel="stylesheet/sass">
@import 'portal.scss';
</style>













<!-- <template>
    <div xx="" id="234423" @click="changeName()">{{name}}</div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
export default {
    computed: mapGetters({
        name: 'name'
    }),
    methods: mapMutations([
      'changeName', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    ]),
}

console.log(mapGetters({
        name: 'name'
    }));

</script> -->