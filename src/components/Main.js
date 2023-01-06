import { NavLink } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <NavLink to='/store'>store</NavLink>
      <NavLink to='/timer'>timer</NavLink>
      <NavLink to='/api'>api</NavLink>
    </div>
  );
};

export default Main;
