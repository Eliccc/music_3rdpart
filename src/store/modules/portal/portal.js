const state = {
    name:"lichuan"
}

const mutations = {
    changeName(state){
        state.name = "lipaji";
    }
}

const getters = {
  name: state => state.name
}

export default {
    state,
    mutations,
    getters
}