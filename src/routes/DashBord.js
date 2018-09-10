import React from 'react';
import styles from "./dashbord.less";
import { NodeDatas } from "../components/component/dataBox/Node";
import ContainerBox from '../components/component/containerBox/container';

import {Progress} from 'antd';
import TradTables from "../components/component/TablesChart/TablesChart";
import ZxT from "../components/component/zxt/zxt";
import ReactBubbleChart from "react-d3-bubbles";
import WorldMap from "../components/component/WorldMap/WorldMap";
import { connect } from 'dva';

const data = [
  {
    index: 1,
    name: "A",
    color: "#f48fb1",
    radius: 15
  },{
    index: 1,
    name: "A",
    color: "#f48fb1",
    radius: 15
  },{
    index: 1,
    name: "A",
    color: "#f48fb1",
    radius: 15
  },{
    index: 1,
    name: "A",
    color: "#f48fb1",
    radius: 15
  },{
    index: 1,
    name: "A",
    color: "#f48fb1",
    radius: 15
  },{
    index: 1,
    name: "A",
    color: "#f48fb1",
    radius: 15
  },{
    index: 1,
    name: "A",
    color: "#f48fb1",
    radius: 15
  },
  {
    index: 1,
    name: "B",
    color: "#ffab91",
    radius: 34
  },
  {
    index: 2,
    name: "C",
    color: "#b87fe9",
    radius: 32
  },
  {
    index: 3,
    name: "D",
    color: "#64b5f6",
    radius: 32
  },
  {
    index: 4,
    name: "E",
    color: "#81c784",
    radius: 18
  },
  {
    index: 5,
    name: "F",
    color: "#f48fb1",
    radius: 19
  },
  {
    index: 6,
    name: "G",
    color: "#64b5f6",
    radius: 22
  }
];

class DashBord extends React.Component {
  constructor(props){
    super(props)
    this.state={
      LO:{
        Left:{
          color:"#22A5F7 ",
          data:26502,
          text:"区块链节点数量"
        },
        Right:{
          color:"#8A77ED",
          data:"26,500",
          text:"区块链高度"
        }
      }
    }
  }
  getPercentComputed(){
    const data=[
        {
          data:75,
          tag:"活跃会员"
        },
        {
          data:75,
          tag:"企业会员"
        },
        {
          data:75,
          tag:"个人会员"
        }
      ]
      return data
  }

 componentDidMount(){
  const {DashBord,dispatch}=this.props;

  // dispatch({
  //   type:"App/getTotal",
  //   payload:{a:2}
  // }).then(()=>{
  //   console.log(this.props)
  // })

 }
  render(){
        const BoxStyle={
            marginTop:"20px",
            width:"450px",
            height:"430px"

        }
        const DataSourceOne={
          BoxStyle:{
            ...BoxStyle
          },
          leftText:"会员统计",
          showRight:false
        }
        const DataSourceTwo={
          BoxStyle:{
            width:"920px",
            height:"330px"
          },
          leftText:"会员统计",
          showRight:false
        }
        const RO={
            Left:{
              color:"#33D6CB",
              data:"26,500",
              text:"创新卷发行量"
            },
            Right:{
              color:"#ED5FB4",
              data:"26,500",
              text:"创新卷使用量"
            }
          }
        const WorldMapDates={
          style:{
            width:"100%",
            height:"100%"
          },
          data:{a:1}
        }
      return(
        <div  className={styles.container}>
            <div className={styles.HeadPart}>
                 <div className={styles.Float}>
                    <NodeDatas {...this.state.LO}/>
                    <ContainerBox {...DataSourceOne}>
                      <div className={styles.ca}>
                            <div>
                                  <ul>
                                    <li>
                                      <div  className={`n`}>10123</div>
                                      <div className={`nd`}> 当前在线</div>
                                    </li>
                                    <li>
                                    <div  className={`n`}>10123</div>
                                    <div className={`nd`}> 会员总数</div>
                                    </li>
                                  </ul>
                            </div>
                        <div>
                            <ul>
                                  {this.getPercentComputed().map((val,index)=>{
                                    return    <li key={index}>
                                                    <div>
                                                      <Progress style={{color:"white"}} className={styles.dirProgress} strokeColor="#47D1FC" type="circle" percent={val.data} />
                                                    </div>
                                                    <div className={`nd`} style={{marginTop: "10px"}}> {val.tag}</div>
                                               </li>
                                  })}
                            </ul>
                        </div>
                        </div>
                    </ContainerBox>
                 </div>
                <div>
                  <WorldMap {...WorldMapDates}/>
                </div>
                <div className={styles.Float}>
                  <NodeDatas {...RO}/>
                  <ContainerBox {...DataSourceOne} leftText="最新交易">

                    <div className={styles.MainBox}>
                      <ul>
                          <li><div className={styles.Items}>
                            <span>用户</span>
                            <span>单笔交易量</span>
                          </div></li>
                          <li className={styles.Table}><span><TradTables/></span></li>
                      </ul>
                    </div>
                  </ContainerBox>
                </div>
            </div>
            <div className={styles.FootPart}>
              <ContainerBox {...DataSourceTwo} leftText="会员行业">
                <div  className={styles.PopArea}>
                  <ReactBubbleChart data={data} />
                </div>
              </ContainerBox>
              <ContainerBox {...DataSourceTwo} leftText="交易趋势">
                <div className="containerA">
                  <ZxT width={"100%"} height={"280px"}/>
                </div>
              </ContainerBox>
            </div>

        </div>
      )

  }
}
// function mapStateToProps(state){
//   return state
// }

export default connect(({ App }) => ({
  DashBord:App,
}))(DashBord);
