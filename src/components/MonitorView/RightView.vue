<template>
  <div class="RightContainer">
    <div class="GatePlane">
      <GateChart v-if="GateShow"/>
      <GateTable v-if="!GateShow"/>
      <div class="Transformer" @click="TransGate">
      </div>
    </div>

    <div class="PumpPlane">
      <PumpChart/>
    </div>

    <div class="PolderPlane">
      <PolderChart/>
    </div>
  </div>
</template>

<script>
import GateChart from "./RightView/GateChart.vue"
import PumpChart from "./RightView/PumpChart.vue"
import PolderChart from "./RightView/PolderChart.vue"
import GateTable from './RightView/GateTable.vue'
export default {
  name:"MonitorRightView",
  components:{GateChart,PolderChart,PumpChart,GateTable},
  data() {
    return {
      GateShow:true,
    }
  },
  methods: {
    TransGate(){
      this.GateShow=!this.GateShow;
    }
  },
}
</script>

<style scoped>
.RightContainer{
    background-color: rgba(5, 49, 88, 0.295);
    position: absolute;
    left: 0%;
    top: 0%;
    height: 100%;
    width: 100% ;
    overflow: hidden; 
}

.GatePlane{
   position: absolute;
    left: 0%;
    top: 0%;
    height: 33%;
    width: 100% ;
    overflow: hidden
}
.PumpPlane{
   position: absolute;
    left: 0%;
    top: 33.5%;
    height: 33%;
    width: 100% ;
    overflow: hidden;
}

.PolderPlane{
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