<template>
<div class="Nav">
  <!------------------------------ 上方的头部 ------------------------------>
 <div class="nav-top">
    <div class="fenlei">
        <div>全部商品分类</div>
        <svg class="icon"  aria-hidden="true" id="aright">
            <use xlink:href="#icon-xiajiantou4"></use>
        </svg>
    </div>
    <div class="x-line" v-for="(item,i) in xLines" :key="i">{{item.name}}</div>

 </div>

 <!---------------------------------主体部分-------------------------------->
<div class="Body" @mouseleave="back()" @mouseover="back2()">
    <!--        left      -->
<div class="leftTitle">
    <div class="title" v-for="(t,j) in titles" :key="j"  @mouseover="change(t,j)" :style="hui"  :class=" isActive === j? 'isActive' : ''" >{{t.name}}</div>
</div>


                                       <!-- 首页 -->
<div class="shouye" :style="shouye">
    <nav-center ></nav-center>
    <div class="right">
        <img src="../assets/img/nav-right.jpg">
        <div class="newsTop">
        <div class="newsTop1" :style="xinxi"  @mouseover="turn1()" >信息公告</div>
        <div class="newsTop2" :style="fuwu"  @mouseover="turn2()">服务公告</div>
        </div>
        <div class="news">
            <!-- 信息公告 -->
            <div class="news1" :style="n1">
                <div class="New1" v-for="(i,j) in NEWS1" :key="j">
                    <div class="point">
                        <svg class="icon"  aria-hidden="true" id="aright">
                            <use xlink:href="#icon-youjiantou2"></use>
                        </svg>
                    </div>
                  <div>
                    {{i.txt}}
                  </div>
                </div>
    
            </div>
            <!-- 服务公告 -->
    
                <div class="news2" :style="n2">
                <div class="New2" v-for="(i,j) in NEWS2" :key="j">
                    <div class="point">
                        <svg class="icon"  aria-hidden="true" id="aright">
                            <use xlink:href="#icon-youjiantou2"></use>
                        </svg>
                    </div>
                  <div>
                    {{i.txt}}
                  </div>
                </div>  
            </div>
        
        </div>

        <div>
            <div class="swiper mySwiper3">
              <div class="swiper-wrapper">
                <div class="swiper-slide"  v-for="i in imgs2">
                  <img :src="i.pic">
                </div>
              </div>
               <div class="swiper-pagination3"></div>
            </div>
          </div>
            </div>
    </div>
<div :style="qita">
    <nav-tongshu  v-show=" isActive==0"></nav-tongshu>
    <e-book  v-show=" isActive==1"></e-book>
    <nav-wenju  v-show=" isActive==2"></nav-wenju>
    <nav-fushi  v-show=" isActive==3"></nav-fushi>
    <nav-xiexue  v-show=" isActive==4"></nav-xiexue>
    <nav-yundong  v-show=" isActive==5"></nav-yundong>
    <nav-ying  v-show=" isActive==6"></nav-ying>
    <nav-jiaju  v-show=" isActive==7"></nav-jiaju>
    <nav-jiaju2  v-show=" isActive==8"></nav-jiaju2>
    <nav-qingjie   v-show=" isActive==9"></nav-qingjie>
    <nav-shipin   v-show=" isActive==10"></nav-shipin>
    <nav-zhu   v-show=" isActive==11"></nav-zhu>
    <nav-phone   v-show=" isActive==12"></nav-phone>
    <nav-dianqi   v-show=" isActive==13"></nav-dianqi>
    <nav-lipin   v-show=" isActive==14"></nav-lipin>

</div>
    

</div>

</div>
</template>

