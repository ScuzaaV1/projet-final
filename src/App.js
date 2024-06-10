import logo from './logo.svg';
import './App.css';
import NaveBare from './Components/NaveBare'
import { ecommerce } from "./data";
import ItemCard from './Components/ItemCard'
import ItemList from './Components/ItemList'
import { useState } from "react";
import SearchInput from './Components/SearchInput';
import AddCard from './Components/AddCard';

function App() {
  const [product, setProduct] = useState(ecommerce);
  return (

    <div className="App">
      
      <NaveBare/>
      <SearchInput />
      <ItemList list={ecommerce} />
      <AddCard/>
    </div>
  );
}

export default App;
