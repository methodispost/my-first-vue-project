import types from './types'
import state from './state'

const mutations = {
  [types.TOGGLE_MUSIC](state, index) {
    state.audio.name = state.musicData[index].name;
    state.audio.src = state.musicData[index].src;
    state.audio.musicImgSrc = state.musicData[index].musicImgSrc;
    state.audio.index = index;
  }
};

export default mutations;
