import React, { useState, useContext } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { appContext } from "../AppState";

interface Props {}

interface State {
  isOpen: boolean;
}

const ShoppingCart = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = useContext(appContext);

  const changeOpenCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //   target 事件发生的元素 currentTarget 事件处理绑定的元素
    console.log(e.target, e.currentTarget);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={changeOpenCart}>
        <AiOutlineShopping />
        购物车{value.shoppingCart?.items?.length}(件)
      </button>
      <div style={{ display: isOpen ? "block" : "none" }}>
        <ul>
          {value.shoppingCart?.items?.map((robot) => (
            <li>{robot?.id}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// class ShoppingCart extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = { isOpen: false };
//   }

//   changeOpenCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     //   target 事件发生的元素 currentTarget 事件处理绑定的元素
//     console.log(e.target, e.currentTarget);
//     this.setState({ isOpen: !this.state.isOpen });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.changeOpenCart}>
//           <AiOutlineShopping />
//           购物车2(件)
//         </button>
//         <div style={{ display: this.state.isOpen ? "block" : "none" }}>
//           <ul>
//             <li>robot1</li>
//             <li>robot2</li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

export default ShoppingCart;
