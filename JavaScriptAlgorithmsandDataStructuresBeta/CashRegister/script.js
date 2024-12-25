const cashInput = document.getElementById('cash');
const changeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');
const cashInDrawer = document.getElementById('cash-in-drawer');
const priceOfItem = document.getElementById('price-of-item');

let price = 3.26;
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

let previousCid = JSON.parse(JSON.stringify(cid));

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

const values = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100
};

let cidSum = parseFloat((cid.reduce((sum,i) => sum+i[1],0)).toFixed(2));
priceOfItem.textContent = `Total: $${price}`;

// const cidPrint = (isOriginal, isOpen) => {
//     let printedRegister = isOriginal ? (isOpen ? `Status: OPEN<br>` : `Status: CLOSED<br>`) : `<b>Cash in drawer:</b>`;
//     for(let i = 0; i< cid.length; i++) {
//         let hasChanged = cid[i][1] !== previousCid[i][1];
//         let ternaryEx = isOriginal ? (hasChanged ? `${cid[i][0]}: $${parseFloat(Math.abs(cid[i][1]-previousCid[i][1]).toFixed(2))}<br>` : '') : `${titles[cid[i][0]]}: $${cid[i][1]}<br>`;
//         printedRegister += `${ternaryEx}`;
//     }
//     return printedRegister;
// }

const cidPrint = (isOriginal, isOpen) => {
    let printedRegister = isOriginal 
        ? (isOpen ? `Status: OPEN<br>` : `Status: CLOSED<br>`) 
        : `<b>Cash in drawer:</b>`;

    if (isOriginal) {
        // Iterate in reverse for isOriginal
        for (let i = cid.length - 1; i >= 0; i--) {
            let hasChanged = cid[i][1] !== previousCid[i][1];
            let ternaryEx = hasChanged 
                ? `${cid[i][0]}: $${parseFloat(Math.abs(cid[i][1] - previousCid[i][1]).toFixed(2))}<br>` 
                : '';
            printedRegister += `${ternaryEx}`;
        }
    } else {
        // Iterate normally for !isOriginal
        for (let i = 0; i < cid.length; i++) {
            let ternaryEx = `${titles[cid[i][0]]}: $${cid[i][1]}<br>`;
            printedRegister += `${ternaryEx}`;
        }
    }

    return printedRegister;
};


cashInDrawer.innerHTML = cidPrint(false,false);

const clearInput = () => {
    cashInput.value='';
};

const returnChange = (floatInput) => {
    let change = parseFloat((floatInput-price).toFixed(2));
    let tmp = change;
    
    for(let i=cid.length-1;i>=0;i--) {
        let howManyTotal = Math.floor(cid[i][1]/values[cid[i][0]]);
        let howMany = Math.min(howManyTotal, Math.floor(tmp/values[cid[i][0]]));

        if(howMany>=1) {
            cid[i][1] = parseFloat((cid[i][1] - howMany*values[cid[i][0]]).toFixed(2));
            tmp = parseFloat((tmp - howMany*values[cid[i][0]]).toFixed(2));
        }

    }

    return Math.round(tmp) === 0 ? true : false;
};

const calculate = () => {
    const floatInput = parseFloat(parseFloat(cashInput.value).toFixed(2));
    changeDue.textContent = '';

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
        previousCid = JSON.parse(JSON.stringify(cid));
    } else if (floatInput < parseFloat((cidSum+price).toFixed(2))) {
        clearInput();
        changeDue.style.textAlign = 'left';
        if(returnChange(floatInput)) {
            changeDue.innerHTML = cidPrint(true,true);
            cashInDrawer.innerHTML = cidPrint(false,true);
            previousCid = JSON.parse(JSON.stringify(cid));
        } else {
            changeDue.style.textAlign = 'center';
            changeDue.innerHTML = `Status: INSUFFICIENT_FUNDS<br>`;
        }
    } else if (floatInput > parseFloat(cidSum.toFixed(2))) {
        changeDue.style.textAlign = 'center';
        changeDue.innerHTML = `Status: INSUFFICIENT_FUNDS<br>`;
    }
};

purchaseBtn.addEventListener('click',() => calculate());

cashInput.addEventListener('keydown',(e) => {
    if(e.key === "Enter") {
        calculate();
    }
});