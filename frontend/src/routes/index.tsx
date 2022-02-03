import { Switch, Route } from "react-router-dom";
import {
  Register,
  Login,
  HomeMain,
  HomeCirurgioes,
  HomeDepartamentos,
  HomeHistoria
} from "pages";


const Routes = () => {
  return (
    <Switch>


      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/" exact component={HomeMain} />
      <Route path="/departamentos" exact component={HomeDepartamentos} />
      <Route path="/cirurgioes" exact component={HomeCirurgioes} />
      <Route path="/nossahistoria" exact component={HomeHistoria} />
  
    </Switch>
  );
};

export default Routes;
