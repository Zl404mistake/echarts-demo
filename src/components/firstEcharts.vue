<template>
    <div>
      <h2>柱形图</h2>
      <div ref="main" class="chart"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      // opitons: {
      //   color: ['#2f89cf'],
      //   tooltip: {
      //     trigger: 'axis',
      //     axisPointer: { // 坐标轴指示器，坐标轴触发有效
      //       type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      //     }
      //   },
      //   // 修改图标大小
      //   grid: {
      //     left: '0%',
      //     top: '10px',
      //     right: '0%',
      //     bottom: '4%',
      //     containLabel: true
      //   },
      //   xAxis: [
      //     {
      //       type: 'category',
      //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      //       axisTick: {
      //         alignWithLabel: true
      //       },
      //       // 修改刻度标签
      //       axisLabel: {
      //         color: 'rgba(255,255,255,.6)',
      //         fontSize: '12'
      //       },
      //       axisLine: {
      //         show: false
      //       }
      //     }
      //   ],
      //   yAxis: [
      //     {
      //       type: 'value',
      //       // 修改刻度标签
      //       axisLabel: {
      //         color: 'rgba(255,255,255,.6)',
      //         fontSize: '12'
      //       },
      //       axisLine: {
      //         show: true,
      //         lineStyle: {
      //           color: 'rgba(255,255,255,0.1)'
      //         }
      //       }
      //     }
      //   ],
      //   series: [
      //     {
      //       name: '直接访问',
      //       type: 'bar',
      //       barWidth: '30%',
      //       data: [10, 52, 200, 334, 390, 330, 220],
      //       itemStyle: {
      //         // 修改柱子圆角
      //         barBorderRadius: 5,
      //         color: '#2f4554'
      //       },
      //       showBackground: true,
      //       backgroundStyle: {
      //         color: '#f3f3f3'
      //       }
      //     }
      //   ]
      // }
      opitons: {
        tooltip: {
          show: true
        },
        grid: {
          top: 200,
          bottom: 150
        },
        xAxis: {
          axisTick: {
            show: false
          },
          data: ['关井数', '开井数', '不在线'],
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              color: '#000',
              fontSize: 20
            },
            margin: 80 // 刻度标签与轴线之间的距离。
          }
        },
        yAxis: {
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        series: [
          // 数据
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [100, 45],
            symbolOffset: [0, -20],
            z: 12,
            data: [{
              name: '关井数',
              value: '981',
              trueVal: '98',
              symbolPosition: 'end',
              itemStyle: {
                color: '#00fff5' // 圆柱顶部颜色
              }
            },
            {
              name: '开井数',
              value: '1000',
              trueVal: '100',
              symbolPosition: 'end',
              itemStyle: {
                color: '#ffcc00' // 圆柱顶部颜色
              }
            },
            {
              name: '不在线',
              value: '900',
              trueVal: '90',
              symbolPosition: 'end',
              itemStyle: {
                color: '#b9b7ff' // 圆柱顶部颜色
              }
            }
            ]
          },
          // 底部数据
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [100, 45],
            symbolOffset: [0, 24],
            z: 12,
            data: [{
              name: '关井数',
              value: '981',
              trueVal: '98',
              itemStyle: {
                color: '#43bafe' // 圆柱底部颜色
              }
            }, {
              name: '开井数',
              value: '200',
              trueVal: '100',
              itemStyle: {
                color: '#ff7800' // 圆柱底部颜色
              }
            }, {
              name: '不在线',
              value: '900',
              trueVal: '90',
              itemStyle: {
                color: '#e9a5ff' // 圆柱底部颜色
              }
            }]
          },
          // 中间
          {
            type: 'bar',
            silent: true,
            barWidth: 100,
            barGap: '-100%',

            data: [{
              name: '关井数',
              value: '981',
              trueVal: '98',
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  distance: 40,
                  textStyle: {
                    color: '#00fff5', // 柱子对应数值颜色
                    fontSize: 40
                  }
                }
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
                    colorStops: [{
                      offset: 0,
                      color: 'rgba(0,255,245,0.5)'
                    }, {
                      offset: 1,
                      color: '#43bafe' // 底部渐变颜色
                    }]
                  }
                }
              }
            },
            {
              name: '开井数',
              value: '1000',
              trueVal: '100',
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  distance: 40,
                  textStyle: {
                    color: '#ffcc00', // 柱子对应数值颜色
                    fontSize: 40
                  }
                }
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
                    colorStops: [{
                      offset: 0,
                      color: 'rgba(255,204,0,0.5)'
                    }, {
                      offset: 1,
                      color: '#ff7800' // 底部渐变颜色
                    }]
                  }
                }
              }
            },
            {
              name: '不在线',
              value: '900',
              trueVal: '90',
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  distance: 40,
                  textStyle: {
                    color: '#b9b7ff', // 柱子对应数值颜色
                    fontSize: 40
                  }
                }
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
                    colorStops: [{
                      offset: 0,
                      color: 'rgba(185,183,255,0.5)'
                    }, {
                      offset: 1,
                      color: '#e9a5ff' // 底部渐变颜色
                    }]
                  }
                }
              }
            }]
          }
        ]
      }
    }
  },
  created () {
    this.$nextTick(() => {
      const myChart = this.$echarts.init(this.$refs.main)
      myChart.setOption(this.opitons)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    })
  }
}
</script>

<style lang="less" scoped>

</style>
