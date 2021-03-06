import React from "react";
import { Carousel } from "antd";

function ImageSlider(props) {
  return (
    <div>
      <Carousel autoplay>
        {props.images.map((image, index) => (
          <div key={index}>
            <img
              src={`https://travelshopping.herokuapp.com/${image}`}
              alt="images"
              style={{ width: "100%", height: "150px" }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
