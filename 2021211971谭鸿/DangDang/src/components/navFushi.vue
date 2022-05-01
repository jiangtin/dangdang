<template>
    <div class="navFushi totle">
        <div class="left">
            <div class="Top">
                <div class="top">
                    <div class="topT">内衣</div>
                    <div class="pic">
                        <svg class="icon"  aria-hidden="true" id="aright">
                            <use xlink:href="#icon-youjiantou"></use>
                        </svg>
                    </div>
                   
                </div>
                </div>
               
            <div class="line line1">
                <div class="title">女装</div>
                <div class="Name Name1">
                    <div class="name" v-for="(i,j) in nvzhuang" @mouseover="change(1,j)" :class=" (k=== j&&n===1)? 'red ' : ''">{{i.name}}</div>
                </div>
                </div>
               
            <div class="line">
                <div class="title">男装</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in nanzhuang" @mouseover="change(2,j)" :class=" (k=== j&&n===2)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">内衣</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in neiyi" @mouseover="change(3,j)" :class=" (k=== j&&n===3)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">服饰配件</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in peijian" @mouseover="change(4,j)" :class=" (k=== j&&n===4)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">童装童鞋</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in tongzhuang" @mouseover="change(5,j)" :class=" (k=== j&&n===5)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
        </div>
        <div class="right">
            <div>
                <img src="../assets/navIN/cl0.png">
                <img src="../assets/navIN/cl1.jpg">
                <img src="../assets/navIN/cl2.jpg">
                <img src="../assets/navIN/cl3.jpg">
                <img src="../assets/navIN/cl4.jpg">
                <img src="../assets/navIN/cl5.jpg">

            </div>
            <div>
                <img src="../assets/navIN/cl6.jpg">
                <img src="../assets/navIN/cl7.png">
                <img src="../assets/navIN/cl8.jpg">
                <img src="../assets/navIN/cl9.jpg">
                <img src="../assets/navIN/cl10.jpg">
                <img src="../assets/navIN/cl11.png">

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
            nvzhuang:[{name:'连衣裙'},{name:'T恤'},{name:'衬衫'},{name:'外套'},{name:'卫衣'},{name:'风衣'},{name:'羊绒半身裙'},{name:'裤装'},{name:'休闲裤'},{name:'牛仔裤'},{name:'套装'},{name:'西装'},{name:'短裤'},{name:'毛呢大衣'},{name:'针织毛衣'},{name:'羽绒服'},{name:'大码'},{name:'亲子装'},{name:'真丝'},{name:'少女装'},{name:'少淑装'},{name:'淑女装'},{name:'成熟女装'},{name:'中老年'}],
            nanzhuang:[{name:'卫衣'},{name:'夹克'},{name:'克休闲裤'},{name:'牛仔裤'},{name:'长袖'},{name:'T恤'},{name:'长袖衬'},{name:'针织衫'},{name:'风衣'},{name:'毛呢大衣'},{name:'皮衣外套'},{name:'短袖T恤'},{name:'polo衫'},{name:'短袖'},{name:'衬衫'},{name:'短裤'},{name:'西服西裤'},{name:'西服套装'},{name:'羽绒服'},{name:' 青春'},{name:'商务'},{name:'休闲'},{name:'潮牌'},{name:'中老年男装'}],
            neiyi:[{name:' 男士家居服'},{name:'女士家居服'},{name:'睡裙'},{name:'浴袍'},{name:'秋衣秋裤'},{name:'文胸'},{name:'文胸套装'},{name:'抹胸'},{name:'女士内裤'},{name:'男士内裤'},{name:'打底裤'},{name:'女袜'},{name:'男袜'},{name:'棉袜'},{name:'连裤袜'},{name:'塑身衣'},{name:'背心'},{name:'吊带'},{name:'女士保暖'},{name:'男士保暖'},{name:'保暖套装'}],
            peijian:[{name:' 帽子'},{name:'手套'},{name:'腰带/皮带/腰链/腰封'},{name:'围巾/披肩/丝巾'},{name:'太阳镜'},{name:'领带/领结/领带夹'},{name:'其他'}],
            tongzhuang:[{name:'长袖'},{name:'T恤'},{name:'裤子'},{name:'连衣裙'},{name:'卫衣'},{name:'衬衫套装'},{name:'打底裤'},{name:'针织衫'},{name:' 外套'},{name:'背心'},{name:'内衣'},{name:'家居'},{name:'儿童袜子'},{name:'演出服'},{name:' 配饰/用品'},{name:'羽绒服'},{name:'运动/户外鞋'},{name:'休闲鞋'},{name:'帆布鞋/板鞋'},{name:'小白鞋'},{name:'皮鞋'},{name:'学步鞋'},{name:'凉鞋'},{name:'拖鞋'},{name:'舞蹈鞋'},{name:'棉鞋'},{name:'靴子'},{name:'婴儿服饰'}],

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