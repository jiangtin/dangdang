<template>
    <div class="child">

        <div class="top">
            <div class="top-l"  @mouseover="b=1"  @mouseleave="b=0" :class=" b=== 1? 'red ' : ''">孕婴童</div>
            <div class="top-r1"  @mouseover="b=2"  @mouseleave="b=0" :class=" b=== 2? 'red ' : ''">童书畅销榜</div>
            <div class="top-r3">/</div>
            <div class="top-r1"  @mouseover="b=3"  @mouseleave="b=0" :class=" b=== 3? 'red ' : ''">童书3到6岁榜</div>
            <div class="top-r3">/</div>
            <div class="top-r1"  @mouseover="b=4"  @mouseleave="b=0" :class=" b=== 4? 'red ' : ''">童书7到10岁榜</div>
   
        </div>
        <div class="Body">
            <div class="left">
                <div  class="Pic"  v-for="i in pic"><img :src="i.pic1"></div>
                <!-- <div  class="Pic"><img :src="i.pic2"></div> -->
            </div>
            <div class="center">
                <img src="../assets/img/child-center.jpg">
            </div>
            <div>
                <div  class="right" v-for="i in pic">
                    <div  class="Pic"><img :src="i.pic2"></div>
                    <div class="Pic"><img :src="i.pic3"></div>
                    <div class="Pic"><img :src="i.pic4"></div>
                </div>

            </div>
        </div>
        <div class="bottom">
            <div class="bottomP" v-for="k in pic3" ><img :src="k.pic"></div>
        </div>
    </div>
</template>
<script>
    export default{
    data:function(){
        return {
            num:0,
            b:0,
            pic :[
            {pic1: require('../assets/img/child1.jpg'),pic2: require('../assets/img/child2.jpg'),pic3: require('../assets/img/child3.jpg'), pic4: require('../assets/img/child4.jpg')},
            {pic1: require('../assets/img/child5.jpg'),pic2: require('../assets/img/child6.jpg'),pic3: require('../assets/img/child7.jpg'), pic4: require('../assets/img/child8.jpg')},
        ],
           
            pic3 :[
            {pic: require('../assets/img/cb1.png')}, {pic: require('../assets/img/cb2.png')}, {pic: require('../assets/img/cb3.png')}, {pic: require('../assets/img/cb4.png')}, {pic: require('../assets/img/cb5.png')},
            {pic: require('../assets/img/cb6.png')}, {pic: require('../assets/img/cb7.png')}, {pic: require('../assets/img/cb8.png')}, {pic: require('../assets/img/cb9.png')}, {pic: require('../assets/img/cb10.png')},
            ],
        }}
    }
</script>

<style scoped>
    .child{
        padding: 0 160px;
        margin-top: 30px;
        background-color: #fff;
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
        width: 85px;
        border-right: 1px solid rgb(133, 131, 131);
    }
    .top-r1{
        /* margin-left: 20px; */
        font-size: 16px;
        font-weight: 600;
        padding-bottom: 0;
        line-height: 32px;
    }
    .top-r2{
        font-size: 14px;
        width: 50px;
        height: 20px;
        line-height: 35px;
        text-align: center;
        padding-bottom: 0;
    }
    .top-r3{
        color: rgb(133, 131, 131);
        font-size: 15px;
        width: 40px;
        height: 20px;
        line-height: 35px;
        text-align: center;
        padding-bottom: 0;
    }
    .Body{
        display: flex;
        margin-top: 10px;
        border-top: 0.01px solid rgb(201, 200, 200);
    }
    .center{
        margin-top: 2px;
        /* border-top: 0.02px solid rgb(201, 200, 200); */
    }
    /* .left{ */
        /* width: 200px; */
    /* } */
    .right{
        display: flex;
    }
    .Pic{
        border: 0.01px solid rgb(200, 200, 200);
        height: 200px;
        width: 221px;

    }
    
    .bottom{
        display: flex;
        border: 0.01px solid rgb(200, 200, 200);
        height: 68px;
        position: relative;
        margin-top: -10px;
        padding-top: 13px;
        justify-content: space-between;
        background-color: rgb(243, 244, 245);
    }
    .bottomP{
        height: 40px;
        border-right: 0.01px dashed rgb(224, 223, 223);
    }
    .red{
        color: #ff3823;
    }

</style>