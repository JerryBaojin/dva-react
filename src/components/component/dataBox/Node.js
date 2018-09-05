import React from 'react';
import styles from './Node.less';
export class NodeDatas extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div>
        <div className={styles.node}>
            <div className={styles.container}>

                <span style={{color:"#22A5F7"}}>430123</span>
                <span>区块链节点数量</span>
            </div>
              <div className={styles.middleLine}></div>
            <div className={styles.container}>
                <span style={{color:"#8A77ED"}}>430123</span>
                <span>区块链高度</span>
            </div>

        </div>
      </div>
    )
  }
}
