<template>
  <div id="app">
    <!--头部音乐信息-->
    <div :style="{backgroundColor: skinColor}" class="header"></div>
  </div>
</template>

<script>
  //导入音乐数据
  import MusicData from './music-data'

  //导入封装的 localStorage 相关方法
  import Store from './store'

  export default {
    name: 'app',
    //页面载入初始化
    mounted() {

    },
    data() {
      return {
        skinColor: '#B72712'
      }
    }
  }
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .header {
    flex: 1;
    background-color: #212121;
    display: flex;
    align-items: center;
  }
</style>
