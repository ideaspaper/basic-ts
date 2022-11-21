const greet = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello world!');
  }, 3000);
});

greet
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });