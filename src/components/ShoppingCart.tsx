import React from "react";
import { AiOutlineShopping } from "react-icons";

interface Props {}

interface State {
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isOpen: false };
  }

  changeOpenCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.target, e.currentTarget);
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <button onClick={this.changeOpenCart}>购物车2(件)</button>
        <div style={{ display: this.state.isOpen ? "block" : "none" }}>
          <ul>
            <li>robot1</li>
            <li>robot2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
