<template>
    <div class="navYundong totle">
        <div class="left">
            <div class="Top">
                <div class="top">
                    <div class="topT">户外运动馆</div>
                    <div class="pic">
                        <svg class="icon"  aria-hidden="true" id="aright">
                            <use xlink:href="#icon-youjiantou"></use>
                        </svg>
                    </div>
                </div>
                </div>
               
            <div class="line line1">
                <div class="title">运动鞋服</div>
                <div class="Name Name1">
                    <div class="name" v-for="(i,j) in yundong"   @mouseover="change(1,j)" :class=" (k=== j&&n===1)? 'red ' : ''">{{i.name}}</div>
                </div>
                </div>
               
            <div class="line">
                <div class="title">户外鞋服</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in huwai"   @mouseover="change(2,j)" :class=" (k=== j&&n===2)? 'red ' : ''"> {{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">户外装备</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in zhuangbei"   @mouseover="change(3,j)" :class=" (k=== j&&n===3)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">健身器材</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in jianshen"   @mouseover="change(4,j)" :class=" (k=== j&&n===4)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">体育娱乐</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in tiyu"   @mouseover="change(5,j)" :class=" (k=== j&&n===5)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">垂钓用品</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in chuidiao"   @mouseover="change(6,j)" :class=" (k=== j&&n===6)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">瑜伽运动</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in yujia"   @mouseover="change(7,j)" :class=" (k=== j&&n===7)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">水上运动</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in shuishang"   @mouseover="change(8,j)" :class=" (k=== j&&n===8)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
        </div>
        <div class="right">
            <div>
                <img src="../assets/navIN/yd1.jpg">
                <img src="../assets/navIN/yd2.jpg">
                <img src="../assets/navIN/yd3.jpg">


            </div>
            <div>
                <img src="../assets/navIN/yd4.jpg">
                <img src="../assets/navIN/yd5.jpg">
                <img src="../assets/navIN/yd6.jpg">

               
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
       yundong:[{name:'跑步鞋'},{name:'休闲鞋/板鞋'},{name:'篮球鞋'},{name:'羽绒服'},{name:'运动棉'},{name:'服夹克/外套'},{name:'卫衣'},{name:'运动裤'},{name:'运动T恤'},{name:'POLO衫'},{name:'运动套装'},{name:'帆布鞋'},{name:'足球鞋'},{name:'乒网羽鞋'},{name:'综训鞋'},{name:'运动包'},{name:'运动配件'}],
            huwai:[{name:'冲锋衣裤'},{name:'户外羽绒服/棉服'},{name:'皮肤风衣'},{name:'速干衣裤'},{name:'软壳/抓绒衣裤'},{name:'功能内衣'},{name:'帽子'},{name:'手套'},{name:'登山鞋'},{name:'溯溪鞋'},{name:'徒步鞋'},{name:'沙滩鞋'},{name:'越野跑鞋'},{name:'户外袜子'}],
            zhuangbei:[{name:' 帐篷'},{name:'户外背包'},{name:'防潮垫/野餐垫'},{name:'野炊/烧烤'},{name:'折叠家具'},{name:'照明工具'},{name:'水具/水壶'},{name:'睡袋'},{name:'头巾/手杖'}],
            jianshen:[{name:' 踏步机/健身车'},{name:'运动护具'},{name:'哑铃'},{name:'仰卧板'},{name:'健身小器械'},{name:'滑板'}],
            tiyu:[{name:' 篮球'},{name:'羽毛球'},{name:'足球'},{name:'棋牌麻将'},{name:'轮滑鞋   '}],
            chuidiao:[{name:'鱼竿'},{name:'鱼钩'},{name:'鱼线'},{name:'钓箱'},{name:'鱼包'},{name:'钓鱼桌椅'}],
            yujia:[{name:'瑜伽服'},{name:'瑜伽垫'},{name:'瑜伽配件'}],
            shuishang:[{name:'女士泳衣'},{name:'泳裤'},{name:'儿童泳衣'},{name:'泳镜'},{name:'泳帽'},{name:'潜水装备'}],

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