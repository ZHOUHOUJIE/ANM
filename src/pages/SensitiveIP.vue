<template>
  <div class="wyfx-full">
    <div class="wyfx-topBar clearfix">
      <div class="wyfx-topBar-title fl">敏感IP管理</div>
    </div>
    <div class="wyfx-content">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="wyfx-chart-wrap">
            <div class="wyfx-chart-title">
              敏感IP各类型流量总量
            </div>
            <div class="wyfx-chart" id="chart1"></div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="wyfx-chart-wrap">
            <div class="wyfx-chart-title">
              敏感IP各类型流量占比
            </div>
            <div class="wyfx-chart" id="chart2"></div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="wyfx-chart-wrap nm">
            <div class="wyfx-chart-title">
              敏感IP管理
            </div>
            <div class="wyfx-chart b">
              <div class="clearfix wyfx-table-bar">
                <el-button type="primary" size="small" class="fr">添加</el-button>
                <el-input v-model="addInput" placeholder="请输入敏感IP" size="small" class="fr wyfx-add-input"></el-input>
              </div>
              <el-table :data="tableData" class="wyfx-table">
                <el-table-column prop="date" label="敏感IP">
                </el-table-column>
                <el-table-column prop="name" label="常用匿名软件">
                </el-table-column>
                <el-table-column prop="name" label="最常访问网站">
                </el-table-column>
                <el-table-column prop="name" label="操作">
                  <template slot-scope="scope">
                    <el-button size="mini" type="text">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="clearfix">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes"
                  :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total" class="fr">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  export default {
    data() {
      return {
        chart1: '',
        chart2: '',
        addInput: '',
        tableData: [],
        currentPage: 1,
        pageSizes: [10, 20, 50, 100],
        pageSize: 10,
        total: 0,
      }
    },
    methods: {
      renderChart() {
        this.chart1.setOption({
          xAxis: {
            type: 'category',
            data: ['Freegate', 'l2tp', 'pptp', 'shadowsocks', 'tor', 'TorWitdSSL', 'ultrasurf']
          },
          yAxis: {
            type: 'value'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{b} : {c}"
          },
          series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }]
        });
        this.chart2.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['Freegate', 'l2tp', 'pptp', 'shadowsocks', 'tor', 'TorWitdSSL', 'ultrasurf']
          },
          series: [{
            name: '占比',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '50%'],
            data: [{
                value: 335,
                name: 'Freegate'
              },
              {
                value: 310,
                name: 'l2tp'
              },
              {
                value: 234,
                name: 'pptp'
              },
              {
                value: 135,
                name: 'shadowsocks'
              },
              {
                value: 1548,
                name: 'tor'
              },
              {
                value: 135,
                name: 'TorWitdSSL'
              },
              {
                value: 310,
                name: 'ultrasurf'
              }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]
        });
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    mounted() {
      const vm = this;
      this.chart1 = echarts.init(document.getElementById('chart1'));
      this.chart2 = echarts.init(document.getElementById('chart2'));
      window.onresize = function () {
        vm.chart1.resize();
        vm.chart2.resize();
      }
      this.renderChart();
    }
  }

</script>

<style scoped>
  .wyfx-chart {
    height: 300px;
    border-radius: 4px;
    border: 1px solid rgb(211, 220, 235);
  }

  .wyfx-chart.b {
    height: auto;
    padding: 10px;
  }

  .wyfx-chart-title {
    color: #CE6C04;
    padding: 2px 0;
  }

  .wyfx-chart-wrap {
    margin-bottom: 20px;
  }

  .wyfx-chart-wrap.nm {
    margin-bottom: 0;
  }

  .wyfx-add-input {
    width: 200px;
    margin-right: 5px;
  }

  .wyfx-table-bar {
    margin: 0 10px 10px 10px;
  }

</style>
