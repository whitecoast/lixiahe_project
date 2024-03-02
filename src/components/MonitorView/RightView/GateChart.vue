<template>
  <div class="container">
    <div id="Gate"></div>
    <div class="selector">
      <el-select
        size="small"
        style="width: 100px"
        :popper-append-to-body="false"
        v-model="value"
        @change="changeData"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";


var huangshaGate = require("../../../../public/Data/黄沙港闸实测.json");
var sheyangGate = require("../../../../public/Data/射阳河闸实测.json");
var xingyangGate = require("../../../../public/Data/新洋港闸实测.json");
var doulongGate = require("../../../../public/Data/斗龙港闸实测.json");
var chuandongGate = require("../../../../public/Data/川东港闸实测.json");

export default {
  name: "GateChart",
  data() {
    return {
      gateChart: 0,
      date: [1, 2, 3, 4, 5, 6],
      station:[huangshaGate,sheyangGate,xingyangGate,doulongGate,chuandongGate],
      Gatedata: [20, 20, 36, 10, 10, 20],
      options: [
        {
          value: 1,
          label: "黄沙港",
        },
        {
          value: 2,
          label: "射阳河",
        },
        {
          value: 3,
          label: "新洋港",
        },
        {
          value: 4,
          label: "斗龙港",
        },
        {
          value: 5,
          label: "川东港",
        },
      ],
      value: 1,
    };
  },
  methods: {
    GateChart() {
      var myChart = echarts.init(document.getElementById("Gate"));
      this.gateChart = myChart;
      // 绘制图表
      myChart.setOption({
        title: {
          text: "闸流量",
          textStyle: { color: "rgb(13, 219, 219)", fontSize: 15 },
        },
        tooltip: {},
        grid: {
          x: 0,
          y: 30,
          x2: 20,
          y2: 20,
          borderWidth: 0.5,
        },

        xAxis: {
          data: [1, 2, 3, 4, 5, 6],
          axisLine: {
            lineStyle: {
              color: "rgba(213, 219, 20, 0.715)",
            },
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            //修改背景线条样式
            show: true, //是否展示
            lineStyle: {
              color: "#353b5a", //线条颜色
              type: "dashed", //线条样式，默认是实现，dashed是虚线
            },
          },
        },
        series: [
          {
            name: "闸流量",
            type: "line",
            data: this.Gatedata,
            itemStyle: {
              normal: {
                // color: "#a80000", //改变折线点的颜色
                lineStyle: {
                  color: " rgba(85, 212, 17, 0.644)", //改变折线颜色
                },
              },
            }
          },
          {
            name: "开启度",
            type: "line",
            data: this.openData,
            itemStyle: {
              normal: {
                // color: "#a80000", //改变折线点的颜色
                lineStyle: {
                  color: " rgba(85, 212, 17, 0.644)", //改变折线颜色
                },
              },
            },
          },
        ],
      });
    },
    changeData(m) {

      var t=8000;
 console.log(m);
      for (let i = 0; i < 6; i++) {
        const GateNumber = this.station[this.value-1]["feature"][t+i];
        this.Gatedata[i] = GateNumber;
        
      }
      this.gateChart.setOption({
        series: [
          {
            name: "闸流量",
            data: this.Gatedata,
          }
        ],
      });
    },
    changeDate(h) {
      var now = new Date();
      for (let i = 0; i < 6; i++) {
        this.date[i] = now.getHours() - 5 + i + h + ":00";
      }
      this.gateChart.setOption({
        xAxis: {
          data: this.date,
        },
      });
    },
   
  },
  mounted() {
    this.GateChart();
    this.changeData(0);
    this.changeDate(0);
    this.$bus.$on("ChangeDate", (data) => {
      this.changeDate(data);
    });
    this.$bus.$on("ChangeData", () => {
      this.changeData(1);
    });
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
}

#Gate {
  background-color: rgba(13, 68, 116, 0.224);
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
}

.selector {
  position: absolute;
  top: -2%;
  left: 14%;
  width: 10%;
  height: 10%;
}
/deep/ input::-webkit-input-placeholder {
  color: rgb(13, 219, 219);
}
/deep/ input::-moz-input-placeholder {
  color: rgb(13, 219, 219);
}
/deep/ input::-ms-input-placeholder {
  color: rgb(13, 219, 219);
}

/deep/ .el-select,
/deep/ .el-input,
/deep/ .el-input__inner {
  background-color: rgba(255, 255, 255, 0);
  color: rgb(13, 219, 219);
  border: none;
  text-align: left;
  border-radius: 4px;
}

/deep/ .el-input__inner:focus {
  border-color: #XXXXXX;
}

/deep/ .el-input__inner:hover {
  background-color: rgba(255, 255, 255, 0);
}

/deep/ .el-select .el-input .el-select__caret {
  color: rgba(255, 255, 255, 0);
}

/deep/ .el-popper[x-placement^="bottom"] .popper__arrow::after {
  border-bottom-color: transparent;
  z-index: 9999;
}
/deep/ .popper__arrow {
  border: none;
}

/deep/ .el-select-dropdown {
  border: none !important;
  background: rgba(43, 45, 55, 0.3) !important;
  z-index: 9999;
}

/deep/ .el-select-dropdown__item {
  color: rgba(255, 255, 255, 0.5) !important;
  z-index: 9999;
}
/deep/ .el-select-dropdown__item.selected span {
  color: rgba(255, 255, 255, 0.8) !important;
  z-index: 9999;
}

/deep/ .el-select-dropdown__item.hover {
  background-color: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.8) !important;
  z-index: 9999;
}

/deep/ .el-scrollbar__bar.is-vertical {
  width: 10px;
  top: 2px;
}
/deep/ .el-select-dropdown__wrap {
  max-height: 200px;
}
</style>