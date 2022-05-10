import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext, appSetStateContext } from "../AppState";

interface RobotProps {
  id: string;
  name: string;
  email: string;
}
// // 用户的输入
// const userProvidePropsString = `{"dangerouslySetInnerHTML":{"__html":"<img onerror='alert(\\"xss\\");' src='empty.png' />"}}`;
// // 经过 JSON 转换
// const userProvideProps = JSON.parse(userProvidePropsString);

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  // return <div {...userProvideProps} />;

  const value = useContext(appContext);
  const setStateContext = useContext(appSetStateContext);

  const addToCart = (id, name) => {
    if (setStateContext) {
      setStateContext((state) => {
        return {
          ...state,
          shoppingCart: {
            items: [
              ...state.shoppingCart.items,
              {
                id,
                name
              }
            ]
          }
        };
      });
    }
  };

  return (
    <li className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt='' />
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

export default Robot;
