import Vue from 'vue'
import VueRouter from 'vue-router'

import recommond from '../components/portal/recommond/recommond.vue'
import songsheet from '../components/portal/songsheet/songsheet.vue'
import broadcasting from '../components/portal/broadcasting/broadcasting.vue'

const routes = [
    {path: '/',  component: recommond},
    {path: '/recommond', name: 'recommond', component: recommond },
    {path: '/songsheet', name: 'songsheet', component: songsheet},
    {path: '/broadcasting', name: 'broadcasting', component: broadcasting}
]

Vue.use(VueRouter)

export default new VueRouter({
  routes // short for `routes: routes`
})

