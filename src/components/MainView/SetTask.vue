<template>
  <div id="TaskPlane">
    <div id="title">预 报 方 案</div>
    <div id="CancelButton" @click="cancelPlane"> X </div>
    <div id="PlanName">
      <div id="nameTitle">方案名称</div>
      <div id="nameInput">
        <el-input
          v-model="planName"
          placeholder="方案名称"
          size="mini"
        ></el-input>
      </div>
    </div>

    <div id="PlanTime">
      <div id="nameTitle">预报时间</div>
      <div id="time">
        <el-date-picker
          v-model="time"
          type="datetime"
          placeholder="选择日期时间"
          size="mini"
        >
        </el-date-picker>
      </div>
    </div>

    <div id="sliderContainer">
      <div id="nameTitle">预报时长:</div>
      <div id="slider">
        <el-slider v-model="timeValue" show-stops :max="72" :min="0">
        </el-slider>
      </div>
    </div>

    <div id="checkBoxContainer">
      <div id="nameTitle">降 雨:</div>
      <div id="checkBoxs">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="气象预报"></el-checkbox>
          <el-checkbox label="历史模拟"></el-checkbox>
          <el-checkbox label="设计暴雨"></el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <div id="selectButtonContainer">
      <el-button @click="setTask">运 行</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskPlane",
  data() {
    return {
      planName: "",
      time: new Date(),
      timeValue: 24,
      checkList: [],
    };
  },
  methods: {
    cancelPlane(){
        this.$bus.$emit("CancelTaskPlane")
    },
    setTask(){
        this.$bus.$emit("GetNewPlan",this.planName);
    }
  },
};
</script>

<style scoped>
#TaskPlane {
  background-color: rgba(4, 41, 72, 0.438);
  position: absolute;
  left: 0%;
  top: 0%;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
#CancelButton{
  background-color:rgba(220, 81, 38, 0.415);
  position: absolute;
  left: 92%;
  top: 0%;
  height: 8%;
  width: 8%;
  font-size: 25px;
  color: rgb(215, 230, 13);
  font-weight: bold;
  text-align: center;
}
#title {
  background-color: rgba(73, 156, 191, 0.415);
  position: absolute;
  left: 0%;
  top: 0%;
  height: 8%;
  width: 100%;
  font-size: 20px;
  color: rgb(215, 230, 13);
  text-align: center;
  font-weight: bold;
}

#PlanTime {
  position: absolute;
  left: 0%;
  top: 10%;
  height: 10%;
  width: 100%;
}

#time {
  position: absolute;
  left: 20%;
  top: 10%;
  height: 10%;
  width: 80%;
}
#PlanName {
  position: absolute;
  left: 0%;
  top: 22%;
  height: 10%;
  width: 100%;
}
#nameTitle {
  position: absolute;
  left: 3%;
  top: 10%;
  height: 100%;
  width: 30%;
  font-size: 15px;
  color: rgb(13, 219, 219);
  font-weight: bold;
}

#nameInput {
  position: absolute;
  left: 20%;
  top: 0%;
  height: 100%;
  width: 70%;
}

#sliderContainer {
  position: absolute;
  left: 0%;
  top: 34%;
  height: 10%;
  width: 100%;
}
#slider {
  position: absolute;
  left: 20%;
  top: 0%;

  width: 70%;
}

#checkBoxContainer {
  position: absolute;
  left: 0%;
  top: 46%;
  height: 10%;
  width: 100%;
}
#checkBoxs {
  position: absolute;
  left: 20%;
  top: 18%;
  height: 100%;
  width: 100%;
}

#selectButtonContainer {
  position: absolute;
  left: 40%;
  top: 76%;
  height: 10%;
  width: 100%;
}
/deep/ .el-input__inner {
  background-color: #207ecb7c;
  text-align: center;
  border-color: #16429a7d;
  color: #d3d023c2;
  font-weight: bold;
  width: 100%;
}
/deep/ .el-range-input {
  background-color: transparent !important;
  color: #e9e515;
  font-size: 18px;
  font-weight: bold;
  width: 150px;
}
/* /deep/ .el-input__inner,
/deep/ .el-range-input {
  background-color: transparent !important;
  color: #e9e515;
  font-size: 15px;
  width: 150px;
} */
/deep/ .el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: rgb(72, 236, 26);
  border-color: rgb(72, 236, 26);
}
/deep/.el-checkbox__input.is-checked + .el-checkbox__label {
  color: rgb(72, 236, 26);
}
/deep/.el-checkbox__input + .el-checkbox__label {
  color: rgba(239, 237, 237, 0.816);
}
.el-checkbox.is-bordered.is-checked {
  border-color: gray;
}
.el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: gray;
}

/deep/ .el-button {
  background-color: rgba(56, 152, 204, 0.566);
  font-weight: bold;
  color: rgba(248, 251, 248, 0.811);
}
/deep/ .el-button:focus {
  background-color: rgba(56, 152, 204, 0.566);
  font-weight: bold;
  color: rgba(248, 251, 248, 0.811);
}

/deep/ .el-button:hover {
  background-color: rgba(14, 159, 237, 0.566);
  font-weight: bold;
  color: rgb(13, 219, 219);
}
</style>