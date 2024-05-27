
const display = document.querySelector('.display');

function add(str) {
    display.value += str;
}



// clear the whole input 
function allClear() {
    display.value=""
}


// delete the recent entry
function Clear() {
    let str = display.value;
    let substr = str.substring(0, str.length - 1)
    display.value = substr;
}
