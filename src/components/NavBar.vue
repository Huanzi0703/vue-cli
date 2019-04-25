<template>
    <div id="TabBar" class="tab-bar row">
        <div class="tab-bar-item" @click="didClickedItem(0)">
            <div class="row1">
                <span>首页</span>
            </div>
        </div>
        <div class="tab-bar-item" @click="didClickedItem(1)">
            <div class="row1">
                <span>心愿</span>
            </div>
        </div>
		<div class="tab-bar-item" @click="didClickedItem(2)">
            <div class="row1">
                <span>奖品</span>
            </div>
        </div>
        <div class="tab-bar-item" @click="didClickedItem(3)">
            <div class="row1">
                <span>我的</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        props: {

        },
        data: function () {
            return {
                actives: [true, false, false,false]
            }
        },
        methods: {
            didClickedItem: function (tag) {
                if (tag === 0) {
					this.$router.push({  //核心语句
						name:'home',   //跳转的路径
					})
                } else if (tag === 1) {
					this.$router.push({  //核心语句
						name:'wish',   //跳转的路径
					})
                } else if (tag === 2) {
					this.$router.push({  //核心语句
						name:'prize',   //跳转的路径
					})
				}
				else if (tag === 3) {
					this.$router.push({  //核心语句
						name:'user',   //跳转的路径
					})
                }
                
            }
        }
    }
</script>

<style scoped>
    .tab-bar {
        background-color: white;
        height: 54px;
        border: 0 solid rgb(210, 210, 210);
        border-top-width: 1px;
        position: fixed;
        margin: auto;
        bottom: 0;
        width: 100%;
		display: flex;
    }

    .tab-bar-item {
		flex: 1;
        height: 54px;
		display: flex;
		justify-content: center;
		align-items: center;
    }
	.row1{

	}

    .active {
        color: #1E90FF;
    }

    i {
        font-size: 25px;
    }
</style>