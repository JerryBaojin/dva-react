import React from 'react';

import styles from "./tab.less";

export default class TabBar extends React.Component {


  render() {
    return (
    <div>
    <div className={styles.tab}>
        <span>logo</span>
        <div   className={styles.bar}>
              <ul>
                    <li key="datas">
                      数据看板
                    </li>
                    <li key="node">
                      节点展示
                    </li>
                    <li key="trans">
                      交易信息
                    </li>
                    <li key="app">
                      区块展示
                    </li>
                    <li key="map">
                    数据地图
                    </li>
                    <li key="account">
                      账户信息
                    </li>
              </ul>
        </div>
        <span className={styles.userState}>
          <span>admin</span>
          <span>|</span>
          <span>退出</span>
        </span>
    </div>
      <div className={styles.botton}></div>
    </div>
    );
  }
}
