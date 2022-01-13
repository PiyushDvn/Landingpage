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
        <Switch>
          <div className="Navbarr">
            <Navbar />
            <Route exact path="/">
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
          </div>
        </Switch>
      </Router>
    );
  }
export default App;
