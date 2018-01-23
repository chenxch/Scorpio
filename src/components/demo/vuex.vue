<template>
<div>
  {{name}}
  <button @click="fun">点击改变msg</button>
  <br> msg: {{msg}}
</div>
</template>
<style scoped>

</style>
<script>
import {
  mapGetters,
  mapActions
} from 'vuex';
export default {
  data() {
    return {
      name: "demo-vuex"
    }
  },
  computed: { ...mapGetters(['msg'])
  }, //对应getters.技术中的msg
  methods: { ...mapActions(['fun'])
  } //对应 Actions中fun方法
}
</script>
