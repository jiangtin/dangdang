<template>
    <div class="cloth">
        <div class="top">
            <div class="top-left">
                服装
            </div>
            <div class="top-right">
                <div class="title"  v-for="(item,i) in titles" :key="i">
                <div  @mouseover="change(item,i)"  :class=" isActive === i? 'isActive' : ''" >
                     {{item.name}}
                </div></div>  
            </div>
        </div>
        <div class="Body">
            <div class="left">
                <div class="ids" >
                    <div class="id" v-for="(j,i) in ids"   @mouseover="change2(i)"  @mouseleave="back()" :class=" b=== i? 'red ' : ''">{{j.id}}</div>                   
                </div>
    
            </div>
            <div class="right">
                <div class="r-top">
                    <div class="Swiper swiper1">
                        <div>
                            <div class="swiper mySwiper1">
                                <div class="swiper-wrapper">
                                  <div class="swiper-slide" ><img :src="l[isActive].pic1"></div>           
                                  <div class="swiper-slide"><img :src="l[isActive].pic2"></div>                           
                                </div>
                                <div class="swiper-pagination"></div>  

                                <div class="swiper-button-next"></div>
                                <div class="swiper-button-prev"></div>  
                              </div>
                        </div>
                    </div>
                    <img :src="c[isActive].pic1">
                    <img :src="c[isActive].pic2">
                    <img :src="c[isActive].pic3">
            </div>
            <div class="r-bottem">
                <img :src="d[isActive].pic1"> 
                <img :src="d[isActive].pic2"> 
                <img :src="d[isActive].pic3"> 
                <img :src="d[isActive].pic4"> 
                <img :src="d[isActive].pic5">
            </div>

        </div>       
    </div>
    <div class="bottem">
        <div class="Swiper swiper2">
            <div class="swiper mySwiper2">
                <div class="swiper-wrapper ">
                  <div class="swiper-slide">
                     <div class="s1" >  <img  v-for="m in sOne" :src="m.pic"></div>
                    </div>           
                  <div class="swiper-slide" >
                     <div class="s2" >  <img  v-for="n in sTwo" :src="n.pic1"></div>

                  </div>                           
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>    
              </div>
        </div>
    </div>
    </div>
