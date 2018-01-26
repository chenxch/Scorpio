<template>
<div>
  <div class="left">
    <menu-left :isCollapse="isCollapse" :isPlay="isPlay" @on-result-change="onResultChange"></menu-left>
  </div>
  <div class="right" :class="{'right-collapse':isCollapse}">
    <el-row>
      <div class="top">
        <div class="top-icon" :class="{'top-icon-collapse':isCollapse}" @click="isCollapse = !isCollapse"><i class="el-xicon-category"></i></div>
      </div>
    </el-row>
    <el-row>
      <router-view/>
    </el-row>
  </div>
  <audio ref="audioRef" :autoplay="isPlay" controls="controls" preload="auto" src="./assets/media/romeostune.mp3" v-show="false"></audio>
</div>
</template>

<script>
import menuLeft from './components/menu/menu.vue';
export default {
  name: 'App',
  components: {
    menuLeft
  },
  data() {
    return {
      isCollapse: true,
      isPlay: false
    };
  },
  methods: {
    onResultChange(val) {
      this.isPlay = val;
    }
  },
  watch: {
    isPlay() {
      if (this.isPlay) {
        this.$refs.audioRef.play();
        this.isPlay = true;
      } else {
        this.$refs.audioRef.pause();
        this.$refs.audioRef.currentTime = 0;
      }
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

body {
  margin: 0;
}

.left {
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  transition: all .3s;
}

.right {
  padding-left: 200px;
}

.right-collapse {
  padding-left: 65px;
}

.top {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #005998;
  color: #fff;
  font-size: 20px;
}

.top-icon {
  width: 15px;
  height: 50px;
  display: inline-block;
  cursor: pointer;
  margin-left: 20px;
}

.top-icon-collapse {
  transform: rotate(90deg);
}
</style>
