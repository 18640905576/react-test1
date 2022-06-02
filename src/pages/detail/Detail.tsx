import React from "react";

interface State {
  count: number;
}

interface Props {}

class Detail extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    // 直接调用 setState
    this.setState({ count: this.state.count + 1 });
    console.log("console: " + this.state.count); // 0
    // 回调函数
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("console from callback: " + this.state.count); // 2
    });
    // 调用函数+回调
    this.setState(
      (prevState) => {
        console.log("console from func: " + prevState.count, this.state.count); // 1
        return {
          count: prevState.count + 1
        };
      },
      () => {
        console.log("last console: " + this.state.count);
      }
    );
  }

  render() {
    return <div>我是类组件</div>;
  }
}

export default Detail;
