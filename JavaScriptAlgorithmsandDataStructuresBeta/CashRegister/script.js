const cashInput = document.getElementById('cash');
const changeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');
const cashInDrawer = document.getElementById('cash-in-drawer');
const priceOfItem = document.getElementById('price-of-item');

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

const titles = {
    PENNY: 'Pennies',
    NICKEL: 'Nickels',
    DIME: 'Dimes',
    QUARTER: 'Quarters',
    ONE: 'Ones',
    FIVE: 'Fives',
    TEN: 'Tens',
    TWENTY: 'Twenties',
    "ONE HUNDRED": 'Hundreds'
};

let cidSum = cid.reduce((sum,i) => sum+i[1],0);
priceOfItem.textContent = `Total: $${price}`;

const cidPrint = () => {
    let printedRegister = '';
    for(let i = 0; i< cid.length; i++) {
        printedRegister += `${titles[cid[i][0]]}: $${cid[i][1]}<br>`;
    }
    return printedRegister;
}

cashInDrawer.innerHTML = `<b>Cash in drawer:</b><br><br>`+cidPrint();

const clearInput = () => {
    cashInput.value='';
};

purchaseBtn.addEventListener('click',() => {
    const floatInput = parseFloat(cashInput.value);
    if(floatInput < price) {
        alert("Customer does not have enough money to purchase the item");
        clearInput();
    } else if (floatInput === price) {
        changeDue.textContent = 'No change due - customer paid with exact cash';
        clearInput();
    }
});