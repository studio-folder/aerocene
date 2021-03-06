/**
 * @author Studio Folder - @StudioFolder / http://studiofolder.it
 * @author Iacopo Leardini - @iacopolea
 * @author Angelo Semeraro - @angeloseme / http://angelosemeraro.info
*/

import Vuex from 'vuex';
import Vue from 'vue';
import general from './modules/general';
import flightSimulator from './modules/flightSimulator';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    general,
    flightSimulator,
  },
  // plugins: [createPersistedState({paths: ['filters', 'visualization']})]
});
