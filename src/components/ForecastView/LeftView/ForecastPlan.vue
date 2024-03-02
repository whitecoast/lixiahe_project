<template>
  <div id='plan'>
    <div class="id">
            {{id}} 
    </div>
    <div id="name" :class="activeclass" >
        {{name}}
    </div>
  
    <div id="checkbox"  >
        <el-checkbox v-model="boxValue"></el-checkbox>
    </div>
  </div>
</template>

<script>
export default {
    name:'ForecastPlane',
    data() {
        return {
            activeclass:'nomalPlan',
            boxValue:false,
        }
    },
    props:["id",'name'],
    methods: {

    },
    watch:{
        boxValue(newvalue){

            if(newvalue){
                 this.activeclass='activePlan';
                 this.$bus.$emit('ChangeData');
                 this.$bus.$emit('changeMarker');
                 this.$bus.$emit('ChangeDate',5);
            }else{
                this.activeclass='nomalPlan';
            }   
           
        }
    }
}
</script>

<style>
 #plan{
    width: 100%;
    height: 30px;
    background-color: rgba(54, 118, 182, 0.417);
    color: rgba(255, 255, 255, 0.628);
    font-size: 18px;
    margin-top: 5px;
 }

.activePlan{
    background-color: rgba(222, 235, 121, 0.292);
    color: rgba(53, 194, 237, 0.628);
}
.nomalPlan{

}
#name{
  position: absolute;
   width: 100%; 
   height: 30px;
   left: 0;
}

.id{
   position: absolute;
   width: 10%; 
   height: 30px;
   left:20px;
}
#checkbox{
   position: absolute;
   left: 85%;
}
</style>