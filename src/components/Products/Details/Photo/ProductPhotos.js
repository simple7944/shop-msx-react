import classes from "./ProductPhotos.module.css";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ProductPhotos = (props) => {
  let images = props.product.images.map((im) => im)
  let mainImage = images.splice(0, 1)
  return (
    <div className={classes.photosContainer}>
      <PhotoProvider>
        <div>
          <PhotoView key={"main"} src={mainImage}>
            <img className={classes.mainImage} src={mainImage} alt="" />
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
