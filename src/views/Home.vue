<template>
  <div class="home">
    <div class="header">
      <h1>管理系统的用户行为数据可视化</h1>
      <div class="showtime">当前时间为：{{ timedata }}</div>
    </div>
    <div class="main">
      <div>
        <div class="panel">
          <firstEcharts></firstEcharts>
          <div class="panel-footer"></div>
        </div>
        <div class="panel">
          <secondEcharts></secondEcharts>
          <div class="panel-footer"></div>
        </div>
        <div class="panel">
          <thirdEcharts></thirdEcharts>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div>
        <div class="left">
          <left></left>
          <right></right>
        </div>
        <div class="map">
          <Map></Map>
        </div>
      </div>
      <div>
        <div class="panel">
          <fourEcharts></fourEcharts>
          <div class="panel-footer"></div>
        </div>
        <div class="panel">
          <fiveEcharts></fiveEcharts>
          <div class="panel-footer"></div>
        </div>
        <div class="panel">
          <sixEcharts></sixEcharts>
          <div class="panel-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firstEcharts from '../components/firstEcharts.vue'
import secondEcharts from '../components/secondEcharts.vue'
import left from '../components/left.vue'
import right from '../components/right.vue'
import Map from '../components/map.vue'
import thirdEcharts from '../components/thirdEcharts'
import fourEcharts from '../components/fourEcharts'
import fiveEcharts from '../components/fiveEcharts'
import sixEcharts from '../components/sixEcharts'
export default {
  components: {
    Map,
    firstEcharts,
    secondEcharts,
    thirdEcharts,
    fourEcharts,
    fiveEcharts,
    sixEcharts,
    left,
    right,
  },
  data() {
    return {
      timedata: '',
    }
  },
  created() {
    setInterval(this.time, 1000)
  },
  methods: {
    time() {
      clearInterval()
      const dt = new Date()
      const y = dt.getFullYear()
      const mt = dt.getMonth() + 1
      const day = dt.getDate()
      const h = dt.getHours()
      const m = dt.getMinutes()
      const s = dt.getSeconds()
      this.timedata = `${y}年${mt}月${day}日-${h}时${m}分${s}秒`
      // console.log(this.timedata)
    },
  },
}
</script>
<style lang="less" scoped>
h1 {
  // line-height: 5.7143rem;
  text-align: center;
  color: #e1e3e6;
  font-size: 2.7143rem;
}
.showtime {
  top: 0;
  line-height: 5.7143rem;
  position: absolute;
  right: 2.1429rem;
  font-size: 1.1429rem;
  color: #79d2d2;
}
.header {
  height: 7.1429rem;
  background: url(../assets/logo.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.home {
  display: flex;
  flex-direction: column;
}
.main {
  padding: 0.7143rem 0.7143rem 0;
  display: flex;
  color: #fff;
  div {
    flex: 3;
  }
  div:nth-child(2) {
    flex: 5;
    .left {
      display: flex;
      padding: 0 1.0714rem;
      justify-content: space-between;
      div {
        flex: 2.5;
      }
    }
  }
}
.map {
  margin-top: 0.5714rem;
  height: 58.8571rem;
  // background: #79d2d2;
}
</style>
