import React from 'react';
import { connect } from 'dva';

import styles from './IndexPage.less';
import { NodeDatas } from "../components/component/dataBox/Node";
import ContainerBox from '../components/component/containerBox/container';
class IndexPage extends  React.Component {
  constructor(props) {
      super(props);
  }
  //str.replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  render(){

    const childPropsOne={
      BoxStyle:{
        width:"97%",
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
      <div>
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
                  <div>图表</div>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.transationTable}>
            <ContainerBox {...childPropsOne}>
              <div>123</div>
            </ContainerBox>
          </div>
      </div>

      <div className={styles.eTables}>
        <div>
            <ContainerBox {...childPropsTwo} >
              <div>123</div>
            </ContainerBox>
        </div>

        <div>
            <ContainerBox {...childPropsThree}>
              <div>123</div>
            </ContainerBox>
        </div>
      </div>

      </div>
    )
  }
}


IndexPage.propTypes = {
};

export default connect()(IndexPage);
