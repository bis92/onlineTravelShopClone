import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

function ProductImage(props) {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    let images = [];

    if (props.detail.images && props.detail.images.length > 0) {
      props.detail.images.map((image) =>
        images.push({
          original: `https://travelshopping.herokuapp.com/${image}`,
          thumbnail: `https://travelshopping.herokuapp.com/${image}`,
        })
      );
      setImages(images);
    }
  }, [props.detail]);

  return (
    <div>
      <ImageGallery items={Images} />
    </div>
  );
}

export default ProductImage;
