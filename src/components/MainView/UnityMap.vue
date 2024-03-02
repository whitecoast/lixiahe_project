<template>
  <div id="scontainer">
    <VueUnity :unity="unityContext" width="1400" height="800" />
  </div>
</template>

<script>
import UnityWebgl from "unity-webgl"
import VueUnity from "unity-webgl/vue"

const Unity =new UnityWebgl({
  loaderUrl: 'http://localhost:8080/WebUnity/Vue_Unity/Build/unity_system.loader.js',
  dataUrl: "http://localhost:8080/WebUnity/Vue_Unity/Build/unity_system.data",
  frameworkUrl: "http://localhost:8080/WebUnity/Vue_Unity/Build/unity_system.framework.js",
  codeUrl: "http://localhost:8080/WebUnity/Vue_Unity/Build/unity_system.wasm"
})

export default {
  name: "UnityMap",
  components:{
    VueUnity
  },
  data() {
    return {
      unityContext:Unity,
    }
  },
  methods: {
  },
  mounted() {
    
  },
  beforeDestroy(){
    Unity.unload();
  }
};
</script>

<style scoped>
  #scontainer{
    width: 100%;
    height: 100%;
  }
</style>