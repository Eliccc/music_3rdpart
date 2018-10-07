<template>
    <div class="recommend">
        <section class="recommend_swiper">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide><img src="../../../assets/pic/sider1.jpg"/></swiper-slide>
                <swiper-slide><img src="../../../assets/pic/sider2.jpg"/></swiper-slide>
                <swiper-slide><img src="../../../assets/pic/sider3.jpg"/></swiper-slide>
                <swiper-slide><img src="../../../assets/pic/sider4.jpg"/></swiper-slide>
                <swiper-slide><img src="../../../assets/pic/sider5.jpg"/></swiper-slide>
                <swiper-slide><img src="../../../assets/pic/sider6.jpg"/></swiper-slide> 
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
                <div class="more">更多></div>
            </div>

            <div class="music_list">
                <div class="music_list_row">
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>123321</p>
                    </div>
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>1233211233333333333333333333333333333333333333</p>
                    </div>
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>123321</p>
                    </div>
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>123321</p>
                    </div>
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>123321</p>
                    </div>
                </div>
                <div class="music_list_row">
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>123321</p>
                    </div>
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>123321</p>
                    </div>
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>123321</p>
                    </div>
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>123321</p>
                    </div>
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>123321</p>
                    </div>
                </div>

            </div>

            <div class="recommend_list">
                <div>推荐歌单</div>
                <div class="more">更多></div>
            </div>

            <div class="music_list">
                <div class="music_list_row">
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>123321</p>
                    </div>
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>1233211233333333333333333333333333333333333333</p>
                    </div>
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>123321</p>
                    </div>
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>123321</p>
                    </div>
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>123321</p>
                    </div>
                </div>
                <div class="music_list_row">
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>123321</p>
                    </div>
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>123321</p>
                    </div>
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>123321</p>
                    </div>
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>123321</p>
                    </div>
                    <div class="item">
                        <div>
                            <img src="../../../assets/pic/musiclist1.jpg"/>
                        </div>
                        <p>123321</p>
                    </div>
                </div>

            </div>

        </div>



        <div>
            

        </div>
    </div>
</template>

<script>
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
                centeredSlides: true,
                autoplay:true
            }
        }
    },
    
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //  console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
}
</script>

<style lang="sass" rel="stylesheet/sass">
@import 'recommond.scss';
</style>