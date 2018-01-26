<template>
<div class="menu-body">
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group> -->
  <div class="menu-title">Scorpio</div>
  <el-menu :router="true" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#005998" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="/">
      <i class="el-xicon-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="/">
      <template slot="title">
          <i class="el-xicon-component"></i>
          <span slot="title">组件</span>
        </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="demo">选项1</el-menu-item>
        <el-menu-item index="demo2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="memorandum">
      <i class="el-xicon-text"></i>
      <span slot="title">开发备忘录</span>
    </el-menu-item>
    <el-menu-item index="about">
      <i class="el-xicon-account"></i>
      <span slot="title">关于作者</span>
    </el-menu-item>
  </el-menu>
  <div class="animated bounceInDown imgWrap" @click="play = !play">
    <img src="../../assets/images/music.gif" class="gif gif-animate" :class="{'animated flip':play}" />
  </div>
</div>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  /* height: 100vh; */
}

.el-menu-vertical-demo {
  /* height: 100vh; */
  margin-top: 50px;
}

.menu-body {
  background-color: #005998;
  height: 100%;
  display: flex;
}

.menu-title {
  background-color: #005998;
  width: 100%;
  height: 50px;
  position: absolute;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 18px;
}

.imgWrap {
  text-align: center;
  position: absolute;
  bottom: 30px;
  width: 100%;
  cursor: pointer;
}

.gif {
  width: 60px;
  height: 60px;
  border-radius: 30px;
}

.gif-animate {
  animation-duration: 5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}
</style>

<script>
export default {
  props: ['isCollapse', 'isPlay'],
  data() {
    return {
      // isCollapse: true
      play: this.isPlay
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    menuSelect(index) {
      console.log(index);
      this.$router.push({
        path: 'demo'
      });
    }
  },
  watch: {
    play(newVal, oldVal) {
      console.log(newVal);
      this.$emit("on-result-change", newVal);
    }
  }
}
</script>
