<template>
    <div class="book">
        <div class="left">
            <div class="l-top">
                <div class="top-left">
                    图书·电子书
                </div>
                <div class="top-right">
                    <div class="title"  v-for="(item,i) in titles" :key="i">
                    <div  @mouseover="change(item,i)"  :class=" isActive === i? 'isActive' : ''" >
                         {{item.name}}
                    </div>
                </div>  
                </div>
            </div>
            <div class="l-body">
                <div class="l-left" :style="{background: 'url( '+ bgs[ isActive].pic +' )'}">
                    <div class="ids" >
                        <div class="id"   v-for="k in Ids[isActive].ids"> {{k.id}}</div>                   
                    </div>
                </div>
              <div class="l-right">
                <div class="line1">
                    <div class="line1-l">
                        <img :src="big[isActive].pic">
                    </div>
                    <div class="line1-r">
                        
                            <div class="inline"  v-for="(item, i) in lines[ isActive].line" >
                                <div class="pic">
                                  <img :src="item.pic" alt="">
                                </div>
                                <div class="txt"   @mouseover="change3(i)"  @mouseleave="back()" :class=" b=== i? 'red ' : ''">
                                  {{item.txt}}
                                </div>
                                <div class="price">
                                  <svg class="icon"  aria-hidden="true" id="aright">
                                    <use class="Icon" xlink:href="#icon-qianqian-"></use>
                                </svg>
                                <div class="money">
                                    {{item.price}}
                                </div>
                                <div v-show="item.old!=0" class="old">                               
                                <svg class="icon"  aria-hidden="true" id="aright">
                                  <use xlink:href="#icon-qianqian-"></use>
                              </svg>
                              {{item.old}}
                                </div>   
                                 
                                </div>
                                <div v-show="item.ebook!=0" class="e-book">
                                    电子书
                                    <svg class="icon"  aria-hidden="true" id="aright">
                                      <use xlink:href="#icon-qianqian-"></use>
                                  </svg>
                                  {{item.ebook}}
                                    </div>  

                              </div>
                        
                    </div>
                </div>
                <div class="line2">
                    <div class="inline"  v-for="(item, i) in lines[ isActive].line" >
                        <div class="pic">
                          <img :src="item.pic" alt="">
                        </div>
                        <div class="txt"   @mouseover="change2(i)"  @mouseleave="back()" :class=" a=== i? 'red ' : ''">
                          {{item.txt}}
                        </div>
                        <div class="price">
                          <svg class="icon"  aria-hidden="true" id="aright">
                            <use class="Icon" xlink:href="#icon-qianqian-"></use>
                        </svg>
                        <div class="money">
                            {{item.price}}
                        </div>
                        <div v-show="item.old!=0" class="old">                               
                        <svg class="icon"  aria-hidden="true" id="aright">
                          <use xlink:href="#icon-qianqian-"></use>
                      </svg>
                      {{item.old}}
                        </div>   
                         
                        </div>
                        <div v-show="item.ebook!=0" class="e-book">
                            电子书
                            <svg class="icon"  aria-hidden="true" id="aright">
                              <use xlink:href="#icon-qianqian-"></use>
                          </svg>
                          {{item.ebook}}
                            </div>  

                      </div>
                </div>

              </div>


            </div>
        </div>
                                    <!-- 右边 -->
        <div class="right">
            <div class="r-top">
                <div class="r-title" @mouseover="Bang1h()" :style="Bang1">图书畅销榜</div>
                <div class="r-title" @mouseover="Bang2h()" :style="Bang2">图书新书榜</div>
            </div>
            <div class="r-Body">

                <!-- 第一个榜单 -->
                <div class="bang1" :style="bang1"  v-for="(item,i) in bang1t" >
                    <div class="bl-line1"   @mouseover="ba(item,i)"  :class=" bang === i? 'cang' : ''" >
                        <div class="num">{{i+1}}</div>
                        <div class="zhuti1">
                            {{item.txt}}
                        </div>
                    </div>
                    <div class="bl-line2" :class=" bang === i? 'open' : ''">
                        <div class="num">{{i+1}}</div>
                        <div class="zhuti2">
                            <div class="pic"><img :src="item.pic"></div>
                            <div class="else">
                                <div class="r-txt">{{item.txt}}</div>
                                <div class="xq">{{item.xq}}</div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- 第二个榜单 -->
                <div class="bang2" :style="bang2"  v-for="(item,i) in bang2t">
                    <div class="bl-line1"  @mouseover="ba(item,i)"  :class=" bang === i? 'cang' : ''">
                        <div class="num">{{i+1}}</div>
                        <div class="zhuti1">
                            {{item.txt}}
                        </div>
                    </div>
                    <div class="bl-line2" :class=" bang === i? 'open' : ''">
                        <div class="num">{{i+1}}</div>
                        <div class="zhuti2">
                            <div class="pic"><img :src="item.pic"></div>
                            <div class="else">
                                <div class="r-txt">{{item.txt}}</div>
                                <div class="xq">{{item.xq}}</div>
                            </div>
                        </div>
                    </div>

                </div>



            </div>


        </div>
    </div>
