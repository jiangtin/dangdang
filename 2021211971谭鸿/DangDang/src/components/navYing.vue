<template>
    <div class="navYing totle">
        <div class="left">
            <div class="Top">
                <div class="top">
                    <div class="topT">童装童鞋</div>
                    <div class="pic">
                        <svg class="icon"  aria-hidden="true" id="aright">
                            <use xlink:href="#icon-youjiantou"></use>
                        </svg>
                    </div>
                </div>
                <div class="top">
                    <div class="topT">母婴馆</div>
                    <div class="pic">
                        <svg class="icon"  aria-hidden="true" id="aright">
                            <use xlink:href="#icon-youjiantou"></use>
                        </svg>
                    </div>
                </div>
                <div class="top">
                    <div class="topT">玩具馆</div>
                    <div class="pic">
                        <svg class="icon"  aria-hidden="true" id="aright">
                            <use xlink:href="#icon-youjiantou"></use>
                        </svg>
                    </div>
                </div>
                <div class="top">
                    <div class="topT">童书馆</div>
                    <div class="pic">
                        <svg class="icon"  aria-hidden="true" id="aright">
                            <use xlink:href="#icon-youjiantou"></use>
                        </svg>
                    </div>
                </div>
                </div>
               
            <div class="line line1">
                <div class="title">童装</div>
                <div class="Name Name1">
                    <div class="name" v-for="(i,j) in ying1"  @mouseover="change(1,j)" :class=" (k=== j&&n===1)? 'red ' : ''">{{i.name}}</div>
                </div>
                </div>
               
            <div class="line">
                <div class="title">童鞋</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in ying2"  @mouseover="change(2,j)" :class=" (k=== j&&n===2)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">婴儿服饰</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in ying3"  @mouseover="change(3,j)" :class=" (k=== j&&n===3)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">童书</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in ying4"  @mouseover="change(4,j)" :class=" (k=== j&&n===4)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">奶粉</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in ying5"  @mouseover="change(5,j)" :class=" (k=== j&&n===5)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">辅食/营养品</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in ying6"  @mouseover="change(6,j)" :class=" (k=== j&&n===6)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">尿裤湿巾</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in ying7"  @mouseover="change(7,j)" :class=" (k=== j&&n===7)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">喂养用品</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in ying8"  @mouseover="change(8,j)" :class=" (k=== j&&n===8)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">洗护用品</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in ying9"  @mouseover="change(9,j)" :class=" (k=== j&&n===9)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div> <div class="line">
                <div class="title">宝宝寝居</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in ying10"  @mouseover="change(10,j)" :class=" (k=== j&&n===10)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div> <div class="line">
                <div class="title">玩具</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in ying11"  @mouseover="change(11,j)" :class=" (k=== j&&n===11)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div> <div class="line">
                <div class="title">妈妈专区</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in ying12"  @mouseover="change(12,j)" :class=" (k=== j&&n===12)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div> <div class="line">
                <div class="title">童车童床</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in ying13"  @mouseover="change(13,j)" :class=" (k=== j&&n===13)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div> 
        </div>
        <div class="right">
            <div>
                <img src="../assets/navIN/y1.jpg">
                <img src="../assets/navIN/y2.jpg">
                <img src="../assets/navIN/y3.jpg">
                <img src="../assets/navIN/y4.jpg">
                <img src="../assets/navIN/y5.jpg">
                <img src="../assets/navIN/y6.jpg">
                <img src="../assets/navIN/y7.jpg">


            </div>
            <div>
                <img src="../assets/navIN/y8.jpg">
                <img src="../assets/navIN/y9.jpg">
                <img src="../assets/navIN/y10.jpg">
                <img src="../assets/navIN/y11.png">
                <img src="../assets/navIN/y12.jpg">
                <img src="../assets/navIN/y13.jpg">
                <img src="../assets/navIN/y14.jpg">


               
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
            ying1:[{name:' T恤'},{name:'裤子'},{name:'连衣裙'},{name:'外套'},{name:'套装'},{name:'卫衣'},{name:'衬衫'},{name:'内衣'},{name:'家居'},{name:'针织衫'},{name:'背心'},{name:'儿童'},{name:'袜子'},{name:'羽绒服'},{name:'配饰'},{name:'用品'},{name:'演出服'},],
            ying2:[{name:'运动/户外鞋'},{name:'帆布鞋/板鞋'},{name:'凉鞋'},{name:'休闲鞋'},{name:'小白鞋'},{name:'拖鞋'},{name:'儿童雨鞋'},{name:'学步鞋'},{name:'皮鞋'},{name:'舞蹈鞋'},{name:'棉鞋'},{name:'雪地靴'},],
            ying3:[{name:' 婴儿内衣'},{name:'外出服'},{name:'婴儿连体衣'},{name:'婴儿裤子'},{name:'宝贝哈服'},{name:'婴儿帽袜'},{name:'学步鞋'},{name:'口水巾/围嘴'},{name:'婴儿礼盒'},{name:'配饰、用品'},{name:'内衣/家居服'}],
            ying4:[{name:' 0-2岁'},{name:'3-6岁'},{name:'7-7-10岁'},{name:'11-14岁'},{name:'中国儿童文学'},{name:'外国儿童文学'},{name:'文学精装图画书'},{name:'平装图画'},{name:'科普/百科'},{name:'婴儿读物'},
                    {name:'幼儿启蒙'},{name:'益智游戏'},{name:'玩具书'},{name:'动漫/卡通'},{name:'少儿英语'},{name:'励志/成长'},{name:'进口儿童书'},{name:'少儿期刊'},{name:'工具书'},{name:'更多'}],
            ying5:[{name:'1段'},{name:'2段'},{name:'3段'},{name:'4段/5段'},{name:'羊奶粉'},{name:'特殊配方奶粉'},{name:'孕妇奶粉'}],
            ying6:[{name:' 宝宝零食'},{name:'益生菌/初乳钙'},{name:'铁锌/维生素'},{name:'DHA/营养油'}],
            ying7:[{name:'NB'},{name:'S'},{name:'M'},{name:'L'},{name:'XL'},{name:'XXL'},{name:'拉拉裤'},{name:'婴儿湿巾'},{name:'成人尿裤'}],
            ying8:[{name:'奶瓶'},{name:'奶嘴'},{name:'吸奶器'},{name:'消毒清洁'},{name:'辅食料理'},{name:'牙胶安抚'},{name:'食物存储'},{name:'儿童餐具'},{name:'水杯/水壶'},{name:'围兜/罩衣'}],
            ying9:[{name:' 护肤'},{name:'洗发'},{name:'沐浴'},{name:'洗澡用具'},{name:'洗衣/清洁'},{name:'理发器'},{name:'口腔护理'},{name:'坐便器'},{name:'驱蚊用品'}],
            ying10:[{name:'凉席/蚊帐'},{name:'睡袋/抱被'},{name:'盖毯/被子'},{name:'床品床围'},{name:'毛巾/浴巾'},{name:'枕头枕套'},{name:'安全防护'}],
            ying11:[{name:'婴幼玩具'},{name:'早教益智'},{name:'积木拼插'},{name:'遥控电动模型'},{name:'玩具'},{name:'运动户外玩具'},{name:'娃娃毛绒玩具'},{name:'创意减压'},{name:'绘画手工'},{name:'学生用品'}],
            ying12:[{name:' 防辐射服'},{name:'孕妇装'},{name:'孕妈护肤'},{name:'待产护理'},{name:'产后塑身'},{name:'孕产妇内衣'}],
            ying13:[{name:'婴儿推车'},{name:'学步车'},{name:'安全座椅'},{name:'三轮车'},{name:'电动车'},{name:'扭扭车'},{name:'儿童自行车'},{name:'滑板车'},{name:'轮滑鞋'},{name:'婴儿床'}],

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