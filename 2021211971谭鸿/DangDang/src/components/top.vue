<template>
    <div class="top">
        <!-- left -->
        <div @mouseleave="backC()">
            <div class="top-left"   @mouseover="changeRed(11)" >
                <div>送至：</div>
                <div class="place">
                    <div>{{place}}</div>
                    <svg class="icon xiaJT"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-xiajiantou"></use>
                    </svg>
                </div>
            </div>
            <div class="places" @mouseover="changeRed(11)" v-if="a===11">
                <div class="Tplace" v-for="n in places" >
                    {{n.name}}
                </div>
            </div>
        </div>
        <!-- right -->

        <div class="top-right">
            <div class="topInline" id="in-login">
                <div v-show="name==' ' ">欢迎光临当当，</div>
                <div class="yes" v-show="this.name!='' ">欢迎回来!{{name}}  &nbsp; &nbsp; </div>
                请
                <router-link to="/Login">登录</router-link>
                成为会员</div>

            <div class="topInline" id="buy-car" @mouseover="changeRed(9)" @mouseleave="backC()"  :class="  a=== 9? 'red' : ''">
                <svg class="icon carPic"  aria-hidden="true" id="aright">
                    <use xlink:href="#icon-gouwuche1"></use>
                </svg>
                <div>购物车</div>
                <div class="num">{{num}}</div>
            </div>

            <div class="topInline"  @mouseover="changeRed(1)" @mouseleave="backC()"  :class="  a=== 1? 'red' : ''">我的订单</div>

            <div class="topInline"  @mouseover="changeRed(2)" @mouseleave="backC()" :class="  a=== 2? 'red' : ''">我的云书法</div>
            <div>
                <div class="topInline" @mouseover="changeRed(3)" @mouseleave="backC()"  :class="  a=== 3? 'red' : ''">
                    <div >我的当当</div>
                    <svg class="icon xiaJT"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-xiajiantou"></use>
                    </svg>
                </div>
                <div class="momos" v-if="a===3">
                    <div class="momo"> 银铃铛抵现</div>
                    <div class="momo">我的收藏</div>
                    <div class="momo">我的余额</div>
                    <div class="momo">我的评论</div>
                    <div class="momo">礼券/礼品卡</div>
                </div>
            </div>
            <div>
                <div class="topInline" @mouseover="changeRed(4)" @mouseleave="backC()"  :class="  a=== 4? 'red' : ''">
                    <div>当当拼团</div>
                    <svg class="icon xiaJT"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-xiajiantou"></use>
                    </svg>
                </div>
                <div class="momos" v-if="a===4">
                    <div class="momo"> 当当拼团</div>
                </div>
            </div>

            <div class="topInline" @mouseover="changeRed(5)" @mouseleave="backC()"  :class="  a=== 5? 'red' : ''">小说投稿</div>
            <div>
                <div class="topInline" @mouseover="changeRed(6)" @mouseleave="backC()"  :class="  a=== 6? 'red' : ''">
                    <div>企业采购</div>
                    <svg class="icon xiaJT"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-xiajiantou"></use>
                    </svg>
                </div>
                <div class="momos" v-if="a===6">
                    <div class="momo">大宗采购</div>
                    <div class="momo">礼品卡采购</div>
                    <div class="momo">礼品卡激活</div>
                    <div class="momo">礼品卡使用</div>
                    <div class="momo">分销/荐购</div>
                    <div class="momo">礼品卡专区</div>
                </div>
            </div>
            <div>
                <div class="topInline" @mouseover="changeRed(7)" @mouseleave="backC()"  :class="  a=== 7? 'red' : ''">
                    <div>客户服务</div>
                    <svg class="icon xiaJT"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-xiajiantou"></use>
                    </svg>
                </div>
                <div class="momos" v-if="a===7">
                    <div class="momo"> 帮助中心</div>
                    <div class="momo">  自助退换货</div>
                    <div class="momo">自助发票</div>
                    <div class="momo">联系客服</div>
                    <div class="momo">  我要投诉</div>
                </div>
            </div>
          
            <div class="topInline" @mouseover="changeRed(8)" @mouseleave="backC()"  :class="  a=== 8? 'red' : ''">切换无障碍</div>
        </div>
        </div>
</template>
<script>
export default{
    props:['name'], 
    data:function(){
        return {
            num: 0,
            a:0,
             place: '北京',
             places:[
                 {name:'北京'}, {name:'天津'}, {name:'河北'}, {name:'山西'}, {name:'内蒙古'}, {name:'辽宁'},
                 {name:'吉林'}, {name:'黑龙江'}, {name:'上海'}, {name:'江苏'}, {name:'浙江'}, {name:'安徽'},
                 {name:'福建'}, {name:'江西'}, {name:'山东'}, {name:'河南'}, {name:'湖北'}, {name:'湖南'},
                 {name:'广东'}, {name:'广西'}, {name:'海南'}, {name:'重庆'}, {name:'四川'}, {name:'贵州'},
                 {name:'云南'}, {name:'西藏'}, {name:'陕西'}, {name:'甘肃'}, {name:'青海'}, {name:'宁夏'}, {name:'新疆'},
                 {name:'台湾'}, {name:'香港'}, {name:'澳门'}, {name:'钓鱼岛'},
             ],
        }
    },
    methods:{
        changeRed(m){
                this.a=m
        },
        backC(){
            this.a=0
        }

    }
}

</script>

<style lang="less" scoped>
.top{
    width:1520px;
    justify-content: space-between;
    display: flex;
    font-size: 12px;
    font-weight: 100;
    padding: 0 160px;
    height: 35px;
    align-items: center;
    vertical-align: middle;
    background-color: rgb(248, 248, 248);
    color: #4b4a4a;
    margin-top: -5px;
    font-weight: 100;
}
.top-left{
  display: flex;
  padding-left: 10px;
}
.top-right{
    display: flex;
}
.topInline{
    height: 20px;
    align-items: center;
    display: flex;
    vertical-align: middle;
    margin-left: 10px;
    border-left: 0.5px solid rgb(216, 214, 214);
    vertical-align: middle;
    padding-left: 7px;
    /* width: 70px; */
}
.place{
    display: flex;
}
.xiaJT{
    width: 15px;
    height: 15px;
}
.carPic{
    width: 25px;
    height: 25px;
    fill: #ff2832;
    vertical-align: middle;
}
#in-login ,#buy-car{
    border-left: none;
}
.red{
    color: #ff2832;
    background-color: #fff;
}
.momos{
    border: 1.5px solid #c5c5c5;
    position: relative;
    /* height: 90px; */
    margin: 1px -11px -145px 10px;
    background-color: #fff;
    border-top: none;  
    /* display: none; */
}
.momo{
    padding-left: 5px;
    margin-top: 8px;
}
.places{
    height: 210px;
    width: 300px;
    border: 1.5px solid #c5c5c5;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    background-color: #fff;
    position: absolute;
    margin-bottom: -300px;
    z-index: 3;
}
.yes{
    color: #ff2832;
}
.Tplace{
    width: 58px;
    padding-left: 5px;
    margin-top: 10px;
    font-size: 12px;
}
.router-link-active {
  color: #ff2832;
}
a{
  text-decoration: none;
  color: #ff2832;
}

</style>