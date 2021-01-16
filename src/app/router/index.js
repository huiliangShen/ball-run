import Vue from 'vue'
import Router from 'vue-router'
import Home from '@page/home/index'
import Detail from '@/app/components/detail'
import Store from '@page/store/index'
import My from '@page/my/index'

Vue.use(Router)

export const commonRouter = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: '/detail',
                component: Detail
            }
        ]
    },
    {
        path: '/store',
        component: Store
    },
    {
        path: '/my',
        component: My
    }
]

export default new Router({
    scrollBehavior: () => ({
        y: 0
    }),
    routes: commonRouter
})
