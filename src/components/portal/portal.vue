<template>
    <div class="portal">
        <div class="content_rollbox">
            <nav class="content">
                    <ul class="content_head">
                        <li class="select" @click="clickFn('/recommond')">个性推荐</li>
                        <li @click="clickFn('/songsheet')">歌单</li>
                        <li @click="clickFn('/broadcasting')">主播电台</li>
                        <li>排行榜</li>
                        <li>歌手</li>
                        <li>最新音乐</li>
                    </ul>
                    <!-- <Recommond></Recommond> -->

                    <router-view></router-view>
            </nav>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'


import Recommond from './recommond/recommond.vue'

export default {
    components: {
        Recommond
    },
    methods:{
        clickFn:function(route){
            this.$router.push(route);//其中login是你定义的一个路由模块
        }
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