import React from 'react';
import { useSelector } from 'react-redux';
import ItemCard from './ItemCard';
import AddCard from './AddCard';
import SearchInput from './SearchInput';
const ItemList = () => {
    const items = useSelector(state => state.items);
    const searchTerm = useSelector(state => state.searchTerm);

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        
        <div className='cards'>
            
            <img src='./R.png' className='homeimg'></img>
      <img src='./zzz.png' className='homaimg'></img>
      <img src='./ssss.jpg' className='thirdimg'></img> 
       <SearchInput />{filteredItems.map(el => <ItemCard key={el.id} user={el} />)}
            
            <AddCard/>
        </div>
    );
};

export default ItemList;
