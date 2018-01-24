<template>
<div class="hello">
  <div class="head"></div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.hello {
  background-image: url("../assets/images/p2.jpg");
}

.hello::after {
  background-size: cover;
  background-attachment: fixed;
  -webkit-filter: blur(20px);
  -moz-filter: blur(20px);
  -ms-filter: blur(20px);
  -o-filter: blur(20px);
  filter: blur(20px);
}

.head {
  background-image: url("../assets/images/xc.jpg");
  width: 178px;
  height: 178px;
  border: 1px solid #d3d3d3;
  border-radius: 100px;
}
</style>
