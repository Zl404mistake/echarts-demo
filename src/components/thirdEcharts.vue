<template>
  <div>
    <h2>推广数据</h2>
    <div ref="main" class="chart"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        // 标题
        color: ['#cd4692', '#9658c3', '#6c6be2', '#01aebf', '#18b794'],
        series: [
          {
            name: 'TITLE',
            type: 'pie',
            clockwise: false,
            startAngle: 90,
            radius: '75%',
            center: ['44%', '50%'],
            hoverAnimation: false,
            roseType: 'radius', // area
            data: [
              {
                value: 335,
                name: '抖音',
              },
              {
                value: 310,
                name: '快手',
              },
              {
                value: 234,
                name: 'B站',
              },
              {
                value: 135,
                name: '微信',
              },
              {
                value: 148,
                name: '百度',
              },
            ],
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: '5',
              },
            },
            label: {
              show: true,
              position: 'outside',
              formatter: '{a|{b}：{d}%}\n{hr|}',
              rich: {
                hr: {
                  backgroundColor: 't',
                  borderRadius: 100,
                  width: 0,
                  height: 10,
                  padding: [3, 3, 0, -16],
                  shadowColor: '#000',
                  shadowBlur: 1,
                  shadowOffsetX: '0',
                  shadowOffsetY: '2',
                },
                a: {
                  padding: [-35, 15, -20, 5],
                },
              },
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                  width: 1,
                },
              },
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
