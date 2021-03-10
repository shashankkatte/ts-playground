//  This is a tiny app that is going to make an external
// API request and print out some JSON to console

// ///////////////////////////////////////

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
  console.log(response.data);
});


