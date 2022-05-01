<template>
    <div class="navLipin totle">
        <div class="Top">
            <div class="top">
                <div class="topT">礼品卡馆</div>
                <div class="pic">
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-youjiantou"></use>
                    </svg>
                </div>
               
            </div>
            <div class="top">
                <div class="topT">礼品卡优惠专区</div>
                <div class="pic">
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-youjiantou"></use>
                    </svg>
                </div>
               
            </div>
        </div>
           
        <div class="line line1">
            <div class="title">V卡</div>
            <div class="Name Name1">
                <div class="name" v-for="(i,j) in lipin1"  @mouseover="change(1,j)" :class=" (k=== j&&n===1)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
           
        <div class="line">
            <div class="title">经典卡</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in lipin2"  @mouseover="change(2,j)" :class=" (k=== j&&n===2)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">主题卡</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in lipin3"  @mouseover="change(3,j)" :class=" (k=== j&&n===3)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">节日卡</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in lipin4"  @mouseover="change(4,j)" :class=" (k=== j&&n===4)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">生肖卡</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in lipin5"  @mouseover="change(5,j)" :class=" (k=== j&&n===5)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">教育培训</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in lipin6"  @mouseover="change(6,j)" :class=" (k=== j&&n===6)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
    </div>
</template>
<script>

    export default{
    data:function(){
        return {
            k:20,
            n:0,  
          lipin1:[{name:' 固定面值卡'},{name:'自定义面值卡'}],
          lipin2:[{name:'读书卡'},{name:'经典卡'},{name:'瑞狗闹春'}],
          lipin3:[{name:'奇先生妙小姐'},{name:'生日卡'},{name:'三国演义'},{name:'西游记'},{name:'红楼梦'},{name:'水浒传'},{name:'梅兰竹菊'},{name:'歪歪兔'},{name:' 百变马丁'},{name:'皮皮鲁系列'},{name:'Baby卡'},],
          lipin4:[{name:'元旦卡'},{name:'春节卡'},{name:'情人卡'},{name:'女人卡'},{name:'五一卡'},{name:'端午卡'},{name:'教师卡'},{name:' 中秋卡'},{name:'国庆卡'},{name:'圣诞卡'},{name:'新生儿卡'}],
          lipin5:[{name:'鼠'},{name:'牛'},{name:'虎'},{name:'兔'},{name:'龙'},{name:'蛇'},{name:'马'},{name:'羊'},{name:'猴'},{name:'鸡'},{name:'狗'},{name:'猪'},],
          lipin6:[{name:'职业资质'},{name:'学历'},{name:'教育'},{name:'语言培训'},{name:'在线教学'},{name:'学习卡'}],
 }
    },
    methods:{
        change(m,j){
            this.n=m
            this.k=j
        }
    }
    
}
</script>
<style  src="../webManage/css/nav.css"  scoped>

</style>