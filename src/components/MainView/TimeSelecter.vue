<template>
  <div id="Container">
    <div id="SelectContainer">
      <el-select
        size="small"
        style="width: 100px"
        v-model="Planevalue"
        @change="changePlane"
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
    <div id="TimeLineContianer">
      <el-slider v-model="timeValue" :max="72" @change="changeTimeValue">
      </el-slider>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeSelecter",
  data() {
    return {
      options: [
      ],
      Planevalue:'无数据' ,
      timeValue: 20,
    };
  },
  methods: {
    changeTimeValue() {
      this.$bus.$emit("changeMarker");
    },
    changePlane() {
      this.$bus.$emit("changeMarker");
    },
  },
  mounted() {
    this.$bus.$on("AddSelectPlane", (id, name) => {
      this.options.push({ value: id, label: name });
    });
    this.$bus.$on("EraseSelectPlane", (id) => {
      this.options=this.options.filter(item=>item.value!=id);
    });
  },
};
</script>

<style scoped>
#Container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: rgba(5, 49, 88, 0.295);
}

#SelectContainer {
  position: absolute;
  left: 11%;
  top: 20%;
  height: 100%;
  width: 100px;
}
#TimeLineContianer {
  position: absolute;
  left: 20%;
  top: 20%;
  height: 100%;
  width: 70%;
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
  color: rgba(255, 255, 255, 0.152) !important;
  z-index: 9999;
}
/deep/ .el-select-dropdown__item.selected span {
  color: rgba(19, 12, 12, 0.8) !important;
  z-index: 9999;
}

/deep/ .el-select-dropdown__item.hover {
  background-color: rgba(255, 255, 255, 0.06);
  color: rgba(72, 69, 69, 0.8) !important;
  z-index: 9999;
}
el-select-dropdown el-popper /deep/ .el-scrollbar__bar.is-vertical {
  width: 10px;
  top: 2px;
}
/deep/ .el-select-dropdown__wrap {
  max-height: 200px;
}
/deep/ .el-button {
  background-color: rgba(56, 152, 204, 0.566);
  font-weight: bold;
  color: rgba(21, 24, 21, 0.811);
}
/deep/ .el-button:focus {
  background-color: rgba(56, 152, 204, 0.566);
  font-weight: bold;
  color: rgba(13, 14, 13, 0.811);
}

/deep/ .el-button:hover {
  background-color: rgba(14, 159, 237, 0.566);
  font-weight: bold;
  color: rgb(13, 219, 219);
}

/deep/ .el-input__inner,
/deep/ .el-range-input {
  background-color: transparent !important;
  color: rgb(13, 219, 219);
  font-size: 15px;
  width: 150px;
}

/deep/ .el-slider__button {
  border: 1px solid rgba(150, 221, 105, 1);
  width: 10px;
  height: 10px;
  background: rgba(150, 221, 105, 1);
}

/deep/ .el-slider {
  box-sizing: border-box;
  width: 100%;
  height: 5px;
}

/deep/ .el-slider__runway {
  background-color: #d6e0e771;
}
/deep/ .el-slider__bar {
  background: rgba(68, 158, 227, 0.6);
}
/deep/ .el-slider__stop {
  visibility: hidden;
}
</style>