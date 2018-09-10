import React from 'react';
import { connect } from 'dva';

import styles from './Transaction.less';
import { NodeDatas } from "../components/component/dataBox/Node";
import ContainerBox from '../components/component/containerBox/container';
import ZxT from "../components/component/zxt/zxt";
import ReactBubbleChart from "react-d3-bubbles";
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


class Transaction extends  React.Component {
  constructor(props) {
      super(props);
  }
  //str.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  tradeInfos(){
    const datas=[];
    for (let i = 0; i < 18; i++) {
      datas.push({
        time:"2018/08/31",
        company:"bibibib",
        tradeID:"asdadasdazx",
        detailsTrade:"12320",
        id:new Date().getTime()
      })
    }
    return datas;
  }
  handToCheck(val){
    console.log(val)
  }
  handleC(){
    console.log("paratre")
  }
  render(){

    const childPropsOne={
      BoxStyle:{
        width:"99%",
        height:"400px"
      },
      leftText:"交易趋势",
      showRight:true
    }
    const childPropsTwo={
      leftText:"交易关系图",
      showRight:true
    }
    const childPropsThree={
      leftText:"最新交易信息",
      showRight:false
    }
    return(
      <div style={{ maxWidth: "1860px",margin: "20px auto",marginTop:"0px"}}>
      <div style={{display:"flex"}}>
          <div className={styles.detailDatas}>
            <ul>
              <li>
                <NodeDatas />
              </li>
              <li>
                <div className={`boxShadow ${styles.historyCount}`}>
                    <div className={styles.historyDatas}>
                        <span>262651</span>
                        <div>历史交易数量</div>
                    </div>
                  <div></div>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.transationTable}>
            <ContainerBox {...childPropsOne} HandleChangeType={(val)=>this.handleC(val)}>
              <div>
                <ZxT width={"100%"} height={"280px"}/>
              </div>
            </ContainerBox>
          </div>
      </div>

      <div className={styles.eTables}>
        <div>
            <ContainerBox {...childPropsTwo} >
              <div>  <ReactBubbleChart data={data} /></div>
            </ContainerBox>
        </div>

        <div>
            <ContainerBox {...childPropsThree}>
              <div className={styles.tradeTable}>
                <div>
                  <ul>
                    <li>区块高度</li>
                    <li>交易企业</li>
                    <li>交易ID</li>
                    <li>单笔交易量</li>
                    <li>操作</li>
                  </ul>
                </div>
                <div className={`${styles.datas} scrollbar`}>
                  {this.tradeInfos().map((val,index)=>{
                    return <div className={styles.tradeInfos} key={index}>
                                <div>{val.time}</div>
                                <div>{val.company}</div>
                                <div>{val.tradeID}</div>
                                <div>{val.detailsTrade}</div>
                                <div onClick={()=>this.handToCheck(val.id)}>查看</div>
                          </div>
                  })}
                </div>
              </div>
            </ContainerBox>
        </div>
      </div>

      </div>
    )
  }
}


Transaction.propTypes = {
};

export default connect()(Transaction);
