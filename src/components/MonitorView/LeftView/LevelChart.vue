<template>
  <div class="container">
    <div id="Level"></div>
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

var xinhuaLevel = require("../../../../public/Data/兴化实测水位.json");
var sheyangLevel = require("../../../../public/Data/射阳镇实测水位.json");
var jianhuLevel = require("../../../../public/Data/建湖实测水位.json");
var funingLevel = require("../../../../public/Data/阜宁实测水位.json");
var yanchengLevel = require("../../../../public/Data/盐城实测水位.json");
export default {
  name: "LevelChart",
  data() {
    return {
      levelChart: 0,
      date: [1, 2, 3, 4, 5, 6],
      leveldata: [20, 20, 36, 10, 10, 20],
      options: [
        {
          value: 1,
          label: "兴化",
        },
        {
          value: 2,
          label: "射阳镇",
        },
        {
          value: 3,
          label: "建湖",
        },
        {
          value: 4,
          label: "阜宁",
        },
        {
          value: 5,
          label: "盐城",
        },
      ],
      value: 1,
      station:[xinhuaLevel,sheyangLevel,jianhuLevel,yanchengLevel,funingLevel],
      serie: [],
    };
  },
  methods: {
    LevelChart() {
      var myChart = echarts.init(document.getElementById("Level"));
      this.levelChart = myChart;
      // 绘制图表
      myChart.setOption({
        title: {
          text: "水位",
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
            name: "水位",
            type: "line",
            data: this.leveldata,
            itemStyle: {
              normal: {
                // color: "#a80000", //改变折线点的颜色
                lineStyle: {
                  color: " rgba(85, 212, 17, 0.644)", //改变折线颜色
                },
              },
            },
            markLine: {
              //图表标线
              symbol: ["none", "none"],
              data: [
                {
                  name: "警戒线",
                  silent: false,
                  yAxis: 20,
                  lineStyle: { type: "solid", color: "red", width: 1 },
                },
              ],
            },
          },
        ],
      });
    },
    changeData(m) {
      let linename = "警戒水位";
      let levelLine = 0.5;
      let linecolor = "blue";
      var t=8000;
      console.log(m);
      for (let i = 0; i < 6; i++) {
        this.leveldata[i] = this.station[this.value-1]["feature"][t+i];
        console.log( this.leveldata[i]);
        if (this.leveldata[i]  > 0.5) {
          levelLine = 0.8;
          linename = "排涝水位";
          linecolor = "yellow";
        }
        if (this.leveldata[i]  > 0.8) {
          levelLine = 1.0;
          linename = "防洪水位";
          linecolor = "red";
        }
      }
      this.levelChart.setOption({
        series: [
          {
            name: "水位",
            data: this.leveldata,
            markLine: {
              //图表标线
              symbol: ["none", "none"],
              data: [
                {
                  name: linename,
                  silent: false,
                  yAxis: levelLine,
                  lineStyle: { type: "solid", color: linecolor, width: 1 },
                },
              ],
            },
          },
        ],
      });
    },
    AddData(n) {
      let data1 = [];
      for (let i = 0; i < 6; i++) {
        const randomNumber = (Math.random() * (0.5) + 0.8).toFixed(2);
        data1.push(randomNumber);
      }

      this.serie.push({
        id: n,
        name: "水位" + n,
        type: "line",
        data: data1,
        itemStyle: {
          normal: {
            // color: "#a80000", //改变折线点的颜色
            lineStyle: {
              color:
                " rgba(" +
                (Math.random() * 250).toFixed(2) +
                "," +
                (Math.random() * 250).toFixed(2) +
                ", 17, 0.644)", //改变折线颜色
            },
          },
        },
      });
      this.levelChart.setOption(
        {
          series: this.serie,
        },
        { replaceMerge: ["series"] }
      );

      this.levelChart.setOption({
        series: [
          {
            markLine: {
              //图表标线
              symbol: ["none", "none"],
              data: [
                {
                  name: "警戒线",
                  silent: false,
                  yAxis: 20,
                  lineStyle: { type: "solid", color: "red", width: 1 },
                },
              ],
            },
          },
        ],
      });
    },
    EraseData(n) {
      for (let i = 0; i < this.serie.length; i++) {
        if (this.serie[i].id == n) {
          this.serie.splice(i, 1);
        }
      }

      this.levelChart.setOption(
        {
          series: this.serie,
        },
        { replaceMerge: ["series"] }
      );

      // this.levelChart.setOption({
      //   series:[{
      //      markLine: {
      //         //图表标线
      //         symbol: ["none", "none"],
      //         data: [
      //           {
      //             name: "警戒线",
      //             silent: false,
      //             yAxis: 20,
      //             lineStyle: { type: "solid", color: "red", width: 1 },
      //           },
      //         ],
      //       }
      //   }]
      // })
    },
    changeDate(h) {
      var now = new Date();
      for (let i = 0; i < 6; i++) {
        this.date[i] = now.getHours() - 5 + i + h+ ":00";
      }
      this.levelChart.setOption({
        xAxis: {
          data: this.date,
        },
      });
    },
  },
  mounted() {
    this.LevelChart();
    this.changeData(0);
    this.changeDate(0);
    this.$bus.$on("ChangeDate", () => {
      this.changeDate(5);
    });
    this.$bus.$on("ChangeData", () => {
      this.changeData(1);
    });
    this.$bus.$on("AddData", (data) => {
      this.AddData(data);
    });
    this.$bus.$on("EraseData", (data) => {
      this.EraseData(data);
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

#Level {
  background-color: rgba(13, 68, 116, 0.224);
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
}

.selector {
  position: absolute;
  top: -2%;
  left: 12%;
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