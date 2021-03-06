/**
 * @author Studio Folder - @StudioFolder / http://studiofolder.it
 * @author Iacopo Leardini - @iacopolea
 * @author Angelo Semeraro - @angeloseme / http://angelosemeraro.info
*/
export default {
  namespaced: true,
  state: {
    isLoading: true, // are we still loading?
    transitionName: '',
    transitionMode: '',
    animationHeight: 'normal',
    isChoosingDestination: true,
    isAltPanelOpen: false,
    webColors: [
      '#003769',
      '#2e6a9c',
      '#0095d7',
      '#587a98',
      '#7eafd4',
      '#b9e5fb',
      '#656868',
      '#ffffff',
    ],
    isMenuOpen: false,
    isInfoBoxOpen: false,
    isWindPanelOpen: false,
    deviceName: '', // (small, medium, big) or (phone, tablet, desktop) ???
    modalShow: true,
  },
  mutations: {
    setModalShow(state, v) {
      state.modalShow = v;
    },
    setAltPanel(state, v) {
      state.isAltPanelOpen = v;
    },
    loadingComplete(state) {
      state.isLoading = false;
    },
    setTransition(state, value) {
      state.transitionName = value;
    },
    setTransitionMode(state, value) {
      state.transitionMode = value;
    },
    setDevice(state, deviceName) {
      state.deviceName = deviceName;
    },
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleInfoBox(state) {
      state.isInfoBoxOpen = !state.isInfoBoxOpen;
    },
    setInfoBox(state, v) {
      state.isInfoBoxOpen = v;
    },
    setWindPanel(state, v) {
      state.isWindPanelOpen = v;
    },
    toggleWindPanel(state) {
      if (!state.isWindPanelOpen && state.isInfoBoxOpen) {
        state.isInfoBoxOpen = false;
      }
      state.isWindPanelOpen = !state.isWindPanelOpen;
    },
    closeMenu(state) {
      state.isMenuOpen = false;
    },
    closeInfoBox(state) {
      state.isInfoBoxOpen = false;
    },
    closeWindsPanel(state) {
      state.isWindPanelOpen = false;
    },
    setFormStatus(state, value) {
      state.isChoosingDestination = value;
    },
    setAnimationHeight(state, value) {
      state.animationHeight = value;
    },
  },
  getters: {
    isSmall: state => state.deviceName === 'small',
  },
};
