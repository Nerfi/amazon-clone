import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './ShoppingCard.css';
import {BsStar} from 'react-icons/bs';


const ShoppingCard = ({image, id, title, rating }) => {
  return(
      <div className="card__container">
   <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="card__title">{title}</Card.Title>
          <Card.Img variant="top" src={image} />
          <Card.Text className="card__content">
          <div className="product__rating">
            {
              Array(rating)
              .fill()
              .map((_,id) => (
               <BsStar key={id}/>
              ))
            }
        </div>
          </Card.Text>
          <Button variant="primary">
            <Link style={{color: 'black'}} to={`/product/${id}`} >
            See product
            </Link>
          </Button>
        </Card.Body>
      </Card>

      </div>
  );
};

export default ShoppingCard;
