/**
 * `getUserID` will performs some routines to get the user's ID. The user's ID will then be passed to a callback function. 
 * @param {number} userID 
 * @param {function(number)} next 
 */
function getUserID(userID, next) {
  console.log('Step 1: Checking userId in localstorage');
  next(userID);
}

/**
 * `checkBalance` will performs some routines to check the user's balance. The user's balance will then be passed to a callback function. 
 * @param {number} userID 
 * @param {function(number)} next 
 */
function checkBalance(userID, next) {
  console.log('Step 2: Check balance from userId');
  if (userID === 777) return next(10000);
  next(0);
}

/**
 * `checkBitcoinPrice` will performs some routines to check the Bitcoin price. The price will then be passed to a callback function. 
 * @param {function(number)} next 
 */
function checkBitcoinPrice(next) {
  console.log('Step 3: Check current Bitcoin price');
  next(20);
}

/**
 * `buyBitcoin` will performs some routines to buy some Bitcoins. The result will then be passed to a callback function. 
 * @param {number} balance 
 * @param {number} price 
 * @param {number} quantity 
 * @param {function(string)} next 
 */
function buyBitcoin(balance, price, quantity, next) {
  console.log('Step 4: Buy Bitcoin based on total price');
  const totalPrice = quantity * price;
  if (balance < totalPrice) return next(`Error: Not enough balance to buy ${quantity} Bitcoin with total price of ${totalPrice}! \nYour balance is ${balance}`);
  next(`Success buy ${quantity} Bitcoin with total price of ${totalPrice}`);
}

/**
 * `buyBitcoinFromStartToFinish` is the **main** function that will be called by user to buy Bitcoins. 
 * @param {number} quantity 
 */
function buyBitcoinFromStartToFinish(quantity) {
  getUserID(777, function (userID) {
    checkBalance(userID, function (balance) {
      checkBitcoinPrice(function (price) {
        buyBitcoin(balance, price, quantity, console.log);
      });
    });
  });
};

buyBitcoinFromStartToFinish(20);
