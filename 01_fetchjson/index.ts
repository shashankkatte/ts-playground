import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
  console.log(response.data);
});


//  This is a typescript file / app. You'll see that we are still writing JS but with added type
