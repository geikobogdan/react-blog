import "./App.css";
import { SignIn, SignUp } from "./pages";
import { Route,Switch } from "react-router-dom";


function App() {
  return (
    <Switch>
      
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/signIn" component={SignIn} />
      
   </Switch>
  );
}

export default App;
