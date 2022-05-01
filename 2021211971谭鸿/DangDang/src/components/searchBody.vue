<template>
<div class="searchBody">

    <div class="shang">

         <!-- 左边 -->
    <div class="Left">
          
        <div class="left" v-for="(i,j) in Nmsg">
              <!-- 图    -->
            <div class="l-left"><img :src="require('@/assets/search/'+i.pic)" ></div>
            <!-- 详情页面 -->
            <div class="l-right">
                <div class="Title">
                    <div class="title">{{i.title}}</div>
                    <div class="line">{{i.line}}</div>
                </div>
                <!-- 第二行 -->
                <div class="Price">
                    <div class="price">
                        <svg class="icon"  aria-hidden="true" id="aright">
                            <use xlink:href="#icon-qianqian-"></use>
                        </svg>
                        {{i.price}}
                    </div>
                    <div class="Old">
                        定价： <div class="old">
                            <svg class="icon"  aria-hidden="true" id="aright">
                                <use xlink:href="#icon-qianqian-"></use>
                            </svg>{{i.old}}</div>
                        {{i.zhe}}
                    </div>
                    <div  class="eBook" v-show="i.ebook!=0">
                        <div class="eT">电子书 :</div>
                        <div class="ebook">
                            <svg class="icon"  aria-hidden="true" id="aright">
                                <use xlink:href="#icon-qianqian-"></use>
                            </svg>{{i.ebook}}
                        </div>
                    </div>
                </div>
                <!-- 第三行 -->
                <div class="chu">
                    <div class="blue">
                        {{i.author}}
                    </div>
                    著；&nbsp;
                    /&nbsp; {{i.time}} /&nbsp;&nbsp;
                    <div class="blue">{{i.chuban}}</div>
                </div>
                   <!-- 第四行 -->
                   <div class="ping">
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-shoucang"></use>
                    </svg>
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-shoucang"></use>
                    </svg>
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-shoucang"></use>
                    </svg>
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-shoucang"></use>
                    </svg>
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-shoucang"></use>
                    </svg>
                    &nbsp;&nbsp;&nbsp; {{i.num1}}条评论
                   </div>
                   <!-- 第五行 -->
                   <div class="line5">
                       <div class="ziying">自营</div>
                       <div class="manjian">满100-50</div>
                   </div>
                   <!-- 第六行 -->
                   <div class="detail">
                       {{i.detail}}
                   </div>
                   <!-- 第七行 -->
                   <div class="btn">
                       <div class="buycar" @click="enter(j)">加入购物车</div>
                       <div class="eb" v-show="i.ebook!=0" >购买电子书</div>
                       <div class="shoucang">收藏</div>
                   </div>
            </div>


        </div>

        <div class="paginating">
            <div class="num or">1</div>
            <div class="num">2</div>
            <div class="num">3</div>
            <div class="num">4</div>
            <div class="num">5</div>
            <div class="num">6</div>
            <div class="num">...</div>
            <div class="num">100</div>
            <div class="next">
                <svg class="icon"  aria-hidden="true" id="aright">
                    <use xlink:href="#icon-youjiantou"></use>
                </svg>
            </div>
            <div class="p-r">
                到第
                <input type="text" value="1">
                页
                <div class="queding"> 确定</div>
            </div>
            
             </div>
    </div>
    
 <div class="right">
    <div class="r-top">
        推广商品
        <div class="gg">广告</div>
    </div>
    <div class="lines"  v-for="i in right">
        <img :src="i.pic">
        <div class="txt">{{i.txt}}</div>

        <div class="Price">
            <div class="price">
                <svg class="icon"  aria-hidden="true" id="aright">
                    <use xlink:href="#icon-qianqian-"></use>
                </svg>
                {{i.price}}
            </div>
            <div class="Old">
                定价： <div class="old">{{i.old}}</div>
            </div>
        </div>
    </div>

 </div>
    </div>
    <div class="hot_sale">
        <div class="b-top">推广商品</div>
        <div class="b-b">
            <div class="b-line" v-for=" i in bt">
                <img :src="i.pic">
                <div class="txt">{{i.txt}}</div>
        
                <div class="Price">
                    <div class="price" id="price2">
                        <svg class="icon"  aria-hidden="true" id="aright">
                            <use xlink:href="#icon-qianqian-"></use>
                        </svg>
                        {{i.price}}
                    </div>
                    <div class="Old">
                        定价： <div class="old">{{i.old}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="b-bt">我要推广</div>
        
    </div>
    <div class="Put">
        <div class="put">
            <input type="text" :value="id">
            <div class="Search" >
                <svg class="icon search"  aria-hidden="true" id="aright">
                    <use xlink:href="#icon-sousuo1"></use>
                </svg>
            </div>
        </div>
    </div>
<Footer1 class="footer1"></Footer1>

<div class="related">
    <div class="relatedS">公司简介</div>
    <div class="relatedS">诚聘英才</div>
    <div class="relatedS">网站联盟</div>
    <div class="relatedS">当当招商</div>
    <div class="relatedS">机构销售</div>
    <div class="relatedS">手机当当</div>
    <div class="relatedS">官方blog</div>
    <div class="relatedS">知识产权</div>
    <div class="relatedS" id="last">热词搜索</div>
</div>
   
</div>
</template>
<script>
  import Footer1 from '@/components/Footer1.vue'
 
    export default{  
        props:{
            msg:Array
        },   
        components: {
            Footer1
        },
            data:function(){
                return {
                   Nmsg: this.msg,
                    id:"月亮与六便士",
  
                    right:[
                        {"pic": require('../assets/search/right1.jpg'),"txt":"全6册遥远的救世主+浮生六记+人间失格+罗生门+月亮和六便士+我是猫未删减版原著豆豆小说天道第十届茅盾文学奖现当代经典文学书籍", "price": "65.00", "old":"214.00", },
                        {"pic": require('../assets/search/right2.jpg'),"txt":"人间失格太宰治罗生门芥川龙之介我是猫夏目漱石月亮与六便士浮生六记沈复全套5册", "price": "27.90", "old":"184.00", },
                        {"pic": require('../assets/search/right3.jpg'),"txt":"4册 活着余华+人间失格+浮生六记+月亮与六便士 毛姆沈复太宰治余华的书籍作品原著文学小说经典畅销书排行榜", "price": "34.50", "old":"148.00", },
                        {"pic": require('../assets/search/right4.jpg'),"txt":"月亮与六便士无删减原著毛姆著非英文版月亮和六便士书籍书长篇小说排行榜世界文学名著对照版", "price": "21.80", "old":"28.50", },
                        {"pic": require('../assets/search/right5.jpg'),"txt":"月亮与六便士 英文版原版 毛姆著 ", "price": "19.40", "old":"38.80", },
                        {"pic": require('../assets/search/right6.jpg'),"txt":"全6册 活着人间失格月亮与六便士我是猫罗生门浮生六记外国小说原版原著全集毛姆太宰治芥川龙之介夏目漱石", "price": "223.30", "old":"235.00", },
                        {"pic": require('../assets/search/right7.jpg'),"txt":"全套5册人间失格+月亮与六便士+罗生门+我是猫+浮生六记 ", "price": "28.80", "old":"178.60", },
                        {"pic": require('../assets/search/right8.jpg'),"txt":"全3册百年孤独+月亮与六便士+人间失格 诺贝尔文学奖无删减中文版原版非英文版经典霍乱时期的爱情", "price": "49.80", "old":"126.00", },
                        {"pic": require('../assets/search/right10.jpg'),"txt":"【领券立减100】全5册月亮和六便士+人间失格+我是猫+罗生门+浮生六记 日本文学毛姆经典作品", "price": "128.00", "old":"195.20", },
                        {"pic": require('../assets/search/right11.jpg'),"txt":"【精美双封面】全7册 正版包邮人间失格+罗生门+我是猫+月亮与六便士+瓦尔登湖+一九八四 动物庄园文学小说 外国文学世界名著书籍", "price": "55.00", "old":"237.10", },
                        {"pic": require('../assets/search/right12.jpg'),"txt":" 小王子+傲慢与偏见+月亮与六便士英文版原版 世界经典文学名著畅销小说课外读物（全3册）", "price": "59.20", "old":"118.40", },
                        {"pic": require('../assets/search/right13.jpg'),"txt":"小学课外阅读儿童文学校园励志成长", "price": "29.80", "old":"118.00", },
                        {"pic": require('../assets/search/right14.jpg'),"txt":"感动全球的科普大奖绘本", "price": "763.10", "old":"960.20", },
                    ],
                    bt:[
                        {"pic": require('../assets/search/bt1.jpg'), "txt": "瓦尔登湖人间失格我是猫全7册", "price": "55.00","old":"237.80"},
                        {"pic": require('../assets/search/bt2.jpg'), "txt": "小王子+傲慢与偏见+月亮与六便士英文版原版 世界经典文学名著畅销小说课外读物（全3册）", "price": "59.20","old":"118.00"},
                        {"pic": require('../assets/search/bt3.jpg'), "txt": "毛姆小说套装全3册 生活的事实+刀锋+月亮和六便士 共3册 毛姆著", "price": "55.00","old":"114.00"},
                        {"pic": require('../assets/search/bt4.jpg'), "txt": "人间失格+罗生门+我是猫+月亮与六便士+浮生六记 正版全5册文学小说 太宰治 ", "price": "39.80","old":"137.80"},
                        {"pic": require('../assets/search/bt5.jpg'), "txt": "全5册 百年孤独+月亮与六便士+我是猫+人间失格+罗生门", "price": "58.80","old":"112.00"}
                    ],
                }
            },
            methods:{
             enter(j){
                 this.$store.commit('add',this.msg[ j ])
                this.$router.push({
                    path:'/buycar',
                })  ,
                console.log(this.msg[ j ]);
            }
            }
    }

    </script>
<style scoped>
.searchBody{
    width: 1200px;
    margin-left: 160px;
    background: #fff;
    font-size: 14px;
}
.shang{
    display: flex;
}
.Left{
    width: 960px;
}
.left{
    width: 960px;
    height: 242px;
    display: flex;
    padding-left: 20px;
    padding-top: 21px;
}
.l-left{
    width: 100px;
    width: 200px;
    height: 200px;
}
.r-right{
    width: 720px;
    margin-left: 40px;
}
.Title{
    display: flex;
    font-weight: 200;
    height: 20px;
    overflow: hidden;
}
.title{
    color: #b44c1c;
}
.line{
    color: #1a66b3;
}
.Price{
    display: flex;
    height: 30px;
}
.price{
    width: 70px;
    font-weight: bold;
    display: flex;
    margin-right: 10px;
    font-size: 18px;
    font-weight: 600;
    color: #ff3823;
}
.price .icon{
    width: 16px;
    height: 22px;
    fill: #ff3823;
}
.Old{
    height: 20px;
    margin-top: 5px;
    display: flex;
    font-size: 12px;
    color: rgb(139, 138, 138);
}
.old{
    text-decoration:line-through
}
.Old .icon{
    width: 18px;
    height: 12px;
    fill: rgb(139, 138, 138);

}
.eBook{
    display: flex;
    margin-left: 15px;
}
.eT{
    width: 50px;
    height: 16px;
    margin-top: 5px;
    color: #fff;
    font-size: 12px;
    background-color: #64a0db;
}
.ebook{
    display: flex;
    color: #1a66b3;
    font-size: 14px;
    font-weight: 550;
    margin-top: 2px;
}
.ebook .icon{
    width: 20px;
    height: 16px;
    fill: #1a66b3;
    padding-top: 4px;
}
.chu{
    display: flex;
    font-size: 12px;
    color: rgb(139, 138, 138);
}
.blue{
    color: #1a66b3;
    
}
.ping{
    display: flex;
    margin-top: 7PX;
    color: #1a66b3;
    font-size: 12px;
}
.ping .icon{
    width: 17px;
    height: 17px;
}
.line5{
    display: flex;
    font-size: 12px;
    margin-top: 7px;
}
.ziying{
    width: 30px;
    height: 17px;
    line-height: 17px;
    color: #ff3823;
    text-align: center;
    border: 1px solid #ff3823;
    border-radius: 3px;
}
.manjian{
    width: 80px;
    height: 17px;
    line-height: 17px;
    color: #fff;
    background-color: #f82710;
    text-align: center;
    margin-left: 10px;
    border-radius: 2px;
}

.detail{
    margin-top: 10px;
    line-height: 20px;
    height: 40px;
    overflow: hidden;
    color: #333;
    width: 720px;
    font-size: 14px;
}
.btn{
    display: flex;
    margin-top: 10px;
}
.buycar , .eb{
    width: 120px;
    height: 30px;
    background-color: #ff260e;
    color: #fff;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    border-radius: 3px;
    margin-right: 10px;
}
.shoucang{
    width: 80px;
    height: 30px;
    background-color: #fae9e7;
    color: #fc2f18;
    border:  1px solid #f1250e;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    border-radius: 3px;
}
.right{
    width: 240px;
    margin-top: 21px;
    border: 1px solid #ecebeb;

}
.right .Price{
    margin-top: 13px;
}
.r-top{
    display: flex;
    width: 240px;
    height: 35px;
    font-size: 16px;
    line-height: 35px;
    padding-left: 8px;

    background-color: rgb(245, 245, 245);
}
.gg{
 font-size: 11px;
 width: 30px;
 /* margin-top: 11px; */
 height: 16px;
 margin-left: 130px;
 padding-bottom: 5px;
 /* border: 1px solid rgb(100, 99, 99); */
}
.lines{
    width: 240px;
    font-size: 12px;
    padding: 12px 10px 5px 10px;
}
.lines img{
    border: 1px solid #ecebeb;
}
.txt{  
    line-height: 18px;
    height: 18px;
    width: 210px;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    margin-top: 5px;
}
#price2{
    font-size: 13px;
    font-weight: 550;
    margin-top: 5px;

}
#price2 .icon{
    width: 15px;
    height: 15px;
}
.paginating {
    width: 960px;
    height: 40px;
    text-align: center;
    display: flex;
    margin-left: 220px;
    margin-top: 40px;
}
.num , .next{
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border: 1px solid #ecebeb;
    font-size: 18px;
    font-weight: 400;
    margin-left: -1px;
    color: rgb(112, 110, 110);
}
.next .icon{
    width: 20px;
    height: 20px;
    fill: #fa5000;
    margin-top: 8px;
}
.p-r{
    margin-left: 15px;
    height: 40px;
    /* width: 129px; */
    line-height: 40px;
    display: flex;
    font-size: 14px;
}
.p-r input{
    height: 32px;
    line-height: 21px;
    padding: 3px 2px;
    width: 58px;
    border: 1px solid #e7e7e7;
    margin-top: 4px;
    outline: none;
    margin-left: 10px;
}
.queding{
    background: #fa5000;
    height: 30px;
    line-height: 30px;
    width: 70px;
    margin-top: 4px;
    color: #fff;
    margin-left: 18px;
    border: none;
    font-size: 14px;
}
.or{
    background-color: #fa5000;
    color: #fff;
}
.hot_sale {
    width: 1198px;
    height: 360px;
    margin: 0 auto;
    border: 1px solid #f1f1f1;
    border-top: 0;
    background: #f5f5f5;
    margin-top: 30px;
}
.b-top{
    height: 38px;
    line-height: 38px;
    font-size: 16px;
    padding: 0 22px 0 20px;

}
.b-b{
    width: 1166px;
    height: 283px;
    display: flex;
    margin-left: 17px;
}
.b-line{
    padding: 7px 6px 0px;  
    width: 202px;
    font-size: 12px;
    margin-right: 30px;
}
.b-line .Price{
    margin-top: 16px;
}
.b-bt{
    height: 30px;
    width: 1200px;
    line-height: 30px;
    padding: 0 22px 10px 20px;
    color: #1a66b3;
    padding-left: 1120px;
}
.Put{
    width: 1200px;
    height: 112px;

}
.put{
    padding-bottom: 35px;
    padding-top: 35px;
    position: relative;
    width: 565px;
    height: 112px;
    margin: 0 auto;
    display: flex;
}
.put input{
    width: 565px;
    height: 42px;
    padding-left: 8px;
    border: 2px solid #f1250e;
}
.Search{
        width: 42px;
        height: 42px;
        background-color: #ff2832;
        margin-left: -44px;
        text-align: center;
        padding-top: 7px;
    }
    .Search .icon{
        width: 30px;
        height: 30px;
        fill: #fff;
    }
    .footer1{
        margin-left: -160px;
    }
    .related{
        width: 1520px;
        margin-left: -160px;
        padding: 23px 380px;
        /* justify-content: space-between; */
        display: flex;
        background-color: #fff;
        color: rgb(117, 116, 116);
        font-size: 12px;
    }
    .relatedS{
        border-right: 1.8px solid rgb(204, 203, 203);
        text-align: center;
        /* padding-right: 20px; */
        width: 84px;
    }
    #last{
        border-right: none;
    }
</style>