<template>
<div class="login-body">
    <div class="login-form">
        <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="手机号" v-model="phone">
        <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="昵称" v-model="nickName">
        <input type="text"  class="qxs-ic_password qxs-icon"  placeholder="密码" v-model="password">
        <button class="login_btn" @click="login" type="primary">登录</button>
        
    </div>
</div>
</template>
<script>
import {mapState,mapMutations,mapGetters} from 'vuex';
export default{
  components:{
		
  },
  data(){
    // console.log(this.$store.state.login,'==')
		return {
      phone: this.$store.state.login.phone,
      nickName: this.$store.state.login.nickName,
      password: this.$store.state.login.password,
      token: this.$store.state.login.token,
      isLogin:false,
      isBodyShow: this.$store.state.login.token =='' ? '' : 'none'
		}
  },
  computed: {
      ...mapGetters([
        'getToken',
        'setLoginType'
      ])
  },
  watch:{
    getToken(token){
      this.token = token;
    },
    setLoginType(isLogin){
      this.isLogin = isLogin;
      if(isLogin){
          this.$router.push({  //核心语句
            name:'home',   //跳转的路径
          })
      }
    }
  },
  mounted: function() {
      //  localStorage.removeItem("token");
      this.getLoginType();
  },
  methods:{
	  login() {
      this.$store.dispatch('goLogin',{
        phone:this.phone,
        nickName:this.nickName,
        password:this.password
      })
    },
    getLoginType() {
      // console.log(this.token)
      if(this.token != ""){
        this.$router.push({  //核心语句
          name:'home',   //跳转的路径
        })
      }
    }
  },
}
</script>
<style lang="less">
.login-body{
  width: 100%;
  height:100%;
  background-color: #ccc;
}
.login-form{
  width: 80%;
  height:500px;
  margin:auto;
  padding-top:100px;
  .qxs-icon{
    width:100%;
    height:50px;
    display: block;
    padding-left:20px;
    margin-bottom:20px;
  }
  .login_btn{
    width:100%;
    height:50px;
    background-color: #00f;
    color:#ccc;
  }
}

</style>