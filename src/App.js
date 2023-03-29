import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Contact from './pages/contact';
import History from './pages/history';
import Oliveoils from './pages/oliveoils';
import {BrowserRouter,Route} from 'react-router-dom';

import Pizzas from './components/pizzas'
import Burgers from './components/burgers'
import Starts from './components/starts'
import Drinks from './components/drinks'
import Desserts from './components/desserts'



function App() {
  return (
  <div className="App">
    <BrowserRouter>
        <Route path="/" exact> <Home/></Route>
        <Route path="/hikayemiz"><History/></Route>

        <Route path="/pizza"><Pizzas/></Route>
        <Route path="/burger"><Burgers/></Route>
        <Route path="/baslangic"><Starts/></Route>
        <Route path="/icecek"><Drinks/></Route>
        <Route path="/tatli"><Desserts/></Route>

        
        <Route path="/zeytinyag"><Oliveoils/></Route> 
        <Route path="/iletisim"><Contact/></Route>
    </BrowserRouter>
  </div>
  );
}

export default App;
