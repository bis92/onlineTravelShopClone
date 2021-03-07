import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import UserCardBlock from "./Sections/UserCardBlock";
import {
  getCartItems,
  removeCartItem,
  onSuccessBuy,
} from "../../../_actions/user_actions";
import { Empty, Result } from "antd";
import Paypal from "../../utils/Paypal";

function CartPage(props) {
  const dispatch = useDispatch();

  const [Total, setTotal] = useState(0);
  const [ShowTotal, setShowTotal] = useState(false);
  const [ShowSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    let cartItems = [];

    if (props.user.userData && props.user.userData.cart.length > 0) {
      props.user.userData.cart.forEach((item) => {
        cartItems.push(item.id);
      });
      dispatch(getCartItems(cartItems, props.user.userData.cart)).then(
        (response) => {
          calculateTotal(response.payload);
        }
      );
    }
  }, [props.user.userData]);

  let calculateTotal = (cartDetail) => {
    let total = 0;

    cartDetail.forEach((item) => {
      total += parseInt(item.price, 10) * item.quantity;
    });

    setTotal(total);
    setShowTotal(true);
  };

  const removeFromCart = (productId) => {
    dispatch(removeCartItem(productId)).then((response) => {
      if (response.payload.productInfo.length <= 0) {
        setShowTotal(false);
      }
    });
  };

  const transactionSuccess = (data) => {
    dispatch(
      onSuccessBuy({
        paymentData: data,
        cartDetail: props.user.cartDetail,
      })
    ).then((response) => {
      if (response.payload.success) {
        setShowTotal(false);
        setShowSuccess(true);
      }
    });
  };

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h1>My Cart</h1>
      <UserCardBlock
        products={props.user.cartDetail}
        removeItem={removeFromCart}
      />

      {ShowTotal ? (
        <div style={{ marginTop: "2rem" }}>
          <h2>Total Amount:${Total}</h2>
        </div>
      ) : ShowSuccess ? (
        <Result status="success" title="Successfully Purchased Items!" />
      ) : (
        <div>
          <br />
          <Empty description={false} />
        </div>
      )}

      {ShowTotal && <Paypal total={Total} onSuccess={transactionSuccess} />}
    </div>
  );
}

export default CartPage;
