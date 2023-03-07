import classes from "./Condition.module.css";

const Condition = (props) => {

    const title = props.condition == 0 ? "Новое" : "Б/у"

    return(
        <div className={props.condition == 0 ? classes.new : classes.used}>{title}</div>
    )
}

export default Condition