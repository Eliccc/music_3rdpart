import Vue from 'vue'
import Vuex from 'vuex'

import portal from './modules/portal/portal'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        portal
    }
});