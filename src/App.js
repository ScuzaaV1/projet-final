import logo from './logo.svg';
import './App.css';
import NaveBare from './Components/NaveBare'
import { ecommerce } from "./data";
import ItemCard from './Components/ItemCard'
import ItemList from './Components/ItemList'
import { useState } from "react";
import SearchInput from './Components/SearchInput';
import AddCard from './Components/AddCard';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './Components/About'
import ContactMe from './Components/ContactMe';

function App() {
  const [product, setProduct] = useState(ecommerce);
  return (

    <div className="App">
      <Router>
        <NaveBare/>
        
        
        <Routes>
          <Route path='/' element={<ItemList list={product}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<ContactMe/>}/>
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
