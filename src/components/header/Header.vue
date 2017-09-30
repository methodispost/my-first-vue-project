<template>
  <div :style="{backgroundColor: skinColor}" class="header">
    <div class="name">
      <span @click="showAsideMenu(true)" class="func">
        <i class="func-icon"></i>
      </span>
      <p>云音乐</p>
      <span class="search">
        <i class="search-icon" @click="toSearch"></i>
      </span>
    </div>
    <div class="tab">
      <div class="item" :class="{link: linkBorderIndex===1}">
        <router-link to="/music-list">我的</router-link>
      </div>
      <div class="item" :class="{link: linkBorderIndex===2}">
        <router-link to="/find">发现</router-link>
      </div>
      <div class="item" :class="{link: linkBorderIndex===3}">
        <router-link to="/social">一个</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'header',
    data() {
      return {
        index: ''
      };
    },
    computed: {
      ...mapGetters([
        'skinColor',
        'linkBorderIndex'
      ])
    },
    methods: {
      showAsideMenu(flag) {
        this.$store.dispatch('showAsideMenu', flag);
      },
      toSearch() {
        this.$router.push('/find');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    background-color: #b72712;
    color: #fff;
    flex: 1;
    width: 100%;
    .name {
      display: flex;
      justify-content: space-between;
      text-align: center;
      padding: 10px 0;
      border-bottom: 1px solid rgba(255, 255, 255, .2);
      span.func {
        flex: 1;
        position: relative;
        .func-icon {
          display: inline-block;
          position: absolute;
          width: 20px;
          height: 20px;
          left: 15px;
          bottom: 0;
          background: url("./func.svg") no-repeat;
          background-size: contain;
          cursor: pointer;
        }
      }
      p {
        flex: 1;
      }
      span.search {
        flex: 1;
        position: relative;
        .search-icon {
          display: inline-block;
          position: absolute;
          width: 20px;
          height: 20px;
          right: 15px;
          bottom: 0;
          background: url("./search.svg") no-repeat;
          background-size: contain;
          cursor: pointer;
        }
      }
    }
    .tab {
      display: flex;
      border-bottom: 1px solid #9e9e9e;
      a {
        display: inline-block;
        width: 50%;
        text-decoration: none;
        color: #fff;
      }
      a:after {
        background-color: rgba(255, 255, 255, .2);
        height: 1px;
        bottom: -2px;
      }
      .item {
        display: inline-block;
        flex: 1;
        text-align: center;
        padding: 10px 0;
      }
      .link {
        font-weight: bold;
        color: #bdbdbd;
        border-bottom: 1px solid #e0f2f1;
      }
    }
  }
</style>
