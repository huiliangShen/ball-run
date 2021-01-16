import Vuex from 'vuex'
import Vue from 'vue'
// import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: 12
    },
    mutations: {
        'test'(state) {
            return state
        }
    },
    actions: {
        login({commit, state}, data) {
            return new Promise((resolve, reject) => {
                if (data) {
                    commit('test', data)
                    resolve()
                } else {
                    reject(new Error('error'))
                }
            })
        }
    },
    plugins: [] // process.env.NODE_ENV !== 'production' ? [createLogger()] : []
})
