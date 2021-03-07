import React from "react";
import {useDispatch } from 'react-redux';
import { Descriptions, Button } from "antd";
import { addToCart } from '../../../../_actions/user_actions';

function ProductInfo(props) {

    const dispatch = useDispatch();

    const clickHandler = () => {

        dispatch(addToCart(props.detail._id))
            
    }

  return (
    <div>
      <Descriptions title="Product Info">
        <Descriptions.Item label="Price">${props.detail.price}</Descriptions.Item>
        <Descriptions.Item label="Sold">{props.detail.sold}</Descriptions.Item>
        <Descriptions.Item label="Views">{props.detail.views} views</Descriptions.Item>
        <Descriptions.Item label="Description">
          {props.detail.description}
        </Descriptions.Item>
      </Descriptions>

      <br />
      <br />
      <br />

        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <Button size="large" type="danger" shape="round" onClick={clickHandler}>
                Add To Cart
            </Button>
        </div>

    </div>
  );
}

export default ProductInfo;
