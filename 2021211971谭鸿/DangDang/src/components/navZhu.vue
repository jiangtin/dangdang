<template>
    <div class="navZhu totle">
        <div class="left">
            <div class="Top">
                <div class="top">
                    <div class="topT">珠宝馆</div>
                    <div class="pic">
                        <svg class="icon"  aria-hidden="true" id="aright">
                            <use xlink:href="#icon-youjiantou"></use>
                        </svg>
                    </div>
                </div>
                </div>
               
            <div class="line line1">
                <div class="title">黄金珠宝</div>
                <div class="Name Name1">
                    <div class="name" v-for="(i,j) in huangjin"  @mouseover="change(1,j)" :class=" (k=== j&&n===1)? 'red ' : ''">{{i.name}}</div>
                </div>
                </div>
               
            <div class="line">
                <div class="title">流行饰品</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in liuxing"  @mouseover="change(2,j)" :class=" (k=== j&&n===2)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">礼品</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in lipin"  @mouseover="change(3,j)" :class=" (k=== j&&n===3)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
        </div>
        <div class="right">
            <div>
                <img src="../assets/navIN/zb1.jpg">
            </div>
            <div>
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
            huangjin:[{name:'投资金'},{name:'K金'},{name:'饰品'},{name:'钻饰'},{name:'珍珠'},{name:'翡翠'},{name:'玉石'},{name:'黄金对戒'},{name:'项链'},{name:'转运珠'},],
            liuxing:[{name:'水晶玛瑙'},{name:'银饰'},{name:'项链'},{name:'发饰'},{name:'手镯/手链'},{name:'戒指'},{name:'宝宝银饰'}],
            lipin:[{name:'文具'},{name:'礼品'},{name:'创意'},{name:'定制礼品'},{name:'工艺礼品'},{name:'电子烟'}],
           
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