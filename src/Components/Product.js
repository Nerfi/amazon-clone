import React from 'react';
import './Product.css';
import  {useStateValue} from '../StateProvider/StateProvider';
import {BsStar} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Product = ({id, title, image, price, rating}) => {

  const [{basket, user}, dispatch] = useStateValue();
  //for testing

  const addToBasket = () => {
      //add item to basket
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id,
          title,
          image,
          price,
          rating
        }
      })
  };

  //for testing

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,


  },
  media: {
    height: 190,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

  const classes = useStyles();


  return <div className="product">

    <div className="testing__card">

     <Card className={classes.root}>
        <CardHeader
          title={title}
          subheader="September 14, 2016"
        />

        <CardMedia
          className={classes.media}
          image={image}
          title="Paella dish"
        />

        <CardContent>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

           <div className="product__rating">
            {
              Array(rating)
              .fill()
              .map((_,id) => (
               <BsStar key={id}/>
              ))
            }
          </div>

        </CardActions>

      </Card>



  </div>

  </div>

};

export default Product;










