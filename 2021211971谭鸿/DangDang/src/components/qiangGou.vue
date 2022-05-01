<template>
<div class="qiangGou">
<div class="left">
    <div class="top">
        <div class="qianggou">
            <img  src="../assets/img/qg.png">
            <svg class="icon"  aria-hidden="true" id="aright">
                <use xlink:href="#icon-naozhong"></use>
            </svg>
        </div>
        <div class="times">
            <div class="time">00:00场</div>
            <div class="time">08:00场</div>
            <div class="time">12:00场</div>
            <div class="time">16:00场</div>
            <div class="time">20:00场</div>
        </div>
    
    </div>
    <div class="in">
        <div class="in1">
            <div class="txt" v-for="(i,j) in txt1">
                <img :src="i.pic">
                <div class="num">
                    <div class="numl"></div>
                    <div class="numc">已抢购{{i.num}}</div>
                    <div class="numr"></div>
                </div>
                <div class="line"  @mouseover="change(j)"  @mouseleave="back()" :class=" a=== j? 'red ' : ''">{{i.line}}</div>
                <div class="price">
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-qianqian-"></use>
                    </svg>
                    <div class="money">
                        {{i.money}}
                    </div>
                </div>

            </div>
        </div> 
        <div class="in2">
            <div class="txt" v-for="(j,k) in txt2">
                <img :src="j.pic">
                <div class="num">
                    <div class="numl"></div>
                    <div class="numc">已抢购{{j.num}}%</div>
                    <div class="numr"></div>
                </div>
                <div class="line" @mouseover="change2(k)"  @mouseleave="back()" :class=" b=== k? 'red ' : ''">{{j.line}}</div>
                <div class="price">
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-qianqian-"></use>
                    </svg>
                    <div class="money">
                        {{j.money}}
                    </div>
                </div>

            </div>
        </div>

            </div>
        </div>
        
<div class="right">

    <div class="r-top">
        <div>厂商周</div>
        <div class="p">
            <div class="point" :style="p1" @mouseover="point1()"></div>
            <div class="point" :style="p2" @mouseover="point2()"></div>
        </div>
    </div>
    <div class="l-bottom">

            <div class="l-left" v-for="i in imgs1" :style="lLeft"><img :src="i.pic"></div>
            <div class="l-right" v-for="j in imgs2" :style="lRight"><img :src="j.pic"></div>


    </div>
    
</div>
 </div>
</template>

<script>
export default{
        data:function(){
            return {
                 lLeft:'display:block',
                 lRight:'display:none',
                 p1:' background-color: #ff2832',
                 p2:' background-color: rgb(201, 200, 200)',
                a:20,
                b:20,
                txt1:[
                    {pic: require('../assets/img/1-11.jpg') , num:23, line:"全脑开发贴纸书全8册 2-3-4-5", money: 23.9},
                    {pic: require('../assets/img/1-12.jpg') , num:21, line:"【领券到手28元】 中华上下五千年", money: 128 },
                    {pic: require('../assets/img/1-13.jpg') , num:27, line:"领券下单立减10元【到手价79.9】", money: 89.9 },
                    {pic: require('../assets/img/1-14.png') , num:24, line:"时间管理:充分利用一年的8760小时", money: 16.21 },
                    {pic: require('../assets/img/1-15.jpg') , num:23, line:"来份伊利乳酸菌小口袋蛋糕", money: 19.9 },
                ],
                txt2:[
                    {pic: require('../assets/img/1-21.jpg') , num:21, line:"儿童工程车绘本认知图画书故事书", money: 18},
                    {pic: require('../assets/img/1-22.jpg') , num:45, line:"安娜·卡列尼娜（全二册，原版插图）", money: 9.9},
                    {pic: require('../assets/img/1-23.jpg') , num:28, line:"【秒杀价:13.98元】夏款童装", money: 13.98},
                    {pic: require('../assets/img/1-24.jpg') , num:27, line:"刘慈欣小说集 流浪地球+微纪元", money: 49},
                    {pic: require('../assets/img/1-25.jpg') , num:28, line:"小脚丫走丝路:3D场景拼插·西安", money: 59.8},
                ],
                imgs1:[
                    { pic: require('../assets/img/l-11.jpg')},  { pic: require('../assets/img/l-12.jpg')},  { pic: require('../assets/img/l-13.jpg')},  { pic: require('../assets/img/l-14.jpg')},
                ],
                imgs2:[
                    { pic: require('../assets/img/r-11.jpg')},  { pic: require('../assets/img/r-12.jpg')},  { pic: require('../assets/img/r-13.jpg')},  { pic: require('../assets/img/r-14.jpg')},
                ],
            }},
            methods:{
                change(j){
                    this.a=j
                },
                change2(j){
                    this.b=j
                },

                back(){
                    this.a=20
                    this.b=20
                },
                point1(){
                    this.p1="background-color: #ff2832"
                    this.p2="background-color: rgb(201, 200, 200)"
                    this.lLeft="display:block"
                    this.lRight="display:none"
                },
                point2(){
                    this.p2="background-color: #ff2832"
                    this.p1="background-color: rgb(201, 200, 200)"
                    this.lLeft="display:none"
                    this.lRight="display:block"
                },

            }
            
            }
