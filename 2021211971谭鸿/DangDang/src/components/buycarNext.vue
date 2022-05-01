<template>
    <div class="buycarNext">
         <div class="topb"> <img src="../assets/buycar/top.jpg"></div>
        <div class="next">
            <img src="../assets/buycar/dd_logo.jpg">
            <div class="n-r">
                <div class="gou">我的购物车</div>
                <div class="dingdan">填写订单</div>
                <div class="dingdan">完成订单</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
             return {
            
             }
         },
        }
</script>
<style scoped>
    .buycarNext{
        width: 1520px;
        border-bottom: 4px solid #ff2832;
    }
    .topb{
        margin-top: 17px;
        margin-left: 280px;
    }
    .next{
        width: 960px;
        height: 69px;
        display: flex;
        padding-left: 5px;
        margin-left: 280px;
        margin-bottom: 30px;
    }
    .next img{
        margin-top: 15px;
        height: 50px;
        width: 260px;
    }
    .n-r{
        height: 36px;
        width: 634px;
        margin-top: 28px;
        display: flex;
        margin-left: 55px;
        font-size: 16px;
        font-weight: 600;
      
        background: url(../assets/buycar/t-r.png);
    }
    .gou{
        width: 206px;
        color: #fff;
        text-align: center;
        line-height: 35px;
    }
    .dingdan{
        width: 211px;
        color: #646464;
        text-align: center;
        line-height: 35px;
    
    }
</style>