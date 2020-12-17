<template>
  <div>
    <h2>CPU 使用率</h2>
    <div ref="main" class="chart"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%',
        },
        series: [
          {
            name: 'CPU使用率',
            type: 'gauge',
            detail: { formatter: '{value}%', color: '#FFF', fontSize: '20px' },
            data: [{ value: 5 }],
            itemStyle: {
              color: '#FFF',
            },
            axisLine: {
              lineStyle: {
                color: [
                  [0.2, '#91c7ae'],
                  [0.8, '#63869e'],
                  [1, '#c23531'],
                ],
              },
            },
            axisTick: {
              lineStyle: {
                color: '#FFF',
              },
            },
            axisLabel: {
              color: '#FFF',
            },
          },
        ],
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      const myChart = this.$echarts.init(this.$refs.main)
      myChart.setOption(this.options, true)
      setInterval(() => {
        this.options.series[0].data[0].value =
          (Math.random() * 100).toFixed(2) - 0
        myChart.setOption(this.options, true)
      }, 2000)
    })
  },
}
</script>

<style lang="less" scoped></style>
