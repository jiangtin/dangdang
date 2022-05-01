<template>
    <div class="searchMore">
        <div class="line1">
            <div class="left">
                <div class="zonghe about">综合排序</div>
                <div class="about">
                    销量
                    <svg class="icon"  aria-hidden="true" >
                        <use xlink:href="#icon-xiangxiajiantoucuxiao"></use>
                    </svg>
                </div>
                <div class="about">
                    好评
                    <svg class="icon"  aria-hidden="true">
                        <use xlink:href="#icon-xiangxiajiantoucuxiao"></use>
                    </svg>
                </div>
                <div class="about">
                    出版时间
                    <svg class="icon"  aria-hidden="true" >
                        <use xlink:href="#icon-xiangxiajiantoucuxiao"></use>
                    </svg>
                </div>
                <div class="about">
                    价格
                    <svg class="icon"  aria-hidden="true">
                        <use xlink:href="#icon-shangxiajiantou"></use>
                    </svg>
                </div>
            </div>
            <div class="input">
                <svg class="icon"  aria-hidden="true" >
                    <use xlink:href="#icon-qianqian-"></use>
                </svg>
                <input type="text">
                <svg class="icon"  aria-hidden="true" >
                    <use xlink:href="#icon-qianqian-"></use>
                </svg>
                <input type="text">
            </div>
            <div class="didian">
                配送至：
                <div class="city">
                    北京
                </div>
            </div>
            <div class="choice">
                <div class="kuang"></div>只看有货
                <div class="kuang"></div>促销
                <div class="kuang"></div>特卖
                <div class="kuang"></div>当当发货
            </div>
            <div class="t-right">
                <svg class="icon"  aria-hidden="true" >
                    <use xlink:href="#icon-liebiao"></use>
                </svg>
                大图
                <svg class="icon red"  aria-hidden="true" >
                    <use xlink:href="#icon-liebiao1"></use>
                </svg>
                列表
                <div class="l-jian">
                    <svg class="icon"  aria-hidden="true" >
                        <use xlink:href="#icon-zuosanjiaoxing"></use>
                    </svg>
                </div>
                &nbsp;&nbsp; 1/100&nbsp;&nbsp;
                <div class="r-jian">
                    <svg class="icon"  aria-hidden="true" >
                        <use xlink:href="#icon-yousanjiaoxing"></use>
                    </svg>
                </div>

            </div>
            

        </div>
        <div class="yincang">

        </div>
        <div class="pic">

        </div>
        
    </div>
</template>
<script>

</script>
<style scoped>
    .searchMore{
        width: 1200px;
        margin-left: 160px;
        margin-top: 25px;
        font-size: 12px;   
        color:rgb(95, 95, 95);

    }
    .line1{
        height: 32px;
        display: flex;
        align-items: center;
       background-color: rgb(245, 245, 245);

    }
    .line1 .icon{
        width: 20px;
        height: 15px;
        padding-top: 5px;
        margin-left: -5px;

    }
    .left{
          width: 310px;
          display: flex;
          justify-content: space-between;
    }
    .zonghe{
        padding-left: 8px;
        padding-right: 8px;
        color: #ff3823;
    }
    .about{
        height: 20px;
        vertical-align: middle;
        border-right: 0.001px solid rgb(207, 205, 205);

    }

    .pic{
        background: url(../assets/img/heng.jpg);
        width: 1200px;
        height: 32px;
    }
    .input{
        display: flex;
        width: 120px;
    outline: none;
        
        border-right: 0.001px solid rgb(207, 205, 205);

    }
    .input .icon{
        width: 15px;
        height: 18px;
        fill: rgb(150, 147, 147);
        margin-right: -15px;
        position: relative;
        margin-left: 10px;
    }
    .input input{
        width: 45px;
        height: 22px;
        border: 0.001px solid rgb(245, 181, 64);
    }
    .didian{
        width: 120px;
        border-right: 0.001px solid rgb(207, 205, 205);
        height: 22px;
        line-height: 22px;
        display: flex;
        padding-left: 5px;

    }
    .city{
        width: 60px;
        height: 22px;
        text-align: center;
        line-height: 22px;
        border: 0.001px solid rgb(207, 205, 205);

    }
    .choice{
        display: flex;
        width: 300px;
        height: 22px;
        line-height: 22px;

    }
    .kuang{
        width: 13px;
        height: 13px;
        border-radius: 2px;
        margin: 5px 5px 0 20px;
        border: 1.5px solid rgb(207, 205, 205);

    }
    .t-right{
        display: flex;
        height: 22px;
        line-height: 25px;
        margin-left: 110px;
    }
    .t-right .icon{
        width: 20px;
        height: 20px;
        fill: rgb(179, 178, 178);
        margin-left: 15px;
    }
    .red{
        fill: #ff3823;
    }
    .l-jian,.r-jian{
        width: 18px;
        height: 18px;
        background-color: #ff3823;
        margin-top: 4px;
    }
    .l-jian{
        margin-left: 20px;
    }
    .l-jian .icon,.r-jian .icon{
        width: 15px;
        height: 15px;
        margin-left: 0;
        margin-bottom: 3px;
        fill: aliceblue;
    }

     
</style>