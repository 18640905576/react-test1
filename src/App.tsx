import React from "react";
// import "./App.css";
import logo from "./assets/logo.svg";
import styles from "./App.module.css";
// import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}

interface State {
  robotGallery: any[];
  count: number;
}

class App extends React.Component<Props, State> {
  // 生命周期一 初始化
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
      count: 0
    };
  }
  // 判断 state 和 props 是否有变化 处于render之前
  // 这个生命周期是static，可以直接在类上面调用，而不能被实例调用
  static getDerivedStateFromProps(nextProps, prevState) {}

  // 组件创建好dom元素后，挂载进页面的时候使用，只会渲染一次 处于render之后
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          robotGallery: data
        });
      });
  }

  // 生命周期二 更新
  // 判断是否需要不更新组件 默认true(全部更新) render之前
  shouldComponentUpdate(nextProps, nextState) {
    return true;
    // return nextState.robotGallery !== this.state.robotGallery;
  }
  // 组件更新后调用
  componentDidUpdate() {}

  // 生命周期三 销毁
  // 组件销毁时
  componentWillUnmount() {}

  // 渲染UI
  render() {
    return (
      <div>
        <div className={styles.appHeader}>
          <img src={logo} alt='' />
        </div>
        <ShoppingCart />
        <button
          onClick={() => {
            this.setState((preState, preProps) => {
              return { count: preState.count + 1 };
            });
          }}
        >
          Click this to add count
        </button>
        <span>count: {this.state.count}</span>

        <ul className={styles.robotList}>
          {this.state.robotGallery.map((r) => (
            <Robot id={r.id} name={r.name} email={r.email} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
