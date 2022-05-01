<template>
    <div class="navJiaju2 totle">
        <div class="line line1">
            <div class="title">客厅家具</div>
            <div class="Name Name1">
                <div class="name" v-for="(i,j) in jiaju1"   @mouseover="change(1,j)" :class=" (k=== j&&n===1)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
           
        <div class="line">
            <div class="title">卧室家具</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in  jiaju2"  @mouseover="change(2,j)" :class=" (k=== j&&n===2)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">书房家具</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in  jiaju3"   @mouseover="change(3,j)" :class=" (k=== j&&n===3)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">储物家具</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in  jiaju4" @mouseover="change(4,j)" :class=" (k=== j&&n===4)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">厨房卫浴</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in  jiaju5"  @mouseover="change(5,j)" :class=" (k=== j&&n===5)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">灯具照明</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in jiaju6" @mouseover="change(6,j)" :class=" (k=== j&&n===6)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">家装建材</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in  jiaju7"  @mouseover="change(7,j)" :class=" (k=== j&&n===7)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">按摩设备</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in  jiaju8 " @mouseover="change(8,j)" :class=" (k=== j&&n===8)? 'red ' : ''">{{i.name}}</div>
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
            jiaju1:[{name:'沙发'},{name:'茶几'},{name:'鞋柜'},{name:'电视柜'},{name:'椅子'},{name:'凳子'},{name:'餐桌'},{name:'餐边柜'},{name:'餐椅'},{name:'酒柜'},],
            jiaju2:[{name:' 简易衣柜'},{name:'大衣柜'},{name:'床'},{name:'床垫'},{name:'梳妆台'},{name:'斗柜'},{name:'床头柜'},{name:'童床'},{name:'儿童床垫'}],
            jiaju3:[{name:'书柜'},{name:'书架'},{name:'书桌'},{name:'电脑桌椅'},{name:'儿童学习桌椅'},{name:'办公家具'}],
            jiaju4:[{name:'层架置物架'},{name:'鞋架'},{name:'衣帽架'},{name:'墙面搁架'},{name:'收纳家具'},{name:'晾衣架'},{name:'架/装饰架'},{name:'户外家具'},{name:'家用梯'}],
            jiaju5:[{name:'座便器'},{name:'淋浴花洒'},{name:'浴室柜'},{name:'水槽龙头'},{name:'厨卫'},{name:'挂件'},{name:'地漏'},{name:'净水软水'},{name:'浴霸'}],
            jiaju6:[{name:' 花灯/吊灯/水晶灯'},{name:'吸顶灯'},{name:'阅读台灯'},{name:'镜前灯'},{name:'筒射灯'},{name:'节能灯'},{name:'装饰台灯'},{name:'小夜灯'},{name:'壁灯'}],
            jiaju7:[{name:'开关插座'},{name:'插线板'},{name:'手动工具'},{name:'电动工具'},{name:'家用五金'},{name:'壁纸'},{name:'仪器仪表'},{name:'测量工具'}],
            jiaju8:[{name:'按摩椅'},{name:'按摩器'},],       
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