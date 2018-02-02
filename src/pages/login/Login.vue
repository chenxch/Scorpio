<template>
<div>
  <!-- :style="{'background-image': 'url(../../assets/images/'+img+')'}" -->
  <el-carousel height="100vh" indicator-position="none" arrow="never" :interval=6000 class="carousel-index">
    <el-carousel-item v-for="item in bgImgs" :key="item">
      <div class="login-bg" :class="[item]" />
    </el-carousel-item>
  </el-carousel>
  <div class="login-block">
    <el-row class="login-title">Scorpio</el-row>
    <el-row>
      <el-col :span="2">&nbsp;</el-col>
      <el-col :span="20">
        <el-input placeholder="用户名" v-model="userName"></el-input>
      </el-col>
      <el-col :span="2">&nbsp;</el-col>
    </el-row>
    <el-row class="mrt-20">
      <el-col :span="2">&nbsp;</el-col>
      <el-col :span="20">
        <el-input placeholder="密码" v-model="passWord" type="passWord"></el-input>
      </el-col>
      <el-col :span="2">&nbsp;</el-col>
    </el-row>
    <el-row class="mrt-20">
      <el-col :span="2">&nbsp;</el-col>
      <el-col :span="20">
        <el-button type="primary" class="login-btn" @click="login">登录</el-button>
      </el-col>
      <el-col :span="2">&nbsp;</el-col>
    </el-row>
  </div>
</div>
</template>
<script>
import service from '../../service/service';
import {
  mapGetters,
  mapActions
} from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      bgImgs: ['bg', 'bg2'],
      userName: '',
      passWord: ''
    }
  },
  computed: { ...mapGetters(['stateUserName'])
  },
  created: function() {
    // var params = {
    //   params: {
    //     username: 'xc',
    //     password: this.$md5('1'),
    //     s: 'App.User.Login'
    //   }
    // }
    // service.login(params).then(response => {
    //   console.log(response);
    // }).catch(error => {
    //   console.info(error);
    // });
  },
  methods: {
    ...mapActions(['setStateUserName']),
    login() {
      var self = this;
      var params = {
        params: {
          username: this.userName,
          password: this.$md5(this.passWord),
          s: 'App.User.Login'
        }
      }
      service.login(params).then(response => {
        console.log(response.data);
        if (response.data.data.err_code == 0) {
          self.setStateUserName(self.userName);
          this.$router.push({
            path: 'index'
          });
        }
      }).catch(error => {
        console.info(error);
      });
    }
  }
}
</script>
<style >
body {
  margin: 0;
}

.carousel-index {
  z-index: -1;
}

.login-bg {
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px);
  overflow: hidden;
}

.bg {
  background-image: url(../../assets/images/bg.jpg);
}

.bg2 {
  background-image: url(../../assets/images/bg2.jpg);
}

.login-block {
  position: absolute;
  height: 270px;
  width: 300px;
  background-color: rgba(216, 220, 229, .5);
  top: 100px;
  right: 100px;
  z-index: 1;
  border-radius: 15px;
}

.login-title {
  text-align: center;
  font-size: 30px;
  height: 80px;
  line-height: 80px;
}

.login-btn {
  width: 100%;
}

.mrt-20 {
  margin-top: 20px;
}
</style>
