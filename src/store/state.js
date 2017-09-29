const state = {
  musicData: [],
  skinColor: localStorage.skinColor || '#b72712',
  isShowIndex: true,
  isPlaying: false,
  isAnimation: false,
  isShowAsideMenu: false,
  isShowMiniMusic: false,
  isShowAbout: false,
  linkBorderIndex: '',
  DOM: {},
  audio: {
    name: '',
    src: '',
    musicImgSrc: '',
    index: 0
  }
};

export default state;
