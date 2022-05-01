<template>
    <div class="navWenju totle">
        <div class="Top">
            <div class="top">
                <div class="topT">文创馆</div>
                <div class="pic">
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-youjiantou"></use>
                    </svg>
                </div>
               
            </div>
            <div class="top">
                <div class="topT">艺术品拍卖馆</div>
                <div class="pic">
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-youjiantou"></use>
                    </svg>
                </div>
               
            </div>
            <div class="top">
                <div class="topT">艺术设计/艺术衍生品馆</div>
                <div class="pic">
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-youjiantou"></use>
                    </svg>
                </div>
            </div>
        </div>
           
        <div class="line line1">
            <div class="title">学生文具</div>
            <div class="Name Name1">
                <div class="name" v-for="(i,j) in xuesheng"  @mouseover="change(1,j)" :class=" (k=== j&&n===1)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
           
        <div class="line">
            <div class="title">笔类</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in bilei"  @mouseover="change(2,j)" :class=" (k=== j&&n===2)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">纸张本册</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in zhizhang"  @mouseover="change(3,j)" :class=" (k=== j&&n===3)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">画具/画材</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in huaju" @mouseover="change(4,j)" :class=" (k=== j&&n===4)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">文房用品</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in wenfang"  @mouseover="change(5,j)" :class=" (k=== j&&n===5)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
        <div class="line">
            <div class="title">办公用品</div>
            <div class="Name">
            <div class="name" v-for="(i,j) in bangong"  @mouseover="change(6,j)" :class=" (k=== j&&n===6)? 'red ' : ''">{{i.name}}</div>
        </div>
        </div>
    </div>
</template>
<script>

    export default{
    data:function(){
        return {
            k:20,
            n:0,
          xuesheng:[{name:'笔袋/文具袋'},{name:'文具盒'},{name:'卷笔刀/削笔刀'},{name:'练字帖/练字板'},{name:'书皮'},{name:'视力保护器'},{name:'握笔器'},{name:'橡皮'},{name:'修正液/修正带/修正贴'},{name:'学生用印/卡通印泥/彩泥/橡皮泥'},{name:'学生用尺'},{name:'礼盒套装'},{name:'圆规'},{name:'书包'},{name:'地球仪'},{name:'儿童div'},{name:'其他'}],
        bilei:[{name:'钢笔'},{name:'签字笔'},{name:'圆珠笔'},{name:'中性笔'},{name:'铅笔'},{name:'记号笔'},{name:'马克笔'},{name:'泡泡笔'},{name:'荧光笔'},{name:'油漆笔'},{name:'正姿笔'},{name:'笔用墨水/补充液/墨囊'},{name:'替芯/铅芯'},{name:'其他功能笔'}],
        zhizhang:[{name:' 笔记本/记事本'},{name:'不干胶标签/贴纸'},{name:'包装纸'},{name:'分页纸/索引纸'},{name:'复写纸'},{name:'活页替芯'},{name:'课业本/教学用本'},{name:'日记本'},{name:'书签'},{name:'同学录/纪念册'},{name:' 通讯录/电话本'},{name:'文稿纸/草稿纸'},{name:'信纸/信封'},{name:'折纸/手工纸'},{name:'台历'},{name:'其他'}],
        huaju:[{name:'勾线笔'},{name:'水彩笔'},{name:'蜡笔'},{name:'油画棒'},{name:'丙烯颜料'},{name:'水彩颜料'},{name:'水粉颜料'},{name:'画板/画架'},{name:'绘图/白图'},{name:'纸描图/硫酸纸'},{name:'毛边纸'},{name:'铅画纸'},{name:'素描/速写本'},{name:'书法用纸'},{name:'水写布'},{name:'宣纸'},{name:'字帖临摹纸'},{name:'儿童填色本'},{name:'毛笔'},{name:'其他'}],
        wenfang:[{name:'镇纸'},{name:'印泥'},{name:'笔挂'},{name:'章料'},{name:'笔筒'},{name:'笔架/笔搁'},{name:'笔洗毛毡'},{name:'印床'},{name:'刻刀'},{name:'笔帘'},{name:'墨汁'},{name:'墨条'},{name:'砚台'},{name:'文房四宝套装'}],
        bangong:[{name:'笔架/笔插/笔筒'},{name:'档案盒/档案袋'},{name:'风琴包/事务包'},{name:'挂快劳夹'},{name:'卡套/证件套'},{name:'文件夹/文件袋'},{name:'名片盒/名片册'},{name:'胶粘用品'},{name:'计算器'},{name:'书立/阅读架'},{name:'相册'},{name:'资料册'},{name:'裁剪用品'},{name:'装订用品'},{name:'胶粘用品'},{name:'绘图测量用品'}],
    }
    },
    methods:{
        change(m,j){
            this.n=m
            this.k=j
        }
    }
}
</script>
<style  src="../webManage/css/nav.css"  scoped>

</style>