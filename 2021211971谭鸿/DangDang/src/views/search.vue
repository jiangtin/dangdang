<template>
   <div class="search">

    <top ></top>
    <next-top  @addNum="getNum" :msg="key"></next-top>
   <search-nav v-bind:xiang="key1"></search-nav>
    <searchall></searchall>
    <search-more></search-more>
    <search-body  v-bind:msg="key"></search-body>
   </div>  
</template>
<script>
import top from '@/components/top.vue'
import nextTop from '@/components/nextTop.vue'
import searchNav from '@/components/search-nav.vue'
import searchall from '@/components/search-all.vue'
import searchMore from '@/components/searchMore.vue'
import searchBody from '@/components/searchBody.vue'
import da from "../assets/data"

export default {
  name: 'search',
  components: {
   top,nextTop,searchNav,searchall,searchMore,searchBody
  },
  data() {
            return {
                key: da.sousuo[0].searchleft,
                key1:  da.sousuo[0].xiang,
            }
        },
        methods:{
            // childNum是由子组件传入的
            getNum(searchData){
              if(searchData ==''){
                alert("未找到此商品，先看看其他商品吧！")
              }
                this.key = searchData[0].searchleft
                this.key1 = searchData[0].xiang

                console.log(this.key);
            },


        },
}
</script>
