<template>
  <div>
    <h2>用户来源</h2>
    <div ref="main" class="chart"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 10,
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
          backgroundColor: '#fff',
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' },
            ],
          },
        ],
      },
    }
  },
  created() {
    this.show()
  },
  methods: {
    show() {
      this.$nextTick(() => {
        const myChart = this.$echarts.init(this.$refs.main)
        myChart.setOption(this.option)
        window.addEventListener('resize', function () {
          myChart.resize()
        })
      })
    },
  },
}
</script>

<style lang="less" scoped></style>
