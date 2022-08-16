// login event
document.getElementById('login').addEventListener('click', () => {
  const loginArea = document.getElementById('login-area');
  loginArea.style.display = 'none';

  const transactionArea = document.getElementById('transaction-area');
  transactionArea.style.display = 'block';
});

// deposit button event handler
document.getElementById('addDeposit').addEventListener('click', () => {
  const depositNumber = getInputNumber('depositAmount');

  updateSpanText('currentDeposit', depositNumber);
  updateSpanText('currentBalance', depositNumber);

  document.getElementById('depositAmount').value = '';
});

//withdraw button event handler
document.getElementById('addWithdraw').addEventListener('click', () => {
  const withdrawNumber = getInputNumber('withdrawAmount')

  updateSpanText('currentWithdraw', withdrawNumber);
  updateSpanText('currentBalance', -1 * withdrawNumber);

  document.getElementById('withdrawAmount').value = '';
});

//string to number
function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
};


function updateSpanText(id, addedNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = addedNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
};