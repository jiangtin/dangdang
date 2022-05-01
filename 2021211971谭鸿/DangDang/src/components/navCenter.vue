<template>
    <div class="navCenter">
      <div>
        <div class="swiper mSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="(item,i) in imgs" :key="i">
              <img :src="item.pic">
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next "></div>
          <div class="swiper-button-prev"></div>       
        </div>
      </div>
      <!-- 小轮播图 -->
      <div id="small">
        <div class="swiper ySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="i in imgs2">
              <img :src="i.pic1">
              <img :src="i.pic2">
              <img :src="i.pic3">
              <img :src="i.pic4">
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>       
        </div>
      </div>
    </div>
</template>
<script>
    import 'swiper/css/swiper.css';
 import Swiper from 'swiper';   
 export default {
  data:function(){
          return{
           imgs:[
              {pic: require('../assets/img/bs1.jpg')},
             {pic: require('../assets/img/bs2.jpg')},
           {pic: require('../assets/img/bs3.jpg')},
           {pic: require('../assets/img/bs4.jpg')},
           {pic: require('../assets/img/bs5.jpg')},
           {pic: require('../assets/img/bs6.jpg')},
           {pic: require('../assets/img/bs7.jpg')},
           ],
           imgs2:[
              {pic1: require('../assets/img/swiper2-1.jpg'),pic2: require('../assets/img/swiper2-2.jpg'),pic3: require('../assets/img/swiper2-3.jpg'),pic4: require('../assets/img/swiper2-4.jpg')},
              {pic1: require('../assets/img/swiper2-5.jpg'),pic2: require('../assets/img/swiper2-6.jpg'),pic3: require('../assets/img/swiper2-7.jpg'),pic4: require('../assets/img/swiper2-8.jpg')},
           ]
          }
      },
   async mounted(){
    var swiper = new Swiper(".mSwiper", {
        loop: true,
        autoplay: {
          delay: 3000, //3秒切换一次
          pauseOnMouseEnter: true, //悬停停止切换
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loopedSlides: 5,
        preventsDefault:false,   //干掉默认阻止的事件
        observer:true,          //初始化子元素
        observerParents:true,    //初始化父元素
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      });
      var swiper2 = new Swiper(".ySwiper", {
        loop: true,
        
        autoplay: {
          delay: 3000, //3秒切换一次
          pauseOnMouseEnter: true, //悬停停止切换
        },
        loopedSlides: 5,
        slideToClickedSlide: true,
        preventsDefault:false,   //干掉默认阻止的事件
        observer:true,          //初始化子元素
        observerParents:true,    //初始化父元素
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      swiper.params.control =  swiper2;
      swiper2.params.control =  swiper;
    

 }
}

</script>


<style>
   .navCenter{
       width: 800px;
       overflow: hidden;
   }

    .swiper {
      width: 100%;
      height: 100%;
    }


    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

 .swiper .swiper-pagination{
    width: 800px;
    height: 15px;
    position: relative;
    margin-top: -20px;
   }
   .mSwiper .swiper-pagination-bullet {
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
      color: #fff;
      opacity: 1;
      background: rgba(0, 0, 0, 0.2);
    }

    .mSwiper .swiper-pagination-bullet-active {
      color: #fff;
      background: #ff2832;
    }
    .swiper-pagination-bullet-active {
      color: #fff;
      background: #ff2832;
    }
    .mSwiper .swiper-button-next{
      /* position: relative; */
        margin-right: 360px;
        color: rgb(235, 231, 231);
         opacity: 0.5;
      margin-top: 200px;

        background-color: rgb(207, 204, 204);
    
    }
    .mSwiper .swiper-button-prev{
      /* position: relative; */
      margin-left: 360px;
      margin-top: 200px;
      color: rgb(235, 231, 231);
      opacity: 0.5;
        background-color: rgb(207, 204, 204);
    }
    .ySwiper .swiper-button-next{
        margin-right: 360px;
      margin-top:400px;
      

        color: rgb(235, 231, 231);
      opacity: 0.5;
        background-color: rgb(207, 204, 204);
    }
    .ySwiper .swiper-button-prev{
      margin-left: 360px;
      margin-top:400px;
      color: rgb(235, 231, 231);
      opacity: 0.5;
        background-color: rgb(207, 204, 204);

    }
    /* .swiper{
      position: relative;
    } */
    #small img{
      width: 200px;
    }
    #small .swiper-slide{
      display: flex;
    }
  </style>