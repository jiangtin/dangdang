<template>
    <div class="Login">
      <div class="top">
          <div class="top-left">
              <img src="../assets/img/dd.png">
          </div>
          <div class="top-right">
              <div class="r1">切换无障碍</div>
              <div class="r2">
                  
                    <svg class="icon"  aria-hidden="true" id="aright">
                        <use xlink:href="#icon-xiaoxi"></use>
                    </svg>
                  
                “登录页面”改进建议
              </div>
          </div>
      </div>
      <div class="Body">
          <div class="left">
            <img src="../assets/img/bigp.png">
          </div>
          <div class="right">


                         <!-- 第一页 -->
<div class="r-b1" :style="b1">
<div class="r-top">
    <div class="mima" :style="mima" @click="click1()">密码登录</div>
    <div class="yanzhengma" :style="yanzhengma" @click="click2()">验证码登录</div>
    <div class="erweima" @click="ewm1()">
        <img src="../assets/img/ewm1.png">
    </div>
</div>

    <input class="input" :placeholder="in1" type="text" v-model="user2">
    <input class="input" :placeholder="in2" type="password" v-model="password2">
    <div class="line">
        登录即同意 <div class="strong">   用户协议、隐私协议</div>
    </div>
    <div class="denglu" @click="login2()">
        登录
    </div>

    <div class="else" :style="else">
        <div class="zhuce" @click="Lzhuce">立即注册</div>
        <div class="forget">忘记密码</div>
    </div>
    </div>

       <!--  注册-->
    <div class="r-b3" :style="b3">
        <div class="r-top">
            <div class="fh" @click="fh">
                <svg class="icon"  aria-hidden="true" id="aright">
                    <use xlink:href="#icon-icon-arrow-left2"></use>
                </svg>  
            </div>
           <div class="ce">立即注册</div>
        </div>
            <input class="input" placeholder="用户名(1~8位)" type="text" v-model="user1">
            <input class="input" placeholder="密码(6~12位)" type="password" v-model="password1">
            <div class="line">
                登录即同意 <div class="strong">   用户协议、隐私协议</div>
            </div>
            <div class="denglu"  @click="register()">
                立即注册
            </div>
        
            <div class="else" :style="else">
            </div>
            </div>

                      <!-- 第二页 -->
    <div class="r-b2" :style="b2">
        <div class="line1">
            <div class="line1-1">扫码登录</div>
            <div class="erweima"  @click="ewm2()">
                <img src="../assets/img/ewm1.png">
            </div>
        </div>
        <div class="line2">
            <img src="../assets/img/ewm2.png">
        </div>
         <div class="line3">
             打开
             <div style="color: #ff3832;">手机当当</div>
             &nbsp&nbsp扫一扫登录
         </div>


    </div>
                             <!-- 登录方式 -->
    <div class="r-bt">
        <svg class="icon"  aria-hidden="true" id="aright">
            <use xlink:href="#icon-weixin"></use>
        </svg>
        <svg class="icon"  aria-hidden="true" id="aright">
            <use xlink:href="#icon-zhifubao1"></use>
        </svg>
        <svg class="icon"  aria-hidden="true" id="aright">
            <use xlink:href="#icon-QQ"></use>
        </svg>
        <svg class="icon"  aria-hidden="true" id="aright">
            <use xlink:href="#icon-shejiaotubiao-42"></use>
        </svg>
        <svg class="icon baidu"  aria-hidden="true" id="aright">
            <use xlink:href="#icon-baidu1"></use>
        </svg>
      
    </div>
          </div>
      </div>

      <foot class="foot"></foot>
    </div>
</template>
<script>
     import foot from '@/components/Footer2.vue'
   export default{
    components: {
           foot
        },
    data:function(){
        return {
           mima: 'color: #333; font-weight: 700;',
           yanzhengma:' color: rgb(140,140,140);',
           in1:"用户名",
           in2:"密码",
           b1:'display:block',
           b2:'display:none',
           b3:'display:none',
           else:'',
           user2: this.$store.state.user,
           password2: this.$store.state.password,
           user1:'',
           password1:'',
           question:" 11",
           answer:" 11"
        }
    },
    methods:{
        register(){
            let formdata = new FormData();
            formdata.append('username', this.user1);
            formdata.append('password',this.password1);
            formdata.append('question', this.question);
            formdata.append('answer', this.answer);
            console.log( formdata);
    fetch('http://42.192.155.29:8080/register', {
            method: 'POST',
            body: formdata

        }).then(res => res.json())
        .then(data => {
            alert(data.info);
            if (data.info != '成功') {
                location.reload();
                alert('请重新注册');
            }
             else if (data.info == '成功') {
                this.b3='display:none'
            this.b1='display:block'
             }
            else {
              
            }
        });
        },
        login2(){
            let formdata = new FormData();
            formdata.append("username", this.user2);
            formdata.append("password",this.password2);
            console.log( formdata);
             fetch('http://42.192.155.29:8080/login', {
            method: 'POST',
            headers: {
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IuWwj-iwoiIsInBhc3N3b3JkIjoiMTIzNDU2IiwiZXhwIjoxNjQyMzI3MjE3LCJpc3MiOiJZdWFuWGluSGFvIiwibmJmIjoxNjQyMzE5OTU3fQ.-45KVzY3cl-DzyudPgFq0gk3oJUcX6Myu_YNVTFeAj0'
            },
            body: formdata
        }).then(res => res.json())
        .then(res => {
            if (res.info == '成功') {
                alert("登陆成功！欢迎" +this.user2)
                this.$router.push({
                    path:'/',
                    query:{name:this.user2}
                })  
                var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IuWwj-iwoiIsInBhc3N3b3JkIjoiMTIzNDU2IiwiZXhwIjoxNjQyMzI3MjE3LCJpc3MiOiJZdWFuWGluSGFvIiwibmJmIjoxNjQyMzE5OTU3fQ.-45KVzY3cl-DzyudPgFq0gk3oJUcX6Myu_YNVTFeAj0'
                window.localStorage.setItem("token",token);
            } else {
                alert("用户名或密码输入错误")
            }
        });
        },
        Lzhuce(){    
            this.b1='display:none'
            this.b3='display:block'
        },
        fh(){
            this.b3='display:none'
            this.b1='display:block'
        },
        click1(){
            this.yanzhengma="color: rgb(140,140,140);"
                this.mima="color: #333; font-weight: 700;"
                this.in1="用户名"
                this.in2="密码"
      
        },
            click2(){
                this.mima="color: rgb(140,140,140);"
                this.yanzhengma="color: #333; font-weight: 700;"
                this.in1="手机号"
                this.in2="验证码"
            },
            ewm1(){
                this.b2='display:block',
                this.b1='display:none'
            },
            ewm2(){
                this.b1='display:block',
                this.b2='display:none'
            }
            
        }
      
}
</script>

