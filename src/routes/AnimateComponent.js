import React from 'react';

import { InputNumber, Button, Checkbox } from 'antd';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';

TweenOne.plugins.push(Children);

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      animation: {
          Children: { floatLength: 0 },
          duration: 1000,
        },
      formatMoney: false,
    };
  }



  render() {
    console.log(this.props);
    const {value}=this.props;
    return (

          <TweenOne
            animation={{
              Children: { value:  value || 10000, floatLength: 0 },
              duration: 1000,
            }}
          >
            0
          </TweenOne>



    );
  }
}
export default Demo;
