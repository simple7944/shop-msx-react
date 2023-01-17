import Layout from "./components/layout/Layout";
import { Switch, Route } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllProducts></AllProducts>
        </Route>
        <Route path="/details" exact>
          <ProductDetails></ProductDetails>
        </Route>
      </Switch>
     </Layout>
  );
}

export default App;
