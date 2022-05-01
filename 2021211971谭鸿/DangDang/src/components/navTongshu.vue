<template>
    <div class="navTongshu totle">
        <div class="Top">
            <div class="top">
                <div class="topT">图书馆</div>
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
            <!-- 榜单 -->
        <div class="paihang">
            <div class="title pai">排行榜</div>
            <div class="bangdan">
                <div class="bang">图书畅销榜</div>
                <svg class="icon"  aria-hidden="true" id="aright">
                    <use xlink:href="#icon-shuangyoujiantou-"></use>
                </svg>
                <div class="bang">新书热卖榜</div>
                <svg class="icon"  aria-hidden="true" id="aright">
                    <use xlink:href="#icon-shuangyoujiantou-"></use>
                </svg>
                <div class="bang">童书榜</div>
                <svg class="icon"  aria-hidden="true" id="aright">
                    <use xlink:href="#icon-shuangyoujiantou-"></use>
                </svg>
                <div class="bang">热搜榜</div>
                <svg class="icon"  aria-hidden="true" id="aright">
                    <use xlink:href="#icon-shuangyoujiantou-"></use>
                </svg>
                <div class="bang">好评榜</div>
                <svg class="icon"  aria-hidden="true" id="aright">
                    <use xlink:href="#icon-shuangyoujiantou-"></use>
                </svg>
                <div class="bang">飙升榜</div>
                <svg class="icon"  aria-hidden="true" id="aright">
                    <use xlink:href="#icon-shuangyoujiantou-"></use>
                </svg>
                <div class="bang">特价榜</div>
                <svg class="icon"  aria-hidden="true" id="aright">
                    <use xlink:href="#icon-shuangyoujiantou-"></use>
                </svg>
            </div>
        </div>
        <div class="line">
            <div class="title">童书</div>
            <div class="Name">
                <div class="name" v-for="(i,j) in tongshu"  @mouseover="change(1,j)" :class=" (k=== j&&n===1)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
           
        <div class="line">
            <div class="title">教育</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in jiaoyu"  @mouseover="change(2,j)" :class=" (k=== j&&n===2)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">文艺</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in wenyi"  @mouseover="change(3,j)" :class=" (k=== j&&n===3)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">人文科社</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in keshe"  @mouseover="change(4,j)" :class=" (k=== j&&n===4)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">励志</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in lizhi"  @mouseover="change(5,j)" :class=" (k=== j&&n===5)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">生活</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in shenghuo"  @mouseover="change(6,j)" :class=" (k=== j&&n===6)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">经管</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in jingguan"  @mouseover="change(7,j)" :class=" (k=== j&&n===7)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">科技</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in keji"  @mouseover="change(8,j)" :class=" (k=== j&&n===8)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">当当出版</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in chuban"  @mouseover="change(9,j)" :class=" (k=== j&&n===9)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">期刊/进口书</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in qikan"  @mouseover="change(10,j)" :class=" (k=== j&&n===10)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">音像</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in yinxiang"  @mouseover="change(11,j)" :class=" (k=== j&&n===11)? 'red ' : ''">{{i.name}}</div>
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
            tongshu:[{name:'0-2岁'},{name:'3-6岁'},{name:'7-10岁'},{name:'11-14岁'},{name:'绘本'},{name:'中国儿童文学'},{name:'外国儿童文学'},{name:'科普/百科'},{name:'婴儿读物'},{name:'幼儿启蒙'},{name:'益智游戏'},{name:'玩具书'},{name:'动漫/卡通'},{name:'少儿英语'},{name:'进口儿童书'},{name:'少儿期刊'}],
            jiaoyu:[{name:'中小学用书'},{name:'考试'},{name:'大中专教材'},{name:'外语'},{name:'工具书'},{name:'教师用书'},{name:'新概念'},{name:'中小学阅读'},{name:'英语四级'},{name:'英语六级'},{name:'考研'},{name:'公务员'},{name:'教师资格考试'}],
            wenyi:[{name:'小说'},{name:'文学'},{name:'传记'},{name:'青春文学'},{name:'动漫/幽默'},{name:'艺术'},{name:'摄影'},{name:'偶像明星'},{name:'涂色/填色'}],
            keshe:[{name:'哲学宗教'},{name:'历史'},{name:'政治军事'},{name:'文化'},{name:'社会科学'},{name:'心理学'},{name:'古籍'},{name:'法律'}],
            lizhi:[{name:'励志/成功'},{name:'心灵修养'},{name:'职场'},{name:'人生哲学'},{name:'人际交往'},{name:'口才/演讲/辩论'}],
            shenghuo:[{name:'两性'},{name:'孕期'},{name:'育儿'},{name:'亲子家教'},{name:'保健'},{name:'运动'},{name:'休闲'},{name:'旅游'},{name:'美食'},{name:'美妆'},{name:'手工div'},{name:'家庭家居'},],
            jingguan:[{name:'经济'},{name:'管理'},{name:'投资与理财'},{name:'股票'},{name:'金融'},{name:'市场/销售'},{name:'会计'},{name:'互联网'}],
            keji:[{name:'科普读物'},{name:'计算机/网络'},{name:'医学'},{name:'工业技术'},{name:'建筑'},{name:'自然科学'},{name:'农业/林业'}],
            chuban:[{name:'小说'},{name:'文学'},{name:'社科'},{name:'外语'},{name:'教辅'},{name:'艺术'},{name:'童书'},{name:'青春文学'},{name:'生活'},{name:'励志'},],
            qikan:[{name:'英文图书'},{name:'港台图书'},{name:'日文图书'},{name:'法文图书'},{name:'韩文图书'},{name:'其他语种'},{name:'杂志'},{name:'英文原版小说'},{name:'进口艺术画册'}],
            yinxiang:[{name:'音乐'},{name:'影视'},{name:'软件'},{name:'游戏'},{name:'教育音像'},{name:'华语流行'},{name:'儿童音乐'},{name:'动画片'},]
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
<style src="../webManage/css/nav.css" scoped>
</style>