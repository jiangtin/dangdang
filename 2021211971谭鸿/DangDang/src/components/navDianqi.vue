<template>
    <div class="navDianqi totle">
        <div class="left">
            <div class="Top">
                <div class="top">
                    <div class="topT">家用电器</div>
                    <div class="pic">
                        <svg class="icon"  aria-hidden="true" id="aright">
                            <use xlink:href="#icon-youjiantou"></use>
                        </svg>
                    </div>
                </div>
                </div>
               
            <div class="line line1">
                <div class="title">厨房电器</div>
                <div class="Name Name1">
                    <div class="name" v-for="(i,j) in dianqi1"  @mouseover="change(1,j)" :class=" (k=== j&&n===1)? 'red ' : ''">{{i.name}}</div>
                </div>
                </div>
               
            <div class="line">
                <div class="title">生活电器</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in dianqi2" @mouseover="change(2,j)" :class=" (k=== j&&n===2)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">大家电</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in dianqi3" @mouseover="change(3,j)" :class=" (k=== j&&n===3)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">液晶电视</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in dianqi4" @mouseover="change(4,j)" :class=" (k=== j&&n===4)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">空调</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in dianqi5" @mouseover="change(5,j)" :class=" (k=== j&&n===5)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">冰箱</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in dianqi6" @mouseover="change(6,j)" :class=" (k=== j&&n===6)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">洗衣机</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in dianqi7" @mouseover="change(7,j)" :class=" (k=== j&&n===7)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">个人护理</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in dianqi8" @mouseover="change(8,j)" :class=" (k=== j&&n===8)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
        </div>
        <div class="right">
            <div>
                <img src="../assets/navIN/dq1.jpg">
                <img src="../assets/navIN/dq2.png">
                <img src="../assets/navIN/dq3.jpg">
>


            </div>
            <div>
                <img src="../assets/navIN/dq4.jpg">
                <img src="../assets/navIN/dq5.png">
                <img src="../assets/navIN/dq6.jpg">

               
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
            dianqi1:[{name:'  榨汁机'},{name:'微波炉'},{name:'豆浆机'},{name:'电饭煲'},{name:'电磁炉'},{name:'电水壶'},{name:'养生壶'},{name:'料理机'},{name:'压力锅'},{name:'酸奶机'},{name:'面包机'},{name:'电烤箱'},{name:'电炖锅'},{name:'电饼铛'},{name:'煮蛋器'},{name:'咖啡机'},],
            dianqi2:[{name:'净水设备'},{name:'吸尘器'},{name:'加湿器'},{name:'空气净化器'},{name:'饮水机'},{name:'灯具'},{name:' 挂烫机/熨斗'},{name:'除湿/干衣机'},{name:'小洗衣机'},{name:' 收音机'},{name:'毛球修剪器'},{name:'电风扇'},{name:'空调扇'},{name:'电池插座'},{name:'清洁机'},{name:'取暖器'}],
            dianqi3:[{name:'热水器'},{name:'烟机/灶具'},{name:'迷你音响'},{name:'消毒柜'},{name:'智能设备'}],
            dianqi4:[{name:'32英寸及以下'},{name:'39-45英寸'},{name:'48-50英寸'},{name:'55英寸'},{name:'58-60英寸'},{name:'65英寸'},{name:'70-75英寸'},{name:'77英寸及以上'}],
            dianqi5:[{name:'壁挂式'},{name:'立柜式'}],
            dianqi6:[{name:'双门'},{name:'三门'},{name:'对开门'},{name:'多门'}],
            dianqi7:[{name:'滚筒'},{name:'波轮'},{name:'洗烘一体'},{name:'双缸'},{name:'迷你洗衣机'}],
            dianqi8:[{name:'剃须刀'},{name:'电吹风'},{name:'美发器'},{name:'美容器'},{name:'口腔护理'},{name:'按摩器'},{name:'足浴盆'},{name:'测量仪/血压计'},{name:'剃毛器'}],
     
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