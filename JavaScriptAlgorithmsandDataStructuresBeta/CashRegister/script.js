let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const cashInput = document.getElementById('cash');
const changeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');

const clearInput = () => {
    cashInput.value='';
};

purchaseBtn.addEventListener('click',() => {
    const floatInput = parseFloat(cashInput.value);
    if(floatInput < price) {
        alert("Customer does not have enough money to purchase the it