<template>
  <div id="container">
  </div>
</template>


<script>
export default {
  name: "GisMap",
  data() {
    return {
      mapTD: null,
      T: window.T,
      countries: [],
      markers: [],
      lays:[]
    };
  },
  methods: {
    AddMark(x, y, z,name) {
      let icon;
      if (z == 0) {
        icon = new this.T.Icon({
          iconUrl: "http://localhost:8080/水库blue.png",
          iconSize: new this.T.Point(32, 32),
        });
      } else if (z == 1) {
        icon = new this.T.Icon({
          iconUrl: "http://localhost:8080/水库yellow.png",
          iconSize: new this.T.Point(32, 32),
        });
      } else {
        icon = new this.T.Icon({
          iconUrl: "http://localhost:8080/水库red.png",
          iconSize: new this.T.Point(32, 32),
        });
      }

      var marker = new this.T.Marker(new this.T.LngLat(x, y), { icon });
      this.markers.push(marker);
      //向地图上添加标注
      this.mapTD.addOverLay(marker);
      var level = Math.random() * 1+0.2;
      var stationname=name;
      var label = new this.T.Label({
        text: "站点:" + stationname + "<br> 水位：" + level.toFixed(2),
        position: marker.getLngLat(),
        offset: new this.T.Point(-50, -60),
      });

      this.mapTD.addOverLay(label);
      label.hide();
      marker.addEventListener("click", (e) => {
        console.log(e);
        label.hide();
      });
      marker.addEventListener("dblclick", (e) => {
        console.log(e);
        label.show();
      });
    },
    initMap() {
      this.mapTD = null;
      console.log(window.d3);
      let map = new this.T.Map("container"); // div的id
      // 传参中心点经纬度，以及放大程度
      map.centerAndZoom(new this.T.LngLat(120.3, 33.264533), 9);
      map.setMinZoom(7); // 设置最小变动层级
      map.setMaxZoom(13); // 设置最大变动层级
      map.enableDrag(); // 启用拖拽
      map.enableScrollWheelZoom(); // 启用滚轮放大缩小
      this.mapTD = map;
      let imageURL =
        "http://t0.tianditu.gov.cn/img_w/wmts?" +
        "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles" +
        "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=4cb6295bf0545820b5afe69842a7d625";
      //创建自定义图层对象
      let lay = new this.T.TileLayer(imageURL, { minZoom: 7, maxZoom: 13 });
      this.lays.push(lay);
       this.mapTD.addLayer(lay);

      imageURL =
        "http://t0.tianditu.gov.cn/ter_w/wmts?" +
        "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles" +
        "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=4cb6295bf0545820b5afe69842a7d625";
      let lay2 = new this.T.TileLayer(imageURL, { minZoom: 7, maxZoom: 13 });
      this.lays.push(lay2);

      //       imageURL =
      //   "http://t0.tianditu.gov.cn/cta_w/wmts?" +
      //   "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles" +
      //   "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=4cb6295bf0545820b5afe69842a7d625";

      //         let lay3 = new this.T.TileLayer(imageURL, { minZoom: 7, maxZoom: 13 });
      //  this.mapTD.addLayer(lay3);
 

      this.AddMark(119.852, 32.909, 0,"兴化");
      this.AddMark(119.798, 33.472, 0,"建湖");
      this.AddMark(119.801, 33.782, 1,"阜宁");
      this.AddMark(120.139, 33.377, 1,"盐城");
      this.AddMark(120.260, 33.776, 2,"射阳");

     
      var countriesOverlay = new this.T.D3Overlay(this.init, this.redraw);
      var that = this;
      window.d3.json("http://localhost:8080/LiXiaHe.json", function (data) {
        that.countries = data.features;
        map.addOverLay(countriesOverlay);
        countriesOverlay.bringToBack();
      });
    },
    init(sel, transform) {
      console.log(transform);
      var upd = sel.selectAll("path.geojson").data(this.countries);
      upd
        .enter()
        .append("path")
        .attr("class", "geojson")
        .attr("stroke", "rgb(59, 211, 208)")
        .attr("fill", " rgb(59, 211, 208)")
        .attr("fill-opacity", "1");
    },
    redraw(sel, transform) {
      sel.selectAll("path.geojson").each(function (d, i) {
        console.log(d, i);
        window.d3.select(this).attr("d", transform.pathFromGeojson);
      });
    },
    changeMarker(){
      for(var i=0;i<this.markers.length;i++){
        var ran=Math.random();
        let icon;
        if(ran<0.6){
           icon = new this.T.Icon({
          iconUrl: "http://localhost:8080/水库blue.png",
          iconSize: new this.T.Point(32, 32),
        });
          this.markers[i].setIcon(icon);
        }
        else if(ran<0.8){
            icon = new this.T.Icon({
          iconUrl: "http://localhost:8080/水库yellow.png",
          iconSize: new this.T.Point(32, 32),
        });
          this.markers[i].setIcon(icon);
        }else{
            icon = new this.T.Icon({
          iconUrl: "http://localhost:8080/水库red.png",
          iconSize: new this.T.Point(32, 32),
        });
          this.markers[i].setIcon(icon);
        }
      }
    }
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
    this.$bus.$on('changeMarker',()=>{
      this.changeMarker();
    })
    this.$bus.$on('firstMap',()=>{
      this.mapTD.removeLayer(this.lays[0]);
      this.mapTD.removeLayer(this.lays[1]);
    })
    this.$bus.$on('SecondMap',()=>{
      this.mapTD.removeLayer(this.lays[1]);
      this.mapTD.addLayer(this.lays[0]);
    })
        this.$bus.$on('ThirdMap',()=>{
          this.mapTD.removeLayer(this.lays[0]);
      this.mapTD.addLayer(this.lays[1]);
    })
  },
};
</script>

<style  scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  color: rgb(59, 211, 208);
}
</style>