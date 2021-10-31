import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import PopularTourProvider from './context/PopularTourProvider';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Register from './Pages//Register/Register'
import PrivateRoute from './Router/PrivateRoute';
import ExploreTour from './Pages/ExploreSingleTour/ExploreTour';
import YourBooking from './Pages/YourBooking/YourBooking';
import Admin from './Pages/Admin/Admin';
import ScrollToTop from './Pages/util/ScroppToTop';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <PopularTourProvider>
          <BrowserRouter>
            <ScrollToTop />
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
              <PrivateRoute path="/explore-tour/:id">
                <ExploreTour />
              </PrivateRoute>
              <PrivateRoute path="/your-booking/:email">
                <YourBooking />
              </PrivateRoute>
              <PrivateRoute path="/admin/all-user-booking">
                <Admin />
              </PrivateRoute>
              <PrivateRoute path="/admin/add-new-tour">
                <Admin />
              </PrivateRoute>
            </Switch>
            <Footer />
          </BrowserRouter>
        </PopularTourProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
