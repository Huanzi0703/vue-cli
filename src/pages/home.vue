<template>
    <div class="body">
        <header-bar :isBack="isBack" :title="title" v-on:addTak="addTak"></header-bar>
        <div class="box">{{user.name}}</div>
        <nav-bar></nav-bar>
    </div>
</template>
<script>
import {mapState,mapMutations,mapGetters} from 'vuex';
import HeaderBar from '../components/HeaderBar'
import NavBar from '../components/NavBar'
import { setTimeout } from 'timers';
export default{
  components:{
    HeaderBar,
    NavBar
  },
  data(){
    return {
      title:"首页",
      isBack:false,
      item: 0,
      user: this.$store.state.login.user,
      token: this.$store.state.login.token
    }
  },
  computed: {
      ...mapGetters([
        'getUser',
      ])
  },
  watch:{
    getUser(user){
      console.log(user,'===321')
      this.user = user;
    },
  },
  mounted:function(){
    // localStorage.removeItem("token");
      const This = this;
      This.getUserData(); 
  },
  methods:{
    addTak(){
      console.log("000")
    },
    getUserData(){
      this.$store.dispatch('getUserData');
    },
  },
}
</script>
<style lang="less">
.box{
  width:200px;
  height:200px;
  background: #f00;
}
</style>