<!-----------------------------------js------------------------------------>
<script>
  import da from "../assets/data"

     import 'swiper/css/swiper.css';
 import Swiper from 'swiper';   
    import navCenter from './navCenter.vue'
    import navTongshu from './navTongshu.vue'
    import eBook from './eBook.vue'
    import navWenju from './navWenju.vue'
    import navFushi from './navFushi.vue'
    import navXiexue from './navXiexue.vue'
    import navYundong from './navYundong.vue'
    import navYing from './navYing.vue'
    import navJiaju from './navJiaju.vue'
    import navJiaju2 from './navJiaju2.vue'
    import navQingjie from './navQingjie.vue'
    import navShipin from './navShipin.vue'
    import navZhu from './navZhu.vue'
    import navPhone from './navPhone.vue'
    import navDianqi from './navDianqi.vue'
    import navLipin from './navLipin.vue'



     export default{
        components: {
            navCenter,navTongshu,eBook,navFushi,navXiexue,navYundong,navYing,navJiaju,
            navJiaju2,navQingjie,navWenju,navShipin,navZhu, navPhone,navDianqi,navLipin
        },

        data:function(){
            return {
                hui:'',
                shouye:'',
                isActive: 20,
                num:0,
                qita:'',
                xinxi:'background-color: rgb(243, 241, 241)',
                fuwu:'background-color: rgb(243, 241, 241)',
                n1: 'display:block',
                n2: 'display:none',
                imgs2:[{pic: require('../assets/img/swiper3-1.jpg')},
                {pic: require('../assets/img/swiper3-2.jpg')},
                {pic: require('../assets/img/swiper3-3.jpg')},],
                xLines :[
                    {name: '图书'},{name: '电子书'},{name: '童装、童鞋'},{name: '女装'},{name: '食品'},{name: '母婴玩具'},
                ],
                titles:[
                    {name: '图书、童书'}, {name: '电子书'},   {name: '创意文具'},  {name: '服饰、内衣'},  {name: '鞋靴、箱包'},  {name: '运动户外'},  {name: '孕、婴、童'},  
                        {name: '家居、家纺、汽车'},  {name: '家具、家装、康体'},  {name: '个人护理、情节'},  {name: '食品、茶酒'},  {name: '珠宝饰品'}, {name: '手机、数码、电脑办公'},{name: '家用电器'},{name: '当当礼品卡、生活服务'},
                    ],
                NEWS1:[ 
                ],
                NEWS2:[
                ],
            }},
            created(){
        this.NEWS1 = da.gonggao.NEWS1;
        this.NEWS2 = da.gonggao.NEWS2;
  },

            async mounted(){
    var swiper = new Swiper(".mySwiper3", {
        loop: true,
        pagination: {
          el: ".swiper-pagination3",
        },
      });
 },
        methods:{
            back(){
                this.shouye="display:block;display:flex; "
                this.qita="display:none"
                this.hui="background-color: rgb(247, 247, 247);border:none; color: rgb(71, 71, 71); text-decoration:none;"
            },
            back2(){
                // this.hui=" "
                // this.qita="display:block"
            },
               turn1(){
                this.n1= "display:block"
               this. n2 ="display:none"
               this.xinxi="background-color:white"
               this.fuwu="background-color:  rgb(243, 241, 241)"
            },
            turn2(){
                this.n2= "display:block"
               this. n1 ="display:none"
               this.fuwu="background-color:white"
               this.xinxi="background-color:  rgb(243, 241, 241)"
            },
            change(t,j){
			this.isActive=j;
            this.shouye="display:none"
            this.qita="display:block"
            this.hui=" "

                // console.log(this.isActive);
	        	},
            // sy(){
            //     if(isActive!=20){
            //         this.shouye="display:none"
            //     }
            // }

        },
        
        }
       
</script>




<style lang="less" scoped>

.Nav{
        width:100%;
        justify-content: space-between;
        font-size: 14px;
    background-color: #fff;
    }

    /* 头部样式 */
.nav-top{
    padding: 0 160px;
    padding-bottom: 2px;
    display: flex;
    font-weight: 1000;
    border-bottom: 2.5px solid #ff2832;
}
.fenlei{
    width: 200px;
    height: 40px;
    justify-content: space-between;
    padding: 12px 20px;
    background-color: #ff2832;
    display: flex;
    color: aliceblue;
    align-items: center;

}
.fenlei .icon{
    width: 15px;
    height: 15px;
    fill: aliceblue;
}
.x-line{
  margin-left: 30px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}


/* 主题样式 */
.shouye{
    display: flex;
}
.Body{
    width: 1200px;
    display: flex;
    height: 490px;
   
    margin-left: 160px;
    /* overflow: hidden; */

}
.leftTitle{
    width: 200px;
    height: 490px;
    padding-top: 8px;
    background-color: rgb(247, 247, 247);
}
.title{
    height: 30px;
    margin-right: -3px;
    width: 202px;
    position: relative;
    padding-left: 20px;
    line-height: 30px;
}
.right{
    width: 200px;
    color: rgb(71, 71, 71);
}
.newsTop{
    display: flex;
}
.newsTop1,.newsTop2{
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: rgb(243, 241, 241);

}
.news .icon{
    width: 8px;
    height: 8px;

}
/* .news1{
    display: none;
}
.news2{
    display: block;
} */
.New1,.New2{
    display: flex;
    margin-top: 10px;
    font-size: 12px;

}
.point{
    width: 15px;
    text-align: center;
}
.swiper{
    width: 200px;
    overflow: hidden;
}
.swiper-pagination3{
    position: relative;
    margin-bottom: 10px;
    margin-left: 60px;
}
.isActive{
        border: 2px solid #ff2832;
        border-right: none;
        text-decoration:underline;
        background-color: #fff;
        color: #ff2832;
        margin-right: -3px;
    }
</style>