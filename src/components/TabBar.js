import React from 'react';

import styles from "./tab.less";
import { Link } from 'dva/router';
export default class TabBar extends React.Component {


  render() {
    return (
    <div>
    <div className={styles.tab}>
        <span>logo</span>
        <div   className={styles.bar}>
              <ul>
                    <li key="datas">
                    <Link to="/">
                      数据看板
                      </Link>
                    </li>
                    <li key="node">
                    <Link to="/node">
                      节点展示
                            </Link>
                    </li>

                    <li key="transaction">
                    <Link to="/transaction">
                      交易信息
                      </Link>
                    </li>
                    <li key="BlockShow">
                          <Link to="/BlockShow">
                      区块展示
                      </Link>
                    </li>
                    <li key="datamap">
                          <Link to="/datamap">
                    数据地图
                    </Link>
                    </li>
                    <li key="accountInfos">
                          <Link to="/accountInfos">
                              账户信息
                          </Link>
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
