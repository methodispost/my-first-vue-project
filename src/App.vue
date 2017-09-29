<template>
  <div id="app">
    <!--主界面部分-->
    <!--<transition name="show">-->
      <div v-show="isShowIndex" class="index">
        <!--侧边栏-->

        <!--头部-->
        <VHeader></VHeader>
      </div>
    <!--</transition>-->
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import VHeader from './components/header/Header'

  export default {
    computed: {
      ...mapGetters([
        'isShowIndex'
      ])
    },
    components: {
      VHeader
    }
  }
</script>

<style lang="scss" scoped>
  /*@import "./common/style/base.scss";*/
  #app, .index {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
</style>
