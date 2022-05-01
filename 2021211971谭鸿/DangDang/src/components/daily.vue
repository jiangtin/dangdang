<template>
    <div class="daily">
        <div class="top">
            <div class="top-l"  @mouseover="change2(1)"  @mouseleave="back()" :class=" b=== 1? 'red ' : ''">日用百货</div>
            <div class="top-r1" @mouseover="change2(2)"  @mouseleave="back()" :class=" b=== 2? 'red ' : ''">滴露</div>
            <div class="top-r2" @mouseover="change2(3)"  @mouseleave="back()" :class=" b=== 3? 'red ' : ''">旗舰店</div>
            <div class="top-r3">/</div>
            <div class="top-r1" @mouseover="change2(4)"  @mouseleave="back()" :class=" b=== 4? 'red ' : ''">水星家纺</div>
            <div class="top-r2" @mouseover="change2(5)"  @mouseleave="back()" :class=" b=== 5? 'red ' : ''">旗舰店</div>
            <div class="top-r3">/</div>
            <div class="top-r1" @mouseover="change2(6)"  @mouseleave="back()" :class=" b=== 6? 'red ' : ''">戴森</div>
            <div class="top-r2" @mouseover="change2(7)"  @mouseleave="back()" :class=" b=== 7? 'red ' : ''">旗舰店</div>
            <div class="top-r3">/</div>
            <div class="top-r1" @mouseover="change2(8)"  @mouseleave="back()" :class=" b=== 8? 'red ' : ''">碧然德</div>
            <div class="top-r2" @mouseover="change2(9)"  @mouseleave="back()" :class=" b=== 9? 'red ' : ''">旗舰店</div>
        </div>
        <div class="Body">
            <div class="left" v-for="i in pic">
                <div  class="Pic"><img :src="i.pic1"></div>
                <div  class="Pic"><img :src="i.pic2"></div>

            </div>
            <div class="center">
                <img src="../assets/img/day-center.jpg">
            </div>
            <div class="right" v-for="i in pic">
                <div class="Pic"><img :src="i.pic3"></div>
                <div class="Pic"><img :src="i.pic4"></div>

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
                b:20,
                pic :[
                {pic1: require('../assets/img/day1-1.jpg'),pic2: require('../assets/img/day1-2.jpg'),pic3: require('../assets/img/day1-3.jpg'), pic4: require('../assets/img/day1-4.jpg')},
                {pic1: require('../assets/img/day2-1.jpg'),pic2: require('../assets/img/day2-2.jpg'),pic3: require('../assets/img/day2-3.jpg'), pic4: require('../assets/img/day2-4.jpg')},
            ],
               
                pic3 :[
                {pic: require('../assets/img/db1.jpg')}, {pic: require('../assets/img/db2.jpg')}, {pic: require('../assets/img/db3.jpg')}, {pic: require('../assets/img/db4.jpg')}, {pic: require('../assets/img/db5.png')},
                {pic: require('../assets/img/db6.jpg')}, {pic: require('../assets/img/db7.png')}, {pic: require('../assets/img/db8.jpg')}, {pic: require('../assets/img/db9.jpg')}, {pic: require('../assets/img/db10.jpg')},
                ],
            }},
            methods:{
                change2(j){
                    this.b=j
                },

                back(){
                    this.b=20
                },
            }
        }
</script>


<style scoped>
    .daily{
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
        width: 105px;
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
        border-top: 0.01px solid rgb(201, 200, 200);
    }
    .center{
        margin-top: 2px;
        /* border-top: 0.02px solid rgb(201, 200, 200); */
    }
    .Pic{
        border: 0.01px solid rgb(200, 200, 200);
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