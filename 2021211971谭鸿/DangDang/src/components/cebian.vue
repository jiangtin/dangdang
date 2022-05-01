<template>
    <div class="cebian">
       <div class="high">
           <img src="../assets/img/cb.jpg">
           <div class="h-low">
            <svg class="icon"  aria-hidden="true" id="aright">
                <use xlink:href="#icon-shouye"></use>
            </svg>
            <svg class="icon"  aria-hidden="true" id="aright">
                <use xlink:href="#icon-star"></use>
            </svg>
            <svg class="icon"  aria-hidden="true" id="aright">
                <use xlink:href="#icon-jiaoyin"></use>
            </svg>
            <svg class="icon"  aria-hidden="true" id="aright">
                <use xlink:href="#icon-lingdang-xianxing"></use>
            </svg>
            <svg class="icon"  aria-hidden="true" id="aright">
                <use xlink:href="#icon-kefu"></use>
            </svg>
           </div>
       </div>
       <div class="low">
        <div class="l-high">
            <svg class="icon"  aria-hidden="true" id="aright">
                <use xlink:href="#icon-scan"></use>
            </svg>
            <svg class="icon"  aria-hidden="true" id="aright">
                <use xlink:href="#icon-up-circle"></use>
            </svg>
            <div class="idea">
                意见反馈
            </div>
        </div>
        <div class="guang">
            广告
        </div>
       </div>
       <div class="left">
        <svg class="icon"  aria-hidden="true" id="aright">
            <use xlink:href="#icon-shu"></use>
        </svg>
        <svg class="icon"  aria-hidden="true" id="aright">
            <use xlink:href="#icon-yifu"></use>
        </svg>
        <svg class="icon"  aria-hidden="true" id="aright">
            <use xlink:href="#icon-yijia"></use>
        </svg>
        <svg class="icon"  aria-hidden="true" id="aright">
            <use xlink:href="#icon-shouye"></use>
        </svg>
        <svg class="icon"  aria-hidden="true" id="aright">
            <use xlink:href="#icon-zanzan"></use>
        </svg>
       </div>
    </div>
</template>

<style scoped>
    .high{
        height: 300px;
        width: 38px;
        position: fixed;
        top: 0px;
        right: 0;
    }
    .h-low{
        background-color: rgb(83, 83, 83);
        height: 170px;
        width: 35px;
        margin-top: -5px;
        padding-left: 5px;
    }
    .h-low .icon,.l-high .icon{
        width: 24px;
        height: 24px;
        margin-top: 5px;
        fill: rgb(235, 231, 231);
    }
    .low{
        height: 140px;
        width: 38px;
        position: fixed;
        top: 600px;
        right: 0;
    }
    .l-high{
        background-color: rgb(83, 83, 83);
        height: 100px;
        width: 35px;
        padding-left: 5px;
    }
    .idea,.guang{
        color: rgb(235, 231, 231);
        font-size: 12px;
    }
    .guang{
        background-color: rgb(83, 83, 83);
        height: 30px;
        line-height: 30px;
        margin-top: 3px;
        width: 35px;
        padding-left: 5px;
    }
    .left{
        height: 300px;
        width: 38px;
        position: fixed;
        top: 525px;
        left: 120px;
        background-color: rgb(247, 245, 245);
        width: 40px;
        height: 200px;
        padding-left: 8px;
    }
    .left .icon{
        width: 24px;
        height: 24px;
        margin-top: 10px;
        
        fill: rgb(114, 113, 113);
    }
    
</style>