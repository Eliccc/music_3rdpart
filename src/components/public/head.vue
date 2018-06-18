<template>
    <header class="music-head" >
        <div class="logo">
            <img class="img" src="../../assets/imgs/logo.png">
            <span>网易云音乐</span>
        </div>
        <div class="page_control">
            <div><img src="../../assets/imgs/arrow_active.png"></div>
            <div><img src="../../assets/imgs/arrow_active.png"></div>
        </div>
        <div class = "search" :class="isSearchFocus==true? 'onfocus' : 'onBlur'" >
            <input  type="text"
                :placeholder="placeholder"
                @focus="focusSearch"
                @blur="blurSearch"
            />
            <label></label>
        </div>


        <div class="user">
            <img src="../../assets/imgs/user.jpg"/>
            <p>那个诗人</p>
            <label></label>
            <img class="setting" src="../../assets/imgs/skin.png"/>
            <img class="setting" src="../../assets/imgs/mail.png"/>
            <img class="setting" src="../../assets/imgs/setting.png"/>
            <span/>
            <img class="setting windowtool" src="../../assets/imgs/window_min.png"/>
            <img class="setting windowtool" src="../../assets/imgs/window_max.png"/>
            <img class="setting windowtool" src="../../assets/imgs/window_close.png"/>
        </div>

        <div>

        </div>
    </header>
</template>

<script>

export default {
    name:"mhead",
    data() {
        return {
            placeholder: '搜索音乐，歌手，歌词，用户',
            isSearchFocus: false
        }
    },
    methods:{
        focusSearch(){
            console.log("focusSearch")
            this.isSearchFocus = true;
            this.placeholder = ""
        },
        blurSearch(){
            this.isSearchFocus = false;
            this.placeholder = '搜索音乐，歌手，歌词，用户'
        }
    }
}
</script>


<style lang="sass" rel="stylesheet/sass">
@import 'head.scss';
</style>
