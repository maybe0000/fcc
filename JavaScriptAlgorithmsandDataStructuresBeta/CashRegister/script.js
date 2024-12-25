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

let cidSum = parseFloat((cid.reduce((sum,i) => sum+i[1],0)).toFixed(2));
priceOfItem.textContent = `Total: $${price}`;

const cidPrint = (isOriginal, isOpen) => {
    let printedRegister = isOriginal ? (isOpen ? `Status: OPEN<br>` : `Status: CLOSED<br>`) : `<b>Cash in drawer:</b>`;
    for(let i = 0; i< cid.length; i++) {
        let ternaryEx = isOriginal ? cid[i][0] : titles[cid[i][0]];
        printedRegister += `${ternaryEx}: $${cid[i][1]}<br>`;
    }
    return printedRegister;
}

cashInDrawer.innerHTML = cidPrint(false,false);

const clearInput = () => {
    cashInput.value='';
};

const returnChange = (floatInput) => {
    let change = parseFloat((floatInput-price).toFixed(2));
    return change.toString();
};

purchaseBtn.addEventListener('click',() => {
    const floatInput = parseFloat(parseFloat(cashInput.value).toFixed(2));

    if(floatInput < price) {
        alert("Customer does not have enough money to purchase the item");
        clearInput();
    } else if (floatInput === price) {
        changeDue.textContent = 'No change due - customer paid with exact cash';
        changeDue.style.textAlign = 'center';
        clearInput();
    } else if (floatInput === parseFloat((cidSum+price).toFixed(2))) {
        clearInput();
        changeDue.style.textAlign = 'left';
        changeDue.innerHTML = cidPrint(true,false);
        cid.forEach(i => i[1] = 0); 
        cashInDrawer.innerHTML = cidPrint(false,true);
    } else if (floatInput < parseFloat((cidSum+price).toFixed(2))) {
        clearInput();
        changeDue.style.textAlign = 'left';
        changeDue.innerHTML = `Status: OPEN<br>` + returnChange(floatInput);
    }
});