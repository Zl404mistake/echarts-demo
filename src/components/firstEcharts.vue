<template>
  <div>
    <h2>用户统计</h2>
    <div ref="main" class="chart"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opitons: {
        tooltip: {
          show: true,
          trigger: 'item',
        },
        grid: {
          top: 200,
          bottom: 150,
        },
        xAxis: {
          axisTick: {
            show: false,
          },
          data: ['总用户', '在线', '不在线'],
          axisLine: {
            show: true,
          },
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              color: '#fff',
              fontSize: 20,
            },
            margin: 80, // 刻度标签与轴线之间的距离。
          },
        },
        yAxis: {
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        series: [
          // 数据
          // 中间
          {
            type: 'bar',
            barWidth: 100,
            barGap: '-100%',
            tooltip: {
              formatter: '{b}',
            },
            data: [
              {
                name: '总用户',
                value: '2000',
                trueVal: '98',
                label: {
                  text: '总用户',
                  show: true,
                  position: 'top',
                  distance: 40,
                  textStyle: {
                    color: '#00fff5', // 柱子对应数值颜色
                    fontSize: 40,
                  },
                },
                itemStyle: {
                  color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgba(0,255,245,0.5)',
                      },
                      {
                        offset: 1,
                        color: '#43bafe', // 底部渐变颜色
                      },
                    ],
                  },
                },
              },
              {
                name: '在线',
                value: '1000',
                trueVal: '100',
                label: {
                  normal: {
                    show: true,
                    position: 'top',
                    distance: 40,
                    textStyle: {
                      color: '#ffcc00', // 柱子对应数值颜色
                      fontSize: 40,
                    },
                  },
                },
                itemStyle: {
                  normal: {
                    color: {
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      type: 'linear',
                      global: false,
                      colorStops: [
                        {
                          offset: 0,
                          color: 'rgba(255,204,0,0.5)',
                        },
                        {
                          offset: 1,
                          color: '#ff7800', // 底部渐变颜色
                        },
                      ],
                    },
                  },
                },
              },
              {
                name: '不在线',
                value: '1000',
                trueVal: '90',
                label: {
                  normal: {
                    show: true,
                    position: 'top',
                    distance: 40,
                    textStyle: {
                      color: '#b9b7ff', // 柱子对应数值颜色
                      fontSize: 40,
                    },
                  },
                },
                itemStyle: {
                  normal: {
                    color: {
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      type: 'linear',
                      global: false,
                      colorStops: [
                        {
                          offset: 0,
                          color: 'rgba(185,183,255,0.5)',
                        },
                        {
                          offset: 1,
                          color: '#e9a5ff', // 底部渐变颜色
                        },
                      ],
                    },
                  },
                },
              },
            ],
          },
        ],
      },
    }
  },
  created() {
    this.$nextTick(() => {
      const myChart = this.$echarts.init(this.$refs.main)
      myChart.setOption(this.opitons)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    })
  },
}
</script>

<style lang="less" scoped>
.chart {
  height: 300px;
}
</style>
