<template>
    <div class="navPhone totle">
        <div class="left">
            <div class="Top">
                <div class="top">
                    <div class="topT">手机通讯</div>
                    <div class="pic">
                        <svg class="icon"  aria-hidden="true" id="aright">
                            <use xlink:href="#icon-youjiantou"></use>
                        </svg>
                    </div>
                </div>
                </div>
               
            <div class="line line1">
                <div class="title">手机通讯</div>
                <div class="Name Name1">
                    <div class="name" v-for="(i,j) in phone1"  @mouseover="change(1,j)" :class=" (k=== j&&n===1)? 'red ' : ''">{{i.name}}</div>
                </div>
                </div>
               
            <div class="line">
                <div class="title">手机配件</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in phone2"  @mouseover="change(2,j)" :class=" (k=== j&&n===2)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">苹果/配件</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in  phone3"  @mouseover="change(3,j)" :class=" (k=== j&&n===3)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">试听影音</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in phone4"  @mouseover="change(4,j)" :class=" (k=== j&&n===4)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">摄影摄像</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in  phone5"  @mouseover="change(5,j)" :class=" (k=== j&&n===5)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">数码配件</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in  phone6"  @mouseover="change(6,j)" :class=" (k=== j&&n===6)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">电子教育</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in  phone7"  @mouseover="change(7,j)" :class=" (k=== j&&n===7)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">智能设备</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in  phone8"  @mouseover="change(8,j)" :class=" (k=== j&&n===8)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">电脑整机</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in phone9"  @mouseover="change(9,j)" :class=" (k=== j&&n===9)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div> <div class="line">
                <div class="title">外设产品</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in phone10"  @mouseover="change(10,j)" :class=" (k=== j&&n===10)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div> <div class="line">
                <div class="title">电脑配件</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in phone11"  @mouseover="change(11,j)" :class=" (k=== j&&n===11)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div> <div class="line">
                <div class="title">网路产品</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in phone12"  @mouseover="change(12,j)" :class=" (k=== j&&n===12)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div> <div class="line">
                <div class="title">办公设备</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in phone13"  @mouseover="change(13,j)" :class=" (k=== j&&n===13)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div> 
            <div class="line">
                <div class="title">文具耗材</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in phone14"  @mouseover="change(14,j)" :class=" (k=== j&&n===14)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div> 
        </div>
        <div class="right">
            <div>
                <img src="../assets/navIN/ph1.jpg">
             

            </div>
            <div>
                <img src="../assets/navIN/ph2.png">
                
               
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
            phone1:[{name:'手机'}],
            phone2:[{name:' 蓝牙耳机'},{name:'手机 '},{name:'耳机 '},{name:' 充电器/数据线'},{name:' 手机保护套'},{name:'手机电池 '},{name:' 手机存储卡'},{name:' 车载配件'}],
            phone3:[{name:'iPhone '},{name:' iPad'},{name:' MaciPhone配件'},{name:'iPad配件 '},{name:'Mac配件 '}],
            phone4:[{name:' 耳机/耳麦'},{name:'音箱 '},{name:'高清播放器 '},{name:'MP3/MP4 '},{name:'录音笔 '},{name:'阅读器 '},{name:' 麦克风'}],
            phone5:[{name:'微单数码相机 '},{name:'数码摄像机 '},{name:'镜头 '}],
            phone6:[{name:'移动电源 '},{name:' 自拍杆'},{name:' 数码车载配件'},{name:'电池/充电器 '},{name:'读卡器 '},{name:'摄影配件 '},{name:'数码包 '},{name:' 三脚架/云台'},{name:' 闪光灯/手柄'},{name:'电池/电源 '},{name:' 相机清洁'},],
            
            phone7:[{name:' 学习机'},{name:' 早教机'},{name:'点读机/点读笔 '},{name:'复读机 '},{name:'电子词典 '}],
            phone8:[{name:'智能手表 '},{name:' 智能手环'},{name:' 智能摄像'},{name:'智能家居 '},{name:' 智能配件'},{name:'健康监测 '}],
            phone9:[{name:' 笔记本'},{name:' 台式机'},{name:' 笔记本配件'},{name:' 一体机'}],
            phone10:[{name:' 鼠标'},{name:' 键盘'},{name:'键鼠套装 '},{name:' USB'},{name:' 周边摄像头'},{name:'线缆 '},{name:' U盘'},{name:'移动硬盘 '},{name:' 存储卡'},{name:'鼠标垫 '},{name:'插座 '},{name:' 手写板/笔'},{name:' 电脑软件'},],
            phone11:[{name:' 显示器 '}],
            phone12:[{name:' 路由器'},{name:' 网卡'},{name:' 交换机'}],
            phone13:[{name:' 打印机'},{name:' 一体机'},{name:'扫描仪 '},{name:'电话机 '},{name:' 计算器'},{name:'投影仪/幕布 '},{name:' 激光笔'},{name:'  碎纸机'},{name:' 点钞机'},{name:' 考勤机'},{name:'装订机 '},],
            phone14:[{name:' 办公文具'},{name:'教育文具 '},{name:'记事 '},{name:'备忘文件 '},{name:'管理 '},{name:' 书写工具'},{name:'   书画用品'},{name:' 财务用品'},{name:' 墨盒'},{name:' 墨粉'},{name:' 刻录光盘'},],
       
         
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
<style src="../webManage/css/nav-pic.css" scoped>
   
</style>