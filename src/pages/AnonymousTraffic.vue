<template>
  <div class="wyfx-full">
    <div class="wyfx-topBar clearfix">
      <div class="wyfx-topBar-title fl">匿名流量识别</div>
    </div>
    <div class="wyfx-content" v-if="content_show">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="监控网卡：">
          <el-select v-model="form.options" placeholder="请选择" size="small">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="插件选择：">
          <el-checkbox-group v-model="form.checkList" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="(item, index) in checkListOptions" :label="item" :key="index">{{item}}</el-checkbox>
          </el-checkbox-group>
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small">开始监测</el-button>
        </el-form-item>
      </el-form>
      <div class="clearfix wyfx-tool-bar">
        <el-button size="small" class="fr">删除所选</el-button>
        <el-button type="primary" size="small" class="fr wyfx-search-btn">搜索</el-button>
        <el-input v-model="searchInput" placeholder="请输入IP或网络类型" size="small" class="fr wyfx-search-input"></el-input>
      </div>
      <el-table :data="tableData1" class="wyfx-table" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="date" label="IP地址" min-width="200">
        </el-table-column>
        <el-table-column prop="name" label="网络类型" min-width="150">
        </el-table-column>
        <el-table-column prop="name" label="发现时间" min-width="200">
        </el-table-column>
        <el-table-column prop="name" label="目的IP" min-width="200">
        </el-table-column>
        <el-table-column prop="name" label="流量信息" min-width="150">
        </el-table-column>
        <el-table-column prop="name" label="详情" min-width="120">
        </el-table-column>
        <el-table-column prop="name" label="操作" min-width="120">
          <template slot-scope="scope">
            <el-button size="mini">关注</el-button>
            <el-button size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="clearfix">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage1" :page-sizes="pageSizes1"
          :page-size="pageSize1" layout="total, sizes, prev, pager, next, jumper" :total="total1" class="fr">
        </el-pagination>
      </div>
    </div>
    <div class="wyfx-content" v-if="!content_show">
      <div>
        <el-button type="text" icon="el-icon-back" @click="content_show = true">返回</el-button>
      </div>
      <el-row :gutter="20" class="wyfx-detail">
        <el-col :span="12" class="clearfix">
          <div class="wyfx-detail-title fl">IP地址：</div>
          <div class="wyfx-detail-txt fl"></div>
        </el-col>
        <el-col :span="12">
          <div class="wyfx-detail-title fl">网络类型：</div>
          <div class="wyfx-detail-txt fl"></div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="wyfx-detail">
        <el-col :span="12" class="clearfix">
          <div class="wyfx-detail-title fl">发现时间：</div>
          <div class="wyfx-detail-txt fl"></div>
        </el-col>
        <el-col :span="12">
          <div class="wyfx-detail-title fl">识别原理：</div>
          <div class="wyfx-detail-txt fl"></div>
        </el-col>
      </el-row>
      <div class="wyfx-detail">
        <el-button type="primary" size="small">下载</el-button>
      </div>
      <el-table :data="tableData2" class="wyfx-table">
        <el-table-column prop="date" label="源IP" min-width="200">
        </el-table-column>
        <el-table-column prop="name" label="源端口" min-width="150">
        </el-table-column>
        <el-table-column prop="name" label="目的IP" min-width="200">
        </el-table-column>
        <el-table-column prop="name" label="目的端口" min-width="150">
        </el-table-column>
        <el-table-column prop="name" label="协议类型" min-width="120">
        </el-table-column>
        <el-table-column prop="name" label="时间" min-width="200">
        </el-table-column>
      </el-table>
      <div class="clearfix">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage2" :page-sizes="pageSizes2"
          :page-size="pageSize2" layout="total, sizes, prev, pager, next, jumper" :total="total2" class="fr">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          options: '',
          checkList: []
        },
        options: {},
        checkListOptions: ['TorHOST', 'TorSSL', 'Shadowsocks', 'ultrasurf', 'Freegate', 'VPN(PPTP)', 'VPN(L2TP)'],
        checkAll: false,
        isIndeterminate: false,
        searchInput: '',
        tableSelected: [],
        tableData1: [],
        currentPage1: 1,
        pageSizes1: [6, 20, 50, 100],
        pageSize1: 6,
        total1: 0,
        tableData2: [],
        currentPage2: 1,
        pageSizes2: [6, 20, 50, 100],
        pageSize2: 6,
        total2: 0,
        content_show: true
      }
    },
    methods: {
      handleCheckAllChange(val) {
        this.form.checkList = val ? this.checkListOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(val) {
        let checkedCount = val.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.checkListOptions.length;
        this.checkAll = checkedCount === this.checkListOptions.length;
      },
      handleSelectionChange(val) {
        this.tableSelected = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    mounted() {

    }
  }

</script>

<style scoped>
  .wyfx-search-input {
    width: 200px;
    margin-right: 5px;
  }

  .wyfx-search-btn {
    margin-right: 5px;
  }

  .wyfx-tool-bar {
    margin-bottom: 10px;
  }

  .wyfx-detail-title {
    width: 100px;
    line-height: 30px;
  }

  .wyfx-detail-txt {
    width: calc(100% - 100px);
    line-height: 30px;
  }

  .wyfx-detail {
    margin-bottom: 10px;
  }

</style>
