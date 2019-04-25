import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex);

import VuexPersist from 'vuex-persist'
const vuexLocal = new VuexPersist({
    storage:window.sessionStorage
});

const moduleLogin = {
	plugins:[vuexLocal.plugin],
    state:{
		phone:'',
		nickName:'',
		password:'',
		token: localStorage.token ? localStorage.token : '',
		isLogin: false,
		user: {
			id: "",
			name: "",
			gender: '1',
			genderText: '男',
			birthday: "",
			photoUri: "",
			familyCode: "",
			prize: '',
			point: '',
			beforePoint:0,
			earnWealth: 0,
		},
	},
    mutations,
    actions,
    getters
}

export default new Vuex.Store({
	modules: {
		login: moduleLogin,
	}
})
