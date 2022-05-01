<template>
  <div class="recommend">
    <div class="top">
      为您推荐
    </div>
    <div class="Body">
      <div  v-for="(item,i) in recommends">
        <div class="line" v-if="i%6==0" style="display: flex;">
            <div class="inline" v-for="(item, j) in shuzu(recommends,i)">
              <div class="pic">
                <img :src="item.pic" alt="">
              </div>
              <div class="txt"  @mouseover="change(i,j)"  @mouseleave="back()" :class="( b=== i&&a===j)? 'red ' : ''">
                {{item.txt}}
              </div>
              <div class="price">
                <svg class="icon"  aria-hidden="true" id="aright">
                  <use class="Icon" xlink:href="#icon-qianqian-"></use>
              </svg>
              <div class="money">
                  {{item.price}}
              </div>
              <div v-if="item.eBook!=1" class="e-book">
              电子书
              <svg class="icon"  aria-hidden="true" id="aright">
                <use xlink:href="#icon-qianqian-"></use>
            </svg>
            {{item.eBook}}
              </div>
              <div v-else class="e-book">
                
              </div>
               
              </div>
            </div>
        </div>
    </div>
    </div>
    
  </div>
   
</template>
<script>
    export default {
      data () {
        return {
          b:100,
          a:100,
            recommends:[
            {pic:require('../assets/recommend/recommend1.jpg'),txt: '生命简史:从宇宙起源到人类文明(赠送超大生命星空图,精装大开本地板书,5-14岁儿童世界起源大百科全书', price:' 123.20', eBook:1},
                {pic:require('../assets/recommend/recommend2.jpg'),txt: '心灵教科书绘本系列：西兰花先生的理发店（教会孩子：敢于打破常规思维，培养创新意识）', price: '46.60', eBook:1},
                {pic:require('../assets/recommend/recommend3.jpg'),txt: '蛤蟆先生去看心理医生(年销200万册!英国经典心理咨询入门书，知名心理学家李松蔚强烈推荐）', price: '26.60', eBook:17.99},
                {pic:require('../assets/recommend/recommend4.jpg'),txt: ' 三体：全三册 刘慈欣代表作，亚洲“雨果奖”获奖作品！', price: '87.10', eBook:1},
                {pic:require('../assets/recommend/recommend5.jpg'),txt: '次第花开 修订版', price: '38.20', eBook:1},
                {pic:require('../assets/recommend/recommend6.jpg'),txt: '与未来谈谈心——睡前聊一会儿（音频书）', price: 52.30, eBook:1},
            {pic:require('../assets/recommend/recommend7.jpg'),txt: '人生海海（麦家重磅力作，莫言、董卿盛赞,连续两年高居畅销榜,发行量超200万册)', price: '55.00', eBook:24.99},
                {pic:require('../assets/recommend/recommend8.jpg'),txt: '生死疲劳（不看不知道，莫言真幽默！全新版本！印章版和普通版随机发货）', price: '69.80', eBook:1},
                {pic:require('../assets/recommend/recommend9.jpg'),txt: ' 被讨厌的勇气：“自我启发之父”阿德勒的哲学课 岸见一郎', price: '52.70', eBook:19.90},
                {pic:require('../assets/recommend/recommend10.jpg'),txt: '马尔克斯：百年孤独(50周年纪念版)', price: '39.60', eBook:1},
                {pic:require('../assets/recommend/recommend11.jpg'),txt: '神奇校车·桥梁书版(全20册)', price: '144.0', eBook:1},
                {pic:require('../assets/recommend/recommend12.jpg'),txt: '神奇校车·图画书版(全12册,新增科学博览会1册)', price: '194.00', eBook:1},
            {pic:require('../assets/recommend/recommend13.jpg'),txt: ' 你当像鸟飞往你的山(中文版销量超200万册)比尔·盖茨年度特别推荐!登顶《纽约时报》畅销榜80+周，这本书比你听说的还要好！）', price: '34.80', eBook:1},
                {pic:require('../assets/recommend/recommend14.jpg'),txt: '正面管教(修订版)', price:' 35.00', eBook:1},
                {pic:require('../assets/recommend/recommend15.jpg'),txt: '少年读史记(套装全5册)', price:'100.00', eBook:1},
                {pic:require('../assets/recommend/recommend16.jpg'),txt: '金庸全集：金庸作品集(全集共36册,彩图平装旧版)', price: '817.80', eBook:1},
                {pic:require('../assets/recommend/recommend17.jpg'),txt: '就喜欢你看不惯我又干不掉我的样子6(白茶著 亲笔签名本+吾皇、巴扎黑立牌）', price: '45.00', eBook:1},
                {pic:require('../assets/recommend/recommend18.jpg'),txt: '万物由来科学绘本 写给孩子的科普绘本', price:' 20.00', eBook:1},
            {pic:require('../assets/recommend/recommend19.jpg'),txt: '我们的身体', price: '116.00', eBook:1},
                {pic:require('../assets/recommend/recommend20.jpg'),txt: '不一样的卡梅拉手绘本(1-12册)', price: 117.60, eBook:1},
                {pic:require('../assets/recommend/recommend21.jpg'),txt: '茅盾文学奖获奖作品：人世间（第十届茅盾文学奖获奖作品，雷佳音、辛柏青、宋佳、殷桃、萨日娜、宋春丽、张凯丽等主演）', price: '154.70', eBook:1},
                {pic:require('../assets/recommend/recommend22.jpg'),txt: '小熊宝宝绘本(简装全15册)蒲蒲兰经典绘本！新手妈妈的育儿宝典！(0-3岁)', price:' 88.40', eBook:1},
                {pic:require('../assets/recommend/recommend23.jpg'),txt: '二十四节气自然绘本 让孩子了解自然的瞬息万变 科普百科绘本', price: '20.00', eBook:1},
                {pic:require('../assets/recommend/recommend24.jpg'),txt: '与未来谈谈心+与世界谈谈心+与时代谈谈心', price: '166.20', eBook:1},
            {pic:require('../assets/recommend/recommend25.jpg'),txt: '世界尽头的咖啡馆（做决定前读一遍,少走弯路!美国57所高校指定研讨读物)', price: '45.00', eBook:1},
                {pic:require('../assets/recommend/recommend26.jpg'),txt: '我爸爸+我妈妈(全2册)——清华附小推荐经典儿童绘本 ！（启发童书馆出品）', price: '79.60', eBook:1},
                {pic:require('../assets/recommend/recommend27.jpg'),txt: '遥远的救世主（天道原著王志文主演电视剧畅销遥远的救世主作者豆豆三部曲之一）', price: '28.80', eBook:1},
                {pic:require('../assets/recommend/recommend28.jpg'),txt: '心安即是归处（季羡林百年生命智慧。央视《朗读者》多次动情朗读本书名篇，贾平凹、白岩松、金庸、林青霞诚意推荐）', price: '41.80', eBook:14.70},
                {pic:require('../assets/recommend/recommend29.jpg'),txt: ' 世界上最棒的礼物——图画中隐藏无数细节，让小小孩玩过瘾！', price: '45.80', eBook:1},
                {pic:require('../assets/recommend/recommend30.jpg'),txt: '四五快读 全彩图升级版——幼儿快速识字阅读法(全8册)(让孩子爱上阅读 快乐识字)[精选套装]', price: '145.80', eBook:1},
            {pic:require('../assets/recommend/recommend31.jpg'),txt: '培生幼儿英语，少儿英语启蒙绘本', price: '115.60', eBook:1},
                {pic:require('../assets/recommend/recommend32.jpg'),txt: '词汇的力量WordPowerMadeEasy', price: '17.50', eBook:1}, 
                {pic:require('../assets/recommend/recommend33.jpg'),txt: '四五英语**辑(全5册套装)', price:'93.50', eBook:1},
                {pic:require('../assets/recommend/recommend34.jpg'),txt: '儿童文学畅销品，小学生都爱读', price: '651.70', eBook:1}, 
                {pic:require('../assets/recommend/recommend35.jpg'),txt: '【中商原版】相约星期二 英文原版 Tuesdays With Morrie 英文版 进口正版', price:' 22.50', eBook:1},
                {pic:require('../assets/recommend/recommend36.jpg'),txt: '小学英语词汇学习手册（“美语之路”经典词库）', price:' 25.80', eBook:1}, 
            {pic:require('../assets/recommend/recommend37.jpg'),txt: '零基础学Python(全彩版)', price: '73.60', eBook:27.93},
                {pic:require('../assets/recommend/recommend38.jpg'),txt: '儿童思维导图启蒙绘本', price: '99.80', eBook:1}, 
                {pic:require('../assets/recommend/recommend39.jpg'),txt: '李时珍  张慧剑著注音版 语文课本', price: '5.90', eBook:1},
                {pic:require('../assets/recommend/recommend40.jpg'),txt: '一读就会用的分类成语故事', price: '351.00', eBook:1},
                {pic:require('../assets/recommend/recommend41.jpg'),txt: '哈利波特与魔法石 英文原版', price: '16.50', eBook:1}, 
                {pic:require('../assets/recommend/recommend42.jpg'),txt: 'wonder 奇迹男孩  R.J. Palacio C', price: '14.00', eBook:1},
            {pic:require('../assets/recommend/recommend43.jpg'),txt: '夏洛的网  E.B.怀特英文原版', price: '22.50', eBook:1},
                {pic:require('../assets/recommend/recommend44.jpg'),txt: '杀死一只知更鸟 英文原版小说', price: '25.50', eBook:1}, 
                {pic:require('../assets/recommend/recommend45.jpg'),txt: '哈利波特英文原版 Harry Potter', price: '266.00', eBook:1},
                {pic:require('../assets/recommend/recommend46.jpg'),txt: 'Flipped 怦然心动 英文原版小说', price: '21.50', eBook:1},
                {pic:require('../assets/recommend/recommend47.jpg'),txt: '让孩子爱上科学的趣味实验大百科', price: '96.00', eBook:1}, 
                {pic:require('../assets/recommend/recommend48.jpg'),txt: '午夜降临前抵达', price: '40.70', eBook:17.70},
            {pic:require('../assets/recommend/recommend49.jpg'),txt: 'bibi动物园:忍不住想打扰你', price: '35.20', eBook:29.40},
                {pic:require('../assets/recommend/recommend50.jpg'),txt: '张爱玲全集01:倾城之恋', price: '29.20', eBook:24.69}, 
                {pic:require('../assets/recommend/recommend51.jpg'),txt: '刘子超旅行文学两册套装', price: '88.30', eBook:1},
                {pic:require('../assets/recommend/recommend52.jpg'),txt: '格非:江南三部曲(共3册)', price: '109.00', eBook:108.00},
                {pic:require('../assets/recommend/recommend53.jpg'),txt: '叶广芩京味小说三部曲', price: '189.40', eBook:1}, 
                {pic:require('../assets/recommend/recommend54.jpg'),txt: '百年孤独1000万册纪念套装(赠胶带)', price: '198.50', eBook:1},
            {pic:require('../assets/recommend/recommend55.jpg'),txt: '王小波杂文套装', price: '226.00', eBook:1},
                {pic:require('../assets/recommend/recommend56.jpg'),txt: '平凡的世界：全三册(2021全新版)', price: '98.00', eBook:59.00}, 
                {pic:require('../assets/recommend/recommend57.jpg'),txt: '东野圭吾：虚像的丑角', price: '59.00', eBook:1},
                {pic:require('../assets/recommend/recommend58.jpg'),txt: '东野圭吾：无名之町', price: '40.70', eBook:35.40},
                {pic:require('../assets/recommend/recommend59.jpg'),txt: '下沉年代', price: '108.00', eBook:29.99}, 
                {pic:require('../assets/recommend/recommend60.jpg'),txt: '惊呆了！原来这就是社会学', price: '59.00', eBook:1},
    
        ]}
      },
      methods:{
        change(i,j){
                    this.b=i
                    this.a=j

                },

                back(){
                    this.b=100
                    this.a=100
                },
        shuzu(items,i){
          let arryy = [];
          let oldarr = items;
          for(let y = i; y < oldarr.length; y++) {
            if (arryy.length < 6) {
              arryy.push(items[y]);
            } else {
              break;
            }
          }
          return arryy;
        }
      }
    }
    </script>
    <style scoped>
      .recommend{
        padding: 0 160px;
        margin-top: 20px;
        background-color: #fff;
      }
      .top{

        font-size: 20px;
        font-weight: 800;
        color: #ff2832;
        padding-bottom: 10px;
        border-bottom: 2px solid #ff2832;
      }
      .Body{
        margin-top: 9px;
        border: 0.02px solid rgb(221, 217, 217);
        padding-top: 10px;
      }
      .line{

        justify-content: space-between;
      }
      .inline{
        width: 200px;
        padding: 6px 0;
      }
      .pic{
        width: 200px;
        text-align: center;
      }
      .pic img{
        width: 190px;
      } 
      .txt{
        font-size: 12px;
        color: rgb(78, 78, 78);
        text-align: center;
        padding: 0 10px;
        width: 200px; 
        height: 30px;
        overflow: hidden;
      text-overflow: ellipsis;
       display: -webkit-box;
       -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-top: 8px;
      }
      .price{
        height: 24px;
        line-height: 24px;
        width: 200px;
        display: flex;
        vertical-align: middle;
        text-align: center;
        font-size: 18px;
        color: #ff2832;
        margin-top: 2px;
        padding-left: 8px;
      }
      .price .icon{
        width:14px;
        height: 25px;
        fill: #ff2832;
        vertical-align: middle;
        margin-right: 5px;
    }
    .e-book{
      font-size: 12px;
      color:  rgb(78, 78, 78);
      display: flex;
      vertical-align: middle;
      margin-left: 17px;
    }
    .e-book .icon{
      margin-top: 7px;
      width: 10px;
      height: 12px;
      padding-right: 0;
      fill: rgb(78, 78, 78);
    }
    .red{
        color: #ff2832;
        text-decoration: underline;
    }
  
    </style>