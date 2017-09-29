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
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState([
        'skinColor'
      ])
    },
    methods: {
      showAsideMenu(params) {
        this.$store.dispatch('showAsideMenu');
      },
      toSearch() {
        this.$store.dispatch('toSearch');
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
  }
</style>
