import Landingpage from './Components/landingpage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Elements from './Components/elements';
import Navbar from './Components/navbar';
import Layouts from './Components/layouts';
import Signup from './Components/Signup';
import Notfound from './Components/notfound';
function App() {
  return (
    <Router>
      <div className="Navbarr">
        <Navbar />
        <Switch>
          <Route exact path="/landingpage">
            <Landingpage />
          </Route>
          <Route path="/elements">
            <Elements />
          </Route>
          <Route path="/layouts">
            <Layouts />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
