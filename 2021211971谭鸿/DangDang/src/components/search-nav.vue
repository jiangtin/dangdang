<template>
    <div class="search-nav">
        <div class="nav-top">
            <div class="fenlei" @mouseover=" xian()"  @mouseleave="back()">
                <div  >全部商品分类</div>
                <svg class="icon"  aria-hidden="true" id="aright">
                    <use xlink:href="#icon-xiajiantou4"></use>
                </svg>
            </div>
            <div class="x-line" v-for="(item,i) in xLines" :key="i">{{item.name}}</div>
        
         </div>
         <div class="Body"  >

            <div class="Body2">
                <div class="left2">你是不是想找:</div>
                <div class="right2">
                    <div class="jieguo" v-for="(i,j) in xiang"  @mouseleave="change2()"  @mouseover="change(i,j)"  :class=" isActive === j? 'xia ' : ''">{{i.txt}}</div>
                </div>
            </div>

             <div class="Body1"  @mouseleave="back()" @mouseover="back2()"  :style="hui">
                <div class="leftTitle" :style="Ltitle">
                    <div class="title" v-for="(t,j) in titles" :key="j" @mouseover="change(t,j)"  :class=" isActive === j? 'isActive' : ''">{{t.name}}</div>
                </div>
             
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
<script>
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
        props:{
            xiang:Array
        }, 
        components: {
            navTongshu,eBook,navFushi,navXiexue,navYundong,navYing,navJiaju,navJiaju2,navQingjie,navWenju,
            navShipin,navZhu, navPhone,navDianqi,navLipin
        },
        data:function(){
            return {
                hui:'',
                isActive: 20,
                
                Ltitle:'display:none',
                // jieguo:[{txt:"月亮与六便士 傅惟慈"},{txt:"月亮与六便士英文原版"},{txt:"追风筝的人"},{txt:"月亮与六便士 李继宏"},{txt:"杀死一只知更鸟"},{txt:"人间失格"},{txt:"百年孤独"},],
                xLines :[
                    {name: '图书'},{name: '电子书'},{name: '童装、童鞋'},{name: '女装'},{name: '食品'},{name: '母婴玩具'},
                ],
                titles:[
                    {name: '图书、童书'}, {name: '电子书'},   {name: '创意文具'},  {name: '服饰、内衣'},  {name: '鞋靴、箱包'},  {name: '运动户外'},  {name: '孕、婴、童'},  
                        {name: '家居、家纺、汽车'},  {name: '家具、家装、康体'},  {name: '个人护理、情节'},  {name: '食品、茶酒'},  {name: '珠宝饰品'}, {name: '手机、数码、电脑办公'},{name: '家用电器'},{name: '当当礼品卡、生活服务'},
                    ],
            }
        },
        methods:{
            back(){
                this.hui="display:none;"
                this.isActive=20
            },
            back2(){
                this.hui=" "
            },
            xian(){
                this.Ltitle="display:block"
                this.hui="display:block;"
            },
            change(t,j){
			this.isActive=j;
            
                // console.log(this.isActive);
	        	},
                change2(t,j){
			this.Active=20;
	        	},
        }
    }
</script>


<style scoped>
    .search-nav{
        width:100%;
        justify-content: space-between;
        font-size: 14px;
    background-color: #fff;
    }

    /* 头部样式 */
.nav-top{
    padding: 0 160px;
    width: 1520px;
    display: flex;
    font-weight: 1000;
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

.Body{
    width: 1520px;
    /* height: 490px; */
    border-top: 2.5px solid #ff2832;
    padding-left: 160px;
    margin-top: 0.5px;
   

}
.Body1{
    width: 1200px;
    height: 39px;
    display: flex;
    position: relative;
    margin-top: -26px;
    
}
.Body2{
    width: 1200px;
    height: 13px;

    display: flex;
    position: relative;
    margin-top: 13px;
    font-size: 13px;   
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
    /* position: relative; */
    padding-left: 20px;
    line-height: 30px;
}
.isActive{
        border: 2px solid #ff2832;
        border-right: none;
        text-decoration:underline;
        background-color: #fff;
        color: #ff2832;
        margin-right: -3px;
    }
    .left2{
        font-weight: 550;
        line-height: 13px;

    }
    .right2{
        display: flex;
        margin-left: 10px;
        width: 760px;
        justify-content: space-between;
    }
    .jieguo{
        height: 13px;
        font-size: 12px;
        padding-left: 8px;
        line-height: 13px;
        color: #1a66b3;
        border-left: 0.001px solid #1a66b3;
    }
    .xia{
        border-bottom:  0.001px solid #1a66b3;
    }
</style>