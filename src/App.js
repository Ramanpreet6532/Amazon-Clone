import './App.css';
import { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Product from "./Pages/Product"
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import { useStateValue } from "./Context/StateProvider"
import { auth } from "./firebase";

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      }
      else {
        //user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });

    return () => {
      //cleanup process
      unsubscribe();
    }

  }, []);

  console.log("USER", user)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
