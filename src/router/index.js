import Vue from 'vue'
import Router from 'vue-router'
import MusicList from '../components/musicList/MusicList'

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: '/',
      component: MusicList
    }
  ]
})
