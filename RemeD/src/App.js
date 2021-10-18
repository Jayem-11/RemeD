import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Sections/Footer';
import Complaints from './pages/Complaints';
import Header from './components/Sections/Header';
import Landing from './pages/Landing';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={'/'} component={Landing} />
          <Route path={'/complaints'} component={Complaints} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
