<template>
    <div class="navYundong totle">
        <div class="left">

               
            <div class="line line1">
                <div class="title">两性健康</div>
                <div class="Name Name1">
                    <div class="name" v-for="(i,j) in jiankang"  @mouseover="change(1,j)" :class=" (k=== j&&n===1)? 'red ' : ''">{{i.name}}</div>
                </div>
                </div>
               
            <div class="line">
                <div class="title">口腔护理</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in huli"  @mouseover="change(2,j)" :class=" (k=== j&&n===2)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
            <div class="line">
                <div class="title">家庭清洁</div>
                <div class="Name">
                <div class="name" v-for="(i,j) in qingjie"  @mouseover="change(3,j)" :class=" (k=== j&&n===3)? 'red ' : ''">{{i.name}}</div>
            </div>
            </div>
           
        </div>
        <div class="right">
            <div>
                <img src="../assets/navIN/qj1.jpg">
                <img src="../assets/navIN/qj2.jpg">
                <img src="../assets/navIN/qj3.jpg">
                <img src="../assets/navIN/qj4.jpg">
                <img src="../assets/navIN/qj5.jpg">



            </div>
            <div>
                <img src="../assets/navIN/qj6.jpg">
                <img src="../assets/navIN/qj7.jpg">
                <img src="../assets/navIN/qj8.png">
                <img src="../assets/navIN/qj9.jpg">
                <img src="../assets/navIN/qj10.jpg">


               
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
       jiankang:[ {name:'人体润滑'}, {name:'情趣内衣'}, {name:'男用器具'}, {name:'女用器具'}, {name:'仿真娃娃'},],
        huli:[ {name:'牙膏'}, {name:'牙刷/牙线'}, {name:'漱口水'},],
     qingjie:[ {name:'纸品湿巾'}, {name:'衣物清洁'}, {name:'驱蚊虫'},]
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