<template>
  <div>
    <div id="main"></div>
    <div class="container">
      <div>总分数{{count}}</div>
      <i-input class="block" v-model="total.data1" type="number" placeholder="数学">
        <span slot="prepend">数学</span>
      </i-input>
      <i-input class="block" v-model="total.data2" type="number" placeholder="语文">
        <span slot="prepend">语文</span>
      </i-input>
      <i-input class="block" v-model="total.data3" type="number" placeholder="英语">
        <span slot="prepend">英语</span>
      </i-input>
      <i-input class="block" v-model="total.data4" type="number" placeholder="历史">
        <span slot="prepend">历史</span>
      </i-input>
      <i-input class="block" v-model="total.data5" type="number" placeholder="科学">
        <span slot="prepend">科学</span>
      </i-input>
      <Button class="block" type="success" @click="initEchart" long>提交</Button>
    </div>

  </div>
</template>

<script>
    import echarts from 'echarts';

    export default {
      name: "index",
      data() {
        return {
          total: {
            data1: 335,
            data2: 310,
            data3: 234,
            data4: 135,
            data5: 200
          }
        }
      },
      computed: {
        count(){

          return parseInt(this.total.data1) + parseInt(this.total.data2) + parseInt(this.total.data3) + parseInt(this.total.data4)+parseInt(this.total.data5)
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
                radius: [0, '55%'],
                center: ['50%', '60%'],
                data: [
                  {value: this.total.data1, name: '数学'},
                  {value: this.total.data2, name: '语文'},
                  {value: this.total.data3, name: '英文'},
                  {value: this.total.data4, name: '历史'},
                  {value: this.total.data5, name: '科学'}
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
    };
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
