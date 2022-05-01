<template>
    <div class="buycar">
 
     <top ></top>
     <buycar-next></buycar-next>
     <entercar :msg1="gwc"></entercar>
     <buycar-tui1 @addNum="getNum"></buycar-tui1>
  
    </div>  
 </template>
 <script>
 import top from '@/components/top.vue'
 import entercar from '@/components/entercar.vue'

 import buycarNext from '@/components/buycarNext.vue'
 import buycarTui1 from '@/components/buycarTui1.vue'
 
 export default {
   name: 'buycar',
   components: {
    top,buycarNext,buycarTui1,entercar
   },
   data: function() {
             return {
            gwc: '',
             }
         },
         methods:{
          getNum( recommend){
                this.gwc =  recommend

                console.log(this.gwc);
            },
         },
 }
 </script>