</template>
<script>
      import 'swiper/css/swiper.css';
 import Swiper from 'swiper';   
 export default{
        data(){
            return {
                isActive: 0,
                b:0,
                l:[
                {pic1: require('../assets/cloth/l1-1.jpg'),pic2: require('../assets/cloth/l1-2.jpg')},
                {pic1: require('../assets/cloth/l2-1.jpg'),pic2: require('../assets/cloth/l2-2.jpg')},
                {pic1: require('../assets/cloth/l3-1.jpg'),pic2: require('../assets/cloth/l3-2.jpg')},
                {pic1: require('../assets/cloth/l4-1.jpg'),pic2: require('../assets/cloth/l4-2.jpg')},
                {pic1: require('../assets/cloth/l5-1.jpg'),pic2: require('../assets/cloth/l5-2.jpg')},],

                c:[
                {pic1: require('../assets/cloth/c1-1.jpg'),pic2: require('../assets/cloth/c1-2.jpg'),pic3: require('../assets/cloth/c1-3.jpg'),},
                {pic1: require('../assets/cloth/c2-1.jpg'),pic2: require('../assets/cloth/c2-2.jpg'),pic3: require('../assets/cloth/c2-3.jpg'),},
                {pic1: require('../assets/cloth/c3-1.jpg'),pic2: require('../assets/cloth/c3-2.jpg'),pic3: require('../assets/cloth/c3-3.jpg'),},
                {pic1: require('../assets/cloth/c4-1.jpg'),pic2: require('../assets/cloth/c4-2.jpg'),pic3: require('../assets/cloth/c4-3.jpg'),},
                {pic1: require('../assets/cloth/c5-1.jpg'),pic2: require('../assets/cloth/c5-2.jpg'),pic3: require('../assets/cloth/c5-3.jpg'),},
                ],
                d:[  {pic1: require('../assets/cloth/d1-1.jpg'),pic2: require('../assets/cloth/d1-2.jpg'),pic3: require('../assets/cloth/d1-3.jpg'),pic4: require('../assets/cloth/d1-4.png'),pic5: require('../assets/cloth/d1-5.jpg')},
                 {pic1: require('../assets/cloth/d2-1.jpg'),pic2: require('../assets/cloth/d2-2.jpg'),pic3: require('../assets/cloth/d2-3.jpg'),pic4: require('../assets/cloth/d2-4.jpg'),pic5: require('../assets/cloth/d2-5.jpg')},
                {pic1: require('../assets/cloth/d3-1.jpg'),pic2: require('../assets/cloth/d3-2.jpg'),pic3: require('../assets/cloth/d3-3.jpg'),pic4: require('../assets/cloth/d3-4.jpg'),pic5: require('../assets/cloth/d3-5.png')},
                 {pic1: require('../assets/cloth/d4-1.jpg'),pic2: require('../assets/cloth/d4-2.jpg'),pic3: require('../assets/cloth/d4-3.jpg'),pic4: require('../assets/cloth/d4-4.jpg'),pic5: require('../assets/cloth/d4-5.jpg')},
                 {pic1: require('../assets/cloth/d5-1.jpg'),pic2: require('../assets/cloth/d5-2.jpg'),pic3: require('../assets/cloth/d5-3.jpg'),pic4: require('../assets/cloth/d5-4.jpg'),pic5: require('../assets/cloth/d5-5.jpg')},           
            ],

            sOne:[
                 {pic: require('../assets/cloth/s1-1.jpg')},{pic: require('../assets/cloth/s1-2.jpg')},{pic: require('../assets/cloth/s1-3.jpg')},{pic: require('../assets/cloth/s1-4.jpg')},{pic: require('../assets/cloth/s1-5.jpg')},
            {pic: require('../assets/cloth/s1-6.jpg')},{pic: require('../assets/cloth/s1-7.jpg')},{pic: require('../assets/cloth/s1-8.jpg')},{pic: require('../assets/cloth/s1-9.jpg')},{pic: require('../assets/cloth/s1-10.jpg')},
            ],
            sTwo:[ {pic1: require('../assets/cloth/s2-1.jpg')},{pic1: require('../assets/cloth/s2-2.jpg')},{pic1: require('../assets/cloth/s2-3.jpg')},{pic1: require('../assets/cloth/s2-4.jpg')},{pic1: require('../assets/cloth/s2-5.jpg')},
            {pic1: require('../assets/cloth/s2-6.jpg')},{pic1: require('../assets/cloth/s2-7.jpg')},{pic1: require('../assets/cloth/s2-8.jpg')},{pic1: require('../assets/cloth/s2-9.jpg')},{pic1: require('../assets/cloth/s2-10.jpg')},
            ],


			ids:[{id:"童装"},{id:"童鞋"},{id:"婴儿服饰"},{id:"T恤"},{id:"童装裤子"},{id:"女装"},{id:"连衣裙"},{id:"衬衫女"},{id:"女士裤装"},{id:"跑步鞋"},{id:" 运动服装"},{id:"户外服饰"},{id:"男士T恤"},{id:"男士牛仔裤"},{id:"男士外套"},{id:"凉鞋"},{id:"太阳镜"},{id:"手表"},{id:"内衣袜品"},],
              titles:[{name:"服装鞋包"},{name:"运动潮流"},{name:"女装男装内衣"},{name:"童装童鞋"},{name:"鞋靴箱包"},],
            }},
            methods:{
                change2(j){
                    this.b=j
                },

                back(){
                    this.a=20
                    this.b=20
                },
	     	change(item,i){
			this.isActive=i;
                // console.log(this.isActive);
	        	}
            },
            async mounted(){
        var swiper = new Swiper(".mySwiper1", {
        loop: true,
        autoplay: 3000,//自动轮播
    	speed: 600,
        autoplay: {
          delay: 3000, //3秒切换一次
          pauseOnMouseEnter: true, //悬停停止切换
        },
        navigation: {
          nextEl: " .swiper-button-next",
          prevEl: " .swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // paginationType: 'custom',
      });
      var swiper = new Swiper(".mySwiper2", {
        loop: true,
        autoplay: {
          delay: 3000, //3秒切换一次
          pauseOnMouseEnter: true, //悬停停止切换
        },
        navigation: {
          nextEl: " .swiper-button-next",
          prevEl: " .swiper-button-prev",
        },
      });

 }
        }

</script>
<style scoped>
.cloth{
    padding: 0 160px;
    margin-top: 30px;
    background-color: #fff;
}
.top{
        display: flex;
        color: rgb(73, 73, 73);
        justify-content: space-between;
        border-bottom:  2px solid #333;
        margin-bottom: 10px;
    }
    .top-left{
        font-size: 20px;
        height: 25px;
        line-height: 45px;
        font-weight: 650;      
        width: 105px;
    }
    .top-right{
        display: flex;
    }
    .title{
        font-size: 14px;
        width: 115px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: rgb(241, 239, 239);
        border: 0.2px solid rgb(200, 200, 200);
    }
    .isActive{
        border: 2px solid #333;
        border-bottom: none;
        background-color: #fff;
        font-weight: 600;
    }
    .Body{
        display: flex;
        border: 0.01px solid rgb(200, 200, 200);
    }
    .left{
        width: 240px;
        height: 520px;
        padding-top: 320px;
        background: url(../assets/cloth/bg.png);/*图片路径*/
    }
    .ids{
        display: flex;
        flex-flow: wrap;
        width: 240px;
        font-size: 12px;
        height: 200px;
        background-color: #fff;
    }
    .id{
        width: 80px;
        padding-left: 5px;
    }
    .r-top{
        display: flex;
    }
    .swiper1{
        width: 384px;
        overflow: hidden;
    }
    .r-top img{
        border: 0.01px solid rgb(200, 200, 200);
    }
    .r-bottem{
        display: flex;
    }
    .s1 ,.s2{
        display: flex;
    }
    .swiper2{
        width: 1200px;
        overflow: hidden;
    }
    .mySwiper1 .swiper-button-next{
        margin-top: 1820px;
        margin-right: 730px;
        color: rgb(157, 158, 158);
        color: rgb(235, 231, 231);
         opacity: 0.5;
        background-color: rgb(207, 204, 204);
    }
    .mySwiper1 .swiper-button-prev{
        margin-top: 1820px;
        margin-left: 400px;
        color: rgb(157, 158, 158);
        color: rgb(235, 231, 231);
         opacity: 0.5;
        background-color: rgb(207, 204, 204);

    }
    .mySwiper1 .swiper-pagination{
        padding-left: 100px;
        width: 260px;
    }
    .mySwiper2 .swiper-button-next{
        margin-top: 2180px;
        margin-right: 150px;
        color: rgb(157, 158, 158);
        color: rgb(235, 231, 231);
         opacity: 0.5;
        background-color: rgb(207, 204, 204);
    }
    .mySwiper2 .swiper-button-prev{
        margin-top: 2180px;
        margin-left: 150px;
        color: rgb(157, 158, 158);
        color: rgb(235, 231, 231);
         opacity: 0.5;
        background-color: rgb(207, 204, 204);
    }
    .red{
        color: #ff2832;
        text-decoration: underline;
    }
</style>