<template>
  <div class="container">
    <div id="title">/* 预 报 方 案*/</div>
    <div class="SelectContainer">
      <div id="startPicker">
        <div class="DateTitle">开始日期:</div>
        <div class="DatePicker">
          <el-date-picker
            v-model="startDate"
            size="mini"
            type="date"
            placeholder="开始日期"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </div>
      </div>

      <div id="endPicker">
        <div class="DateTitle">结束日期:</div>
        <div class="DatePicker">
          <el-date-picker
            size="mini"
            v-model="endDate"
            type="date"
            placeholder="结束日期"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </div>
      </div>
      <div id="sliderContainer">
        <div class="DateTitle">预报时长:</div>
        <div id="slider">
          <el-slider v-model="timeValue" range show-stops :max="72" :min="0">
          </el-slider>
        </div>
      </div>

      <div id="checkBoxContainer">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="全部"></el-checkbox>
          <el-checkbox label="滚动预报"></el-checkbox>
          <el-checkbox label="人工预报"></el-checkbox>
        </el-checkbox-group>
      </div>
        <div id="selectButtonContainer">
         
            <el-button @click="selectPlan" >筛  选</el-button>
        </div>
    </div>

    <div class="PlansContainer">
        <div id="plansTitle">
            /* 方 案 列 表*/
        </div>
        <div id="AddPlanButton" @click="AddPlan">
           新增
        </div>
        <div id="planContainer">
            <Plan :name="NewPlanName" v-if="showNewPlan"/>
            <Plan  id=1 name="方案一" v-if="PlanShow[0]"/>
            <Plan id=2 name="方案二"  v-if="PlanShow[1]"/>
            <Plan id=3 name="方案三"  v-if="PlanShow[2]"/>
            <Plan id=4 name="方案四"  v-if="PlanShow[3]"/>
            <Plan id=5 name="方案五"  v-if="PlanShow[4]"/>
            <Plan id=6 name="方案六"  v-if="PlanShow[5]"/>
        </div>
    </div>
  </div>
</template>

<script>

import Plan from "./LeftView/ForecastPlan.vue"
export default {
  name: "ForecastLeftView",
  components: {Plan},
  data() {
    return {
      startDate: "",
      endDate: "",
      timeValue: [0, 48],
      checkList: [],
      PlanShow:[true,true,true,true,true,true],
      showNewPlan:false,
      NewPlanName:''
    };
  },
  methods: {
    selectPlan(){
      for(var i=0;i<this.PlanShow.length;i++){
        if(Math.random()>0.5){
          this.$set(this.PlanShow,i,true);
        }else{
          this.$set(this.PlanShow,i,false);
        }
      }
    },
    AddPlan(){
      this.$bus.$emit("ShowTaskPlane");
    }
  },
  mounted(){
    this.$bus.$on("GetNewPlan",(data)=>{
      this.NewPlanName=data;
      this.showNewPlan=true;
    })
  }
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

.SelectContainer {
  position: absolute;
  left: 0%;
  top: 5%;
  height: 37%;
  width: 100%;
  text-align: center;
  background-color: rgba(47, 178, 204, 0.148);
  color: rgb(13, 219, 219);
  font-size: 20px;
  overflow: hidden;
}

#startPicker {
  position: absolute;
  top: 10px;
  left: 0%;
  width: 100%;
}
.DateTitle {
  position: absolute;
  top: 5px;
  left: 2%;
  font-size: 15px;
}

.DatePicker {
  position: absolute;
  left: 30%;
}
#endPicker {
  position: absolute;
  left: 0%;
  width: 100%;
  top: 60px;
}

#sliderContainer {
  position: absolute;
  top: 100px;
  width: 100%;
}

#slider {
  position: absolute;
  left: 30%;
  width: 55%;
}

#checkBoxContainer {
  position: absolute;
  top: 140px;
  width: 100%;
}

#selectButtonContainer{
  position: absolute;
  top: 180px;
  width: 100%;
  height: 300px;
}
#selectButton{
    position: absolute;
    background-color: rgba(17, 139, 214, 0.388);
    left: 35%;
    width: 30%;

    border: 2px solid rgba(40, 216, 119, 0.307);
    border-radius: 5px;
    color: rgb(222, 231, 231);
    
}

.PlansContainer{
  position: absolute;
  left: 0%;
  top: 43%;
  height: 57%;
  width: 100%;
  text-align: center;
  background-color: rgba(47, 178, 204, 0.148);
  color: rgb(13, 219, 219);
  font-size: 20px;
  overflow: hidden;
}
#plansTitle{
  position: absolute;
  left: 0%;
  top:0%;
  width: 80%;
  height: 8%;
  font-weight: bold;
  font-size: 18px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.148);
}
#AddPlanButton{
  position: absolute;
  left: 80%;
  top:0%;
  width: 20%;
  height: 8%;
  font-weight: bold;
  font-size: 18px;
  color: #22ec18;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.148);
}

#planContainer{
position: absolute;
  left: 0%;
  top:8%;
  width: 100%;
  height: 92%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.148);
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
  
/deep/ .el-input__inner,
/deep/ .el-range-input {
  background-color: transparent !important;
  color: #e9e515;
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

  /deep/ .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate 
  .el-checkbox__inner{
      background-color:rgb(72, 236, 26);
      border-color:rgb(72, 236, 26);
     }
  /deep/.el-checkbox__input.is-checked + .el-checkbox__label {
      color: rgb(72, 236, 26);
     }
    /deep/.el-checkbox__input + .el-checkbox__label {
      color: rgba(239, 237, 237, 0.816);
     }
  .el-checkbox.is-bordered.is-checked{
      border-color: gray;
     }
  .el-checkbox__input.is-focus .el-checkbox__inner{
      border-color:  gray;
     }
</style>