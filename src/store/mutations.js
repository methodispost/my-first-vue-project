import types from './types'
import state from './state'

const mutations = {
  [types.TOGGLE_MUSIC](state, index) {
    state.audio.name = state.musicData[index].name;
    state.audio.src = state.musicData[index].src;
    state.audio.musicImgSrc = state.musicData[index].musicImgSrc;
    state.audio.index = index;
  },
  [types.SHOW_ASIDE_MENU](state, flag) {
    state.isShowAsideMenu = flag;
  }
};

export default mutations;
