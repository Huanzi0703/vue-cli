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
export default{
  components:{
    HeaderBar,
    NavBar
  },
  data(){
    return {
      title:"奖品",
      isBack:false,
      item: 0,
      user: this.$store.state.login.user
    }
  },
  computed: {
      ...mapGetters([
        'getUser',
      ])
  },
  watch:{
    
  },
  mounted:function(){
  },
  methods:{
    addTak(){
      console.log("000")
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