<style scoped>
   
    .top{
        padding: 0 160px;
        display: flex;
        justify-content: space-between;
        margin-top: 45px;
    }
    .top-right{
        width: 160px;
        padding-top: 20px;
        color: rgb(140,140,140);
    }
    .r1{
        padding-left: 80px;
    }
    .r2{
        display: flex;
    }
    /* .xiaoxi{
        background-color: #ff3832;
    } */
    .r2 .icon{
        width: 15px;
        height: 15px;
        fill: #ff3832;
    }
    .Body{
        padding: 0 160px;
        margin-top: 62px;
        display: flex;
        width: 1520px;
         justify-content: space-between;
        font-family: MicrosoftYaHei,PingFangSC-Regular,PingFang SC,sans-serif,Helvetica,Tahoma;
       font-size: 14px;
       color: #333;
       -webkit-text-size-adjust: none;
    }
    .left img{
        width: 680px;
        height: 520px;
        border-radius: 20px;
    }
    .right{
        width: 420px;
        margin-top: 30px;
        height: 470px;
        border: 1px solid rgb(200,200,200);
        text-align: center;
        color: rgb(140,140,140);
        font-size: 13px;
    }
.r-top{
    display: flex;
    width: 420px;
    font-size: 18px;
    height: 70px;

}
.r-top .icon{
    width: 20px;
    height: 20px;
}
.fh{
    margin-left: 40px;
    margin-top: 30px;
    display: flex;
}
.mima , .ce{
    color: #333;
    width: 200px;
    height: 25px;
    font-weight: 600;
    margin-top: 30px;
    padding-left: 60px;
}
.ce{
    margin-left: 30px;
    padding-left: 0;
}
.yanzhengma{
    width: 150px;
    height: 23px;
    margin-top: 30px;
    padding-left: 40px;
    border-left: 1.5px solid rgb(200,200,200);

}
.erweima img{
    width: 80px;
    height: 80px;
}
.right input{
    width: 340px;
    margin-left: 40px;
    background-color: rgb(250, 249, 249);
    display: block;
    border: none;
    font-family: MicrosoftYaHei;
    font-size: 15px;
    color: #222;
    line-height: 50px;
    width: 340px;
    height: 50px;
    padding-left: 10px;
    margin-top: 20px;
}
.r-b1 ,.r-b2,.r-b3{
    width: 340;
}
.line{
    display: flex;
    width: 100%;
    text-align: center;
    padding-left: 100px;
    height: 50px;
    line-height: 50px;
}
.strong{
    font-weight: 550;
    color: #333;
}
.denglu{
    height: 50px;
    width: 340px;
    margin-left: 40px;
    background-color: #ff3832;
    color: aliceblue;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
}
.else{
    display: flex;
    margin-top: 30px;
}
.zhuce{
    width: 210px;
    height: 15px;
    line-height: 15px;
    padding-left: 110px;
    border-right:  1.5px solid rgb(200,200,200);
}
.forget{
    padding-left: 20px;

}
.r-bt{
    position: relative;
    width: 340px;
    margin-left: 40px;
    justify-content:space-around;
    bottom: -70px;
}
.r-bt .icon{
    width: 30px;
    height: 30px;
    margin-left: 34px;
}
.baidu{
    fill: rgb(121, 121, 230);
}
.line1{
    display: flex;
    font-size: 18px;
    color: #333; 
    font-weight: 700;
    width: 100%;
    padding-left: 165px;
}
.line1 img{
    margin-left: 100px;
}
.line1-1{
    height: 40px;
    line-height: 80px;
}
.line2{
    width: 210px;
    height: 210px;
    border: 1px solid rgb(200,200,200);
    padding-top: 15px;
    margin-left: 110px;
    margin-top: 10px;

}
.line2 img{
    width: 180px;
    height: 180px;
}
.line3{
    display: flex;
    font-size: 14px;
    margin-left: 130px;
    margin-top: 20px;
}
.foot{
    margin-top: 80px;
}
input{
    outline: none;
}
</style>