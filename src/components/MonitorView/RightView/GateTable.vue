<template>
  <div class="container">
    <div id="Rain">
      <el-table
      :data="tableData"
       height="250"
      style="width: 100%;"
      header-cell-style="background-color: rgba(13, 68, 116, 0.224);color:rgba(213, 219, 20, 0.715)"
      :cell-style="styleBack"
      >
      <el-table-column
        prop="date"
        label="站点"
        width="70">
      </el-table-column>
      <el-table-column
        prop="name"
        label="流量"
        width="70">
      </el-table-column>
      <el-table-column
        prop="open"
        label="开启度"
        width="70">
      </el-table-column>
            <el-table-column
        prop="address"
        label="警戒"
        width="70">
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>

export default {
  name: "LevelTable",
  data() {
    return {
  tableData: [{
            date: '兴化',
            name: '12.3',
            address: '14',
            open:0.1,
          }, {
            date: '射阳镇',
            name: '11.2',
            address: ' 14.6',
            open:0.2,
          }, {
            date: '建湖',
            name: '12.5',
            address: '11',
            open:0.3,
          }, {
            date: '阜宁',
            name: '15.5',
            address: '15',
            open:0.3,
          }, {
            date: '盐城',
            name: '7.8',
            address: '8.9',
            open:0.5,
          }]
    };
  },
  methods: {
    styleBack({ row, column, rowIndex, columnIndex }){
      console.log(column,rowIndex,row,rowIndex);
       if (columnIndex == 1 && rowIndex==2) {
        return { color:"red" };
      }
       if (columnIndex == 1 && rowIndex==3) {
        return { color:"yellow" };
      }
    }
  },
  mounted() {
   
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
}

#Rain {
  background-color: rgba(13, 68, 116, 0.224);
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
}


/deep/ .el-table{
   background-color: rgba(13, 68, 116, 0.224)
}

/deep/ .el-table th,
/deep/ .el-table tr,
/deep/ .el-table td {
  background-color:#06367000;  
  border: 0px;
  color:  rgb(13, 219, 219);  
  height: 5px;
  font-family: Source Han Sans CN Normal, Source Han Sans CN Normal-Normal;
  font-weight: Normal;
}


/deep/ .el-table tbody tr:hover > td {
  background: #06367073 !important;
}


/deep/ .el-table__body-wrapper::-webkit-scrollbar-track {
  background-color: #063570;
}
/deep/ .el-table__body-wrapper::-webkit-scrollbar {
  width: 8px;
  opacity: 0.5;
}
/deep/ .el-table__body-wrapper::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #0256aa60;
}
</style>