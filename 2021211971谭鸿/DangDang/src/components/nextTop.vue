<template>
<div class="nextTop">

<div class="left">
    <img src="http://img62.ddimg.cn/upload_img/00444/tupian/PClogo-1648893484.gif">
</div>

<div class="center">
    <div class="high">
        <input class="input" placeholder="" v-model="sou" type="text">
        <div class="fenlei" @mouseover="changeR(8)" @mouseleave="backC()">
            <div  @click="geng">全部分类</div>
            <svg class="icon"  aria-hidden="true" id="aright">
                <use xlink:href="#icon-xiajiantou3"></use>
            </svg>
        </div>
        <div class="Search" @click="sousuo">
            <svg class="icon search"  aria-hidden="true" id="aright">
                <use xlink:href="#icon-sousuo1"></use>
            </svg>
        </div>
        
    </div>

    <div class="low">
        <div class="reSou">
            <div>热搜： </div>
            <div class="line" v-for="(item,i) in lines" :key="i" @mouseover="change(i)"  @mouseleave="back()" :class="b=== i? 'red ' : ''">{{item.name}}</div>
        </div>
        <div class="tip">高级搜索</div>
    </div>
    <div class="mmores" @mouseover="changeR(8)"  @mouseleave="backC()"  v-show="a==8" >
        <div class="mmore" @mouseover="changeR(8)" v-for="m in fenlei" >{{m.id}}</div>
    </div>

</div>

<div class="right">
    <div class="buyCar">
        <svg class="icon carPic"  aria-hidden="true" id="aright">
            <use xlink:href="#icon-gouwuche"></use>
        </svg>
        <router-link to="/buycar">购物车 {{num}}</router-link>
    </div>
    <div class="dingdan">我的订单</div>
</div>

</div>
</template>
<script>
     import da from "../assets/data"
     console.log(da);
    export default{   
        props:['msg'], 
        data:function(){
            return {
                b:100,
                a:0,
                searchData:'',
                searchdata:[],
                num:0,
                sou:'月亮与六便士',
                // myMsg:this.msg,
                lines :[
                ],
                fenlei:[
                    {"id":"全部分类"},
                    {"id":"尾品汇"}, 
                    {"id":"图书"},  
                    {"id":"电子书"},  
                    {"id":"音像"},  
                    {"id":"影视"},  
                    {"id":"时尚美妆"},  
                    {"id":"母婴用品"},  
                    {"id":"玩具"},  
                    {"id":"孕婴服饰"},  
                    {"id":"童装童鞋"},  
                    {"id":"家居日用"},
                ],
            }},
            created(){
             this.lines = da.resou.lines;
             this.searchdata=da.searchleft;
  },
            methods:{
                change(i){
                    this.b=i
                },

                back(){
                    this.b=100
                },
                changeR(m){
                this.a=m
        },
        backC(){
            this.a=0
        },
                sousuo(){
                   console.log(this.sou);    
                   var sou = this.sou;
			if (sou) { 
			 this.searchData =  da.sousuo.filter(function(product) {
			 	console.log(product)
				return Object.keys(product).some(function(key) {
					// console.log(key)
			  	return String(product[key]).toLowerCase().indexOf(sou) > -1
			})
			})
            console.log(this.searchData);
			}            
             this.$emit('addNum',this.searchData)  
             this.$router.push('/search')

                },
                geng(){
                    // this.sou=this.myMsg
                    console.log(this.msg);
                }
            },
          
        }
</script>

<style lang="less" scoped>
    .nextTop{
        width:100%;
        justify-content: space-between;
        display: flex;
        font-size: 12px;
        padding: 0 160px;
        height: 100px;
        vertical-align: middle;
        color: rgb(85, 84, 84);
        background-color: #fff;
    }
    .high{
        border: 2px solid red;
    }
    .input{
        border: none;
        width: 420px;
        height: 40px;
    outline: none;
     
        /* border: 2px solid red; */
        /* border-right: none; */
    }
    .fenlei .icon{
        width: 10px;
        height: 10px;
        fill: rgb(85, 84, 84);
    }
    .search{
        width: 30px;
        height: 30px;
        fill: aliceblue;
    }
    .Search{
        width: 44px;
        height: 42px;
        background-color: #ff2832;
        padding-top: 5px;
        text-align: center;
    }
    .center{
        margin-left: 4px;
        margin-top: 30px;
    }
    .high{
        display: flex;
    }
    .low{
        display: flex;
        justify-content: space-between;

    }
    .fenlei{
        font-size: 16px;
        color: rgb(170, 169, 169);
        background-color: rgb(243, 242, 242);
        height: 40px;
        width: 100px;
        display: flex;
        align-items: center;
        vertical-align: middle;
        justify-content: space-between;
        padding: 0 8px;
        /* border-top: 2px solid #ff2832; */
        /* border-bottom: 2px solid #ff2832; */

    }
    .reSou{
        display: flex;
    }
    .line{
        margin-left: 15px;
        color: rgb(170, 169, 169);
    }
    .right{
        height: 40px;
        display: flex;
        font-size: 14px;
        margin-top: 0;
        margin-top: 30px;
        margin-left: 40px;
    }
    .buyCar{
        background-color: #ff2832;
        color: aliceblue;
        width: 100px;
        display: flex;
        align-items: center;
        vertical-align: middle;
        justify-content: space-between;
        padding:0 7px;
        
    }
    .dingdan{
        width: 100px;
        height: 40px;
        line-height: 35px;
        text-align: center;
        vertical-align: middle;
        padding:0 10px;
        border: 2px solid rgb(139, 139, 139);
    }
    .carPic{
        width: 30px;
        height: 30px;
        fill: aliceblue;
      
    }
    .mmores{
        border: 1.5px solid #c5c5c5;
    position: relative;
    height: 300px;
    margin: -30px -11px -315px 422px;
    background-color:#fff;
    border-top: none;  
    width: 100px;
    z-index:3;
   
    }
    .mmore{

        padding-left: 15px;
        /* text-align: center; */
    margin-top: 10px;
    }
    .red{
        color: #ff2832;
        text-decoration: underline;
    }
a{
  text-decoration: none;
 color: #fff;
}

    </style>