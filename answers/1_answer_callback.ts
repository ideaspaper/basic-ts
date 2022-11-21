type CbGetUserID = (userID: number) => void;
type CbCheckBalance = (balance: number) => void;
type CbCheckBitcoinPrice = (price: number) => void;
type CbBuyBitcoin = (msg: string) => void;

function getUserID(userID: number, next: CbGetUserID) {
  console.log('Step 1: Checking userId in localstorage');
  next(userID);
}

function checkBalance(userID: number, next: CbCheckBalance) {
  console.log('Step 2: Check balance from userId');
  if (userID === 777) return next(10000);
  next(0);
}

function checkBitcoinPrice(next: CbCheckBitcoinPrice) {
  console.log('Step 3: Check current Bitcoin price');
  next(20);
}

function buyBitcoin(balance: number, price: number, quantity: number, next: CbBuyBitcoin) {
  console.log('Step 4: Buy Bitcoin based on total price');
  const totalPrice = quantity * price;
  if (balance < totalPrice) return next(`Error: Not enough balance to buy ${quantity} Bitcoin with total price of ${totalPrice}! \nYour balance is ${balance}`);
  next(`Success buy ${quantity} Bitcoin with total price of ${totalPrice}`);
}

function buyBitcoinFromStartToFinish(quantity: number) {
  getUserID(777, function (userID) {
    checkBalance(userID, function (balance) {
      checkBitcoinPrice(function (price) {
        buyBitcoin(balance, price, quantity, console.log);
      });
    });
  });
};

buyBitcoinFromStartToFinish(20);
