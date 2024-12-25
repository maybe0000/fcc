const cashInput = document.getElementById('cash');
const changeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');
const cashInDrawer = document.getElementById('cash-in-drawer');
const priceOfItem = document.getElementById('price-of-item');


let price = 19.5;
let cid = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

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


const cidPrint = (isOriginal, isOpen) => {
    let printedRegister = isOriginal 
        ? (isOpen ? `<p>Status: OPEN</p>` : `<p>Status: CLOSED</p>`) 
        : `<b>Cash in drawer:</b>`;

    if (isOriginal) {
        // Iterate in reverse for isOriginal
        for (let i = cid.length - 1; i >= 0; i--) {
            let hasChanged = cid[i][1] !== previousCid[i][1];
            let ternaryEx = hasChanged 
                ? `<p>${cid[i][0]}: $${parseFloat(Math.abs(cid[i][1] - previousCid[i][1]).toFixed(2))}</p>` 
                : '';
            printedRegister += `${ternaryEx}`;
        }
    } else {
        // Iterate normally for !isOriginal
        for (let i = 0; i < cid.length; i++) {
            let ternaryEx = `<p>${titles[cid[i][0]]}: $${cid[i][1]}</p>`;
            printedRegister += `${ternaryEx}`;
        }
    }

    return printedRegister;
};


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
        // console.log(change,i,howMany,howManyTotal,cid[i][1],tmp,Math.round(tmp));
    }

    return tmp === 0 ? true : false;
};

const calculate = () => {
    const floatInput = parseFloat(parseFloat(cashInput.value).toFixed(2));
    changeDue.textContent = '';
    priceOfItem.textContent = `Total: $${price}`;
    previousCid = JSON.parse(JSON.stringify(cid));
    let cidSum = parseFloat((cid.reduce((sum,i) => sum+i[1],0)).toFixed(2));
    cashInDrawer.innerHTML = cidPrint(false,false);

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
        cid.forEach(i => i[1] = 0); 
        changeDue.innerHTML = cidPrint(true,false);
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
            changeDue.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`;
        }
    } else if (floatInput > parseFloat(cidSum.toFixed(2))) {
        changeDue.style.textAlign = 'center';
        changeDue.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`;
    }
};

purchaseBtn.addEventListener('click',() => calculate());

cashInput.addEventListener('keydown',(e) => {
    if(e.key === "Enter") {
        calculate();
    }
});

changeDue.textContent = '';
priceOfItem.textContent = `Total: $${price}`;
previousCid = JSON.parse(JSON.stringify(cid));
let cidSum = parseFloat((cid.reduce((sum,i) => sum+i[1],0)).toFixed(2));
cashInDrawer.innerHTML = cidPrint(false,false);