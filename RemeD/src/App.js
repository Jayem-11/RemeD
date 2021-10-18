import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Login from './components/Login';
import Complaints from './pages/Complaints';

function App() {
 
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route component={Complaints} path={'/complaints'} />
          <Route component={Login} path={'/login'}/>
        </Switch>
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
