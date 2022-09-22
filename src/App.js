import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/paginas/Inicio'
import Yes from './components/paginas/Yes'
import Items from './components/paginas/Items'
import ItemListContainer from './components/ItemListContainer/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact component={Inicio}></Route>
          <Route path='/yes' component={Yes}/>
          <Route path='/items' component={Items}/>
        </Routes>
        <ItemListContainer/>
      </Router>
      


    </div>
  );
}

export default App;
