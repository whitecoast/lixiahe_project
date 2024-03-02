<template>
  <div class="TookContainer">
  <div id="ChangeBgMap" @click="clikcMap">
    地图 
  </div>
    <div id="Sence">
    场景
  </div>
  <div id="GetTool">
    工具
  </div>
  </div>
</template>

<script>
export default {
    name:"ToolKit",
    data() {
      return {
        showMapPlane:false
      }
    },
    methods: {
      clikcMap(){
        if(this.showMapPlane){
          this.$bus.$emit("ShowMapPlane")
        }else{
          this.$bus.$emit("CancelMapPlane")
        }
        this.showMapPlane=!this.showMapPlane;
      }
    },
}
</script>

<style socped>
.TookContainer {
  background-color: rgba(4, 41, 72, 0.438);
  position: absolute;
  height: 20px;
  width: 120px;
  border: 1px solid rgb(59, 211, 208);
  border-radius: 10px;
  overflow: hidden;
}
#ChangeBgMap{
  position: absolute;
  left: 0%;
  top: 0%;
  color:rgb(59, 211, 208) ;
  height: 20px;
  width:40px;
  border-right: 1px solid rgb(59, 211, 208) ;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
}
#Sence{
  position: absolute;
  left:40px;
  top: 0%;
  color:rgb(59, 211, 208) ;
  height: 20px;
  width:40px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
   border-right: 1px solid rgb(59, 211, 208) ;
}
#GetTool{
  position: absolute;
  left:80px;
  top: 0%;
  color:rgb(59, 211, 208) ;
  height: 20px;
  width:40px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  border-right: 1px solid rgb(59, 211, 208) ;
}

</style>