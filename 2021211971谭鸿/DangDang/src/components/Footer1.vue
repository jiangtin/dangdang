<template>
    <div class="Footer1">
        <!-- 第一块 -->
        <div class="footer-top">
            <div v-for="i in imgs" ><img :src="i.pic"></div>
        </div>

        <!-- 第二块 -->
        <div class="help">
            <div>
                <div class="Head">购物指南</div>
                <div class="helps">购物流程</div>
                <div class="helps">发票制度</div>
                <div class="helps">服务协议</div>
                <div class="helps">全员优惠</div>
           </div>
           <div>
            <div class="Head">支付方式</div>
            <div class="helps">网上支付</div>
            <div class="helps">礼品卡支付</div>
            <div class="helps">银行转账</div>
            <div class="helps">礼券支付</div>
       </div>
        <div>
            <div class="Head">订单服务</div>
            <div class="helps">配送服务查询</div>
            <div class="helps">订单状态说明</div>
            <div class="helps">自助取消订单</div>
            <div class="helps">自助修改订单</div>
    </div>
        <div>
            <div class="Head">配送方式</div>
            <div class="helps">当日递</div>
            <div class="helps">次日达</div>
            <div class="helps">订单自提</div>
            <div class="helps">验货与签收</div>
        </div>
        <div>
            <div class="Head">退换货</div>
            <div class="helps">退换货服务查询</div>
            <div class="helps">自助申请退换货</div>
            <div class="helps">退换货进度查询</div>
            <div class="helps">退款方式和时间</div>
        </div>
        <div>
            <div class="Head">商家服务</div>
            <div class="helps">商家中心</div>
            <div class="helps">运营服务</div>
        </div>
        </div>
      
    </div>
</template>


<script>
    export default{
        data:function(){
            return {
                num:0,
                imgs :[
                {pic: require('../assets/img/foot1.jpg')},
               {pic: require('../assets/img/foot3.png')},
              {pic: require('../assets/img/foot4.png')},
                ]
            }}
        }
</script>



<style lang="less" scoped>
    .Footer1{
        width: 1520px;
        border-top: 2px solid #ff2832;
        margin-top: 15px;
        background-color: #fff;
        color: rgb(117, 116, 116);
        font-size: 12px;
        /* font-family: 'Microsoft YaHei'; */
    }
    
    .footer-top{
        /* border-bottom: 1px solid rgb(165, 164, 164); */
        margin: 0 450px;
        height: 80px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .help{
        border-top: 1px solid rgb(226, 225, 225);
        border-bottom: 1px solid rgb(226, 225, 225);
        display: flex;
        padding: 35px 360px 25px 360px;
        justify-content: space-between;
    }
    .Head {
        text-align: center;
        height: 30px;
        font-size: 15px;
        font-weight: 500;
        color: black;
    }
    .helps{
        text-align: center;
        height: 20px;
        line-height: 20px;
    }
   
</style>