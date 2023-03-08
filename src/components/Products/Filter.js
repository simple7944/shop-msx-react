import classes from "./Filter.module.css";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const Filter = (props) => {
  const urlParams = new URLSearchParams(window.location.search);
  let condition = urlParams.get("condition");

  const linkParams = useParams();
  const { category } = linkParams;

  const [isNew, setIsNew] = useState(condition === "new");
  const [isUsed, setIsUsed] = useState(condition === "used");
  const history = useHistory();

  const newSwitchAction = () => {
    updateConditionURLParam(isUsed, !isNew);
    setIsNew(!isNew);
  };

  const usedSwitchAction = () => {
    updateConditionURLParam(!isUsed, isNew);
    setIsUsed(!isUsed);
  };

  const updateConditionURLParam = (isUsed, isNew) => {
    let params = "";
    let newConditionValue = "";
    if (isUsed && !isNew) {
      params = "?condition=used";
      newConditionValue = "used";
    } else if (isNew && !isUsed) {
      params = "?condition=new";
      newConditionValue = "new";
    }
    props.updateCondition(newConditionValue);
    history.push({
      search: params,
    });
  };

  const getCategoryName = () => {
    let categoryName = "Все продукты";
    if (category) {
      switch (category) {
        case "0":
          categoryName = "Винтажные компьютеры";
          break;
        case "1":
          categoryName = "Аксессуары";
          break;
        case "2":
          categoryName = "Консоли";
          break;
        case "3":
          categoryName = "Инструкции";
          break;
        case "4":
          categoryName = "Дискеты, кассеты, диски";
          break;
      }
    }
    return categoryName;
  };

  return (
    <div>
      <span className={classes.category}>{getCategoryName()}</span>
      <span className={classes.title}>Состояние</span>
      <div className={classes.checkboxOverride}>
        <input
          type="checkbox"
          id="newInput"
          checked={isNew}
          onChange={newSwitchAction}
        />
        <label htmlFor="newInput"></label>
        <span className={classes.boxText}>Новое</span>
      </div>

      <div className={classes.checkboxOverride}>
        <input
          type="checkbox"
          id="usedInput"
          checked={isUsed}
          onChange={usedSwitchAction}
        />
        <label htmlFor="usedInput"></label>
        <span className={classes.boxText}>Б/у</span>
      </div>
    </div>
  );
};

export default Filter;
