<template>
    <div class="text-container">
      <!--顶层-->
      <div class="text-header">
        <div class="text-header-start"></div>

      </div>
      <!--中间层-->
      <div class="text-body">
        <!--卡片-->
        <div v-for="obj in items" class="text-card">
          <!--卡片图标-->
          <div class="text-card-ico">
            <Icon type="ios-partlysunny"></Icon>
          </div>
          <!--卡片内容-->
          <div class="text-card-content">
            <div class="text-card-value">196℃</div>
            <div class="text-card-title">今日天气温度</div>
          </div>
        </div>
      </div>
      <!--图表-->
      <div class="text-foot">
        <div class="text-foot-left"></div>
        <div class="text-foot-right">
          <div id="myECharts"></div>
        </div>

      </div>
    </div>
</template>

<script>
  import echarts from 'echarts'

    export default {
      data() {
        return {
          total: {
            data1: 335,
            data2: 310,
            data3: 234,
            data4: 135,
            data5: 200
          },
          jsonData: ''
        }
      },
      mounted() {
        this.getData();
      },
      computed:{
        items() {
          let array = new Array(12);
          array.fill(1);
          return array;
        }

      },
      methods: {
        initECharts(data) {
          let mychart = echarts.init(document.getElementById('myECharts'));
          console.log(mychart);
          let option = {
            title: {
              text: 'Beijing AQI'
            },
            tooltip: {
              trigger: 'axis'
            },
            grid: {
              left: '20%',
              right: '20%',
              width: 'auto'
            },
            xAxis: {
              data: data.map(function (item) {
                return item[0];
              })
            },
            yAxis: {
              splitLine: {
                show: false
              }
            },
            toolbox: {
              left: 'center',
              feature: {
                dataZoom: {
                  yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
              }
            },
            dataZoom: [{
              startValue: '2014-06-01'
            }, {
              type: 'inside'
            }],
            visualMap: {
              top: 10,
              right: 10,
              pieces: [{
                gt: 0,
                lte: 50,
                color: '#096'
              }, {
                gt: 50,
                lte: 100,
                color: '#ffde33'
              }, {
                gt: 100,
                lte: 150,
                color: '#ff9933'
              }, {
                gt: 150,
                lte: 200,
                color: '#cc0033'
              }, {
                gt: 200,
                lte: 300,
                color: '#660099'
              }, {
                gt: 300,
                color: '#7e0023'
              }],
              outOfRange: {
                color: '#999'
              }
            },
            series: {
              name: 'Beijing AQI',
              type: 'line',
              data: data.map(function (item) {
                return item[1];
              }),
              markLine: {
                silent: true,
                data: [{
                  yAxis: 50
                }, {
                  yAxis: 100
                }, {
                  yAxis: 150
                }, {
                  yAxis: 200
                }, {
                  yAxis: 300
                }]
              }
            }
          };

          mychart.setOption(option)

        },
        getData() {
          let $this = this;
          let url = '/static/data.json';
          fetch(url).then(function (res) {
            return res.json();
          }).then(function (data) {
            console.log(data);
            $this.initECharts(data);
          }).catch(function (e) {
          })
        }

      }
    }
</script>

<style scoped>

  /*::-webkit-scrollbar {display:none}*/

  .text-container{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #f0f2f5;
    overflow-y: auto;

  }

  .text-header {
    position: relative;
    width: 100%;
    height: 300px;
    left: 0;
    top: 0;

    display: flex;
    justify-content: space-around;
  }
  .text-header-start{
    width: 20000px;
    margin: 15px 20px;
    background-color: #ffffff;
    border-radius: 5px;

    transition: 0.2s all;
    box-shadow: 0 0 1px #c5c5c5;

  }
  .text-header-start:hover {
    box-shadow: 0 0 15px #c5c5c5;
  }

  /*中间层*/
  .text-body{
    position: relative;
    left: 0;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

  }
  .text-card{
    width: 270px;
    height: 100px;
    border-radius: 6px;
    background-color: #ffffff;
    min-width: 270px;
    margin: 5px;
    cursor: pointer;
    transition: 0.2s all;
    box-shadow: 0 0 1px #c5c5c5;

  }
  .text-card:hover {
    box-shadow: 0 0 15px #c5c5c5;

  }

  .text-card-ico{
    display: inline-block;
    width: 35%;
    height: 100px;
    background-color: #64d572;
    border-radius: 6px 0 0 6px;
    text-align: center;
    line-height: 100px;
    font-size: 70px;
    color: #ffffff;
    vertical-align: top;

  }
  .text-card-content{
    position: relative;
    display: inline-block;
    width: 60%;
    height: 100px;
  }
  .text-card-value{
    width: 100%;
    height: 50px;
    line-height: 80px;
    text-align: center;
    color: rgb(100, 213, 114);
    font-size: 30px;
    font-weight: 700;
  }
  .text-card-title{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    color: #C8C8C8;
  }

  /*foot*/
  .text-foot{
    position: relative;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

  }

  .text-foot-left{
    height: 350px;
    width: 350px;
    background-color: #ffffff;
    border-radius: 6px;
    margin: 15px 25px;
    min-width: 400px;
    transition: 0.2s all;
    box-shadow: 0 0 1px #c5c5c5;

  }
  .text-foot-left:hover{
    box-shadow: 0 0 15px #c5c5c5;

  }

  .text-foot-right{
    height: 350px;
    width: 1400px;
    background-color: #ffffff;
    border-radius: 6px;
    margin: 15px 25px;
    min-width: 350px;
    transition: 0.2s all;
    box-shadow: 0 0 1px #c5c5c5;


    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0
  }

  .text-foot-right:hover{
    box-shadow: 0 0 15px #c5c5c5;
  }

/*折线图*/
  #myECharts{
    width: 100%;
    height: 100%;
  }



</style>
