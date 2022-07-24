import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Catalog from "./pages/Catalog";

const Routes = () => (
  <Router>
    <Navbar/>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/catalog" >
        <Catalog />
      </Route>
    </Switch>
  </Router>
);

export default Routes;