</template>
<script>
 export default{
        data(){
            return {
                bang:0,
                a:20,
                b:20,
                isActive: 0,
                Bang1:'background-color: #fff;border:none;text-decoration:underline;',
                Bang2:'',
                bang1:'',
                bang2:'display:none',
                titles:[{name:'最新上架'},{name:'独家畅品'},{name:'重点推荐'},{name:'电子书'},],
                bgs:[ {pic: require('../assets/book/bg1.jpg')}, {pic: require('../assets/book/bg3.jpg')}, {pic: require('../assets/book/bg2.jpg')}, {pic: require('../assets/book/bg4.jpg')},],
                big:[{pic: require('../assets/book/b1.jpg')}, {pic: require('../assets/book/b2.jpg')}, {pic: require('../assets/book/b3.jpg')}, {pic: require('../assets/book/b4.jpg')}, ],
               Ids:[
                   {ids:[
                       {id:' 童书'}, {id:'中小学教辅'}, {id:' 外语'}, {id:'考试'}, {id:'小说'}, {id:'文学'}, {id:'青春文学'}, {id:'成功/励志'}, {id:'管理'}, {id:'历史 '}, {id:'亲子/家教'}, {id:' 全部分类'},
                    ]},
                    {ids:[
                       {id:' 童书'}, {id:'中小学教辅'}, {id:' 外语'}, {id:'考试'}, {id:'小说'}, {id:'文学'}, {id:'青春文学'}, {id:'成功/励志'}, {id:'管理'}, {id:'历史 '}, {id:'亲子/家教'}, {id:' 全部分类'},
                    ]},
                    {ids:[
                       {id:' 童书'}, {id:'中小学教辅'}, {id:' 外语'}, {id:'考试'}, {id:'小说'}, {id:'文学'}, {id:'青春文学'}, {id:'成功/励志'}, {id:'管理'}, {id:'历史 '}, {id:'亲子/家教'}, {id:' 全部分类'},
                    ]},
                    {ids:[
                       {id:'网文小说'},  {id:'经管'},  {id:'励志'},  {id:'文艺'},  {id:'社科'},  {id:'生活 '},  {id:'新书榜'},  {id:'畅销榜'},  {id:'查看所有'},
                         ]},
                    ],
                    bang1t:[
                    {pic:require('../assets/recommend/recommend1.jpg'),txt: '生命简史:从宇宙起源到人类文明(赠送超大生命星空图,精装大开本地板书,5-14岁儿童世界起源大百科全书', xq:'恐龙有羽毛吗？59个代表性的人类文明进程你知道几个？这套书是自然资源部优秀科普图书，由中科院院士联名推荐'},
                {pic:require('../assets/recommend/recommend2.jpg'),txt: '心灵教科书绘本系列：西兰花先生的理发店（教会孩子：敢于打破常规思维，培养创新意识）', xq:'日本精选绘本大赛优 秀奖得主福田纯子倾情奉献。知名阅读推广人、中科院儿童心理学专家徐静琰真诚推荐。'},
                {pic:require('../assets/recommend/recommend3.jpg'),txt: '蛤蟆先生去看心理医生(年销200万册!英国经典心理咨询入门书，知名心理学家李松蔚强烈推荐）', xq:'2021年当当网销量No.1！入围《新京报》、豆瓣2020年度图书榜单；英国亚马逊五星评分、授权10个语言版本，自1997年起长销至今。童话版《自卑与超越》，将心理学知识巧妙融入故事情节'},
                {pic:require('../assets/recommend/recommend4.jpg'),txt: ' 三体：全三册 刘慈欣代表作，亚洲“雨果奖”获奖作品！',xq:'《三体》第73届世界科幻雨果奖获奖作品，银河奖特别奖，《三体3》轨迹奖长篇科幻小说！2017年世界雨果奖提名作品。'},
                {pic:require('../assets/recommend/recommend5.jpg'),txt: '次第花开 修订版', xq:'2017全新修订，新增上师数千字再版序言.希阿荣博堪布的现代心灵开示，解开藏人精神愉悦的秘密'},
                {pic:require('../assets/recommend/recommend6.jpg'),txt: '与未来谈谈心——睡前聊一会儿（音频书）', xq:'与未来谈谈心——睡前聊一会儿（音频书）'},
                {pic:require('../assets/recommend/recommend7.jpg'),txt: '人生海海（麦家重磅力作，莫言、董卿盛赞,连续两年高居畅销榜,发行量超200万册)', xq:'上校赢了所有的仗，却败给一个不足道的秘密。茅盾文学奖得主麦家暌违8年，打磨5年，挑战常人不敢落笔之处，解密人性的荒唐与高尚。'},
                {pic:require('../assets/recommend/recommend8.jpg'),txt: '生死疲劳（不看不知道，莫言真幽默！全新版本！印章版和普通版随机发货）',xq:'不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。'},
                {pic:require('../assets/recommend/recommend9.jpg'),txt: ' 被讨厌的勇气：“自我启发之父”阿德勒的哲学课 岸见一郎',xq:'“自我启发之父”阿德勒的哲学课,蔡康永、张德芬、大张伟、陈文茜、曾宝仪、勇气推荐！'},
                {pic:require('../assets/recommend/recommend10.jpg'),txt: '马尔克斯：百年孤独(50周年纪念版)', xq:'新版典藏内封。加西亚·马尔克斯代表作，惟一正式中文版，未作任何删节，发行量超800万册！'},
                    ],
                        bang2t:[
                        {pic:require('../assets/recommend/recommend12.jpg'),txt: '神奇校车·图画书版(全20)', xq:'幼小衔接升级阅读，科普“桥梁书”匠心之作，跟随神奇校车继续科学冒险之旅，校车迷不可错过的独立阅读读本！（蒲公英童书馆）'},
                 {pic:require('../assets/recommend/recommend13.jpg'),txt: ' 你当像鸟飞往你的山(中文版销量超200万册)比尔·盖茨年度特别推荐!登顶《纽约时报》畅销榜80+周，这本书比你听说的还要好！）',xq:'比尔·盖茨年度特别推荐！ 17岁前从未上过学的女孩，如何成为剑桥大学博士？我们要背叛多少曾经，才能找到真正的自我！'},
                {pic:require('../assets/recommend/recommend14.jpg'),txt: '正面管教(修订版)', xq:'如何不惩罚、不娇纵地有效管教孩子。畅销美国400多万册，被翻译成16种语言畅销全球；让'},
                {pic:require('../assets/recommend/recommend15.jpg'),txt: '少年读史记(套装全5册)',xq:'精巧32开本。荣获第六届中华优秀出版物奖 ；'},
                {pic:require('../assets/recommend/recommend16.jpg'),txt: '金庸全集：金庸作品集(全集共36册,彩图平装旧版)',xq:'金庸作品集原版本，流通久，销量大，也是金迷熟悉的版本，封面设计采用姜云行、王司马二人传统的插画作为素材'},
                {pic:require('../assets/recommend/recommend17.jpg'),txt: '就喜欢你看不惯我又干不掉我的样子',xq:'（白茶著 亲笔签名本+吾皇、巴扎黑立牌）'},
                {pic:require('../assets/recommend/recommend18.jpg'),txt: '万物由来科学绘本 写给孩子的科普绘本', xq:'26个主题，近300个知识点，北京师范大学教授联手获奖无数的国际插画师，专门回答那些孩子不知道、家长不好答的问题！'},
                {pic:require('../assets/recommend/recommend19.jpg'),txt: '我们的身体',xq:'【李佳琦推荐】3-6岁儿童性教育启蒙立体科普书！超好玩、全面的人体百科，'},
                {pic:require('../assets/recommend/recommend20.jpg'),txt: '不一样的卡梅拉手绘本(1-12册)',xq:'读不一样的卡梅拉，成就与众不同的你！儿童绘本'},
                {pic:require('../assets/recommend/recommend21.jpg'),txt: '茅盾文学奖获奖作品', xq:'立足底层，直指人心，于人间烟火处彰显道义和担当，在悲欢离合中抒写情怀和热望，堪称一部“五十年中国百姓生活史”'},
                
                        ],
                lines:[
                    {line:[   
                        {pic: require('../assets/book/c1-1.jpg'),txt: '经营企业与经营人生',price: '33.70',old:'45.00',ebook:0},
                        {pic: require('../assets/book/c1-2.jpg'),txt:  '空间站全景立体书,繁星作伴好还乡【天宫课堂】送给孩子的礼物',price:'239.00',old:'438.00',ebook:0},
                        {pic: require('../assets/book/c1-3.jpg'),txt: '百年孤独1000万册纪念套装',price:'99.25',old:'198.50',ebook:0},
                        {pic: require('../assets/book/c1-4.jpg'),txt: '六层楼先生怀孕呵护指南',price:'49.00',old:'98.00',ebook:0},
                        {pic: require('../assets/book/c1-5.jpg'),txt: ' 半小时漫画中国史（春节礼盒限量版）',price:'129.70',old:'259.40',ebook:0},
                        {pic: require('../assets/book/c1-6.jpg'),txt: ' 效率人生（告诉你如何迅速抵达人生的目标）',price:'24.00',old:'24.00',ebook:'39.23'},
                    ]},
                    {line:[   
                        {pic: require('../assets/book/c2-1.jpg'),txt: ' 大耍儿:1-4卷',price:'126.00',old:'168.00',ebook:0},
                        {pic:require('../assets/book/c2-2.jpg'),txt: '小学生思维方式漫画',price:'50.00',old:'50.00',ebook:0},
                        {pic:require('../assets/book/c2-3.jpg'),txt: 'Bibi动物园',price:'35.20',old:'49.00',ebook:'29.40'},
                        {pic:require('../assets/book/c2-4.jpg'),txt: '古代人的日常生活套装',price:'72.90',old:'145.80',ebook:0},
                        {pic:require('../assets/book/c2-5.jpg'),txt: '定位',price:'28.40',old:'59.80',ebook:0},
                        {pic:require('../assets/book/c2-6.jpg'),txt: ' 我不！就不！（甜蜜又“狡猾”的爱之书',price:'18.90',old:'45.00',ebook:0},
                    ]},
                    {line:[   
                        {pic: require('../assets/book/c3-1.jpg'),txt: '传统色日历',price:'96.00',old:'128.00',ebook:0},
                        {pic: require('../assets/book/c3-2.jpg'),txt: '山海经里的故事',price:'48.00',old:'96.00',ebook:0},
                        {pic: require('../assets/book/c3-3.jpg'),txt: '考试脑科学 脑科学中的高效记忆法（图灵出品）',price:'39.80',old:'59.80',ebook:'29.90'},
                        {pic: require('../assets/book/c3-4.jpg'),txt: '史记（文白对照本）',price:'149.00',old:'298.00',ebook:0},
                        {pic: require('../assets/book/c3-5.jpg'),txt: ' 沙丘六部曲（同名电影狂揽6项奥斯卡大奖！',price:'153.90',old:'394.00',ebook:0},
                        {pic: require('../assets/book/c3-6.jpg'),txt: '富爸爸全集（33册）',price:'723.50',old:'1607.8',ebook:0},
                    ]},
                    {line:[   
                        {pic: require('../assets/book/c4-1.jpg'),txt: '在吗',price:'26.00',old:0,ebook:0},
                        {pic: require('../assets/book/c4-2.jpg'),txt: '漫画大唐怪奇故事',price:'27.50',old:0,ebook:0},
                        {pic: require('../assets/book/c4-3.jpg'),txt: '说出来你别不信',price:'24.90',old:0,ebook:0},
                        {pic: require('../assets/book/c4-4.jpg'),txt: '国学之美,汉字之仪(共4册)',price:'117.99',old:0,ebook:0},
                        {pic: require('../assets/book/c4-5.jpg'),txt: '同名同姓受害者协会',price:'45.00',old:0,ebook:0},
                        {pic: require('../assets/book/c4-6.jpg'),txt: '特战荣耀(全集)',price:'99.96',old:0,ebook:0},
                    ]},   

                ]
            }
        },
        methods:{
            change2(j){
                    this.a=j
                },
                change3(j){
                    this.b=j
                },

                back(){
                    this.a=20
                    this.b=20
                },
	     	ba(item,i){
		    	this.bang=i;
                // console.log(this.isActive);
	        	},
                change(item,i){
                    this.isActive=i;
                },
                Bang1h(){
                    this.Bang1=" background-color: #fff;border:none;text-decoration:underline;";
                    this.Bang2=" background-color: rgb(241, 239, 239);border: 0.2px solid rgb(200, 200, 200); text-decoration:none"
                    this.bang1="display:block"
                    this.bang2="display:none"
                    },
                Bang2h(){
                    this.Bang2=" background-color: #fff;border:none;text-decoration:underline;";
                    this.Bang1=" background-color: rgb(241, 239, 239);border: 0.2px solid rgb(200, 200, 200); text-decoration:none"
                    this.bang2="display:block"
                    this.bang1="display:none"

                }
            },
//             async mounted(){
//         var swiper = new Swiper(".mySwiper", {
//         loop: true,
//         navigation: {
//           nextEl: " .swiper-button-next",
//           prevEl: " .swiper-button-prev",
//         },
//       });
//  }
    }
