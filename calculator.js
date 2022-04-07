let digits = document.querySelectorAll(".digit");
let display = document.querySelector(".display-op");
let p = document.querySelector(".p1");

function signal() {
    console.log("Just clicked...");
}
p.addEventListener("click", signal);

// digits.forEach((element) => element.addEventListener("click", function(){
//     console.log("Just clicked a digit");
// }));

