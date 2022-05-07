import React from "react";
import styles from "./Robot.module.css";

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

  return (
    <li className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt='' />
      <h2>{name}</h2>
      <p>{email}</p>
    </li>
  );
};

export default Robot;
