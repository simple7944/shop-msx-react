
import classes from "./ProductInfo.module.css"

const ProductInfo = (props) => {
    return ( 
        <div className={classes.productInfo}>
            <p className={classes.title}>{props.product.name}</p>
            <div className={classes.status}>
                <p className={classes.code}>Код товару: {props.product.code}</p>
                <p className={classes.condition}>Новое</p>
            </div>
            <p className={classes.price}>{props.product.price} грн</p>
            <button className={classes.buyButton} onClick={props.buyAction}>Купить</button>
            <p className={classes.description}>{props.product.description}</p>
        </div>
    )
}

export default ProductInfo