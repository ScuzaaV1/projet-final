import React from 'react';
import { useSelector } from 'react-redux';
import ItemCard from './ItemCard';

const ItemList = () => {
    const items = useSelector(state => state.items);
    const searchTerm = useSelector(state => state.searchTerm);

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='cards'>
            {filteredItems.map(el => <ItemCard key={el.id} user={el} />)}
        </div>
    );
};

export default ItemList;
