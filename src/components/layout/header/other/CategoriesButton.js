import classes from "./CategoriesButton.module.css";
import { Dropdown } from "react-bootstrap";
import CartIcon from "../../../cart/CartIcon";
import { useEffect } from "react";
import { getAllProducts } from "../../../../api/api";
import useHttp from "../../../../hooks/use-http";

const CategoriesButton = () => {
  const {
    sendRequest,
    status,
    data: loadedProducts,
    error,
  } = useHttp(getAllProducts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let categoty = "null";

  if (loadedProducts) {
    categoty = loadedProducts[0].name;
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Каталог товаров
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/products">
          <CategoryButton name="аксесуары trgkjnlknlk"></CategoryButton>
        </Dropdown.Item>
        <Dropdown.Item href="/add">{categoty}</Dropdown.Item>
        <Dropdown.Item href="#/action-3">консоли</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const CategoryButton = (props) => {
  return (
    <div className={classes.categoryButton}>
      <svg
        className={classes.icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </svg>
      {props.name}
    </div>
  );
};

export default CategoriesButton;
