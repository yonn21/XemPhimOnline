import './css/main.css'
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import HomeTemplates from './templates/HomeTemplates/HomeTemplates';
import Home from './pages/Home/Home';
import AdminTemplates from './templates/AdminTemplates/AdminTemplates';
import Admin from './pages/Admin/Admin';
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplates path="/phim" exact Component={Home} />
        <AdminTemplates path="/admin" exact Component={Admin} />

        <HomeTemplates path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
