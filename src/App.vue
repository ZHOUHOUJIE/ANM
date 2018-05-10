<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #app {
    font-family: "Helvetica Neue", "Segoe UI", Tahoma, Arial, "Hiragino Sans GB", STHeiti, "Microsoft Yahei", "WenQuanYi Micro Hei", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    height: 100%;
    min-width: 1360px;
  }

  .wyfx-full {
    width: 100%;
    height: 100%;
  }

  .wyfx-fullH {
    height: 100%;
  }

  .wyfx-fullW {
    width: 100%;
  }

  .clearfix:after {
    content: "\200B";
    display: block;
    height: 0;
    clear: both;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .wyfx-topBar {
    width: 100%;
    height: 35px;
    border-bottom: 1px solid #ddd;
  }

  .wyfx-topBar-title {
    border-bottom: 3px solid #2e8ae3;
    font-weight: bold;
    margin: 0 0 0 10px;
    height: 32px;
    line-height: 32px;
    color: #666;
  }

  .wyfx-content {
    padding: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 56px);
    overflow-y: auto;
  }

  .wyfx-table {
    border-top: 1px solid #ebeef5;
    margin-bottom: 10px;
  }

</style>
