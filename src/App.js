import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import PopularTourProvider from './context/PopularTourProvider';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <PopularTourProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </PopularTourProvider>
    </div>
  );
}

export default App;
