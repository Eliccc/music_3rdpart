<template>
    <div id="app" class="app">
        <mHead></mHead>
        <mSide></mSide>
        <mFooter></mFooter>

        <mContent></mContent>
    </div>
</template>

<script>
import mHead from './public/head.vue'
import mSide from './public/sidebar.vue'
import mFooter from './public/footer.vue'

import mContent from './portal/portal.vue'

export default {
  components: {
    mHead,
    mSide,
    mFooter,
    mContent
  }
}

// import portal from './portal/portal.vue'
// export default {
//     components:{
//         portal
//     }
// }
</script>

<style>
  

html{
    width: 100%;
    height: 100%;
}
 *, body{
    padding: 0;
    margin: 0;
    user-select:none;
    -webkit-user-select:none;
    list-style:none;  
}

body{
    width: 100%;
    height: 100%;
    min-width: 1080px;
    overflow: hidden;
}
.app{
    height: 100%;
}
</style>


