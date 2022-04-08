let display = document.querySelector('input[type=text]');
let digits = document.querySelectorAll('.digit');


digits.forEach(element => element.addEventListener("click", () => {
    console.log(element.value);
}));





digits.forEach((element) => element.addEventListener("click", function(){
    display.innerHTML = element.value;
}));

