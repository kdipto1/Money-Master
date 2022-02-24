/* function for getting value of input field start*/
function getInputValue(input) {
 const inputVal = document.getElementById(input).value;
  return inputVal;
}
/* function for getting value of input field end*/

/* function for calculating total expenses and balance start*/
const calcBtn = document.getElementById('calc-btn');
calcBtn.addEventListener('click', function () {
  const incomeInput = getInputValue('income-box');
  const foodInput = getInputValue('food-box');
  const rentInput = getInputValue('rent-box');
  const clothesInput = getInputValue('clothes-box');
  let totalExpenses = document.getElementById('total-expenses');
  let balance = document.getElementById('balance');

  /* error handle for income and expense part start */
  if (incomeInput < 0) {
    return alert('Please enter valid income amount');
  }
  if (isNaN(foodInput) || foodInput < 0) {
    return alert('Please enter valid amount spent on food');
  }
  if (isNaN(rentInput) || rentInput < 0) {
    return alert('Please enter valid amount spent on rent');
  }
  if (isNaN(clothesInput) || clothesInput < 0) {
    return alert('Please enter valid amount spent on clothes');
  }
    /* error handle for income and expense part end */

  /* total expense and balance calculating start */
  totalExpenses.innerText = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);
  balance.innerText = parseFloat(incomeInput) - parseFloat(totalExpenses.innerText);
    /* total expense and balance calculating end */

  /* error if expense is higher than balance part start*/
  if (balance.innerText < 0) {
    totalExpenses.innerText = '';
    balance.innerText = '';
    return alert("You don't have enough money to spent");
  }
  /* error if expense is higher than balance part end*/

})
/* function for calculating total expenses and balance end*/


/* function for calculating savings and remaining balance start*/
const saveBtn = document.getElementById('save-btn');
saveBtn.addEventListener('click', function () {
  const saveInput = getInputValue('save-box');
  const incomeInput = getInputValue('income-box');
  let savingAmount = document.getElementById('saving-amount');
  let remainingBalance = document.getElementById('remaining-balance');
  
  /* error handle for save input field start */
  if (isNaN(saveInput) || saveInput < 0) {
    return alert("Enter valid percentage");
  }
  /* error handle for save input field end */
  
  /* calculation part for saving amount and remaining balance start*/
  savingAmount.innerText = parseFloat(incomeInput) * (parseFloat(saveInput) / 100);
  remainingBalance.innerText = parseFloat(balance.innerText) - parseFloat(savingAmount.innerText);
  /* calculation part for saving amount and remaining balance end*/

  /* error handle for saving amount and remaining balance start*/
  if (remainingBalance.innerText < 0) {
    savingAmount.innerText = '';
    remainingBalance.innerText = '';
    return alert("you dont have enough money for saving");
  }
  /* error handle for saving amount and remaining balance end*/
})
/* function for calculating savings and remaining balance start*/