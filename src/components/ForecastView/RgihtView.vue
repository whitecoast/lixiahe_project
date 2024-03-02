<template>
  <div class="container">
    <div id="title">/* 预 测 结 果*/</div>
    <div id="FirstGroupButton">
      <el-row>
        <el-button size="small" @click="FirstButtonGroupClick(0)" autofocus="true"
          >降 雨</el-button
        >
        <el-button size="small" @click="FirstButtonGroupClick(1)"
          >水 位</el-button
        >
        <el-button size="small" @click="FirstButtonGroupClick(2)"
          >潮 位</el-button
        >
      </el-row>
    </div>
    <div id="FirstChart">
      <RainChart v-if="FirstChartsShow[0]" />
      <LevelChart v-if="FirstChartsShow[1]" />
      <TideChart v-if="FirstChartsShow[2]" />
    </div>

    <div id="SecondGroupButton">
      <el-row>
        <el-button size="small" autofocus="true" @click="SecondButtonGroupClick(0)">闸流量</el-button>
        <el-button size="small" @click="SecondButtonGroupClick(1)">外围泵</el-button>
        <el-button size="small" @click="SecondButtonGroupClick(2)">滞涝圩</el-button>
      </el-row>
    </div>

    <div id="SecondChart">
      <GateChart v-if="SecondChartsShow[0]" />
      <PumpChart v-if="SecondChartsShow[1]" />
      <PolderChart v-if="SecondChartsShow[2]" />
    </div>
  </div>
</template>

<script>
import RainChart from "../MonitorView/LeftView/RainChart.vue";
import LevelChart from "../MonitorView/LeftView/LevelChart.vue";
import TideChart from "../MonitorView/LeftView/TideChart.vue";
import GateChart from "../MonitorView/RightView/GateChart.vue";
import PumpChart from "../MonitorView/RightView/PumpChart.vue";
import PolderChart from "../MonitorView/RightView/PolderChart.vue";
export default {
  name: "ForecastRightView",
  components: {
    RainChart,
    LevelChart,
    TideChart,
    GateChart,
    PumpChart,
    PolderChart,
  },
  data() {
    return {
      FirstChartsShow: [true, false, false],
      SecondChartsShow: [true, false, false],
    };
  },
  methods: {
    FirstButtonGroupClick(index) {
      for (var i = 0; i < this.FirstChartsShow.length; i++) {
        this.$set(this.FirstChartsShow, i, false);
      }

      this.$set(this.FirstChartsShow, index, true);
    },
    SecondButtonGroupClick(index) {
      for (var i = 0; i < this.SecondChartsShow.length; i++) {
        this.$set(this.SecondChartsShow, i, false);
      }

      this.$set(this.SecondChartsShow, index, true);
    },
  },
  watch: {
    FirstChartsShow: {
      deep: true,
    },
  },
  mounted: {},
};
</script>

<style scoped>
.container {
  background-color: rgba(5, 49, 88, 0.295);
  position: absolute;
  left: 0%;
  top: 0%;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

#title {
  position: absolute;
  left: 0%;
  top: 0%;
  height: 5%;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.148);
  color: rgb(13, 219, 219);
  font-weight: bold;
  font-size: 18px;
  overflow: hidden;
}
#FirstGroupButton {
  position: absolute;
  left: 10%;
  top: 7%;
  height: 9%;
  width: 100%;
}
#SecondGroupButton {
  position: absolute;
  left: 5%;
  top: 54%;
  height: 9%;
  width: 100%;
}
#FirstChart {
  position: absolute;
  left: 0%;
  top: 18%;
  height: 33%;
  width: 100%;
}

#SecondChart {
  position: absolute;
  left: 0%;
  top: 64%;
  height: 33%;
  width: 100%;
}
/deep/ .el-button {
  background-color: rgba(179, 202, 214, 0.566);
  font-weight: bold;
  font-size: 15px;
  color: rgba(248, 251, 248, 0.811);
}
/deep/ .el-button:focus {
  background-color: rgba(56, 152, 204, 0.566);
  font-weight: bold;
  color: rgba(13, 216, 13, 0.811);
}

/deep/ .el-button:hover {
  background-color: rgba(14, 159, 237, 0.566);
  font-weight: bold;
  color: rgb(13, 219, 219);
}
</style>