import React, { useState } from 'react';
import './itemcard.css'
import { Card, CardHeader, CardBody, CardFooter, Stack,Heading,Image,Text,ButtonGroup,Button ,Divider} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { deleteItem } from '../redux/action';
import EditModal from './EditModal';


const ItemCard = ({ user }) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        dispatch(deleteItem(user.id));
    };

    const handleEdit = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <div className='user-card'>
    <Card  className="user-card">
      <CardBody>
        <Image
          src={user.imageUrl}
          alt={user.name}
          borderRadius='lg'
          width={200}
        />
        
          <Heading  >{user.name}</Heading>
          <Text>{user.description}</Text>
          <Text className='product-name'>{user.price}</Text>
        
      </CardBody>
      <Divider />
      
        <ButtonGroup >
          <div>
            <Button className="card-button2" variant="danger" onClick={handleDelete}>Delete</Button>
            <Button className="card-button" variant="warning" onClick={handleEdit}>Edit</Button>
          </div>
          <EditModal show={showModal} handleClose={handleClose} item={user} />
        </ButtonGroup>
      
    </Card>
      </div>
    );
};

export default ItemCard;

