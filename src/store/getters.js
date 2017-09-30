import state from './state'
const getters = {
  // audio(state) {
  //   return state.audio;
  // },
  isShowIndex(state) {
    return state.isShowIndex;
  },
  musicData(state) {
    return state.musicData;
  },
  skinColor(state) {
    return state.skinColor;
  },
  linkBorderIndex(state) {
    return state.linkBorderIndex;
  }
};

export default getters;
