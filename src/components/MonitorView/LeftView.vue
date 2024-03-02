<template>
  <div class="container">
    <div class="RainPlane">
      <RainChart/>
    </div>

    <div class="LevelPlane">
      <LevelChart v-if="LevelShow"/>
      <LevelTable v-if="!LevelShow"/>
      <div class="Transformer" @click="TransLevel">
      </div>
    </div>

    <div class="TidePlane">
      <TideChart v-if="TideShow"/>
      <TideTable v-if="!TideShow"/>
      <div class="Transformer" @click="TransTide">
      </div>
    </div>
  </div>
</template>

<script>
import RainChart from "./LeftView/RainChart.vue"
import LevelTable from "./LeftView/LevelTable.vue"
import LevelChart from "./LeftView/LevelChart.vue"
import TideChart from "./LeftView/TideChart.vue"
import TideTable from "./LeftView/TideTable.vue"
export default {
  name:"MonitorLeftView",
  components:{RainChart,LevelChart,TideChart,LevelTable,TideTable},
  data() {
    return {
      LevelShow:true,
      TideShow:true
    }
  },
  methods: {
    TransLevel(){
      this.LevelShow=!this.LevelShow;
    },
    TransTide(){
      this.TideShow=!this.TideShow;
    }
  },
}
</script>

<style scoped>
.container{
    background-color: rgba(5, 49, 88, 0.295);
    position: absolute;
    left: 0%;
    top: 0%;
    height: 100%;
    width: 100% ;
    overflow: hidden; 
}

.RainPlane{
   position: absolute;
    left: 0%;
    top: 0%;
    height: 33%;
    width: 100% ;
    overflow: hidden
}
.LevelPlane{
   position: absolute;
    left: 0%;
    top: 33.5%;
    height: 33%;
    width: 100% ;
    overflow: hidden;
}

.TidePlane{
   position: absolute;
    left: 0%;
    top: 67%;
    height: 33%;
    width: 100% ;
    overflow: hidden;
}
.Transformer{
    background-image: url("../../assets/img/转换.png");
    background-size: 20px;
    position: absolute;
    left: 90%;
    top: 3%;
    height: 20px;
    width: 20px;
    overflow: hidden;
}
</style>