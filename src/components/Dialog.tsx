import React, { useEffect, useState } from "react";
import styles from "./Dialog.module.css";

interface PropsType {
  /** 是否显示弹窗 */
  show: boolean;
  /** dialog的自定义类名 */
  customClass?: string;
  /** 关闭前回调 会暂停关闭 */
  beforeClose?: () => void;
  /** 关闭后回调 */
  onClose?: () => void;
  /** dialog显示时 是否lock背景滚动 */
  lockScroll?: boolean;
  /** 关闭延时(ms) */
  delay?: number;
  /** 子元素 */
  children: any;
}

const Dialog: React.FC<PropsType> = ({ show, customClass, beforeClose, onClose, lockScroll, delay, children }) => {
  //   useEffect(() => {
  //     onClose && onClose();
  //   }, [onClose, show]);

  let debounceTimer: any = null;

  /** 防抖函数 */
  const debounce = (fun, time) => {
    //防抖是规定时间内再次触发则重新计时，只保留最后一次事件
    if (debounceTimer) {
      clearTimeout(debounceTimer);
      debounceTimer = null;
    }
    debounceTimer = setTimeout(fun, time);
  };

  let throttleTimer: any = null;

  /** 节流函数 */
  const throttle = (fun, time) => {
    // 节流是规定时间内，只保留第一次事件
    if (throttleTimer) {
      return;
    }
    throttleTimer = setTimeout(() => {
      fun();
      clearTimeout(throttleTimer);
      throttleTimer = null;
    }, time);
  };

  const onClickClose = () => {
    //   TODO 加入防抖，多次点击只保留最后一次
    if (delay) {
      debounce(closeDialog, delay);
    }
  };

  const closeDialog = () => {
    if (beforeClose) {
      beforeClose();
      return;
    }
    onClose && onClose();
  };

  return (
    <div className={`${styles.container} ${show ? "" : styles.hidden}`}>
      <div className={`${styles.body} ${customClass}`}>
        {children}
        <button onClick={onClickClose}>close</button>
      </div>
    </div>
  );
};

export default Dialog;
