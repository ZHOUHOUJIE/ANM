<template>
  <div class="wyfx-full">
    <div class="wyfx-header clearfix">
      <div class="fr wyfx-header-right">
        <el-button type="primary"><i class="iconfont icon-icon-7 wyfx-header-icon"></i>用户名</el-button>
        <el-button type="primary"><i class="iconfont icon-icon-3 wyfx-header-icon"></i>修改密码</el-button>
        <el-button type="primary"><i class="iconfont icon-tuihui wyfx-header-icon"></i>返回</el-button>
      </div>
    </div>
    <div class="wyfx-main clearfix">
      <div class="fl wyfx-main-left">
        <el-menu :default-active="$route.path" router class="wyfx-full" background-color="#42485b" text-color="#fff" active-text-color="#2e8ae3">
          <el-menu-item index="/main/home">
            <i class="iconfont icon-xinxiguanlian wyfx-nav-icon"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="iconfont icon-saomiao wyfx-nav-icon"></i>
            <span slot="title">匿名流量识别</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="iconfont icon-icon- wyfx-nav-icon"></i>
            <span slot="title">流量镜像</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="iconfont icon-icon-41 wyfx-nav-icon"></i>
            <span slot="title">敏感IP管理</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="fl wyfx-main-right">
        <router-view/>
      </div>
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

    },
    mounted() {

    }
  }

</script>

<style scoped>
  .wyfx-header {
    width: 100%;
    height: 44px;
    background: #2e8ae3;
  }

  .wyfx-main {
    width: 100%;
    height: calc(100% - 44px);
  }

  .wyfx-main-left {
    width: 135px;
    height: 100%;
  }

  .wyfx-main-right {
    width: calc(100% - 135px);
    height: 100%;
  }

  .el-menu-item,
  .el-submenu__title {
    height: 40px;
    line-height: 40px;
    font-size: 13px;
  }

  .wyfx-nav-icon {
    color: #fff;
    font-size: 19px;
  }

  .wyfx-header-right {
    height: 100%;
    line-height: 44px;
    padding-right: 10px;
  }

  .wyfx-header-right button {
    background-color: #2e8ae3;
    border: none;
    padding: 10px 10px;
  }

  .wyfx-header-icon {
    font-size: 16px;
    vertical-align: middle;
    margin-right: 5px;
  }

</style>
