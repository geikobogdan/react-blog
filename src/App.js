import "./App.css";
import { SignIn, SignUp,Home } from "./pages";
import { Route,Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import {  useHistory } from "react-router-dom";
function App() {
         const isAuth = useSelector(({auth})=>auth.authorized)
         const history = useHistory()
  return (
    <Switch>
       
      <Route exact path={'/SignUp'} component={SignUp} />
      <Route exact path={['/','/SignIn']} component={SignIn} />
       {isAuth?   <Route  path={['/home/:any',"/home"]} component={Home} /> : history.push("/")} 
      
   </Switch>
  );
}

export default App;
