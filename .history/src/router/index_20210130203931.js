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
    //所有路由，一个数组里面的花括号就表示一个路由组件
    routes: [

        {
            //路径最好小写
            path: '/home',
            component: Home,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/order',
            component: Order,
            //meta默认有，空对象默认false
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true
            }
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