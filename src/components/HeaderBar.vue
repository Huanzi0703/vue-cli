<template>
    <nav id="navigation" class="row">
        <div class="col-xs-2">
            <span v-if="isBack"  @click="navigationBack">返回</span>
        </div>
        <div class="col-xs-8">
            <span>{{title}}</span>
        </div>
        <div class="col-xs-2" @click="addTak">
            <span></span>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "navigation",
        props: ['title','isBack'],
        data: function () {
            return {
                isCanBack: false,
            }
        },
        watch: {
            
        },
        methods: {
            navigationBack: function () {
                this.$router.go(-1);
            },
            addTak(){
                this.$emit("addTak","addTak")
            }
        }
    }
</script>

<style scoped>
    nav {
        background-color: #cccccc;
        width: 100%;
        height: 44px;
        border: solid rgb(210, 210, 210);
        border-width: 0 0 1px 0;
        margin: auto;
        top: 0;
        
    }

    div {
        text-align: center;
        line-height: 44px;
    }

    span {
        font-size: 16px;
        color:#fff; 
    }
    .col-xs-2{
        width: 63px;
    }
    .col-xs-8{
        flex: 1;
    }

</style>