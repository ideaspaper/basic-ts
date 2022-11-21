const axios = require('axios');

axios({
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'GET'
})
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
