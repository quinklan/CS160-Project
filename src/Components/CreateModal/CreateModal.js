import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField } from '@material-ui/core';
import { TextFields } from '@material-ui/icons';


export default function createModal(props){
  return(
    <Dialog 
      open = {props.open} 
      onClose={props.handleClose} 
      fullWidth = {true}>
      <DialogTitle>Create Listing</DialogTitle>
      <DialogContent>
          <DialogContentText>
            Please note that after you create the listing you will reieve 80% of the total sale
          </DialogContentText>
          <Grid container spacing = {5}>
            <Grid item xs = {12}>
              <TextField
                onChange = {(e) => props.setName(e.target.value)}

                style = {{width: '100%'}}
                label = {'Name'}
              />
            </Grid>
            <Grid item xs = {6}>
              <TextField
                onChange = {(e) => props.setPrice(e.target.value)}
                style = {{width: '100%'}}
                label = {'Price'}
              />
            </Grid>
            <Grid item xs = {6}>
              <TextField
                style = {{width: '100%'}}
                onChange = {(e) => props.setConsole(e.target.value)}

                label = {'Console'}
              />
            </Grid>
            <Grid item xs = {12}>
              <TextField
                onChange = {(e) => props.setPicture(e.target.value)}
             
                style = {{width: '100%'}}
                label = {'Picture Url'}
              />
            </Grid>
          </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={props.createListing} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  )
}
