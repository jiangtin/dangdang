<template>
  <div class="home">
    <img src="../assets/img/bstop.jpg" style="margin-left: 160px;">
    <cebian></cebian>
    <top :name="id"></top>
    <next-top></next-top>
    <Nav></Nav>
   <qiang-gou></qiang-gou>
   <book></book>
    <cloth></cloth>
    <daily></daily>
    <food></food>
    <child></child>
    <recommend></recommend>

    <Footer1></Footer1>
    <Footer2></Footer2>

  </div>
</template>

<script>
// @ is an alias to /src
import cebian from '@/components/cebian.vue'

import top from '@/components/top.vue'
import nextTop from '@/components/nextTop.vue'
import Nav from '@/components/Nav.vue'
import qiangGou from '@/components/qiangGou.vue'
import book from '@/components/book.vue'
import daily from '@/components/daily.vue'
import food from '@/components/food.vue'
import child from '@/components/child.vue'
import recommend from '@/components/recommend.vue'
import cloth from '@/components/cloth.vue'



import Footer1 from '@/components/Footer1.vue'
import Footer2 from '@/components/Footer2.vue'
export default {
  name: 'HomeView' ,
  data:function(){
          return{
            id:this.$route.query.name,
          }},
  components: {
   top,nextTop,Nav,Footer1,Footer2,qiangGou,book,daily,food,child,recommend,cloth, cebian
  }
}
</script>
