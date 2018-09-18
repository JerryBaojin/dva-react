import React from 'react';
import styles from "./dashbord.less";
import { NodeDatas } from "../components/component/dataBox/Node";
import ContainerBox from '../components/component/containerBox/container';
import AnimateComponent from './AnimateComponent';
import {Progress} from 'antd';
import TradTables from "../components/component/TablesChart/TablesChart";
import ZxT from "../components/component/zxt/zxt";
import ReactBubbleChart from "react-d3-bubbles";
import WorldMap from "../components/component/WorldMap/WorldMap";
import { connect } from 'dva';
import {Rate,Carousel} from 'antd';
const star=require("../assets/images/star.svg");
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
            width:"500px",
            height:"430px"

        }
        const DataSourceSpeacil={
          BoxStyle:{
              width:"500px",

          },
          leftText:"会员统计",
          showRight:false
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
            width:"500px",
            height:"330px"
          },
          leftText:"会员统计",
          showRight:false
        }

        const DataSourceS={
          BoxStyle:{
            width:"825px",
            height:"330px"
          },
          leftText:"会员统计",
          showRight:false
        }

        const DataSourceThreee={
          BoxStyle:{
            flex:1,
            width:"220px",

          },
          leftText:"企业用户数",
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
        const LT1=[
          {
            left:{
              l1:"政策服务",
              datas:[261,1037641]
            },
            right:{
              r1:"基础服务",
              datas:[261,1037641]
            }
          },
          {
            left:{
              l1:"研发服务",
              datas:[261,1037641]
            },
            right:{
              r1:"创业孵化",
              datas:[261,1037641]
            }
          },
          {
            left:{
              l1:"成果转化",
              datas:[261,1037641]
            },
            right:{
              r1:"上云服务",
              datas:[261,1037641]
            }
          }
      ]
      return(
        <div  className={styles.container}>
            <div className={styles.HeadPart}>
                 <div className={styles.Float}>
                    <div className={`boxShadow ${styles.box1}`}>
                    <Carousel >
                    {LT1.map((val,index)=>{
                      return <div key={index}>
                          <div className={styles.FO} style={{marginBottom:"10px"}}>
                              <div className={styles.Left}>
                                  <div style={{marginBottom:"10px"}}>{val.left.l1}</div>

                                  <div style={{display:"flex",margin:"9px 0",color:"#00FFFF"}}>
                                    <span><img style={{width:"15px"}} src={require('../assets/images/l1.svg')}/></span>
                                    <span>交易笔数</span>
                                    <span className={styles.Number}> <AnimateComponent value={val.left.datas[0]}/> </span>
                                  </div>

                                  <div style={{display:"flex",color:"#FFFF00"}}>
                                    <span><img style={{width:"15px"}} src={require('../assets/images/l2.svg')}/></span>
                                    <span>交易笔数</span>
                                    <span className={styles.Number}><AnimateComponent value={val.left.datas[1]}/></span>
                                  </div>

                              </div>
                              <div className={styles.Right}>
                                <div style={{marginBottom:"10px"}}>{val.right.r1}</div>
                                <div style={{display:"flex",margin:"9px 0",color:"#00FFFF"}}>
                                  <span><img style={{width:"15px"}} src={require('../assets/images/l1.svg')}/></span>
                                  <span>交易笔数</span>
                                  <span className={styles.Number}> <AnimateComponent value={val.left.datas[0]}/></span>
                                </div>
                                <div style={{display:"flex",color:"#FFFF00"}}>
                                  <span><img style={{width:"15px"}} src={require('../assets/images/l2.svg')}/></span>
                                  <span>交易笔数</span>
                                  <span className={styles.Number}> <AnimateComponent value={val.left.datas[1]}/></span>
                                </div>
                              </div>
                          </div>
                          </div>
                    })}

                    <div >
                       <div className={styles.FO}>
                           <div className={styles.Left}>
                               <div style={{marginBottom:"10px"}}>创业集市</div>
                               <div style={{display:"flex",color:"#00FFFF"}}>
                                 <span><img style={{width:"15px"}} src={require('../assets/images/l1.svg')}/></span>
                                 <span>孵化空间面积</span>
                                 <span className={styles.Number}><AnimateComponent value={261}/></span>
                               </div>
                               <div style={{display:"flex",color:"#FFFF00"}}>
                                 <span><img style={{width:"15px"}} src={require('../assets/images/l2.svg')}/></span>
                                 <span>孵化空间数量</span>
                                 <span className={styles.Number}><AnimateComponent value={1037641}/></span>
                               </div>
                           </div>

                          </div>
                         </div>

                   </Carousel>




                    </div>

                    <div className={`boxShadow`} style={{width:"500px",margin:"10px 0",height:"300px","overflow":"hidden"}}>
                        <div className={styles.MainBox}>
                          <ul>
                              <li><div className={styles.Items}>
                                <span>最新用户</span>
                                <span>单笔交易量</span>
                              </div></li>
                              <li className={styles.Table}><span><TradTables/></span></li>
                          </ul>
                        </div>
                    </div>

                    <div  className={`boxShadow`} style={{display:"flex",width:"500px",padding:"13px"}}>
                      <div className={styles.l3}>
                        <img src={require("../assets/images/t1.svg")}  />
                        <div >
                          <div style={{fontFamily: "DIGIT",fontSize:"34px"}}><AnimateComponent value={430123}/></div>
                          <div style={{marginTop:"-10px"}}>区块链节点数量</div>
                        </div>
                      </div>

                      <div className={styles.l3}>
                        <img src={require("../assets/images/t1.svg")}  />
                        <div >
                          <div style={{fontFamily: "DIGIT",fontSize:"34px"}}><AnimateComponent value={430123}/></div>
                          <div style={{marginTop:"-10px"}}>区块链节点数量</div>
                        </div>
                      </div>
                    </div>

                 </div>
                <div>
                  <WorldMap {...WorldMapDates}/>
                </div>

                <div className={styles.Float}>
                      <div className={`boxShadow ${styles.Four}`} style={{padding:"10px"}}>
                        <ul style={{margin:0}}>
                            <li>
                                <div><img src={require('../assets/images/p1.svg')}/></div>
                                <div style={{color:"#00FEFB"}}><AnimateComponent value={26500}/></div>
                                <div>创新信用券</div>
                                <div>奖金池</div>
                            </li>
                            <li>
                                <div><img src={require('../assets/images/p2.svg')}/></div>
                                <div style={{color:"#FF8E00"}}><AnimateComponent value={128003}/></div>
                                <div>创新信用券</div>
                                <div>发放量</div>
                            </li>
                            <li>
                                <div><img src={require('../assets/images/p3.svg')}/></div>
                                <div style={{color:"#FDF40D"}}><AnimateComponent value={14762}/></div>
                                <div>创新信用券</div>
                                <div>使用量</div>
                            </li>
                            <li>
                                <div><img src={require('../assets/images/p4.svg')}/></div>
                                <div style={{color:"#8DFF00"}}><AnimateComponent value={10984}/></div>
                                <div>创新信用券</div>
                                <div>兑换量</div>
                            </li>
                        </ul>
                      </div>

                      <div className={`boxShadow ${styles.FourS}`} style={{padding:"15px"}}>
                        <div>创新信用券服务商</div>
                        <ul>
                            <li>
                                <div><AnimateComponent value={102}/></div>
                                <div>
                                  <img src={star}/>
                                </div>
                            </li>
                            <li>
                                <div><AnimateComponent value={102}/></div>
                                <div>
                                  <img src={star}/>  <img src={star}/>
                                </div>
                            </li>
                            <li>
                                <div><AnimateComponent value={102}/></div>
                                <div>
                                  <img src={star}/> <img src={star}/> <img src={star}/>
                                </div>
                            </li>
                            <li>
                                <div><AnimateComponent value={102}/></div>
                                <div>
                                  <img src={star}/><img src={star}/><img src={star}/><img src={star}/>
                                </div>
                            </li>
                            <li>
                                <div><AnimateComponent value={102}/></div>
                                <div>
                                  <img src={star}/><img src={star}/><img src={star}/><img src={star}/><img src={star}/>
                                </div>
                            </li>
                        </ul>
                      </div>

                      <div className={styles.bpNumber}>
                          <ContainerBox {...DataSourceThreee} >
                              {
                                [2947,4610,1382,2592,2113].map((val,index)=>{
                                  return <div key={index} style={{padding:"0 10px"}}>
                                              <span className={styles.Cnumber} style={{marginRight:"7px",fontSize:"20px"}}><AnimateComponent value={val}/></span>
                                              <span>(个)</span>
                                              <span> <Rate disabled style={{color:"#00EAFF"}} defaultValue={2} /> </span>
                                         </div>
                                })
                              }
                          </ContainerBox>
                          <ContainerBox {...DataSourceThreee} leftText="注册服务商">
                              {
                                [2947,4610,1382,2592,2113].map((val,index)=>{
                                  return <div key={index} style={{padding:"0 10px"}}>
                                              <span className={styles.Cnumber} style={{marginRight:"7px",fontSize:"20px"}}><AnimateComponent value={val}/></span>
                                              <span>(个)</span>
                                              <span> <Rate disabled style={{color:"#00EAFF"}} defaultValue={2} /> </span>
                                         </div>
                                })
                              }
                          </ContainerBox>
                      </div>

                </div>
            </div>
            <div className={styles.FootPart}>
            <ContainerBox {...DataSourceTwo}  leftText="交易趋势">
              <div className="containerA">
                <ZxT width={"100%"} height={"280px"}/>
              </div>
            </ContainerBox>

              <ContainerBox {...DataSourceS}  leftText="会员行业">
                <div  className={styles.PopArea}>
                  <ReactBubbleChart data={data} />
                </div>
              </ContainerBox>

              <ContainerBox {...DataSourceSpeacil} >
                <div className={styles.ca}>
                      <div>
                            <ul>
                              <li>
                                <div  className={`n`}><AnimateComponent value={10123}/></div>
                                <div className={`nd`}> 当前在线</div>
                              </li>
                              <li>
                              <div  className={`n`}><AnimateComponent value={10123}/></div>
                              <div className={`nd`}>会员总数</div>
                              </li>
                            </ul>
                      </div>
                  <div>
                      <ul>
                            {this.getPercentComputed().map((val,index)=>{
                              return    <li key={index}>
                                              <div>
                                                <Progress strokeColor={{color:"#38BDD8"}} className={styles.dirProgress} strokeColor="#47D1FC" type="circle" percent={val.data} />
                                              </div>
                                              <div className={`nd`} style={{marginTop: "10px"}}> {val.tag}</div>
                                         </li>
                            })}
                      </ul>
                  </div>
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

export default connect(({ App,loading }) => ({
  DashBord:App,
  loading
}))(DashBord);
