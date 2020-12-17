<template>
  <div>
    <h2>用户环境</h2>
    <div ref="main" class="chart"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        grid: {
          top: '10%',
          left: '22%',
          bottom: '10%',
          // containLabel: true
        },
        xAxis: {
          show: false,
        },
        yAxis: [
          {
            nameTextStyle: {
              borderWidth: 15,
              barBorderRadius: 50,
            },
            inverse: true,
            type: 'category',
            data: ['APP', '小程序', 'H5'],
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: '#fff',
            },
          },
          {
            data: ['1000', '500', '500'],
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: '#fff',
            },
          },
        ],
        series: [
          {
            name: '条',
            type: 'bar',
            barWidth: 10,
            barCategoryGap: 50,
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: 20,
              color: (params) => {
                return ['#1089E7', '#f57474', '#56D0E3'][params.dataIndex]
              },
            },
            yAxisIndex: 0,
            label: {
              show: true,
              position: 'inside',
              formatter: '{c}%',
            },
            data: [70, 34, 60],
          },
          {
            yAxisIndex: 1,
            barWidth: 15,
            barCategoryGap: 50,
            name: '外壳',
            type: 'bar',
            data: [100, 100, 100],
            itemStyle: {
              color: 'none',
              borderColor: '#fff',
              borderWidth: 4,
              barBorderRadius: 10,
            },
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
