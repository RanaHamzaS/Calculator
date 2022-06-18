
let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector('#clear');

let total = document.querySelector("#total");

let btnSpread = [...btns];
let allBtnSpread = [...allBtns];

btnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {


    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = "";
    }

    let value = btns[i].innerHTML;
    resultBox.innerHTML += value;
  });
});

function evaluate(fn) {
    return new Function('return ' + fn)();
}

total.addEventListener('click', ()=> {
let allInputs = resultBox.innerHTML;

resultBox.innerHTML = evaluate(allInputs);

console.log(evaluate(allInputs));
})

clearBtn.addEventListener('click', ()=> {
    resultBox.innerHTML = "0";
})
 
let counter = 0;
let calc = document.querySelector('.popup')
let show = document.querySelector('.show')

show.addEventListener('click', () => {

  counter++;

  if(counter % 2 != 0){

    calc.style.opacity = 0;

  }
  else{

    calc.style.opacity = 1;

  }

})