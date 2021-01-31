<!-- 

App.vue:应用根组件vue -->
<template>
  <div id="app">
    <router-view/>
    <!-- 处理登录页面的FooderGuide的显示情况
    $:表示当前页面-->

    <FooterGuide v-show="$route"/>

  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  components:{
    FooterGuide
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background #f5f5f5
</style>