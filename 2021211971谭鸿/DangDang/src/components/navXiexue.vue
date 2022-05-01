<template>
    <div class="navXiexue totle">
        <div class="left">
            <div class="Top">
                <div class="top">
                    <div class="topT">鞋靴馆</div>
                    <div class="pic">
                        <svg class="icon"  aria-hidden="true" id="aright">
                            <use xlink:href="#icon-youjiantou"></use>
                        </svg>
                    </div>
                   
                </div>
                <div class="top">
                    <div class="topT">箱包馆</div>
                    <div class="pic">
                        <svg class="icon"  aria-hidden="true" id="aright">
                            <use xlink:href="#icon-youjiantou"></use>
                        </svg>
                    </div>
                   
                </div>
                </div>
               
            <div class="line line1">
                <div class="title">女鞋</div>
                <div class="Name Name1">
                    <div class="name" v-for="(i,j) in nvxie"  @mouseover="change(1,j)" :class=" (k=== j&&n===1)? 'red ' : ''">{{i.name}}</div>
                </div>
                </div>
               
            <div class="line">
                <div class="title">男鞋</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in nanxie"  @mouseover="change(2,j)" :class=" (k=== j&&n===2)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">童鞋</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in tongxie"  @mouseover="change(3,j)" :class=" (k=== j&&n===3)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">女包</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in nvbao"  @mouseover="change(4,j)" :class=" (k=== j&&n===4)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">男包</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in nanbao"  @mouseover="change(5,j)" :class=" (k=== j&&n===5)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">功能包</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in gongneng"  @mouseover="change(6,j)" :class=" (k=== j&&n===6)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
        </div>
        <div class="right">
            <div>
                <img src="../assets/navIN/xie1.jpg">
                <img src="../assets/navIN/xie2.jpg">

            </div>
            <div>
                <img src="../assets/navIN/xie3.jpg">
                <img src="../assets/navIN/xie4.jpg">
               
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
        nvxie:[{name:'帆布鞋'},{name:'老爹鞋'},{name:'小白鞋'},{name:'凉鞋'},{name:'玛丽珍鞋'},{name:'时尚布鞋'},{name:'平底鞋'},{name:'休闲鞋'},{name:'单鞋'},{name:'豆豆鞋'},{name:'低跟鞋'},{name:'坡跟鞋'},{name:'高跟鞋'},{name:'松糕鞋'},{name:'乐福鞋'},{name:'妈妈鞋'},{name:'拖鞋'},{name:'短靴'},{name:'女靴'}],
        nanxie:[{name:' 帆布鞋'},{name:'板鞋'},{name:'凉鞋'},{name:'户外休闲'},{name:'网面鞋'},{name:'乐福鞋'},{name:'商务休闲'},{name:'正装皮鞋'},{name:'运动休闲'},{name:'驾车鞋'},{name:'豆豆鞋'},{name:'布洛克工装鞋'},{name:'内增高'}],
        tongxie:[{name:' 休闲鞋'},{name:'运动/户外鞋'},{name:'棉鞋'},{name:'雪地靴'},{name:'帆布鞋/板鞋'},{name:'皮鞋'},{name:'拖鞋'},{name:'学步鞋'},{name:'舞蹈鞋'}],
        nvbao:[{name:'  单肩包'},{name:'双肩包'},{name:'斜挎包'},{name:'提挎多用包'},{name:'手拎包'},{name:'链条包'}],
        nanbao:[{name:' 手提包'},{name:'双肩包'},{name:'单肩/斜挎包'},{name:'钱包/卡包'},{name:'腰包'}],
        gongneng:[{name:' 拉杆箱'},{name:'旅行包'},{name:'书包'},],


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