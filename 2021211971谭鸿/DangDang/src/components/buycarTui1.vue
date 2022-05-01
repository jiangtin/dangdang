<template>


    <div class="buycarTui1">
        <div class="buycarTui11">
            <div class="top">根据购物车物品为您推荐</div>
        <div class="Body">
            <div class="line" v-for="(i,j) in recommends"  @mouseover="change(i,j)" @mouseleave="change2()">
                <div class="pic">
                    <img :src="i.pic">
                </div>
                <div class="jiaru" :class=" isActive === j? 'isActive' : ''" @click="chuan(isActive)">加入购物车</div>
                <div class="txt">{{i.txt}}</div>
                <div class="price">
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-qianqian-"></use>
                    </svg>
                    {{i.price}}
                </div>
                <div class="ping">
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-xiaoxi1"></use>
                    </svg>
                    已有{{i.ping}}位用户评价
                </div>
            </div>
        </div>
        </div>



        <div class="buycarTui12">
            <div class="top">推广商品</div>
            <div class="Body2">
                <div>

                    <div class="swiper mySwiper3">
                        <div class="swiper-wrapper">
                          <div class="swiper-slide"> 
                            <div class="line" v-for="i in  tuiguang3">
                                <div class="pic">
                                    <img :src="i.pic">
                                </div>
                                <div class="txt">{{i.txt}}</div>
                                <div class="price">
                                    <svg class="icon"  aria-hidden="true" id="aright">
                                        <use xlink:href="#icon-qianqian-"></use>
                                    </svg>
                                    {{i.price}}
                                </div>
                                <div class="ping">
                                    <svg class="icon"  aria-hidden="true" id="aright">
                                        <use xlink:href="#icon-xiaoxi1"></use>
                                    </svg>
                                    已有{{i.ping}}位用户评价
                                </div>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="line" v-for="i in  tuiguang1">
                                <div class="pic">
                                    <img :src="i.pic">
                                </div>
                                <div class="txt">{{i.txt}}</div>
                                <div class="price">
                                    <svg class="icon"  aria-hidden="true" id="aright">
                                        <use xlink:href="#icon-qianqian-"></use>
                                    </svg>
                                    {{i.price}}
                                </div>
                                <div class="ping">
                                    <svg class="icon"  aria-hidden="true" id="aright">
                                        <use xlink:href="#icon-xiaoxi1"></use>
                                    </svg>
                                    已有{{i.ping}}位用户评价
                                </div>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="line" v-for="i in  tuiguang2">
                                <div class="pic">
                                    <img :src="i.pic">
                                </div>
                                <div class="txt">{{i.txt}}</div>
                                <div class="price">
                                    <svg class="icon"  aria-hidden="true" id="aright">
                                        <use xlink:href="#icon-qianqian-"></use>
                                    </svg>
                                    {{i.price}}
                                </div>
                                <div class="ping">
                                    <svg class="icon"  aria-hidden="true" id="aright">
                                        <use xlink:href="#icon-xiaoxi1"></use>
                                    </svg>
                                    已有{{i.ping}}位用户评价
                                </div>
                            </div>
                          </div>
                        </div>
                        <div class="d" style="display:flex">
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                    
                      </div>
                </div>

            </div>

        </div>




        <div class="buycarTui12">
            <div class="top">为您推荐</div>
            <div class="Body2">
                <div>

                    <div class="swiper mySwiper4">
                        <div class="swiper-wrapper">
                          <div class="swiper-slide"> 
                            <div class="Body">
                            <div class="line" v-for="i in  tuijian1">
                                <div class="pic">
                                    <img :src="i.pic">
                                </div>
                                <div class="txt">{{i.txt}}</div>
                                <div class="price">
                                    <svg class="icon"  aria-hidden="true" id="aright">
                                        <use xlink:href="#icon-qianqian-"></use>
                                    </svg>
                                    {{i.price}}
                                </div>
                                <div class="ping">
                                    <svg class="icon"  aria-hidden="true" id="aright">
                                        <use xlink:href="#icon-xiaoxi1"></use>
                                    </svg>
                                    已有{{i.ping}}位用户评价
                                </div>
                            </div>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="Body">
                            <div class="line" v-for="i in  tuijian2">
                                <div class="pic">
                                    <img :src="i.pic">
                                </div>
                                
                                <div class="txt">{{i.txt}}</div>
                                <div class="price">
                                    <svg class="icon"  aria-hidden="true" id="aright">
                                        <use xlink:href="#icon-qianqian-"></use>
                                    </svg>
                                    {{i.price}}
                                </div>
                                <div class="ping">
                                    <svg class="icon"  aria-hidden="true" id="aright">
                                        <use xlink:href="#icon-xiaoxi1"></use>
                                    </svg>
                                    已有{{i.ping}}位用户评价
                                </div>
                            </div>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="Body">
                            <div class="line" v-for="i in  tuijian3">
                                <div class="pic">
                                    <img :src="i.pic">
                                </div>
                                <div class="txt">{{i.txt}}</div>
                                <div class="price">
                                    <svg class="icon"  aria-hidden="true" id="aright">
                                        <use xlink:href="#icon-qianqian-"></use>
                                    </svg>
                                    {{i.price}}
                                </div>
                                <div class="ping">
                                    <svg class="icon"  aria-hidden="true" id="aright">
                                        <use xlink:href="#icon-xiaoxi1"></use>
                                    </svg>
                                    已有{{i.ping}}位用户评价
                                </div>
                            </div>
                            </div>
                          </div>
                        </div>
                        <div class="d" style="display:flex">
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                    
                      </div>
                </div>

            </div>

        </div>

        <div class="bottem">
            Copyright (C) 当当网 2004-2014, All Rights Reserved
            <img src="../assets/buycar/validate.gif">
            京ICP证041189号出版物经营许可证 新出发京批字第直0673号
        </div>




    </div>
