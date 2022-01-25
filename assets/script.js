let yourName = "Ryan 'Cookie' Ruiz"

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0 // total

// selecting the element with an id of credit
const credit = document.querySelector('#credit');
credit.textContent = `Brought to you by ${yourName}`

// selecting the element with an id of qty-total
const qtyTotal = document.querySelector('#qty-total');

// selecting the element with an id of add-gb and minus-gb
const gbPlusBtn = document.querySelector('#add-gb');
const gbMinusBtn = document.querySelector('#minus-gb');

// selecting the element with an id of add-cc and minus cc
const ccPlusBtn = document.querySelector('#add-cc');
const ccMinusBtn = document.querySelector('#minus-cc');

// selecting the element with an id of add-sugar and minus-sugar
const sugarPlusBtn = document.querySelector('#add-sugar');
const sugarMinusBtn = document.querySelector('#minus-sugar');

// Containers for cookie count
let gbContainer = document.getElementById('qty-gb')
let ccContainer = document.getElementById('qty-cc')
let sugarContainer = document.getElementById('qty-sugar')

// Event listener for clicks on the "+" and "-" buttons for Gingerbread
gbPlusBtn.addEventListener('click', function() {
    gb = gb + 1;
    gbContainer.textContent = gb

    total = gb + cc + sugar;
    qtyTotal.textContent = total;
});
gbMinusBtn.addEventListener('click', function(){
    if(gb > 0) {
        gb = gb - 1;

        total = gb + cc + sugar;
        qtyTotal.textContent = total;
    }
    gbContainer.textContent = gb
});

// Event listener for clicks on the "+" and "-" buttons for Chocolate Chip
ccPlusBtn.addEventListener('click', function() {
    cc = cc + 1;
    ccContainer.textContent = cc

    total = gb + cc + sugar;
    qtyTotal.textContent = total;
});
ccMinusBtn.addEventListener('click', function(){
    if(cc > 0) {
        cc = cc - 1;

        total = gb + cc + sugar;
        qtyTotal.textContent = total
    }
    ccContainer.textContent = cc
});

// Event listener for clicks on the "+" and "-" buttons for Sugar Sprinkle
sugarPlusBtn.addEventListener('click', function() {
    sugar = sugar + 1;
    sugarContainer.textContent = sugar

    total = gb + cc + sugar;
    qtyTotal.textContent = total
});
sugarMinusBtn.addEventListener('click', function(){
    if(sugar > 0) {
        sugar = sugar - 1;

        total = gb + cc + sugar;
        qtyTotal.textContent = total;
    }
    sugarContainer.textContent = sugar
});