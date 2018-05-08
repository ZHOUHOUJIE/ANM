<template>
  <div class="wyfx-full">
    <div class="wyfx-topBar clearfix">
      <div class="wyfx-topBar-title fl">首页</div>
    </div>
    <div class="wyfx-content">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="wyfx-chart-wrap">
            <div class="wyfx-chart-title">
              各类型匿名IP个数
            </div>
            <div class="wyfx-chart" id="chart1"></div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="wyfx-chart-wrap">
            <div class="wyfx-chart-title">
              各类型匿名IP占比
            </div>
            <div class="wyfx-chart" id="chart2"></div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="wyfx-chart-wrap nm">
            <div class="wyfx-chart-title">
              每月匿名流量趋势
            </div>
            <div class="wyfx-chart b" id="chart3"></div>
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
        chart3: ''
      }
    },
    methods: {
      renderChart() {
        this.chart1.setOption({
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }]
        });
        this.chart2.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [{
                value: 335,
                name: '直接访问'
              },
              {
                value: 310,
                name: '邮件营销'
              },
              {
                value: 234,
                name: '联盟广告'
              },
              {
                value: 135,
                name: '视频广告'
              },
              {
                value: 1548,
                name: '搜索引擎'
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
        this.chart3.setOption({
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        });
      }
    },
    mounted() {
      this.chart1 = echarts.init(document.getElementById('chart1'));
      this.chart2 = echarts.init(document.getElementById('chart2'));
      this.chart3 = echarts.init(document.getElementById('chart3'));
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
    height: 400px;
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

</style>
