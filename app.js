const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expenseList = document.querySelector('#expense-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
};

let totalExpense = 0;
confirmBtn.addEventListener('click', () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    alertCtrl
      .create({
        message: 'Please enter valid reason and amount!',
        header: 'Invalid inputs',
        buttons: ['Okay']
      })
      .then(alertElement => {
        alertElement.present();
      });
    return;
  }
  const newItem = document.createElement('ion-item');
  newItem.textContent = enteredReason + ":$" + enteredAmount ;
  expenseList.appendChild(newItem);

  totalExpense += +enteredAmount;
  totalExpensesOutput.textContent = totalExpense ;

  clear() ;
});

cancelBtn.addEventListener('click', clear );