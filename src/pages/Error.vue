<template>
  <div class=".right-main">
    <div class="error-imgbox">
      <img :src="require('../assets/imgs/404.png')" alt="" class="error-img">
    </div>
    <div class="error-txt">Sorry<br/>We have some trouble here...</div>
    <div class="error-btnbox">
      <el-button type="primary" @click="back">back</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      back() {
        this.$router.push({
          name: 'Home'
        });
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .right-main {
    height: calc(100% - 20px);
    padding: 10px;
  }
  .error-imgbox {
    width: 50%;
    margin: 0 auto;
  }
  .error-img {
    width: 100%;
  }
  .error-txt {
    color: #777f8f;
    font-size: 24px;
    text-align: center;
    margin-top: 80px;
  }
  .error-btnbox {
    text-align: center;
    margin-top: 30px;
  }
</style>