</script>

<style scoped>

.book{
    padding: 0 160px;
    margin-top: 30px;
    display: flex;
    background-color: #fff;
}
.left{
    width: 910px;
}
.l-top{
        display: flex;
        color: rgb(73, 73, 73);
        justify-content: space-between;
        border-bottom:  2px solid #333;
        margin-bottom: 10px;
    }
    .top-left{
        font-size: 20px;
        height: 25px;
        line-height: 45px;
        font-weight: 650;      
        width: 120px;
    }
    .top-right{
        display: flex;
    }
    .title{
        
        font-size: 14px;
        width: 115px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: rgb(241, 239, 239);
        border: 0.2px solid rgb(200, 200, 200);
    }
   
    .isActive{
        border: 2px solid #333;
        border-bottom: none;
        background-color: #fff;
        font-weight: 600;
    }
    .ids{
        display: flex;
        flex-flow: wrap;
        width: 240px;
        font-size: 12px;
        height: 110px;
        background-color: #fff;
    }
    .id{
        width: 80px;
        padding-left: 15px;
    }
    .l-body{
        display: flex;
        border: 0.01px solid rgb(200, 200, 200);
    }
    .l-left{
        width: 240px;
        height: 440px;
        padding-top: 330px;
        /* background: url(../assets/book/bg.png);图片路径 */
    }
    .l-right{
        width: 670px;
      height: 440px;
    
    }
    .line1{
        display: flex;
       
    }
    .line1-l{
        width: 335px;
        height: 220px;
        border: 0.001px solid rgb(200, 200, 200);
    }
    .line2{
        width: 670px;
        height: 220px;
        display: flex;
        overflow: hidden;
    }
    .line1-r{
        width: 335px;
        height: 220px;
        display: flex;
        overflow: hidden;
    }
    .inline{
        width: 167.5px;
        padding: 3px 0;
        border: 0.001px solid rgb(200, 200, 200);
     
      }
      .pic{
        width: 167.5px;
        text-align: center;
      }
      .pic img{
        width: 150px;
        height: 150px;
      } 
      .txt{
        font-size: 12px;
        color: rgb(78, 78, 78);
        padding-left: 5px;
       
        width: 167.5px; 
        height: 14px;
        overflow: hidden;
      text-overflow: ellipsis;
       display: -webkit-box;
       -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .price{
        height: 15px;
        line-height: 20px;
        width: 167px;
        display: flex;
        vertical-align: middle;
        text-align: center;
        font-size: 14px;
        font-weight: 540;

        color: #ff2832;
        margin-top: 2px;
        padding-left: 8px;
      }
      .price .icon{
        width:10px;
        height: 23px;
        fill: #ff2832;
        vertical-align: middle;
        margin-right: 1px;
    }
    .e-book{
        margin-top: 10px;
      font-size: 12px;
      color:  rgb(78, 78, 78);
      display: flex;
      vertical-align: middle;
      margin-left: 7px;
     
    }
    .e-book .icon{
      margin-top: 1px;
      width: 10px;
      height: 12px;
      padding-right: 0;
      fill: rgb(78, 78, 78);
    }
    .old{
        color: rgb(200, 200, 200);
      font-size: 12px;
      color:  rgb(78, 78, 78);
      display: flex;
      vertical-align: middle;
      margin-left: 12px;
      text-decoration:line-through;
    }
    .old .icon{
      margin-top: 4px;
      width: 10px;
      height: 12px;
      padding-right: 0;
      fill: rgb(78, 78, 78);
    }
    .right{
        width: 280px;
        border:  0.01px solid rgb(200, 200, 200);
        height: 500px;
        margin-left: 10px;
        color: rgb(97, 97, 97);
    }
    .r-top{
        display: flex;
    }
    .r-title{
        width: 140px;
        font-size: 16px;
        
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: rgb(241, 239, 239);
        border: 0.2px solid rgb(200, 200, 200);
    }
    .bang1 , .bang2{
        width: 280px;
        font-size: 12px;
        font-weight: 400;
    }
    
    .bl-line1{
        width: 280px;
        height: 34px;
        
        display: flex;
    }
    .bl-line2{
        margin-left: 0;
        width: 280px;
        height: 140px;
        
        display: flex;
        display: none;
        
    }
    .num{
        height: 34px;
        width: 30px;
        text-align: center;
        line-height: 34px;
    }
    .zhuti1{
        border-top: 0.001px solid rgb(218, 218, 218);
        height: 34px;
        width: 200px;
        line-height: 34px;
        padding-right: 40px;
        overflow: hidden;
    }
    .zhuti2{
        border-top: 0.001px solid rgb(218, 218, 218);
        /* margin-left: 10px; */
        display: flex;
        overflow: hidden;
        height: 140px;

    }
    .zhuti2 .pic{
        width: 100px;
    }
    .zhuti2 .pic img{
        width: 90px;
        height: 90px;
        margin-top: 20px;
    }
    .else{
        
        margin-left: 10px;
        padding-top: 22px;
        /* padding-bottom: 20px; */
        width: 120px;

        overflow: hidden;
        height: 115px;
    }
    .else .r-txt{
        width: 120px;
        overflow: hidden;
    }
    .else .xq{
        color: rgb(141, 139, 139);
    }
    .cang{
        display: none;

    }
    .open{
        display: block;
        display: flex;
    }
    .red{
        color: #ff2832;
        text-decoration: underline;
    }
</style>