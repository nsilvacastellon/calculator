// let display = document.querySelector('input[type="text"]');
let display = document.querySelector('.display-op');
let digits = document.querySelectorAll('.digit');

digits.forEach(element => element.addEventListener("click", () => {

    let leftOp = 0;
    let rightOp = 0;
    if(!isNaN) { 
        return display.value += parseInt(element.textContent);
    } else {
    return display.value += element.textContent;
    }
    
}));

// digits.forEach((element) => element.addEventListener("click", function(){
//     element.textContent = display.value;
// }));




