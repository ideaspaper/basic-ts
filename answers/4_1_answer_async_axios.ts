import axios from 'axios';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

axios<IPost[]>({
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'GET'
})
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
