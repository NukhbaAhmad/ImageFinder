import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  // List of images
  const image = props.images.map((image) => {
    return <ImageCard image={image} key={image.id} />;
  });

  // Display images
  return <div className="ImageList">{image}</div>;
};
export default ImageList;
