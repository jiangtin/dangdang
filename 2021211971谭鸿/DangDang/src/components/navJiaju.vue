<template>
    <div class="navJiaju totle">
        <div class="line line1">
            <div class="title">家纺</div>
            <div class="Name Name1">
                <div class="name" v-for="(i,j) in jiaju1"  @mouseover="change(1,j)" :class=" (k=== j&&n===1)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
           
        <div class="line">
            <div class="title">时尚家饰</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in  jiaju2"  @mouseover="change(2,j)" :class=" (k=== j&&n===2)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">水具</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in  jiaju3"  @mouseover="change(3,j)" :class=" (k=== j&&n===3)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">厨具</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in  jiaju4"  @mouseover="change(4,j)" :class=" (k=== j&&n===4)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">整理收纳</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in  jiaju5"  @mouseover="change(5,j)" :class=" (k=== j&&n===5)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">清洁护理</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in jiaju6"  @mouseover="change(6,j)" :class=" (k=== j&&n===6)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">居家日用</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in  jiaju7"  @mouseover="change(7,j)" :class=" (k=== j&&n===7)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">健身瑜伽</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in  jiaju8"  @mouseover="change(8,j)" :class=" (k=== j&&n===8)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">宠物用品</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in  jiaju9"  @mouseover="change(9,j)" :class=" (k=== j&&n===9)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">汽车用品</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in  jiaju10"  @mouseover="change(10,j)" :class=" (k=== j&&n===10)? 'red ' : ''">{{i.name}}</div>
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
            jiaju1:[{name:'床品套件'},{name:'酒店床品'},{name:'轻奢床品'},{name:'床单/被罩'},{name:'儿童床品'},{name:'床垫/床褥'},{name:'靠垫/坐垫'},{name:'枕芯'},{name:'毛巾/浴巾'},{name:'家居鞋'},{name:'夏被'},{name:'凉席'},],
            jiaju2:[{name:' 地毯/地垫'},{name:'沙发垫'},{name:'窗帘/浴帘'},{name:'桌布/罩件'},{name:'挂钟/闹钟'},{name:'墙壁装饰'},{name:'摆饰/挂件'},{name:'节庆/婚庆用品'}],
            jiaju3:[{name:'塑料杯'},{name:'玻璃杯'},{name:'保温杯'},{name:'保温壶'},{name:'儿童水杯'},{name:'陶瓷/马克杯'},{name:'茶具'},{name:'酒具'},{name:'咖啡具'}],
            jiaju4:[{name:'炒锅'},{name:'煎锅'},{name:'蒸锅'},{name:'压力锅'},{name:'汤煲汤锅'},{name:'奶锅'},{name:'套装锅'},{name:'保鲜盒'},{name:'刀剪菜板'},{name:'碗盘餐具'},{name:'厨房杂件'}],
            jiaju5:[{name:'收纳柜'},{name:'整理箱'},{name:'收纳盒'},{name:'压缩袋'},{name:'防尘罩'},{name:'置物架/篮衣'},{name:'儿童收纳'},{name:'架/烫衣板'}],
            jiaju6:[{name:'清洁工具'},{name:'保暖防护'},{name:'垃圾桶/袋'},{name:'一次性用品'},{name:'卫浴用品'},{name:'净化除味'}],
            jiaju7:[{name:' 鲜花绿植'},{name:'雨伞雨具'},{name:'遮阳伞'},{name:'居礼品'},{name:'口罩'},{name:'眼罩'},{name:'耳塞'},{name:'手套'},{name:'杀虫驱蚊'},{name:'儿童雨具'}],
            jiaju8:[{name:'瑜伽垫'},{name:'瑜伽套装'},{name:'瑜伽配件'}],
            jiaju9:[{name:'宠物食品'},{name:'宠物食具'},{name:'美容清洁'},{name:'美容工具'},{name:'窝垫/笼具'},{name:'宠物牵引'},{name:'宠物玩具'}],
         jiaju10:[{name:' 坐垫'},{name:'脚垫'},{name:'竹炭'},{name:'雨刷'},{name:'玻璃水'}],
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