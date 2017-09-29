import state from './state'
import types from './types'
const actions = {
  getData({commit, state}) {
    if (localStorage.musics !== '[]' && localStorage.musics) {
      state.musicData = JSON.parse(localStorage.musics);
      return;
    }
    return new Promise((reslove, reject) => {
      Vue.axios.get('/api/music-data')
        .then(res => {
          if (res.data.errno === 0) {
            state.musicData = res.data.musicData;
            localStorage.musics = JSON.stringify(state.musicData);
          }
        })
        .then(() => {
          commit(types.TOGGLE_MUSIC, 0);
        });
      reslove();
    });
  }
};

export default actions;
