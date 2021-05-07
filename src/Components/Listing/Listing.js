import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BuyModal from '../BuyModal/BuyModal';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#4d4d4d',
    textAlign:'left',
    margin: 0
  },
  media: {
    paddingTop: '75%', 
  },
}));



export default function Listing(props) {
  const [openBuy, setOpenBuy] = useState(false);
  const [closeBuy, setCloseBuy]  = useState(false);
  const handleCloseBuy = () => {
    setOpenBuy(false);
  }
  
  const handleOpenBuy = () => {
    setOpenBuy(true);
  }
  const classes = useStyles();

  return (
    <React.Fragment>
      <BuyModal
            open = {openBuy}
            handleClose = {handleCloseBuy}
            price = {props.price}
          />
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              U
            </Avatar>
          }
          style = {{color: 'white'}}
          subheaderTypographyProps = {{style: {color: '#f3f3f3', fontSize: 12}}}
          title="User ID"
          subheader = {'#' +props.creator}
        />
        <CardMedia
          className={classes.media}
          image = {props.picture}
        />
        <CardContent >
          <Typography variant="caption" style = {{color:'white'}}>
            Console: {props.console}
          </Typography>
          <Typography variant="h6" style = {{color:'white'}} display = 'block'>
            {props.name}
          </Typography>
          {/* <div display = 'inline'> */}
            
            <Typography variant = 'h6' style = {{color: '#17ba91'}} align = 'left'>
              ${props.price}
            </Typography>
            {(props.buy) ? 
              <Button 
                onClick = {handleOpenBuy}
                startIcon = {<ShoppingCartIcon/>}             
                style = {{width: '100%', backgroundColor: '#1de9b6'}}>
                  Buy Now
              </Button> : null
            } 


          {/* </div> */}
        </CardContent>
      </Card>
    </React.Fragment>
  );
}