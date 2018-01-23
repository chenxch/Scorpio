<template>
<div>
  <div class="block">
    <menu-left></menu-left>
  </div>
  <div class="block">
    <router-view/>
  </div>
</div>
</template>

<script>
import menuLeft from './components/menu/menu.vue';
export default {
  name: 'App',
  components: {
    menuLeft
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
  position: fixed;
}

.block {
  display: inline-block;
  height: 100vh;
  float: left;
}
</style>
