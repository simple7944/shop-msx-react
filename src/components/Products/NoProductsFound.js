import classes from './NoProductsFound.module.css';

const NoProductsFound = () => {
  return (
    <div className={classes.noproducts}>
      <p>
        Продуктов не найдено!
      </p>
    </div>
  );
};

export default NoProductsFound;