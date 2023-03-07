import classes from "./OrderForm.module.css";
import { useEffect, useState } from "react";

const OrderForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("380");
  const [city, setCity] = useState("");
  const [post, setPost] = useState("");
  const [email, setEmail] = useState("")

  const [isValidName, setIsValidName] = useState(true);
  const [isValidSurname, setIsValidSurname] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isValidCity, setIsValidCity] = useState(true);
  const [isValidPost, setIsValidPost] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handlePhoneChange = (event) => {
    const re = /^[0-9\b]+$/;
    if (
      (event.target.value === "" || re.test(event.target.value)) &&
      event.target.value.length < 13
    ) {
      setPhone(event.target.value);
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handlePostChange = (event) => {
    setPost(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  

  const onSubmit = () => {
    const isNameValid = name.trim().length > 2;
    const isSurnameValid = surname.trim().length > 2;
    const isPhoneValid = phone.trim().length === 12;
    const isCityValid = city.trim().length > 2;
    const isPostValid = post.trim() > 0 ;
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    
    setIsValidName(isNameValid);
    setIsValidSurname(isSurnameValid);
    setIsValidPhone(isPhoneValid);
    setIsValidCity(isCityValid);
    setIsValidPost(isPostValid)
    setIsValidEmail(isEmailValid)

    if (isNameValid && isSurnameValid && isPhoneValid && isCityValid && isValidPost) {
      console.log("success");
    }
  };

  return (
    <div className={classes.container}>
      <span className={classes.title}>Контактная информация</span>

      <fieldset className={classes.textFieldContainer}>
        <label className={classes.label}>Имя</label>
        <input
          className={isValidName ? classes.textField : classes.errorTextField}
          onChange={handleNameChange}
          type="text"
        />
      </fieldset>

      <fieldset className={classes.textFieldContainer}>
        <label className={classes.label}>Фамилия</label>
        <input
          className={
            isValidSurname ? classes.textField : classes.errorTextField
          }
          onChange={handleSurnameChange}
          type="text"
        />
      </fieldset>

      <fieldset className={classes.textFieldContainer}>
        <label className={classes.label}>Телефон</label>
        <input
          className={isValidPhone ? classes.textField : classes.errorTextField}
          onChange={handlePhoneChange}
          onPaste={(e) => {
            e.preventDefault();
            return false;
          }}
          type="text"
          pattern="[0-9]*"
          value={phone}
        />
      </fieldset>

      <fieldset className={classes.textFieldContainer}>
        <label className={classes.label}>Email</label>
        <input
          className={
            isValidEmail ? classes.textField : classes.errorTextField
          }
          onChange={handleEmailChange}
          type="text"
        />
      </fieldset>

      <span className={classes.subtitle}>Доставка</span>

      <span className={classes.postType}>Новая почта (наложенный платеж)</span>

      <fieldset className={classes.textFieldContainer}>
        <label className={classes.label}>Город</label>
        <input
          className={isValidCity ? classes.textField : classes.errorTextField}
          onChange={handleCityChange}
          type="text"
        />
      </fieldset>

      <fieldset className={classes.textFieldContainer}>
        <label className={classes.label}>Отделение</label>
        <input
          className={isValidPost ? classes.textField : classes.errorTextField}
          onChange={handlePostChange}
          type="number"
        />
      </fieldset>

      <button className={classes.orderButton} onClick={onSubmit}>
        Оформить заказ
      </button>
    </div>
  );
};

export default OrderForm;
