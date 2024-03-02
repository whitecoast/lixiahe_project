<template>
  <div id="app">
    <div class="BgMap">
      <BgMap v-if="!showUnity" />
      <UnityMap v-if="showUnity" />
    </div>

    <div class="HeadView">
      <HeadView />
    </div>

    <div class="LeftView">
      <MonitorLeftView v-if="mood[0]" />
      <ForecastLeftView v-if="mood[1]" />
      <ProlusionLeftView v-if="mood[2]" />
    </div>
    <!-- <div class="DataPlane">
      <DataPlane/>
    </div> -->
    <div class="RightView">
      <MonitorRightView v-if="mood[0]" />
      <ForecastRightView v-if="mood[1]" />
      <ProlusionRightView v-if="mood[2]" />
    </div>

    <div class="TaskDataPlane" v-if="showTaskPlane">
      <TaskPlane />
    </div>
    <div class="Tools">
      <ToolKit />
    </div>

    <div class="MapMod">
      <ChangMapPlane v-if="showMapPlane" />
    </div>

    <div class="TimeselectContainer">
      <TimeSelecter v-if="showTimeSelecter" />
    </div>
  </div>
</template>

<script>

import BgMap from "./components/MainView/GisMap.vue"
import UnityMap from "./components/MainView/UnityMap.vue"

import HeadView from "./components/HeadView.vue"
import MonitorLeftView from "./components/MonitorView/LeftView.vue"
import MonitorRightView from "./components/MonitorView/RightView.vue"

import ForecastLeftView from "./components/ForecastView/LeftView.vue"
import ForecastRightView from "./components/ForecastView/RgihtView.vue"

import ProlusionLeftView from './components/ProlusionView/LeftView.vue'
import ProlusionRightView from './components/ProlusionView/RgihtView.vue'

import  TaskPlane from "./components/MainView/SetTask.vue"

import ToolKit from './components/MainView/ToolKit.vue'

import ChangMapPlane from './components/MainView/ChangMapPlane.vue'

import TimeSelecter from './components/MainView/TimeSelecter.vue'

export default {
  name: "App",
  components: {
    BgMap,HeadView,MonitorLeftView,MonitorRightView,
    ForecastLeftView,ForecastRightView,TaskPlane,ProlusionLeftView,ProlusionRightView,UnityMap,ToolKit,ChangMapPlane,
    TimeSelecter
  },
  data() {
    return {
      mood:[true,false,false,false],
      showTaskPlane:false,
      showUnity:false,
      showMapPlane:false,
      showTimeSelecter:false,
    }
  },
  methods: {
    changeToUnity(){
      this.showUnity=!this.showUnity;
    }
  },
  mounted(){
    this.$bus.$on("SystemMood",(data)=>{
      for(var i=0;i<this.mood.length;i++){
        this.$set(this.mood,i,false);
      }
      if(data==2){
        this.showTimeSelecter=true;
      }else{
        this.showTimeSelecter=false;
      }
      this.$set(this.mood,data,true);
    })

    this.$bus.$on("CancelTaskPlane",()=>{
      this.showTaskPlane=false;
    })

    this.$bus.$on("ShowTaskPlane",()=>{
      this.showTaskPlane=true;
    })

        this.$bus.$on("ShowMapPlane",()=>{
      this.showMapPlane=true;
    })
        this.$bus.$on("CancelMapPlane",()=>{
      this.showMapPlane=false;
    })

    this.$bus.$on("FourthMap",()=>{
      this.changeToUnity();
    })
  }
  
};
</script>

<style>
body {
  overflow: hidden;
  box-sizing: border-box;
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  overflow: hidden;
}

.BgMap {
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
}

.HeadView {
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100vw;
  height: 10vh;
  overflow: hidden;
  z-index: 1;
}

.LeftView {
  position: absolute;
  left: 1%;
  top: 12%;
  width: 20vw;
  height: 85vh;
  overflow: hidden;
  z-index: 1;
}
.RightView {
  position: absolute;
  left: 79%;
  top: 12%;
  width: 20vw;
  height: 85vh;
  overflow: hidden;
  z-index: 1;
}
.DataPlane {
  position: absolute;
  left: 68%;
  top: 20%;
  width: 30vw;
  height: 60vh;
  overflow: hidden;
  background-color: transparent;
  z-index: 1;
}
.TaskDataPlane {
  position: absolute;
  left: 35%;
  top: 20%;
  width: 30vw;
  height: 60vh;
  overflow: hidden;
  background-color: transparent;
  z-index: 1;
}

.clickShow {
  background-image: url("http://localhost:8080/Unity.png");
  background-size: cover;
  position: absolute;
  left: 45%;
  top: 90%;
  height: 50px;
  width: 100px;
  overflow: hidden;
}

.TaskDataPlane {
  position: absolute;
  left: 35%;
  top: 20%;
  width: 30vw;
  height: 60vh;
  overflow: hidden;
  background-color: transparent;
  z-index: 1;
}

.Tools {
  position: absolute;
  left: 68%;
  top: 15%;
}

.MapMod {
  position: absolute;
  left: 60%;
  top: 18%;
}
.TimeselectContainer{
  position: absolute;
  left: 25%;
  top:90%;
  width: 50%;
  height: 7%;
}
</style>
