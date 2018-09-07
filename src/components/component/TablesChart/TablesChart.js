import React  from 'react';
import echarts from 'echarts';
import styles from './TablesChart.less';
const
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {


        type: 'value',
        boundaryGap: [0, 0.01],
         axisTick: {
            show: false
        },
        splitNumber:3,
        show:false
    },
    yAxis: {
        splitNumber:1,
        interval:0,
           type: 'category',
           axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            splitLine:{
                show:false
            },
            axisLabel : {
                        // interval:3,

                        margin:40,
                            textStyle: {
                                color: '#FFFFFF'
                            }
                        },
        data: ['用户A','用户B','用户C','用户D','用户E','用户F','用户F'],
    },
    series: [
        {
            type: 'bar',

            itemStyle:{
                normal:{
                    color:"#22A5F7",
                    label:{
                        show:true,
                        position: 'right'
                    }

                }
            },
            barWidth:12,
            data: [19325, 23438, 31000, 121594, 134141, 681807,681807]
        }
    ]
};



export default class TablesChart extends  React.Component{
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('tables'));
    myChart.setOption(option)
  }
  render(){
    return(

          <div id="tables" className={styles.tables}></div>

    )
  }
}
