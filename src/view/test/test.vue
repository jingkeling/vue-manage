<template>
    <div class="text-container">
      <!--顶层-->
      <div class="text-header">
        <!--当前站点信息-->
        <div class="text-header-info">
          <!--头像-->
          <div class="text-header-avator">
            <img class="text-header-avator-img"src="https://pic-1253206304.cos.ap-shanghai.myqcloud.com/20160630182928_WYyrM.thumb.700_0.jpeg" alt="">
          </div>
          <!--标题-->
          <div class="text-header-title">
            <div class="text-header-title-content">
              <span class="text-header-title-content-firstname">Admin</span>
              <span class="text-header-title-content-lastname" >super admin</span>
            </div>
          </div>
          <!--基本信息-->
          <div class="text-header-other">
            <div>上次登录时间: 2018.05.22 08:30:00</div>
            <div>上次登录地点: 武汉</div>
          </div>
        </div>
        <!--省市联级-->
        <div class="text-header-org">
          <div class="text-header-org-title" style="border-bottom: 1px solid #eeeeee;height: 50px;width: 100%;text-align: center;line-height: 50px;font-size: 17px;font-weight: 570;">
            组织机构选择
          </div>
          <div class="text-header-org-content">
            <div>
              <Cascader :data="province" v-model="value1"></Cascader>
            </div>
            <div>
              <Cascader :data="city" v-model="value1"></Cascader>
            </div>
            <div>
              <Cascader :data="town" v-model="value1"></Cascader>
            </div>
          </div>
        </div>

      </div>
      <!--中间层-->
      <div class="text-body">
        <!--卡片-->
        <div v-for="obj in items" class="text-card">
          <!--卡片图标-->
          <div class="text-card-ico" :style="obj.icoStyle">
            <Icon :type="obj.icoType"></Icon>
          </div>
          <!--卡片内容-->
          <div class="text-card-content">
            <div class="text-card-value" :style="obj.valueStyle">{{obj.value}}</div>
            <div class="text-card-title">今日天气温度</div>
          </div>
        </div>
      </div>
      <!--图表-->
      <div class="text-foot">
        <div class="text-foot-left">
          <div class="text-foot-left-title" style="">
            天气温度
          </div>
          <div id="echartL"></div>
        </div>
        <div class="text-foot-right">
          <!--折线图-->
          <div id="echartR"></div>
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
          jsonData: '',
          echartL: '',
          echartR: '',
          /*省市县选择*/
          value1: [],
          province: [{
            value: 'sichuan',
            label: '四川'
          },{
            value: 'hubei',
            label: '湖北'
          }],
          city: [{
            value: 'wuhan',
            label: '武汉'
          },{
            value: 'chengdu',
            label: '成都'
          }],
          towm: [{
            value: 'guanggu',
            label: '光谷'
          },{
            value: 'wolong',
            label: '卧龙'
          }]

        }
      },
      mounted() {
        this.initEChartL();
        this.initEChartR();

        let $this = this;
        window.onresize= function () {
          $this.echartR.resize();
        }
      },
      computed:{
        /*64d572*/
        items() {
          let array = [];
          array.push({icoStyle: {backgroundColor: '#64d572'}, icoType: 'ios-partlysunny', value: '196℃', valueStyle: {color: '#64d572'}});
          array.push({icoStyle: {backgroundColor: '#2d8cf0'}, icoType: 'ios-moon', value: '196℃', valueStyle: {color: '#2d8cf0'}});
          array.push({icoStyle: {backgroundColor: '#ffd572'}, icoType: 'ios-partlysunny', value: '196℃', valueStyle: {color: '#ffd572'}});
          array.push({icoStyle: {backgroundColor: '#f25e43'}, icoType: 'ios-cloudy-night', value: '196℃', valueStyle: {color: '#f25e43'}});
          array.push({icoStyle: {backgroundColor: '#64d572'}, icoType: 'ios-partlysunny', value: '196℃', valueStyle: {color: '#64d572'}});
          array.push({icoStyle: {backgroundColor: '#a36fd7'}, icoType: 'ios-partlysunny', value: '196℃', valueStyle: {color: '#a36fd7'}});
          array.push({icoStyle: {backgroundColor: '#64d572'}, icoType: 'ios-thunderstorm', value: '196℃', valueStyle: {color: '#64d572'}});
          array.push({icoStyle: {backgroundColor: '#64d572'}, icoType: 'ios-sunny', value: '196℃', valueStyle: {color: '#64d572'}});
          array.push({icoStyle: {backgroundColor: '#f8948b'}, icoType: 'ios-rainy', value: '196℃', valueStyle: {color: '#f8948b'}});
          array.push({icoStyle: {backgroundColor: '#64d572'}, icoType: 'ios-cloudy-night', value: '196℃', valueStyle: {color: '#64d572'}});
          array.push({icoStyle: {backgroundColor: '#64d572'}, icoType: 'ios-sunny', value: '196℃', valueStyle: {color: '#64d572'}});


          for (let i = 0; i < 1; i++) {
            //这就是绑定style要的数据结构
            let icoStyle = {
              backgroundColor : '#64d572',

            };
            array.push({icoStyle, icoType: 'ios-partlysunny'});
          }
          return array;
        }

      },
      methods: {
        initEChartL() {
          this.echartL = echarts.init(document.getElementById('echartL'));
          let option = {
            tooltip : {
              formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
              feature: {
                restore: {},
                saveAsImage: {}
              }
            },
            series: [
              {
                name: '业务指标',
                type: 'gauge',
                detail: {formatter:'{value}%'},
                data: [{value: 50, name: '完成率'}]
              }
            ]
          };
          this.echartL.setOption(option);
          let $this = this;
          setInterval(function () {
            option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            $this.echartL.setOption(option, true);
          },2000);


        },
        initEChartR() {
          this.echartR = echarts.init(document.getElementById('echartR'));
          let base = +new Date(1968, 9, 3);
          let oneDay = 24 * 3600 * 1000;
          let date = [];

          let data = [Math.random() * 300];

          for (let i = 1; i < 20000; i++) {
            let now = new Date(base += oneDay);
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
            data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
          }

          let option = {
            tooltip: {
              trigger: 'axis',
              position: function (pt) {
                return [pt[0], '10%'];
              }
            },
            title: {
              left: 'center',
              text: '大数据量面积图',
            },
            toolbox: {
              feature: {
                dataZoom: {
                  yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: date
            },
            yAxis: {
              type: 'value',
              boundaryGap: [0, '100%']
            },
            dataZoom: [{
              type: 'inside',
              start: 0,
              end: 10
            }, {
              start: 0,
              end: 10,
              handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
              handleSize: '80%',
              handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
              }
            }],
            series: [
              {
                name:'模拟数据',
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                  normal: {
                    color: 'rgb(255, 70, 131)'
                  }
                },
                areaStyle: {
                  color: 'green',
                  normal: {
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: '#FF9E44'},
                        {offset: 1, color: '#FF4683'}
                      ]
                    )
                  }
                },
                data: data
              }
            ]
          };

          this.echartR.setOption(option);

        },

        getData() {
          let $this = this;
          let url = '/static/data.json';
          fetch(url).then(function (res) {
            return res.json();
          }).then(function (data) {
            $this.setData(data);
          }).catch(function (e) {
          })
        },
        /*设置值*/
        setData(data) {
          this.echartR.setOption({
            xAxis: {
              data: data.map(function (item) {
                return item[0];
              })
            },
            series: [{
              name: 'HuBei AQI',
              data: data.map(function (item) {
                return item[1];
              }),
            }]
          });
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

  /*----------第一层------------*/
  .text-header {
    position: relative;
    width: 100%;
    height: 300px;
    left: 0;
    top: 0;

    display: flex;
    justify-content: space-around;
  }
  .text-header-info{
    width: 400px;
    min-width: 400px;
    margin: 15px 20px;
    background-color: #ffffff;
    border-radius: 6px;
    padding: 20px;
    font-size: 0;

    transition: 0.2s all;
    box-shadow: 0 0 1px #c5c5c5;

  }
    .text-header-info:hover {
      box-shadow: 0 0 15px #c5c5c5;
    }

  .text-header-avator{ /*头像div*/
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 30%;
    height: 70%;
    border-bottom: 2px solid #e1e4ea;

  }
    .text-header-avator-img{/*头像div中的img*/
      position: absolute;
      top: 0;
      bottom: 0;
      width: 70px;
      height: 70px;
      margin: auto 10px;/*利用margin居中*/
    }

  .text-header-title{ /*标题*/
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 60%;
    height: 70%;
    border-bottom: 2px solid #e1e4ea;

  }
  .text-header-title-content{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 120px;
    height: 70px;
    margin: auto 10px;/*利用margin居中*/
  }

  .text-header-title-content-firstname{
    width: 10px;
    height: 10px;
    font-size: 35px;
    font-weight: 700;
    color: #2d8cf0;
  }
  .text-header-title-content-lastname{
    width: 10px;
    height: 10px;
    color: #52545e;
    font-size: 13px;

  }

  .text-header-other{
    font-size: 15px;
  }
  .text-header-other > div {
    margin: 5px;
  }




  .text-header-org{
    width: 1500px;
    margin: 15px 20px;
    background-color: #ffffff;
    border-radius: 6px;

    transition: 0.2s all;
    box-shadow: 0 0 1px #c5c5c5;
  }
    .text-header-org:hover {
      box-shadow: 0 0 15px #c5c5c5;

    }

  .text-header-org-content{
    padding: 50px 50px;


    display: flex;
    justify-content: space-around;
  }
  .text-header-org-content > div {
    width: 200px;

  }





  /*------中间层----------*/
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
    /*background-color: #64d572;*/
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

  /*---------foot-------------*/
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

  #echartL{
    width: 100%;
    height: 300px;
  }

  .text-foot-left-title {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #eeeeee;
    text-align: center;
    line-height: 50px;
    font-size: 15px;
    font-weight: 900;
  }


  #echartR{
    width: 100%;
    height: 100%;
  }





</style>
