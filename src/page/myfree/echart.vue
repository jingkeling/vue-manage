<template>
  <div>
    <div id="main"></div>
    <div class="container">
      <Input class="block" style="" v-model="data1" placeholder="数学"/>
      <Input class="block" v-model="data1" placeholder="英语"/>
      <Input class="block" v-model="data1" placeholder="语文"/>
      <Input class="block" v-model="data1" placeholder="科学"/>
      <Input class="block" v-model="data1" placeholder="历史"/>
      <Button class="block" type="success" long>SUBMIT</Button>

    </div>

  </div>
</template>

<script>
    import echarts from 'echarts';

    export default {
      name: "index",
      data() {
        return {
          data1:""
        }
      },
      mounted() {
        this.initEchart();
      },
      methods: {
        initEchart() {
          let mychart = echarts.init(document.getElementById('main'));
          let option = {
            title: {
              text: '成绩占比',
              subtext: '',
              x: 'center'
            },
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              left: 'left',
              data: ['数学', '语文', '英文', '历史', '科学']
            },
            series: [
              {
                name: '类目',
                type: 'pie',
                radius: [0,'55%'],
                center: ['50%', '60%'],
                data: [
                  {value: 335, name: '数学'},
                  {value: 310, name: '语文'},
                  {value: 234, name: '英文'},
                  {value: 135, name: '历史'},
                  {value: 1548, name: '科学'}
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          };
          mychart.setOption(option)
        }
      }
    }
</script>

<style scoped>

  #main {
    width: 500px;
    height: 500px;
  }
  .container {
    display: flex;
    flex-direction: column;

    position: absolute;
    right: 40px;
    top: 40px;
    width: 300px;
    height: 400px;

  }
  .block {
    width: 240px;
    margin-top: 10px;
  }
</style>
