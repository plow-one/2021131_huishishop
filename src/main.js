//main.js:应用入口js

import Vue from 'vue'
import App from './App.vue'
//1.引用路由器
import router from './router'

new Vue({
    el: '#app',
    render: h => h(App),
    //2.配置路由器:a.会多了几个组件标签route-link...  b.多了两个属性访问router以及route
    router

})