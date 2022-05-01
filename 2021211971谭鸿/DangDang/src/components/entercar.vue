<template>
    <div class="entercar" >
        <div class="yes" v-show="anum!=0">
            <div class="t-top">
                <div class="peisong">
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-u-copy"></use>
                    </svg>
                    配送地址：
                    <div class="dizhi">
                        北京市顺义区胜利街道
                    </div>
                </div>
            </div>
            <div class="Body">
                <div class="top">
                    <div class="kuang" @click="quanxuan()" :class=" n===0? 'isActive' : ''"></div>
                    全选
                    <div class="spxx">商品信息</div>
                    <div class="f">单价</div>
                    <div class="f">数量</div>
                    <div class="f">金额</div>操作
                </div>
                <div class="nexttop">
                    <div class="kuang"  @click="quanxuan()" :class=" n===0? 'isActive' : ''"></div>
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-dangdang"></use>
                    </svg>当当自营
                </div>
    
    
                <div class="zhuti">
                    <div class="car" v-for="(i,j) in list" :key="j" v-show="list[j].num!=0">
                    <div class="kuang" @click="danji(j)"  :class=" a[j]===j? 'isActive' : ''"></div>
                        <img v-if="i.num1==0" :src="i.pic">
                        <img v-else :src="require('@/assets/search/'+i.pic)" >
                        <div class="Right">
    
                            <div class="right">
                                <div class="txt">{{i.txt}}{{i.line}}</div>
                                <div class="r-p">
                                    <div class="price">
                                        <svg class="icon"  aria-hidden="true" id="aright">
                                            <use class="Icon" xlink:href="#icon-qianqian-"></use>
                                        </svg>
                                        <!-- <div class="money"> -->
                                            {{i.price}}
                                        <!-- </div> -->
                                    </div>
                                    <div class="cu">促销</div>
                                </div>
                                <div class="shuliang">
                                    <div class="jian" @click="jian(j)">
                                        <svg class="icon"  aria-hidden="true" id="aright">
                                            <use class="Icon" xlink:href="#icon-jiahaojianhao"></use>
                                        </svg>
                                    </div>
                                    <div class="num">{{i.num}}</div>
                                    <div class="jia" @click="jia(j)">
                                        <svg class="icon"  aria-hidden="true" id="aright">
                                            <use class="Icon" xlink:href="#icon-jiahao"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="price allp">
                                    <svg class="icon"  aria-hidden="true" id="aright">
                                        <use class="Icon" xlink:href="#icon-qianqian-"></use>
                                    </svg>
                                    <div class="money" v-text="Onum[j]">
                                        
                                    </div>
                                </div>
                                <div class="r-r">
                                    <div class="r1">移入收藏</div>
                                    <div class="r1">删除</div>
        
                                </div>
                            </div>
                            <div class="jiajia">
                                购买此商品可享促销
                                <div class="gou">
                                    加价购
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="b-bt">
                    <div>店铺合计</div>
                    <div class="price">
                        <svg class="icon"  aria-hidden="true" id="aright">
                            <use class="Icon" xlink:href="#icon-qianqian-"></use>
                        </svg>
                       <div class="zonghe" v-text="msg5"></div>
                    </div>
                </div>
            </div>
            <div class="bottem">
                <div class="bt-l">
                    <div class="kuang"  @click="quanxuan()" :class=" n===0? 'isActive' : ''"></div>
                     全选
                     <div class="piliang">批量删除</div>
                     <div class="liang">已选择
                         <div class="Anum" v-text="Anum"></div>件商品
                     </div>
                </div>
                <div class="bt-r">
                    <div class="r-le">
                        <div>总计（不含运费）</div>
                        <div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;已节省</div>
                    </div>
                    <div class="r-ri">
                        <div class="price Aprice">
                            <svg class="icon"  aria-hidden="true" id="aright">
                                <use class="Icon" xlink:href="#icon-qianqian-"></use>
                            </svg>
                           <div class="zonghe" v-text="msg5"></div>
                        </div>
                        <div class="price">
                            <svg class="icon"  aria-hidden="true" id="aright">
                                <use class="Icon" xlink:href="#icon-qianqian-"></use>
                            </svg>
                           <div class="zonghe" >0.00</div>
                        </div>
                    </div>
                    <div class="r-bt">
                        结算
                    </div>
                
                </div>
            </div>
        </div>
        <div class="no" v-if="anum==0">
            <div class="no-l">
                <img src="../assets/buycar/empty.png">
            </div>
            <div class="no-r">
                <div class="tip">你的购物车还是空的,您可以：</div>
                <div class="no-d">
                    <div class="bt-d">立即登录</div>
                    登录后购物车的商品将保存到您的账号中，或者去逛逛
                </div>
            </div>

        </div>
       
    </div>
