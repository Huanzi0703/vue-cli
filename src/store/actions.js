import Vue from 'vue'

import {get,post} from '../utils/axios.js'

export default {
    goLogin ( context, payload ) {
        // console.log(context,payload)
        const body = new FormData();
        body.append('phone', payload.phone);
        body.append('nickName', payload.nickName);
        body.append('password', payload.password);
        
        post('/iTeenager/childrenClient/childrenLogin',body)
            .then(function (res) {
                if(res){
                    localStorage.token = res.data;
                    Vue.$vux.toast.show({
                        text:'登录成功'
                    })
                    context.commit('setToken',res.data);
                    context.commit('setLoginType',true);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    // 获取个人信息
    getUserData ( context, payload ) {
        
        post('/iTeenager/childrenClient/getChildrenInfo')
            .then(function (res) {
                if(res.data){
                    context.commit('setUserData',res.data);
                }
            })
            .catch(function (error) {
                // console.log(error,'====321');
            })

    },
}
