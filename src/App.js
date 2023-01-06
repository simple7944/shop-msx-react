import logo from "./logo.svg";
import "./App.css";
import Shop from "./components/Shop";
import Example from "./components/Example";
import Main from "./components/Main";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <div>fdvsrve</div>
      <Switch>
        <Route path="/" exact>
          <Main></Main>
        </Route>
        <Route path="/shop" exact>
          <Shop></Shop>
        </Route>
        <Route path="/timer">
          <Example></Example>
        </Route>

        <Route path="/api">

          
          <div>timer</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
