<template>
    <aside class="aside">
        <ul class="recommond">
            <li>推荐</li>
            <li class="list" @click="clickLi($event)">发现音乐</li>
            <li class="list">私人FM</li>
            <li class="list selected">NV</li>
            <li class="list">朋友</li>
        </ul>

        <ul>
            <li>我的音乐</li>
            <li class="list">下载管理</li>
            <li class="list">我的音乐云盘</li>
            <li class="list">我的电台</li>
            <li class="list">我的收藏</li>
        </ul>

        <ul>
            <li>创建的歌单</li>
            <li class="list">我喜欢的音乐</li>
            <li class="list">如果我是DJ</li>
            <li class="list">你经历过绝望吗</li>
            <li class="list">男孩子就应该早点睡</li>
            <li class="list">jy剪影姐1</li>
            <li class="list">jy剪影姐2</li>
            <li class="list">jy剪影姐3</li>
            <li class="list">jy剪影姐4</li>
            <li class="list">jy剪影姐5</li>
            <li class="list">jy剪影姐6</li>
            <li class="list">jy剪影姐7</li>
            <li class="list">jy剪影姐8</li>
            <li class="list">jy剪影姐9</li>
            <li class="list">jy剪影姐1</li>
            <li class="list">jy剪影姐2</li>
            <li class="list">jy剪影姐3</li>
            <li class="list">jy剪影姐4</li>
            <li class="list">jy剪影姐5</li>
            <li class="list">jy剪影姐6</li>
            <li class="list">jy剪影姐7</li>
            <li class="list">jy剪影姐8</li>
            <li class="list">jy剪影姐9</li>
            <li class="list">jy剪影姐10</li>
            <li class="list">jy剪影姐1</li>
            <li class="list">jy剪影姐2</li>
        </ul>

        
    </aside>
</template>

<script>

export default {
    name:"mAside",
    methods: {
        clickLi(event){
            console.log(event.target.className);   
        }
    }
}
</script>

<style lang="sass" rel="stylesheet/sass">
@import 'sidebar.scss';
</style>