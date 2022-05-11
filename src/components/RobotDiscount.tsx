import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext, appSetStateContext } from "../AppState";
import withAddToCart from "./AddToCart";

export interface RobotProps {
  id: string;
  name: string;
  email: string;
  addToCart: (id, name) => void;
}
// // 用户的输入
// const userProvidePropsString = `{"dangerouslySetInnerHTML":{"__html":"<img onerror='alert(\\"xss\\");' src='empty.png' />"}}`;
// // 经过 JSON 转换
// const userProvideProps = JSON.parse(userProvidePropsString);

const RobotDiscount: React.FC<RobotProps> = ({ id, name, email, addToCart }) => {
  // return <div {...userProvideProps} />;

  const value = useContext(appContext);

  return (
    <li className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt='' />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者名称：{value.username}</p>
      <button
        onClick={() => {
          addToCart(id, name);
        }}
      >
        加入购物车
      </button>
    </li>
  );
};

export default withAddToCart(RobotDiscount);
