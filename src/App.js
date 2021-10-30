import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import PopularTourProvider from './context/PopularTourProvider';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Register from './Pages//Register/Register'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <PopularTourProvider>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
            </Switch>
            <Footer />
          </BrowserRouter>
        </PopularTourProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