</template>
<script>
   export default{
       props:['msg1'], 
        data:function(){

            return {
                a:[],
                m:1,
                n:1,
                sum:0,
                sum2:0,
                sum3:0,
                numO:[],
               list: this.$store.state.list,

            }},
            computed: {
			msg5:{
				get:function(){
                    this.sum=0;
                    if(this.n===1){
					for (let i = 0; i < this.list.length; i++) {
						 this.sum+=this.list[i].price*this.list[i].num;
					}
					return this.sum;
                }
                else{
                    return 0
                }
				}
			},
            Onum:{
				get:function(){
                    this.numO=[]
					for (let i = 0; i < this.list.length; i++) {
                        this.numO.push(this.list[i].price*this.list[i].num)
                        this.a[i]=-1
					}
					return this.numO;
				}
			},
            Anum:{
				get:function(){
                    this.sum2=0;
                    if(this.n===1){
					for (let i = 0; i < this.list.length; i++) {
						 this.sum2+=this.list[i].num;
					}
                    // this.sum2=sum2.toFixed(2)
					return this.sum2;
                }
                else{
                    return 0
                }
				}
			},
            anum:{
				get:function(){
                    this.sum3=0;
					for (let i = 0; i < this.list.length; i++) {
						 this.sum3+=this.list[i].num;
					}
					return this.sum3;
				}
			},
		},
            methods:{
                jian(j){
                    this.list[j].num-=1
                    // if(  this.list[j].num==0){
                    //     delete this.list[j]
                    // }
                },
                jia(j){
                    this.list[j].num+=1
                },
                danji(j){
                    if(this.m===1){
                        this.a[j]=j
                        this.Onum[j]=0
                        this.m=0
                    }
                    else{
                        this.a[j]=-1
                        this.Onum[j]=this.list[j].price*this.list[j].num
                        this.m=1
                    }
                },
                quanxuan(){
                    if(this.n==1){
                        for (let i = 0; i < this.list.length; i++) {
                            this.a[i]=i
                            this.Onum[i]=0
                        }
                     this.n=0
                    }
                    else{
                        for (let i = 0; i < this.list.length; i++) {
                            this.a[i]=-1
                            this.Onum[i]=this.list[i].price*this.list[i].num
                        }
                         this.n=1
                    }
                }
            },
            watch:{
                msg1(){
                    // this.list.push(this.msg1)
                    console.log(this.list); 
                     this.$store.commit('add',this.msg1)
                },
               
            }
        }

</script>

