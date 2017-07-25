<template>
  <div id="app">
    <!--头部音乐信息-->
    <div :style="{backgroundColor: skinColor}" class="header">
      <div @click="isShowAdd=!isShowAdd" class="add-icon">
        <img src="http://omratag7g.bkt.clouddn.com/add.png" class="icon" alt="methodispost">
      </div>
      <div class="music-title">
        <p>{{ musicTitle }}</p>
      </div>
      <div class="list-icon">
        <img @click="isShowList=!isShowList" src="http://omratag7g.bkt.clouddn.com/Category.png" class="icon" alt="methodispost">
      </div>
    </div>

    <!--音乐内容主体区域-->
    <div @click.stop.prevent="isShowList=false" class="content">
      <audio :src="musicSrc" preload>
        Your browser does not support the audio element.
      </audio>

      <!--添加音乐-->
    </div>
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
      this.DOM = {
        audio: document.querySelector('audio'),
        rotateImg: document.querySelector('.rotateImg')
      };
      this.musicSrc = this.musics[this.index].src;
      this.musicTitle = this.musics[this.index].name;
//      this.musicImgSrc = this.musics[this.index].musicImgSrc || this.musicSrcDefault;
//      this.DOM.audio.addEventListener('ended', () => {this.toChange('next').then(this.toAnimate);});
      Store.fetch('musics').length === 0 ? Store.save(this.musics) : null;
    },
    data() {
      return {
        musics: Store.fetch('musics').length ? Store.fetch('musics') : Object.assign([], MusicData),
        index: 0,
        musicTitle: '',
        skinColor: '#B72712',
        isShowAdd: false,
        isShowList: false,
        musicSrc: '',
        Dom: {}
      }
    }
  }
//  console.log(MusicData)
//  console.log(Object.assign([], MusicData))
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

  .header .add-icon {
    width: 30px;
    height: 30px;
    flex: 1;
    text-align: left;
    padding-left: 10px;
    padding-top: 5px;
    cursor: pointer;
  }

  .header .music-title {
    flex: 5;
    text-align: center;
  }

  .header .music-title p {
    width: 250px;
    color: white;
    text-align: center;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: auto;
  }

  .header .list-icon {
    width: 30px;
    height: 30px;
    flex: 1;
    text-align: right;
    padding-right: 10px;
    padding-top: 5px;
  }

  .header .list-icon img {
    width: 23px;
    cursor: pointer;
  }
</style>
