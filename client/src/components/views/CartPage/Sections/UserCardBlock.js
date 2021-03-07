import React from "react";
import "./UserCardBlock.css";
import { Button } from "antd";

function UserCardBlock(props) {
  const renderCartImage = (images) => {
    return `http://localhost:5000/${images[0]}`;
  };

  const renderCartItems =
    props.products &&
    props.products.map((product, index) => (
      <tr key={index}>
        <td>
          {
            <img
              src={renderCartImage(product.images)}
              style={{ width: "70px" }}
            />
          }
        </td>
        <td>${product.price}</td>
        <td>{product.quantity}EA</td>
        <td>
          <Button onClick={() => props.removeItem(product._id)}>Remove</Button>
        </td>
      </tr>
    ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Remove From Cart</th>
          </tr>
        </thead>
        <tbody>{renderCartItems}</tbody>
      </table>
    </div>
  );
}

export default UserCardBlock;
