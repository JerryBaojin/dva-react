import React from 'react';
import echarts from 'echarts';
import { Button } from 'antd';
import styles from "./tab.less";
import { Link } from 'dva/router';
const styleBorder={
  color: "#22A5F7",
  border:" 1px solid #22A5F7"
}
export default class TabBar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      path:"datas"
    }
  }
handleRedirect(val){
  this.setState({
    path:val
  })
}
componentDidMount(){

}
  render() {
    const PathLists=[
      {
        key:"datas",
        path:"/",
        content:"数据看板"
      },{
        key:"node",
        path:"/node",
        content:"节点展示"
      },{
        key:"transaction",
        path:"/transaction",
        content:"交易信息"
      },{
        key:"BlockShow",
        path:"/BlockShow",
        content:"区块展示"
      },{
        key:"datamap",
        path:"/datamap",
        content:"数据地图"
      },{
        key:"accountInfos",
        path:"/accountInfos",
        content:"账户信息"
      },
  ]
    return (
    <div>
    <div className={styles.tab}>
        <span>logo</span>
        <div  className={styles.bar}>
              <ul>
              {PathLists.map((val)=>{
                return <li key={val.key} onClick={()=>this.handleRedirect(val.key)} style={this.state.path===val.key?styleBorder:null}>
                          <Link to={val.path}>
                          {val.content}
                          </Link>
                        </li>
              })}
              <Button>Loop</Button>
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
