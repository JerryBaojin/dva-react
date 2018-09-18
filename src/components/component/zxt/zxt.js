import React  from 'react';
import echarts from 'echarts';
import styles from "./zxt.less";


export default class TablesChart extends  React.Component{
  componentDidMount(){
    var data_in = [
        918.32,
        902.51,
        900.41,
        873.43,
        885.39,
        897.63,
        892.44,
        879.04,
        850.83,
        848.52,
        844.87,
        834.54,
        832.48,
        815.48,
        811.23,
        821.20,
        805.10,
        794.49,
        801.23,
        788.80,
        769.70,
        789.80,
        763.46,
        758.57,
        773.49,
        764.45,
        739.66,
        757.55,
        731.12,
        724.06,
        732.70,
        723.80,
        714.91,
        723.46,
        705.10,
        708.90,
        723.75,
        703.06,
        684.51,
        692.63,
        683.14,
        671.95,
        691.97,
        684.04,
        667.59,
        688.56,
        659.01,
        652.39,
        670.98,
        638.10,
        655.85,
        627.21,
        648.82,
        631.68,
        614.94,
        642.69,
        626.22,
        613.44,
        641.15,
        613.90,
        601.39,
        623.22,
        602.94,
        589.90,
        612.01,
        590.85,
        591.51,
        585.67,
        559.47,
        557.43,
        518.20,
        504.63,
        506.67,
        512.66,
        440.93,
        614.94,
        642.69,
        626.22,
        613.44,
        641.15,
        613.90,
        601.39,
        623.22,
        602.94,
        598.28,
        593.18,
        625.85,
        625.43,
        611.52,
        660.33,
        669.41,
        707.86,
        729.56,
        728.72,
        770.35,
        800.78,
        791.52,
        797.62,
        808.94,
        625.43,
        611.52,
        660.33,
        669.41,
        707.86,
        729.56,
        728.72,
        770.35,
        800.78,
        676.64,
        598.28,
        593.18,
        625.85,
        625.43,
        611.52,
        660.33,
        669.41,
        707.86,
        729.56,
        728.72,
        770.35,
        800.78,
        791.52,
        797.62,
        808.94,
        817.76,
        797.77,
        806.65,
        763.81,
        771.01,
        796.27,
        777.58,
        776.37,
        821.18,
        814.54,
        832.37,
        853.91,
        870.55,
        861.75,
        888.66,
        888.60,
        910.95,
        934.58,
        920.79,
        923.61,
        921.88,
        1096.03,
        1041.94,
        951.67,
        932.29,
        935.73,
        941.29,
        944.34,
        965.24,
        928.95,
        943.34,
        968.91,
        977.17,
        941.77,
        964.47,
        964.86,
        926.30,
        929.23,
        934.07,
        974.39,
        977.48,
        953.90,
        929.79,
        948.32,
        943.09,
        933.89,
        948.30,
        934.66,
        936.59,
        958.61,
        930.23,
        927.04,
        966.15,
        923.08,
        887.60,
        924.59,
        909.70,
        889.48,
        892.51,
        906.88,
        907.99,
        927.54,
        902.11,
        902.41,
        940.20,
        937.34,
        952.79,
        952.53,
        944.37,
        952.09,
        924.20,
        924.65,
        939.26,
        967.97,
        988.18,
        1017.07,
        1007.07,
        1014.48,
        1016.72,
        1007.58,
        974.98,
        1053.01,
        1044.22,
        1038.93,
        1029.50,
        1093.14,
        1124.30,
        1120.13,
        1123.74,
        1105.22,
        1132.26,
        1124.54,
        1137.46,
        1177.16,
        1114.36,
        1087.06,
        1096.11,
        1083.61,
        1096.21,
        1069.42,
        1090.59,
        1081.66,
        1095.27,
        1105.93,
        1098.18,
        1102.24,
        1115.35,
        1127.81,
        1139.65,
        1159.92,
        1180.29,
        1157.27,
        1201.08,
        1186.57,
        1200.80,
        1244.75,
        1216.21,
        1199.90,
        1224.75,
        1188.85,
        1180.26,
        1151.10,
        1173.41,
        1156.91,
        1160.99,
        1160.67,
        1158.08,
        1129.06,
        1100.04,
        1068.78,
        1102.13,
        1079.86,
        1029.01,
        1032.81,
        995.74,
        979.22,
        924.57,
        901.16,
        868.52,
        964.42,
        902.96,
        899.91,
        902.52,
        926.63,
        899.92,
        911.75,
        879.48,
        857.78,
        862.70,
        868.01,
        868.61,
        867.72,
        831.92,
        841.49,
        828.46,
        918.32,
        902.51,
        900.41,
        873.43,
        885.39,
        897.63,
        892.44,
        879.04,
        850.83,
        848.52,
        918.32,
        902.51,
        900.41,
        873.43,
        885.39,
        897.63,
        892.44,
        879.04,
        850.83,
        848.52,
        844.87,
        834.54,
        832.48,
        815.48,
        811.23,
        821.20,
        805.10,
        794.49,
        801.23,
        788.80,
        769.70,
        789.80,
        763.46,
        758.57,
        773.49,
        764.45,
        739.66,
        757.55,
        731.12,
        724.06,
        732.70,
        723.80,
        714.91,
        723.46,
        705.10,
        708.90,
        723.75,
        703.06,
        684.51,
        692.63,
        683.14,
    ];
    var oneDay = 24 * 3600 *1000;
    var fiveMinutes = 300 * 1000;

    const __date=new Date();
    const currentDate={
      year:__date.getFullYear(),
      month:__date.getMonth()+1,
      day:__date.getDate()-1,
      hours:__date.getHours(),
      minutes:__date.getMinutes(),
      seconds:__date.getSeconds()
    }

    var timestr = `${currentDate.year}/${currentDate.month}/${currentDate.day} ${currentDate.hours}:${currentDate.minutes}:${currentDate.seconds}`;
    var startTime = +new Date(timestr)-fiveMinutes;

    //把new Date出来的时间格式转换为data123中的日期格式
    function riqigeshi(now){
        return now.toLocaleDateString() + ' ' + now.getHours() + now.toLocaleTimeString().substr(-6,6)
    }

    //用来返回data123一样的数据格式
    function chartData(i,data,now) {
        return {
            value: [
                riqigeshi(now),
                data[i]/1024,
            ]
        }
    }

    //把原数据改成data123一样的格式
    function changeData(datain) {
        var liuru = [];
        for (var i = 0; i < 289; i++) {
            startTime = new Date(+startTime + fiveMinutes);
            liuru.push(chartData(i,datain,startTime));
        }
        return liuru;
    }
    var liuru = changeData(data_in);

    var chart = echarts.init(document.getElementById("zxt"));
    var option = {
        grid:{
            x:'3.6%',
            y:'5%',
            x2:'2.4%',
            y2:'12%',
        },
        xAxis:{
            type:'time',
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
            splitNumber:12
        },
        yAxis:{
          show:false,
            type:'value',
            axisLabel:{
                formatter:'{value} G'       //给Y轴上的刻度加上单位
            },
        },
        dataZoom: [
            {
                type: 'slider',//数据滑块
                start:0,
                show:false,
                minSpan:8,    //5min
                // minSpan:16,   //10min
                // minSpan:24,   //15min
                // minSpan:50,   //30min
                dataBackground:{
                    lineStyle:{
                        color:'#95BC2F'
                    },
                    areaStyle:{
                        color:'#95BC2F',
                        opacity:1,
                    }
                },
                // fillerColor:'rgba(255,255,255,.6)'
            },
            {
                type:'inside'//使鼠标在图表中时滚轮可用
            }
        ],
        tooltip:{
            trigger: 'axis',
            formatter : function(params) {
                var result = params[0].value[0];
                params.forEach(function(item) {

                    result += '<br/>';
                    result += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + item.color + '"></span>';

                    result += isNaN(item.value[1]) ? 0 : parseInt(item.value[1]*1024);
                });
                return result;
            },
        },
        series:{
            itemStyle:{
              normal:{
                color:"#22A5F7"
              }
            },
            type: 'line',
            showSymbol: false,
            symbolSize:12,
            data: liuru,
        }
    };

    chart.setOption(option);
  }
  render(){

    return(

                  <div id="zxt" style={{...this.props}} className={styles.zxt}></div>



    )
  }
}
