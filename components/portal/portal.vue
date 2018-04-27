<template>
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

</script>