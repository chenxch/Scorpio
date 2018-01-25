<template>
<div class="m-body">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>开发备忘录</span>
    </div>
    <div v-for="(o,$index) in mList" :key="o" class="text item">
      {{$index+1 +'、'+ o }}
    </div>
  </el-card>
</div>
</template>

<script>
export default {
  data() {
    return {
      mList: [
        '引入第三方icon,参考地址：http://blog.csdn.net/b376924098/article/details/78286880,该文章缺少了import操作 需注意'
      ]
    }
  }
}
</script>
<style>
.m-body {
  margin: 8px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 100%;
  text-align: left;
}
</style>
