import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Add, Search } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { getListings, createListing } from '../../ApiFunctions/Listing';
import CreateModal from '../../Components/CreateModal/CreateModal';
import Listing from '../../Components/Listing/Listing';

export default function Main(props) {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [console, setConsole] = useState('');
  const [picture, setPicture] = useState('');


  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleCreateListing = async(listing) => {
    
    const response = await createListing({...listing, creator: props.user.id})
    if(!response.error){
      handleClose();
      window.location.reload();
    }
  }
  useEffect(async() => {
    const response = await getListings()
    if(!response.error){
      setListings(response.body.data)
    }
  }, []);

  return (
    <React.Fragment>
      
      <div style = {{padding: 0 , width: '100%', textAlign: '-webkit-center'}}>
        <CreateModal
          open = {open}
          setName = {setName}
          setPrice = {setPrice}
          setConsole = {setConsole}
          setPicture = {setPicture}
          createListing = {() => handleCreateListing({name, price, console, picture })}
          handleClose = {handleClose}
        />
        <Grid container style = {{ width: '85%', justify: 'center', marginTop: 15}} spacing = {10}>
          <Grid item xs = {12}> 
            <Typography variant = 'h4' align = 'center'>

              Listings
            </Typography>
          </Grid>
          <Grid container style = {{paddingRight: 25, paddingLeft: 25}}spacing = {5}> 
            <Grid item xs = {10}>
              <TextField 
                variant="outlined"
                style = {{width: '100%'}} 
                id="standard-basic" 
                placeholder="Search for a video game..." 
                label = {<Search />}
                onChange = {(e) => setSearch(e.target.value)}
                />
            </Grid>
            <Grid item xs = {2}>
              
              <Button 
                style = {{width: '100%', backgroundColor: '#1de9b6', height: '100%'}}
                onClick = {handleOpen}
                >
                
                  Create
                  <Add/>
              </Button>
            </Grid>
          </Grid>
          {listings.map((listing, index) => {
            if(listing.name.toLowerCase().includes(search.toLowerCase())){
              return (
                <Grid key = {index} item xs = {12} sm  = {6} lg = {4}>
                  <Listing
                    {...listing}
                  />
                </Grid>
              )
            }
          })}
          
          {/* <Grid item xs = {12} sm  = {6} lg = {4}>
            <Listing></Listing>
          </Grid>
          <Grid item  xs = {12} sm  = {6} lg = {4}>
            <Listing></Listing>
          </Grid>
          <Grid item sm  = {4} lg = {4}>
            <Paper color = 'primary' style = {{backgroundColor:'lightGreen', width: '100%', textAlign: 'center'}}>
              hi
            </Paper>
          </Grid>
          <Grid item sm  = {4}>
            <Paper color = 'primary' style = {{backgroundColor:'lightGreen', width: '100%', textAlign: 'center'}}>
              hi
            </Paper>
          </Grid>
          <Grid item sm  = {3}>
            <Paper color = 'primary' style = {{backgroundColor:'lightGreen', width: '100%', textAlign: 'center'}}>
              hi
            </Paper>
          </Grid>
          <Grid item sm  = {3}>
            <Paper color = 'primary' style = {{backgroundColor:'lightGreen', width: '100%', textAlign: 'center'}}>
              hi
            </Paper>
          </Grid>
          <Grid item sm  = {3}>
            <Paper color = 'primary' style = {{backgroundColor:'lightGreen', width: '100%', textAlign: 'center'}}>
              hi
            </Paper>
          </Grid>
          <Grid item sm  = {3}>
            <Paper color = 'primary' style = {{backgroundColor:'lightGreen', width: '100%', textAlign: 'center'}}>
              hi
            </Paper>
          </Grid> */}
          {/* <Grid item>
            <Listing></Listing>

          </Grid>
          <Grid item>
            <Listing></Listing>

          </Grid>
          <Grid item>
            <Listing></Listing>

          </Grid>
          <Grid item>
            <Listing></Listing>

          </Grid>
          <Grid item>
            <Listing></Listing>

          </Grid>
          <Grid item>
            <Listing></Listing>

          </Grid>
          <Grid item>
            <Listing></Listing>

          </Grid>
          <Grid item>
            <Listing></Listing>

          </Grid>
          <Grid item>
            <Listing></Listing>

          </Grid>
          <Grid item>
            <Listing></Listing>

          </Grid>

          <Grid item>
            <Listing></Listing>

          </Grid>
          <Grid item>
            <Listing></Listing>

          </Grid>
          <Grid item>
            <Listing></Listing>

          </Grid>
          <Grid item>
            <Listing></Listing>

          </Grid>
          <Grid item>
            <Listing></Listing>

          </Grid> */}
        </Grid>
      </div>
    </React.Fragment>
  );
}