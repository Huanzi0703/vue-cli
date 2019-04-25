
export default {
    setToken (state, payload) {
        state.token = payload;
    },
    setLoginType (state,payload) {
        state.isLogin = payload;
    },
    setUserData (state,payload) {
        const body = {
            id: payload.id ? payload.id : '',
			name: payload.nickName,
			gender: payload.childrenGender,
			genderText: payload.childrenGender == "1" ? '男' : '女',
			birthday: '',
			photoUri: payload.photoUrL ? payload.photoUrL : '',
			familyCode: payload.userfamilly,
			prize: '',
			point: payload.totalPoint,
			beforePoint:payload.currentPoint,
			earnWealth: payload.currentMedal,
        }
        state.user = body
    },
}
