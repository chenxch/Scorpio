<template>
<router-view/>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
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