</script>
<style scoped>
    .qiangGou{
        padding: 0 160px;
        display: flex;
        margin-top: 30px;
        background-color: #fff;
    }
    .left{
        width: 1000px;
        color: rgb(78, 78, 78);
    }
    .top{
        display: flex;
        font-size: 20px;
        font-weight: 800;
        justify-content: space-between;
        border-bottom: 2px solid rgb(78, 78, 78);

    }
    .times{
        width: 700px;
        justify-content: space-between;
        padding-right: 100px;
    }
    .qianggou{
        display: flex;
    }
    .qianggou img{
        width: 65px;
        height: 37px;
    }
    .qianggou .icon{
        width: 35px;
        height: 35px;
        margin-left: 20px;

    }
    .times{
        display:flex ;
    }
    .in1 ,.in2{
        display: flex;
        font-size: 12px;
    
        justify-content: space-between;
        justify-content: space-between;
    }
    .num{
        display: flex;
    }
    .numl{
        width: 35px;
        height: 8px;
        background-color: #ff2832;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        margin-top: -3px;
        margin-right: -1px;
        margin-left: 23px;
    }
    .numc{
        width: 80px;
        height: 22px;
        margin-top: -12px;
        color: aliceblue;
        position: relative;
        background-color: rgb(248, 142, 165);
        text-align: center;
        line-height: 22px;
        border-radius: 40px;

    }
    .numr{
        width: 35px;
        height: 8px;
        background-color: rgb(243, 171, 189);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        margin-top: -3px;
        margin-left: -1px;
    }
    .line{
        width: 170px; 
        height: 17px;
        overflow: hidden;
      text-overflow: ellipsis;
       display: -webkit-box;
       -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-top: 8px;
    }
    .price{
        height: 15px;
        width: 100px;
        display: flex;
        vertical-align: middle;
        text-align: center;
        font-size: 16px;
        color: #ff2832;
        margin-top: 2px;
        padding-left: 8px;
    }
    .price .icon{
        width: 9px;
        height: 23px;
        fill: #ff2832;
        vertical-align: middle;
        margin-right: 5px;
    }
    .txt{
        width: 200px;
        height: 230px;
        text-align: center;
        border: 0.01px solid rgb(201, 200, 200);
        padding-top: 10px;
    }
    .r-top{
        display: flex;
        font-size: 22px;
        color: #ff2832;
        justify-content: space-between;
        width: 200px;
        height: 39px;
        vertical-align: middle;
        border-bottom: 2px solid #ff2832;

    }
    .p{
        display: flex;
    }
    .point{
        width: 10px;
        height: 10px;
        border-radius: 10px;
        /* background-color: rgb(201, 200, 200); */
        margin-right: 5px;
        /* border: 0.2px solid black; */
        vertical-align: middle;
        margin-top: 15px;
    }
    .l-left,.l-right{
        border: 0.02px solid rgb(201, 200, 200);
        height: 115px;
    }
    .red{
        color: #ff2832;
        text-decoration: underline;
    }
</style>