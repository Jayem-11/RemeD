import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Complaints from './pages/Complaints';

function App() {
 
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route component={Complaints} path={'/complaints'} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
