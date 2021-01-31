// 路由器对象模块


import Vue from 'vue'
import VueRouter from 'vue-router'
//引入四个路由组件
import Profile from '../pages/Profile/Profile.vue'
import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'



//声明使用插件
Vue.use(VueRouter)
    //创建路由器,在main.js引用
export default new VueRouter({
    //所有路由，一个数组里面的花括号就表示一个路由件
    routes: [

        {
            //路径最好小写
            path: '/home',
            component: Home
        }, {
            path: '/order',
            component: Order
        }, {
            path: '/search',
            component: Search
        }, {
            path: '/profile',
            component: Profile
        },
        {
            path: '/login',
            component: Login
        },
        //默认显示Home
        {
            path: '/',
            redirect: '/Home'

        }
    ]
})