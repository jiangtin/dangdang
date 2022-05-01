<template>
    <div class="food">
        <div class="top">
            <div class="top-l">食品</div>
            <div class="top-r"   @mouseover="b=1"  @mouseleave="b=0" :class=" b=== 1? 'red ' : ''">优选食品</div>
        </div>
        <div class="Body">
            <div class="left"  v-for="i in foodPic">
                <div class="pic" ><img :src="i.pic1"></div>
                <div class="pic"><img :src="i.pic2"></div>
            </div>
            <div class="center">
                <img src="../assets/img/food-center.jpg">
            </div>
            <div class="right"  v-for="i in foodPic">
                <div class="pic"><img :src="i.pic3"></div>
                <div class="pic"><img :src="i.pic4"></div>

            </div>
        </div>
    </div>
</template>

<script>
    export default{
    data:function(){
        return {
            num:0,
            b:0,
            foodPic :[
            {pic1: require('../assets/img/food1.jpg'), pic2: require('../assets/img/food2.jpg'), pic3: require('../assets/img/food3.jpg'), pic4: require('../assets/img/food4.jpg')},
            {pic1: require('../assets/img/food5.jpg'), pic2: require('../assets/img/food6.jpg'), pic3: require('../assets/img/food7.jpg'), pic4: require('../assets/img/food8.jpg')},

            ],
        }}
    }
</script>

<style scoped>
    .food{
        margin: 0 160px;
        margin-top: 30px;
    }
    .top{
        display: flex;
        color: rgb(73, 73, 73);
    }
     .top-l{
        font-size: 20px;
        height: 25px;
        font-weight: 650;
        margin-right: 20px;
        width: 62px;
        border-right: 1px solid rgb(133, 131, 131);
    }
    .top-r{
        /* margin-left: 20px; */
        font-size: 16px;
        font-weight: 600;
        padding-bottom: 0;
        line-height: 32px;
    }
    .Body{
        display: flex;
        height: 344px;
        border: 0.01px solid rgb(200, 200, 200);
    }
    .pic{
        border: 0.01px solid rgb(200, 200, 200);
        height: 171px;

    }
    .red{
        color: #ff3823;
    }
</style>