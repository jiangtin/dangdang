<template>
    <div class="Footer2">


        <!-- 第三块 -->
        <div class="related">
          <div class="relatedS">公司简介</div>
          <div class="relatedS">诚聘英才</div>
          <div class="relatedS">网站联盟</div>
          <div class="relatedS">当当招商</div>
          <div class="relatedS">机构销售</div>
          <div class="relatedS">手机当当</div>
          <div class="relatedS">官方blog</div>
          <div class="relatedS">知识产权</div>
          <div class="relatedS" id="last">热词搜索</div>
      </div>

      <!-- 第四块 -->
      <div class="else">
          <div class="Else" id="elseTop">Copyright 2004 - 2021 当当网. All Rights Reserved</div>
          <div class="Else">
              <div class="Else2">京ICP证041189号</div>
              <div class="Else2">出版物经营许可证 新出发京批字第直0673号</div>
              <div class="Else2" id="last2">食品经营许可证:JY11101050363440</div>
          </div>
          <div class="Else">
              <div class="Else3">京ICP备17043473号-1</div>
              <div class="Else3">京公网安备 11010502037644号</div>
              <div class="Else3">经营许可证编号:合字B2-20160011</div>
              <div class="Else3" id="last3">互联网药品信息服务资格证</div>
          </div>
          <div class="Else">互联网违法和不良信息举报电话:4001066666-5,涉未成年举报电话:4001066666-9,邮箱:jubao_cbw@dangdang.com</div>
          <div class="Else">网络出版服务许可证(署)网出证(京)字第117号北京当当科文电子商务有限公司,通信地址:北京市朝阳区北三环东路8号静安中心</div>
      </div>

      <!-- 第五块 -->
      <div class="bottom">
          <img src="https://img61.ddimg.cn/7d593c48-48f6-4fc9-85e0-7d6e10dfc2a2.hpvgUvc9">
          <img src="../assets/img/bt2.png">
          <img src="../assets/img/bt3.png">
          <img src="../assets/img/bt4.png">
          <img src="../assets/img/bt4.png">

      </div>
   </div>
</template>
<style scoped>
        .Footer2{
        width: 1520px;  
        background-color: #fff;
        color: rgb(117, 116, 116);
        font-size: 12px;
        /* font-family: 'Microsoft YaHei'; */
    }
    .related{
        width: 100%;
        padding: 23px 380px;
        /* justify-content: space-between; */
        display: flex;
    }
    .relatedS{
        border-right: 1.8px solid rgb(204, 203, 203);
        text-align: center;
        /* padding-right: 20px; */
        width: 84px;
    }
    #last{
        border-right: none;
    }
    .lese{
        display: flex;
        width: 100%;
    }
    .Else{
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        margin-top: 5px;
        
    }
    #elseTop{
        margin-bottom: 15px;
    }
    .Else2, .Else3{
        padding: 0 25px;
        border-right: 1.8px solid rgb(204, 203, 203);
    }
    #last2,#last3{
        border-right: none;
    }
    .bottom{
        padding: 20px 310px;
        display: flex;
        justify-content: space-between;
    }
</style>