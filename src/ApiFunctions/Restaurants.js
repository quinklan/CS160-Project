import axios from 'axios';

export const getUserRestaurants = async(userID) => {
  let response = {error: false, body: null};
  await axios
    .post('http://localhost:5000/restaurant/getUserRestaurants', {userID})
    .then((res) => {
      response.body = res;
    })
    .catch(error => {
      response.error = true;
      response.body = error;
    })

  return response;
}

export const addRestaurant = async(restaurant) => {
  let response = {error: false, body: null};
  await axios
    .post('http://localhost:5000/restaurant/addRestaurant', {...restaurant})
    .then((res) => {
      response.body = res;
    })
    .catch(error => {
      response.error = true;
      response.body = error;
    })
  return response;
}

export const editRestaurant = async(newRestaurant) => {
  let response = {error: false, body: null};
  await axios
    .post('http://localhost:5000/restaurant/editRestaurant', {...newRestaurant})
    .then((res) => {
      response.body = res;
    })
    .catch(error => {
      response.error = true;
      response.body = error;
    })
  return response;
}
