<template>
    <div class="search-all">
        <div class="top">
            <div class="top-left">
                全部商品
            </div>
            <div class="top-right">
                <svg class="icon1"  aria-hidden="true" id="aright">
                    <use xlink:href="#icon-sousuoleimu"></use>
                </svg>
                批量搜索
                <svg class="icon2"  aria-hidden="true" id="aright">
                    <use xlink:href="#icon-wenhao"></use>
                </svg>
            </div>
        </div>
        <div class="b2">
            全部
            <svg class="icon"  aria-hidden="true" id="aright">
                <use xlink:href="#icon-youjiantou"></use>
            </svg>
            <div class="about">&nbsp;&nbsp;{{id}}&nbsp;&nbsp;</div>
            共
            <div class="about">&nbsp;&nbsp;{{num}}&nbsp;&nbsp;</div>
            件商品

        </div>
        <div class="b3" v-for="i in sth">
            <div class="title">{{i.title}}</div>
            <div class="lines">
                <div class="line" v-for="j in i.lines">{{j.line}}</div>
            </div>

        </div>
        <div class="more">
            更多选项（作品、品牌、奖项等）
        </div>
       
    </div>
</template>
<script>

export default{    
        data:function(){
            return {
                id:"月亮与六便士",
                num:21618,
                sth:[
                    {"title":"世界名著",lines:[{line:"欧洲"},{line:"其他地区"},{line:"美洲"},{line:"亚洲"}]},
                    {"title":"中小学阅读",lines:[{line:"语文阅读"},{line:"文言文"},{line:"快乐读书吧"},{line:"课外阅读"},{line:"英语阅读"},{line:"四大名著"},]},
                    {"title":"分类",lines:[{line:"社会小说"}]},
                    {"title":"其他分类",lines:[{line:"图书"},{line:"电子书"},{line:"文化创意用品"},{line:"拍卖"}]},
                    {"title":"出版社",lines:[{line:"上海译文出版社"},{line:"中国友谊出版社"},{line:"中国文联出版社"},{line:"江苏文艺出版社"},{line:"人民文学出版社"},{line:"浙江文艺出版社"},{line:"作家出版社"}]}

                ],
            }
        }
    }
</script>
<style scoped>
.search-all{
    width: 1200px;
    margin-left: 160px;
    margin-top: 14px;

}
.top{
    justify-content: space-between;
    display: flex;
    border-bottom: 2px solid #ff2832;
}
.top-left{
    width: 125px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    background-color: #ff2832;
    color: aliceblue;
}
.top-right{
    display: flex;
    align-items: center;
    vertical-align: middle;
    font-size: 12px;
    color: rgb(150, 150, 150);
}
.top-right .icon1{
    width: 25px;
    height: 25px;
    fill: #ff2832;
}
.top-right .icon2{
    width: 20px;
    height: 20px;
    margin-left: 5px;
    fill: rgb(224, 224, 56);
}
.b2{
    width: 1200px;
    height: 43px;
    padding-top: 10px;

    padding-left: 20px;
    font-size: 13px;
    font-weight: 100;
    color:rgb(75, 75, 75);
    display: flex;
    background-color: rgb(245, 245, 245);
}
.b2 .icon{
    width: 15px;
    height: 15px;
    fill: rgb(128, 125, 125);
}
.about{
    color: #ff2832;
}
.b3{
    width: 1200px;
    height: 36px;
    font-size: 12px;
    font-weight: 100;
    display: flex;
    color:rgb(32, 30, 30);
    border-bottom: 0.001px solid rgb(247, 239, 231);

}
.title{
    width: 80px;
    height: 36px;
    line-height: 36px;
    padding-left: 10px;
    /* text-align: center; */
    background-color: rgb(248, 244, 239);
    border-bottom: 0.001px solid rgb(247, 239, 231);
}
.lines{
    display: flex;
}
.line{
    width: 135px;
    height: 36px;
    line-height: 36px;
    padding-left: 50px;
}
.more{
    width: 250px;
    height: 27px;
    line-height: 27px;
    margin-left: 450px;
    font-size: 12px;
    font-weight: 100;
    text-align: center;
    color: rgb(0, 0, 0);
    background-color: #fff;
    border: 0.001px solid rgb(247, 239, 231);
    border-top: none;
    margin-top: -2px;

}
</style>