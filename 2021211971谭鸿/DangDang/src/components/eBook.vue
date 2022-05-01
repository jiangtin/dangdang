<template>
    <div class="eBook totle">
        <div class="Top">
            <div class="top">
                <div class="topT">免费书</div>
                <div class="pic">
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-youjiantou"></use>
                    </svg>
                </div>
               
            </div>
            <div class="top">
                <div class="topT">电子书馆</div>
                <div class="pic">
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-youjiantou"></use>
                    </svg>
                </div>
               
            </div>
            <div class="top">
                <div class="topT">下载当当云阅读</div>
                <div class="pic">
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-youjiantou"></use>
                    </svg>
                </div>
            </div>
        </div>
           
        <div class="line line1">
            <div class="title">阅读器</div>
            <div class="Name Name1">
                <div class="name" v-for="(i,j) in yuedu"  @mouseover="change(1,j)" :class=" (k=== j&&n===1)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
           
        <div class="line">
            <div class="title">排行榜</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in paihang"  @mouseover="change(2,j)" :class=" (k=== j&&n===2)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">特价</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in tejia"  @mouseover="change(3,j)" :class=" (k=== j&&n===3)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">小说</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in xiaoshuo"  @mouseover="change(4,j)" :class=" (k=== j&&n===4)? 'red ' : ''"> {{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">文艺</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in wenyi "  @mouseover="change(5,j)" :class=" (k=== j&&n===5)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">经管</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in jingguan"  @mouseover="change(6,j)" :class=" (k=== j&&n===6)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">社科</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in sheke"  @mouseover="change(7,j)" :class=" (k=== j&&n===7)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">生活</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in shenghuo"  @mouseover="change(8,j)" :class=" (k=== j&&n===8)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">科教/进口书</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in kejiao"  @mouseover="change(9,j)" :class=" (k=== j&&n===9)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">下载app</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in xiazai"  @mouseover="change(10,j)" :class=" (k=== j&&n===10)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">管理电子书</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in guanli"  @mouseover="change(11,j)" :class=" (k=== j&&n===11)? 'red ' : ''">{{i.name}}</div>
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
            yuedu:[{name:'新锐版'},{name:'light(高清版)'}],
            paihang:[{name:'畅销总榜'},{name:'新书榜'},{name:'文艺小说榜'},{name:'经管励志榜'},{name:'科社历史榜'},{name:'科教榜'},{name:'生活帮'}],
            tejia:[{name:'免费书'},{name:'特价书'},{name:'限免抢'}],
            xiaoshuo:[{name:'侦探/悬疑/推理'},{name:'玄幻/惊悚'},{name:'中国近当代小说'},{name:'中国古典小说'},{name:'武侠小说'},{name:'外国小说'},{name:'穿越/言情'},{name:'爱情/情感'},{name:'影视/娱乐'}],
            wenyi:[{name:'传记'},{name:'文学评论与鉴赏'},{name:'随笔'},{name:'文学作品集'},{name:'纪实文学'},{name:'艺术'},{name:'摄影'}],
           jingguan:[{name:'成功/励志'},{name:'管理'},{name:'投资与理财'},{name:'经济'}],
           sheke:[{name:'历史'},{name:'心理学'},{name:'哲学'},{name:'政治/军事'},{name:'社会科学'},{name:'古籍'},{name:'法律'}],
            shenghuo:[{name:'亲子/家教'},{name:'育儿/早教'},{name:'两性关系'},{name:'孕产/胎教'},{name:'保健/养生'},{name:'旅游/地图'},{name:'烹饪/美食'},{name:'时尚/美妆'},{name:'手工diy'},{name:'家庭/家居'},],
            kejiao:[{name:'计算机/网络'},{name:'医学'},{name:'考试'},{name:'外语'},{name:'中小学教辅'},{name:'大中专教材'},{name:'工具书'},{name:'童书'},{name:'进口书'}],
            xiazai:[{name:'安卓版'},{name:'ios版'},],
            guanli:[{name:'管理我的书架'},{name:'查看我的账户'},],
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