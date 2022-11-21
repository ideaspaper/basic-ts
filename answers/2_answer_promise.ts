function getUserID2(userID: number): Promise<number> {
  console.log('Step 1: Checking userId in localstorage');
  return new Promise((resolve, reject) => {
    resolve(userID);
  });
}

function checkBalance2(userID: number): number {
  console.log('Step 2: Check balance from userId');
  if (userID === 777) return 10000;
  return 0;
}

function checkBitcoinPrice2(): number {
  console.log('Step 3: Check current Bitcoin price');
  return 20;
}

function buyBitcoin2(balance: number, price: number, quantity: number): string {
  console.log('Step 4: Buy Bitcoin based on total price');
  const totalPrice = quantity * price;
  if (balance < totalPrice) return `Error: Not enough balance to buy ${quantity} Bitcoin with total price of ${totalPrice}! \nYour balance is ${balance}`;
  return `Success buy ${quantity} Bitcoin with total price of ${totalPrice}`;
}

let balance: number;
let bitcoinPrice: number;
getUserID2(777)
  .then((userID) => {
    return checkBalance2(userID);
  })
  .then((data) => {
    balance = data;
    return checkBitcoinPrice2();
  })
  .then((data) => {
    bitcoinPrice = data;
    return buyBitcoin2(balance, bitcoinPrice, 20);
  })
  .then(console.log)
  .catch((error) => {
    console.log(error);
  });
