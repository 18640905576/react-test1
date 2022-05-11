import React, { useContext } from "react";
import { appSetStateContext } from "../AppState";
import { RobotProps } from "./RobotDiscount";

// HOC函数
const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
  return (props) => {
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
    return <ChildComponent {...props} addToCart={addToCart} />;
  };
};

export default withAddToCart;