</template>
<script>
     import 'swiper/css/swiper.css';
        import Swiper from 'swiper'; 
      export default {
      data () {
        return {
            isActive:20,
            recommend:'',
            recommends:[
            {pic:require('../assets/recommend/recommend1.jpg'),num1:0, txt: '生命简史:从宇宙起源到人类文明(赠送超大生命星空图,精装大开本地板书,5-14岁儿童世界起源大百科全书', price: 123.20, ping:'92099' ,num:1,},
                {pic:require('../assets/recommend/recommend2.jpg'),num1:0,txt: '心灵教科书绘本系列：西兰花先生的理发店（教会孩子：敢于打破常规思维，培养创新意识）', price: 46.60,  ping:'12861',num:1,},
                {pic:require('../assets/recommend/recommend3.jpg'),num1:0,txt: '蛤蟆先生去看心理医生(年销200万册!英国经典心理咨询入门书，知名心理学家李松蔚强烈推荐）', price: 26.60,  ping:'49195',num:1,},
                {pic:require('../assets/recommend/recommend4.jpg'),num1:0,txt: ' 三体：全三册 刘慈欣代表作，亚洲“雨果奖”获奖作品！', price: 87.10,  ping:'1642',num:1,},
                {pic:require('../assets/recommend/recommend5.jpg'),num1:0,txt: '次第花开 修订版', price: 38.20, ping:'20',num:1,},
                {pic:require('../assets/recommend/recommend6.jpg'),num1:0,txt: '与未来谈谈心——睡前聊一会儿（音频书）', price: 52.30, ping:'3510',num:1,},
            {pic:require('../assets/recommend/recommend7.jpg'),num1:0,txt: '人生海海（麦家重磅力作，莫言、董卿盛赞,连续两年高居畅销榜,发行量超200万册)', price: 55.00, ping:'10132',num:1,},
                {pic:require('../assets/recommend/recommend8.jpg'),num1:0,txt: '生死疲劳（不看不知道，莫言真幽默！全新版本！印章版和普通版随机发货）', price: 69.80, ping:'32336',num:1,},
                {pic:require('../assets/recommend/recommend9.jpg'),num1:0,txt: ' 被讨厌的勇气：“自我启发之父”阿德勒的哲学课 岸见一郎', price: '52.70',  ping:81274,num:1,},
                {pic:require('../assets/recommend/recommend10.jpg'),num1:0,txt: '马尔克斯：百年孤独(50周年纪念版)', price: 39.60,  ping:'2686',num:1,},
        ],
        tuiguang1:[
        {pic:require('../assets/recommend/recommend14.jpg'),txt: '正面管教(修订版)', price:' 35.00', eBook:1},
                {pic:require('../assets/recommend/recommend15.jpg'),txt: '少年读史记(套装全5册)', price:'100.00', eBook:1},
                {pic:require('../assets/recommend/recommend16.jpg'),txt: '金庸全集：金庸作品集(全集共36册,彩图平装旧版)', price: '817.80', eBook:1},
                {pic:require('../assets/recommend/recommend17.jpg'),txt: '就喜欢你看不惯我又干不掉我的样子6(白茶著 亲笔签名本+吾皇、巴扎黑立牌）', price: '45.00', eBook:1},
                {pic:require('../assets/recommend/recommend18.jpg'),txt: '万物由来科学绘本 写给孩子的科普绘本', price:' 20.00', eBook:1},
           
        ],
        tuiguang2:[
        {pic:require('../assets/recommend/recommend26.jpg'),txt: '我爸爸+我妈妈(全2册)——清华附小推荐经典儿童绘本 ！（启发童书馆出品）', price: '79.60', eBook:1},
                {pic:require('../assets/recommend/recommend27.jpg'),txt: '遥远的救世主（天道原著王志文主演电视剧畅销遥远的救世主作者豆豆三部曲之一）', price: '28.80', eBook:1},
                {pic:require('../assets/recommend/recommend28.jpg'),txt: '心安即是归处（季羡林百年生命智慧。央视《朗读者》多次动情朗读本书名篇，贾平凹、白岩松、金庸、林青霞诚意推荐）', price: '41.80', eBook:14.70},
                {pic:require('../assets/recommend/recommend29.jpg'),txt: ' 世界上最棒的礼物——图画中隐藏无数细节，让小小孩玩过瘾！', price: '45.80', eBook:1},
                {pic:require('../assets/recommend/recommend30.jpg'),txt: '四五快读 全彩图升级版——幼儿快速识字阅读法(全8册)(让孩子爱上阅读 快乐识字)[精选套装]', price: '145.80', eBook:1},
          
        ],
        tuiguang3:[
        {pic:require('../assets/recommend/recommend38.jpg'),txt: '儿童思维导图启蒙绘本', price: '99.80', eBook:1}, 
                {pic:require('../assets/recommend/recommend39.jpg'),txt: '李时珍  张慧剑著注音版 语文课本', price: '5.90', eBook:1},
                {pic:require('../assets/recommend/recommend40.jpg'),txt: '一读就会用的分类成语故事', price: '351.00', eBook:1},
                {pic:require('../assets/recommend/recommend41.jpg'),txt: '哈利波特与魔法石 英文原版', price: '16.50', eBook:1}, 
                {pic:require('../assets/recommend/recommend42.jpg'),txt: 'wonder 奇迹男孩  R.J. Palacio C', price: '14.00', eBook:1},
        ],
        tuijian1:[
        {pic:require('../assets/recommend/recommend19.jpg'),txt: '我们的身体', price: '116.00', eBook:1},
                {pic:require('../assets/recommend/recommend20.jpg'),txt: '不一样的卡梅拉手绘本(1-12册)', price: 117.60, eBook:1},
                {pic:require('../assets/recommend/recommend21.jpg'),txt: '茅盾文学奖获奖作品：人世间（第十届茅盾文学奖获奖作品，雷佳音、辛柏青、宋佳、殷桃、萨日娜、宋春丽、张凯丽等主演）', price: '154.70', eBook:1},
                {pic:require('../assets/recommend/recommend22.jpg'),txt: '小熊宝宝绘本(简装全15册)蒲蒲兰经典绘本！新手妈妈的育儿宝典！(0-3岁)', price:' 88.40', eBook:1},
                {pic:require('../assets/recommend/recommend23.jpg'),txt: '二十四节气自然绘本 让孩子了解自然的瞬息万变 科普百科绘本', price: '20.00', eBook:1},
                {pic:require('../assets/recommend/recommend24.jpg'),txt: '与未来谈谈心+与世界谈谈心+与时代谈谈心', price: '166.20', eBook:1},
            {pic:require('../assets/recommend/recommend25.jpg'),txt: '世界尽头的咖啡馆（做决定前读一遍,少走弯路!美国57所高校指定研讨读物)', price: '45.00', eBook:1},
                {pic:require('../assets/recommend/recommend26.jpg'),txt: '我爸爸+我妈妈(全2册)——清华附小推荐经典儿童绘本 ！（启发童书馆出品）', price: '79.60', eBook:1},
                {pic:require('../assets/recommend/recommend27.jpg'),txt: '遥远的救世主（天道原著王志文主演电视剧畅销遥远的救世主作者豆豆三部曲之一）', price: '28.80', eBook:1},
                {pic:require('../assets/recommend/recommend28.jpg'),txt: '心安即是归处（季羡林百年生命智慧。央视《朗读者》多次动情朗读本书名篇，贾平凹、白岩松、金庸、林青霞诚意推荐）', price: '41.80', eBook:14.70},
           
        ],
        tuijian2:[
        {pic:require('../assets/recommend/recommend29.jpg'),txt: ' 世界上最棒的礼物——图画中隐藏无数细节，让小小孩玩过瘾！', price: '45.80', eBook:1},
                {pic:require('../assets/recommend/recommend30.jpg'),txt: '四五快读 全彩图升级版——幼儿快速识字阅读法(全8册)(让孩子爱上阅读 快乐识字)[精选套装]', price: '145.80', eBook:1},
            {pic:require('../assets/recommend/recommend31.jpg'),txt: '培生幼儿英语，少儿英语启蒙绘本', price: '115.60', eBook:1},
                {pic:require('../assets/recommend/recommend32.jpg'),txt: '词汇的力量WordPowerMadeEasy', price: '17.50', eBook:1}, 
                {pic:require('../assets/recommend/recommend33.jpg'),txt: '四五英语**辑(全5册套装)', price:'93.50', eBook:1},
                {pic:require('../assets/recommend/recommend34.jpg'),txt: '儿童文学畅销品，小学生都爱读', price: '651.70', eBook:1}, 
                {pic:require('../assets/recommend/recommend35.jpg'),txt: '【中商原版】相约星期二 英文原版 Tuesdays With Morrie 英文版 进口正版', price:' 22.50', eBook:1},
                {pic:require('../assets/recommend/recommend36.jpg'),txt: '小学英语词汇学习手册（“美语之路”经典词库）', price:' 25.80', eBook:1}, 
            {pic:require('../assets/recommend/recommend37.jpg'),txt: '零基础学Python(全彩版)', price: '73.60', eBook:27.93},
                {pic:require('../assets/recommend/recommend38.jpg'),txt: '儿童思维导图启蒙绘本', price: '99.80', eBook:1}, 
               
      ],
      tuijian3:[
             {pic:require('../assets/recommend/recommend43.jpg'),txt: '夏洛的网  E.B.怀特英文原版', price: '22.50', eBook:1},
                {pic:require('../assets/recommend/recommend44.jpg'),txt: '杀死一只知更鸟 英文原版小说', price: '25.50', eBook:1}, 
                {pic:require('../assets/recommend/recommend45.jpg'),txt: '哈利波特英文原版 Harry Potter', price: '266.00', eBook:1},
                {pic:require('../assets/recommend/recommend46.jpg'),txt: 'Flipped 怦然心动 英文原版小说', price: '21.50', eBook:1},
                {pic:require('../assets/recommend/recommend47.jpg'),txt: '让孩子爱上科学的趣味实验大百科', price: '96.00', eBook:1}, 
                {pic:require('../assets/recommend/recommend48.jpg'),txt: '午夜降临前抵达', price: '40.70', eBook:17.70},
              {pic:require('../assets/recommend/recommend49.jpg'),txt: 'bibi动物园:忍不住想打扰你', price: '35.20', eBook:29.40},
                {pic:require('../assets/recommend/recommend50.jpg'),txt: '张爱玲全集01:倾城之恋', price: '29.20', eBook:24.69}, 
                {pic:require('../assets/recommend/recommend51.jpg'),txt: '刘子超旅行文学两册套装', price: '88.30', eBook:1},
                {pic:require('../assets/recommend/recommend52.jpg'),txt: '格非:江南三部曲(共3册)', price: '109.00', eBook:108.00},
                
        ],
        }},
        methods:{
            change(i,j){
			this.isActive=j;
	        	},
                change2(){
                    this.isActive=20;
                },
                chuan(isActive){
                    this.recommend=this. recommends[isActive];
                    this.$emit('addNum',this. recommend)  
                    console.log(this. recommend);
                }
        },
        async mounted(){
            var swiper = new Swiper(".mySwiper3", {
        cssMode: true,
        loop:true,
        speed : 8000, //速度
        autoplay: {
          delay: 3000, //3秒切换一次
          pauseOnMouseEnter: true, //悬停停止切换
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
       
        mousewheel: true,
        keyboard: true,
      });

      
      var swiper = new Swiper(".mySwiper4", {
        cssMode: true,
        speed : 10000, //速度
        loop:true,
        autoplay: {
          delay: 3000, //3秒切换一次
          pauseOnMouseEnter: true, //悬停停止切换
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
       
        mousewheel: true,
        keyboard: true,
      });
        }
    }    
</script>
<style scoped>
    .buycarTui11 ,.buycarTui12 {
        width: 960px;
        margin-left: 280px;
        margin-top: 20px;
        border: 1px solid #ecebeb;
    }
    .top{
        width: 960px;
        padding-left: 25px;
        margin-top: 20px;
        font-size: 16px;
        font-weight: 600;
    }
    .Body{
        display: flex;
        width: 950px;
        flex-wrap: wrap;
        margin-top: 15px;
    }
    .Body2 ,.mySwiper{
        width: 950px;
        margin-top: 15px;
        overflow: hidden;
    }
    .line{
        width: 170px;
    border: none 0;
    padding: 0 10px 12px;
    margin: 0 20px 0 0;
    text-align: center;
    float: left;
    color: #323232;
    line-height: 16px;
    position: relative;
    overflow: hidden;
    }
    .pic img{
    width: 150px;
    height: 150px;
    margin: 10px 0;
    }
    .txt{
        text-align: left;
    line-height: 14px;
    font-size: 12px;
    width: 148px;
    height: 28px;
    overflow: hidden;
    }
    .price{
        text-align: left;
    line-height: 14px;
    width: 150px;
    height: 28px;
    overflow: hidden;
    font-size: 14px;
    color: #ff3823;
    font-weight: 550;
    }
    .price .icon{
    width: 14px;
    height: 21px;
    fill: #ff3823;
    padding-top: 10px;
}
.ping .icon{
    width: 20px;
    height: 15px;
}
.ping{
    height: 18px;
    line-height: 18px;
    overflow: hidden;
    font-size: 12px;
    color: #646464;
    vertical-align:middle;
}
.swiper-slide{
    display: flex;
    overflow: hidden;
    width: 960px;
}
.jiaru{
    width: 160px;
    height: 20px;
    margin-left: 5px;
    background-color: #f8aca4;
    color: #fff;
    font-size: 12.5px;
    text-align: center;
    line-height: 20px;
    margin-top: -20px;
    position: relative;
    display: none;
}
.isActive{
    display: block;
}
.mySwiper4 .swiper-button-next{
    position: relative;
    margin-left: 925px;
    margin-top: -300px;

    color: rgb(235, 231, 231);
      opacity: 0.5;
        background-color: rgb(207, 204, 204);

}
.mySwiper4 .swiper-button-prev{
    position: relative;
    margin-left: -950px;
    margin-top: -300px;

    color: rgb(235, 231, 231);
      opacity: 0.5;
        background-color: rgb(207, 204, 204);
}
.mySwiper3 .swiper-button-next{
    position: relative;
    margin-left: 925px;
    color: rgb(235, 231, 231);
      opacity: 0.5;
    margin-top: -180px;
        background-color: rgb(207, 204, 204);

}
.mySwiper3 .swiper-button-prev{
    position: relative;
    margin-left: -950px;
    margin-top: -180px;
    color: rgb(235, 231, 231);
      opacity: 0.5;
        background-color: rgb(207, 204, 204);
}
.bottem{
    margin-top: 20px;
    padding-left: 400px;
    padding-top: 30px;
    border-top: 2px solid #ff3823;
    color: #929191;
    font-size: 12.5px;
    margin-bottom: 130px;
}
</style>