 <template>
  <div id="MapPlan">
    <div id="firstMap" @click="clickFirstMap">
        <div id="firstMapImage">
        </div>
        <div id="MapName">
            天地图
        </div>
    </div>
    <div id="SecondMap">
        <div id="SecondMapImage" @click="clickSecondMap">
        </div>
        <div id="MapName">
            天地图影像图
        </div>
    </div>

    <div id="ThirdMap">
        <div id="ThirdMapImage" @click="clickThirdMap">
        </div>
        <div id="MapName">
            天地图地形图
        </div>
    </div>

        <div id="FourthMap">
        <div id="FourthMapImage" @click="clickFourthMap">
        </div>
        <div id="MapName">
            三维场景图
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"ChangMapPlane",
    methods: {
        clickFirstMap(){
            this.$bus.$emit("firstMap");
        },
        clickSecondMap(){
            this.$bus.$emit("SecondMap")
        },
        clickThirdMap(){
            this.$bus.$emit("ThirdMap")
        },
        clickFourthMap(){
            this.$bus.$emit("FourthMap")
        }
    },

}
</script>

<style scoped>
#MapPlan {
  background-color: rgba(4, 41, 72, 0.438);
  position: absolute;
  height: 160px;
  width: 300px;
  border: 1px solid rgba(59, 211, 208, 0.375);
  border-radius: 10px;
}

#firstMap{
    position: absolute;
    left: 2%;
    top: 5%;
    height: 90px;
    width: 90px;
    overflow: hidden;
}

#SecondMap{
    position: absolute;
    left:105px;
    top: 5%;
    height: 90px;
    width: 90px;
    overflow: hidden;
}

#ThirdMap{
    position: absolute;
    left:205px;
    top: 5%;
    height: 90px;
    width: 90px;
    overflow: hidden;
}

#FourthMap{
    position: absolute;
    left:2%;
    top: 55%;
    height: 90px;
    width: 90px;
    overflow: hidden;
}

#firstMapImage{
    background-image: url("http://localhost:8080/aMap.png");
    background-size: cover;
    position: absolute;
    left: 0%;
    top: 0%;
    height: 50px;
    width: 90px;
    overflow: hidden;
}

#SecondMapImage{
    background-image: url("http://localhost:8080/bMap.png");
    background-size: cover;
    position: absolute;
    left: 0%;
    top: 0%;
    height: 50px;
    width: 90px;
    overflow: hidden;
}

#ThirdMapImage{
    background-image: url("http://localhost:8080/cMap.png");
    background-size: cover;
    position: absolute;
    left: 0%;
    top: 0%;
    height: 50px;
    width: 90px;
    overflow: hidden;
}

#FourthMapImage{
    background-image: url("http://localhost:8080/Unity.png");
    background-size: cover;
    position: absolute;
    left: 0%;
    top: 0%;
    height: 50px;
    width: 90px;
    overflow: hidden;
}
#MapName{
    background-size: cover;
    position: absolute;
    left: 0%;
    top: 50px;
    height: 15px;
    width: 90px;
    overflow: hidden;
    color: rgb(59, 211, 208);
    text-align: center;
    font-size: 12px;
    font-weight: bold;
}
</style> */