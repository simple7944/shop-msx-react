import classes from "./ProductDetails.module.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ProductDetails = () => {
  let imgs = [
    "images/0f2acd7f-21ac-44e0-be63-17befb892f32image.jpg",
    "images/2c8c702d-f1a8-48f0-bbb7-4e4036c8d365image (1).jpg",
  ];

  return (
    <PhotoProvider>
      {imgs.map((img) => (
        <PhotoView src={img} key={(Math.random() + 1).toString(36).substring(7)}>
          <img src={img} alt="" />
        </PhotoView>
      ))}
    </PhotoProvider>
  );
};

export default ProductDetails;
