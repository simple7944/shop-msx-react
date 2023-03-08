import classes from "./CategoriesButton.module.css";
import { Dropdown } from "react-bootstrap";
import ComputerIcon from "../../../Icons/category/ComputerIcon";

const CategoriesButton = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        className={classes.cb}
        variant="success"
        id="dropdown-basic"
      >
        Каталог товаров
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {[0,1,3,4,2].map((index) => (
          <Dropdown.Item href={"/" + index}>
            <CategoryButton type={index}></CategoryButton>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const CategoryButton = (props) => {
  const type = props.type;

  let categoryName = "";
  let iconName = "icons/";

  switch (type) {
    case 0:
      categoryName = "Винтажные компьютеры";
      iconName += "vintage-personal.png";
      break;
    case 1:
      categoryName = "Аксессуары";
      iconName += "usb.png";
      break;
    case 2:
      categoryName = "Консоли";
      iconName += "game-controller.png";
      break;
    case 3:
      categoryName = "Инструкция";
      iconName += "book.png";
      break;
    case 4:
      categoryName = "Дискеты, кассеты, диски";
      iconName += "diskette.png";
      break;
  }

  return (
    <div className={classes.categoryButton}>
      <img className={classes.categoryIcon} src={iconName}></img>
      {categoryName}
    </div>
  );
};

export default CategoriesButton;
