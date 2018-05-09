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
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['Freegate', 'l2tp', 'pptp', 'shadowsocks', 'tor', 'TorWitdSSL', 'ultrasurf']
          },
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
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
        this.chart3.setOption({
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Freegate', 'l2tp', 'pptp', 'shadowsocks', 'tor', 'TorWitdSSL', 'ultrasurf']
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
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
              name: 'Freegate',
              type: 'line',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: 'l2tp',
              type: 'line',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: 'pptp',
              type: 'line',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: 'shadowsocks',
              type: 'line',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: 'tor',
              type: 'line',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            },
            {
              name: 'TorWitdSSL',
              type: 'line',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: 'ultrasurf',
              type: 'line',
              data: [120, 132, 101, 134, 90, 230, 210]
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
