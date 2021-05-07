import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField } from '@material-ui/core';
import { TextFields } from '@material-ui/icons';


export default function BuyModal(props){
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');

  return(
    <Dialog 
      open = {props.open} 
      onClose={props.handleCloseBuy} 
      fullWidth = {true}>
      <DialogTitle>Buy Listing</DialogTitle>
      <DialogContent>
          <DialogContentText>
            {props.name} ${props.price}
          </DialogContentText>
          <Grid container spacing = {5}>
            <Grid item xs = {12}>
              <TextField
                onChange = {(e) => props.setCardNumber(e.target.value)}
                style = {{width: '100%'}}
                label = {'Credit Card Number'}
              />
            </Grid>
            <Grid item xs = {12}>
              <TextField
                onChange = {(e) => props.setAddress(e.target.value)}

                style = {{width: '100%'}}
                label = {'Address'}
              />
            </Grid>
            <Grid item xs = {6}>
              <TextField
                onChange = {(e) => props.setCity(e.target.value)}
                style = {{width: '100%'}}
                label = {'City'}
              />
            </Grid>
            <Grid item xs = {3}>
              <TextField
                style = {{width: '100%'}}
                onChange = {(e) => props.setZipCode(e.target.value)}

                label = {'Zip Code'}
              />
            </Grid>
            <Grid item xs = {3}>
              <TextField
                style = {{width: '100%'}}
                onChange = {(e) => props.setConsole(e.target.value)}

                label = {'CVV'}
              />
            </Grid>
          </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={props.createListing} color="primary">
          Buy
        </Button>
      </DialogActions>
    </Dialog>
  )
}