<style scoped>
    .entercar{
        width: 1520px;
        font-size: 12px;
    }
    .t-top{
        width: 1520px;
        height: 54px;
        background-color: #fafafa;
        padding-left: 280px;
        padding-top: 15px;
        color: #646464;
    }
    .peisong{
        display: flex;
        vertical-align: middle;
        width: 263.5px;
        height: 22px;
    line-height: 22px;
    background-color: #fcfcfc;
    border: 1px solid #ebebeb;
    padding: 0 15px;
    border-radius: 12px;
    }
    .peisong .icon{
        width: 20px;
        height: 20px;
        fill: #ff3823;
        margin-right: 5px;
    }
    .dizhi{
        width: 141px;
        line-height: 22px;
        text-align: center;
    border: 1px solid #ebebeb;

    }
    .Body{
        width: 960px;
        margin-left: 280px;

    }
    .top{
        line-height: 36px;
    height: 36px;
    display: flex;
    margin-top: 10px;
    line-height: 36px;
    color: #646464;

    }
    .nexttop{

    display: flex;
    color: #646464;

        color: #252525;
    font-weight: bold;
    line-height: 37px;
    height: 24px;
    margin: 10px 0;
    padding-left: 15px;
    }
    .nexttop .icon{
        width: 22px;
        height: 22px;
        margin-top: 8px;
        margin-right: 5px;
    }
    .kuang{
        width: 15px;
        height: 15px;
    border: 1.5px solid #c4c3c3;
    border-radius: 1px;
    margin-right: 10px;
    margin-top: 10px;
    background-color: #ff2832;
        
    }
    .spxx{
    height: 36px;
        width: 200px;
        width: 280px;
        margin-left: 150px;
    }
    .f{
        width: 130px;
        height: 36px;
        line-height: 36px;

    }
    .zhuti{
        width: 960px;
    border: 1px solid #ebebeb;
    background-color: #fafafa;
    color: #505050;


    }
    .car{
        display: flex;
        width: 960px;
        height: 160px;
    }
    .car .kuang{
        margin-top: 60px;
        margin-left: 20px;
    }
    .car img{
        margin-top: 30px;
        width: 80px;
        height: 80px;
        margin-left: 10px;
    }
    .right{
        margin-left: 20px;
        display: flex;
        height: 105px;
    }
    .txt{
        height: 36px;
        width: 335px;
    overflow: hidden;
    margin-top: 20px;
    line-height: 18px;
    }
    .price{
        display: flex;
        width: 70px;
        vertical-align: middle;
    }
    .price .icon{
        width: 12px;
        height: 14px;
        display: flex;
        padding-top: 5px;
    }
    .r-p{
        padding-left: 40px;
        width: 130px;
        vertical-align: top;
    padding-top: 15px;
    line-height: 22px;
    text-align: center;
    }
    .cu{
        width: 47px;
        height: 22px;
        color: #ff3823;
        text-align: center;
        line-height: 22px;
    border: 1px solid #ff3823;
        margin-top: 10px;
    }
    .shuliang{
        width: 130px;
        padding-left: 17px;
        display: flex;
        margin-top: 20px;
    }
    .jian,.jia{
        width: 28px;
        height: 28px;
    border: 1px solid #ebebeb;
        margin-left: -1px;
        padding-top: 5px;
        padding-left: 5px;
    }
    .jian .icon,.jia .icon{
        width: 15px;
        height: 15px;
    }
    .num{
        width: 38px;
        height: 28px;
        text-align: center;
    border: 1px solid #ebebeb;
        margin-left: -1px;
        font-size: 14px;
        font-weight: 540;
        line-height: 28px;
        background-color: #fff;
    }
    .allp{
        margin-top: 20px;
        margin-left: 20px;
        color: #ff3823;
    }
    .allp .icon{
        fill: #ff3823;
    }
    .r-r{
        margin-top: 12px;
        margin-left: 50px;
        width: 70px;
    }
    .r1{
        width: 60px;
        text-align: center;
        margin-top: 8px;
    }
    .jiajia{
        display: flex;
        color: #4f4f4f;
        margin-left: 10px;
        margin-top: 20px;
    }
    .gou{
        background-color: #54d1ff;
        width: 58px;
        height: 22px;
        color: #fff;
        font-weight: 540;
        margin-left: 5px;
        border-radius: 5px;
        text-align: center;
        line-height: 22px; 
    }
    .b-bt{
        width: 960px;
        height: 53px;
        font-size: 13px;
        padding-top: 17px;
        color: #252525;
        font-weight: 545;
        padding-left: 53px;
        display: flex;
        border: 1px solid #ebebeb;
    background-color: #fafafa;

    }
    .b-bt .price{
        font-size: 16px;
        font-weight: 550;
        color: #ff3823;
        margin-left:700px;
    }
    .b-bt .icon{
        width: 14px;
        height: 18px;
        fill: #ff3823;
    }
    .bottem{
        width: 1080px;
        display: flex;
        padding-left: 100px;
        margin-left: 270px;
    height: 98px;
    z-index: 10;
    margin: 40px auto;
    padding: 0 62px;
    background: url(../assets/buycar/total.png) 0 center no-repeat;
    position: relative;
    height: 58px;
    color: #646464;
        font-size: 12px;
        background-size:1080px 78px;
    }
    
    .bt-l{
        display: flex;
        padding-top: 8px;
        line-height: 33px;
         width: 430px;
    }
    .bt-r{
        margin: 14px 0 0;
    width: 530px;
    display: flex;
    padding-left: 240px;
    }
    .liang{
        display: flex;
        margin-left: 100px;
    }
    .Anum{
        color: #ff3823;
    }
    .piliang{
        color: #252525;
        margin-left: 50px;
    }
    .Aprice{
        font-size: 18px;
        font-weight: 550;
        margin-bottom: 5px;
        margin-top: -8px;
      
        color: #ff3823;
    }
    .zonghe{
        width: 50px;
        overflow: hidden;
    }
    .Aprice .icon{
        width: 16px;
        height: 20px;
        fill: #ff3823;
    }
    .r-le div{
        margin-bottom: 5px;
        width: 100px;
    }
    .r-bt{
    width: 116px;
    height: 38px;
    font: bold 18px/38px "Microsoft Yahei";
    color: #fff;
    background-color: #ff2832;
    border-radius: 2px;
    text-align: center;
    margin-top: 0px;
    margin-left: 35px;
    }
    .no{
        display: flex;
        height: 190px;
        width: 960px;
        margin-left: 280px;
        padding-left: 90px;
        margin-top: 45px;
        margin-bottom: 40px;
    }
    .no-d{
        display: flex;
        font-size: 12px;
    color: #8a8888;
    margin-top: 46px;
    }
    .no-r{
        margin-left: 200px;
        margin-top: 40px;
    }
    .tip{
        font-size: 14px;
    color: #8a8888;
    width: 465px;
    height: 14px;
    }
    .bt-d{
        width: 116px;
    height: 38px;
    background-color: #ff2832;
    color: #fff;
    text-align: center;
    line-height: 38px;
    font-size: 18px;
    margin: -8px 20px 0 0;
    border-radius: 2px;
    }
    .isActive{
        background-color: #ebebeb;
    }
</style>