import React from 'react';
import styles from './container.less';
export default class box extends React.Component {
  constructor(props){
    super(props)
  }
  static defaultProps={
    BoxStyle:{
      width:"920px",
      height:"530px"
    }
  }
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    const {BoxStyle,leftText,showRight}=this.props;
    console.log(showRight)
    return(
      <div style={BoxStyle} className={`${styles.marginTop} boxShadow`}>
        <div>
          <span>{leftText}</span>
          {showRight?
            <span>交易时期</span>
            :<span></span>
          }

        </div>
        <div>
        {this.props.children}
        </div>
      </div>
    )
  }
}
