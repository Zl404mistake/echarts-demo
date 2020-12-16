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
      options: {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            detail: { formatter: '{value}%' },
            data: [{ value: 50, name: '完成率' }]
          }
        ]
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      const myChart = this.$echarts.init(this.$refs.main)
      myChart.setOption(this.options, true)
      setInterval(() => {
        this.options.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
        myChart.setOption(this.options, true)
      }, 2000)
    })
  }
}
</script>

<style lang="less" scoped>
</style>
