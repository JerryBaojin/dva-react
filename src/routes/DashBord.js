import React from 'react';
import styles from "./dashbord.less";
import { NodeDatas } from "../components/component/dataBox/Node";
import ContainerBox from '../components/component/containerBox/container';

export default class DashBord extends React.Component {

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
      return(
        <div  className={styles.container}>
            <div className={styles.HeadPart}>
                 <div className={styles.Float}>
                    <NodeDatas/>
                    <ContainerBox {...DataSourceOne}>
                      <div>123</div>
                    </ContainerBox>
                 </div>
                <div>map</div>
                <div className={styles.Float}>
                  <NodeDatas/>
                  <ContainerBox {...DataSourceOne}>
                    <div>123</div>
                  </ContainerBox>
                </div>
            </div>
            <div className={styles.FootPart}>
              <ContainerBox {...DataSourceTwo}>
                <div>123</div>
              </ContainerBox>
              <ContainerBox {...DataSourceTwo}>
                <div>123</div>
              </ContainerBox>
            </div>

        </div>
      )
  }
}
