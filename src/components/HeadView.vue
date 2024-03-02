<template>
  <div class="HeadContainer">
    <div class="Title">
      <p>里 下 河 网 四 预 平 台</p>
    </div> 
    <div id="time">
      <span>{{newDate}}</span>
    </div>

    <div class="Menu">
      <el-menu :default-active="activeIndex" mode="horizontal" 
        background-color="rgba(13, 219, 219, 0)"
        text-color="rgb(13, 219, 219)"
        active-text-color="rgb(255, 255, 0)"
      @select="handleSelect">
        <el-menu-item index=0>情势分析</el-menu-item>
        <el-menu-item index=1>动态预报</el-menu-item>
        <el-menu-item index=2>预演预案</el-menu-item>
        <el-menu-item index=3>规划措施</el-menu-item>
        <el-menu-item index=4>天气实况</el-menu-item>
    </el-menu>
    </div>
  </div>
</template>

<script>
export default {
    name:"HeadView",
    data() {
      return {
        activeIndex: '0',
        newDate: new Date()
      };
    },
    methods: {
      handleSelect(key) {
        this.$bus.$emit('SystemMood',key);
      }
    },
    mounted() {
      let that = this
      this.timer = setInterval(function () {
      that.newDate = new Date().toLocaleString()
    })
    },
}
</script>

<style scoped>
    .HeadContainer{
        background-image: url("../assets/img/head_bg.png");
        position: absolute;
        left: 0%;
        top: 0%;
        height: 100%;
        width: 100%  
    }

    .Title{
      color: rgb(13, 219, 219);
      position: absolute;
      font-size: 30px;
      font-weight:bold;
      left: 5%;
      top: -30%;
    }

    .Menu{
      position: absolute;
      left: 40%;
      top:30%
    }
    #time{
      color: rgba(236, 232, 12, 0.794);
      position: absolute;
      font-size: 17px;
      font-weight:bold;
      top:20%;
      left:90%;
      text-align: center;
      width: 10%;
      height: 100%;
    }
</style>