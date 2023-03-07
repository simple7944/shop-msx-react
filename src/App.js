import Layout from "./components/layout/Layout";
import { Switch, Route } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import Product from "./pages/Product";
import Cart from "./components/Cart/Cart";
import Order from "./pages/Order";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllProducts></AllProducts>
        </Route>
        <Route path="/products" exact>
          <AllProducts></AllProducts>
        </Route>
        <Route path="/product/:productId" exact>
          <Product></Product>
        </Route>
        <Route path="/cart" exact>
          <Cart></Cart>
        </Route>
        <Route path="/order" exact>
          <Order></Order>
        </Route>
        <Route path="/:category" exact>
          <AllProducts></AllProducts>
        </Route>
      </Switch>
     </Layout>
  );
}

export default App;
