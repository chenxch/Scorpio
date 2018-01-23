<template>
<div>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group> -->
  <el-menu :router="true" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#005998" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="/">
      <i class="el-icon-location-outline"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="/">
      <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">组件</span>
        </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="demo">选项1</el-menu-item>
        <el-menu-item index="demo2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</div>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
}

.el-menu-vertical-demo {
  height: 100vh;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false
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
  }
}
</script>
