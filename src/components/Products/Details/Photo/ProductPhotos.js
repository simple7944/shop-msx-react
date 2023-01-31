import classes from "./ProductPhotos.module.css";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ProductPhotos = (props) => {
  let images = props.product.images
console.log(images)
  return (
    <div className={classes.photosContainer}>
      <PhotoProvider>
        <div>
          <PhotoView key={"main"} src={images[0]}>
            <img className={classes.mainImage} src={images[0]} alt="" />
          </PhotoView>
        </div>
        {images.map((item) => (
          <PhotoView
            key={item}
            src={item}>
            <img className={classes.smallImage} src={item} alt="" />
          </PhotoView>
        ))}
      </PhotoProvider>
    </div>
  );
};

export default ProductPhotos;
