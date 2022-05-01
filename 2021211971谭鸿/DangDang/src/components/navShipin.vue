<template>
    <div class="navShipin totle">
        <div class="left">
            <div class="Top">
                <div class="top">
                    <div class="topT">食品</div>
                    <div class="pic">
                        <svg class="icon"  aria-hidden="true" id="aright">
                            <use xlink:href="#icon-youjiantou"></use>
                        </svg>
                    </div>
                </div>
                </div>
               
            <div class="line line1">
                <div class="title">休闲食品</div>
                <div class="Name Name1">
                    <div class="name" v-for="(i,j) in xiuxian"  @mouseover="change(1,j)" :class=" (k=== j&&n===1)? 'red ' : ''">{{i.name}}</div>
                </div>
                </div>
               
            <div class="line">
                <div class="title">进口食品</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in jinkou"  @mouseover="change(2,j)" :class=" (k=== j&&n===2)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">粮油调味</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in liangyou"  @mouseover="change(3,j)" :class=" (k=== j&&n===3)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">茶酒</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in cha"  @mouseover="change(4,j)" :class=" (k=== j&&n===4)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">冲调饮品</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in chongtiao"  @mouseover="change(5,j)" :class=" (k=== j&&n===5)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">果蔬肉蛋</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in guoshu"  @mouseover="change(6,j)" :class=" (k=== j&&n===6)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">营养成分</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in yingyang"  @mouseover="change(7,j)" :class=" (k=== j&&n===7)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">滋补饮品</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in zibu"  @mouseover="change(8,j)" :class=" (k=== j&&n===8)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
        </div>
        <div class="right">
            <div>
                <img src="../assets/navIN/sp1.jpg">
                <img src="../assets/navIN/sp2.jpg">


            </div>
            <div>
                <img src="../assets/navIN/sp3.jpg">

               
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
            xiuxian:[{name:'坚果/炒货'},{name:'蜜饯果干'},{name:'糖果/巧克力'},{name:'饼干糕点'},{name:'肉干肉脯'},],
            jinkou:[{name:'饼干'},{name:'糕点'},{name:'零食'},{name:'冲调饮品'},{name:'牛奶'},{name:'粮油'},{name:'调味'}],
            liangyou:[{name:'干货'},{name:'食用油'},{name:'米面'},{name:'杂粮'},{name:'方便食品'},{name:'有机食品'},{name:'调味品'},{name:'烘焙'},{name:'原料'},],
            cha:[{name:'白酒'},{name:'葡萄酒'},{name:'洋酒'},{name:'啤酒'},{name:'绿茶'},{name:'乌龙茶'},{name:'花草茶'},{name:'普洱'},{name:'红茶'},],
            chongtiao:[{name:'牛奶乳品'},{name:'冲饮'},{name:'谷物'},{name:'蜂产品/柚子茶'},{name:'饮料'},{name:'咖啡/奶茶'}],
            guoshu:[{name:'水果'},{name:'蔬菜'},{name:'禽肉'},{name:'海鲜水产'},{name:'海参'}],
            yingyang:[{name:'维生素'},{name:'鱼油/磷脂'},{name:'蛋白质'},{name:'植物精华'}],
            zibu:[{name:'阿胶'},{name:'蜂蜜/蜂产品'},{name:'海参'},{name:'燕窝'},{name:'石斛/枫斗'}], 
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
<style src="../webManage/css/nav-pic.css" scoped>
</style>