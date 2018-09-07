import React  from 'react';
import echarts from 'echarts';
import styles from "./zxt.less";
function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    }
}

var data = [];
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
    data.push(randomData());
}
const option = {

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            let s="<div>"+ params.value[1]+"</div>";
            return s;
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        },
         axisTick:{
                show:false
            },
            axisLine:{
              lineStyle:{
                opacity: 0.1,

                color:"#FFFFFF"
              }
            },
            axisLabel: {
                             show: true,
                             textStyle: {
                                 color: '#FFFFFF'
                             }
                         }
    },
    yAxis: {
        show:false,
        axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [

      {

    
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        itemStyle:{
                normal:{
                    color:"#22A5F7",
                    label:{
                        show:true,
                        position: 'right'
                    }

                }
            },
        data: data
    }]
};


export default class TablesChart extends  React.Component{
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('zxt'));
    myChart.setOption(option);
    setInterval(function () {

        for (var i = 0; i < 5; i++) {
            data.shift();
            data.push(randomData());
        }

        myChart.setOption({
            series: [{
                data: data
            }]
        });
    }, 1000);
  }
  render(){

    return(

                  <div id="zxt" style={{...this.props}} className={styles.zxt}></div>



    )
  }
}
