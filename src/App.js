import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { HomeTemplate } from './templates/HomeTemplate/Hometemplate';
import Detail from './pages/Detail/Detail';
import { CheckoutTemplate } from './templates/CheckoutTemplate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';


export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path='/' exact Component={Home} />
        <HomeTemplate path='/contact' exact Component={Contact} />
        <HomeTemplate path='/news' exact Component={News} />
        <HomeTemplate path='/detail/:id' exact Component={Detail} />
        <UserTemplate path='/login' exact Component={Login} />
        <UserTemplate path='/register' exact Component={Register} />
        <CheckoutTemplate path='/checkout/:id' exact Component={Checkout} />
        <HomeTemplate path='/home' exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
