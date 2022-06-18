
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

    // calc.style.display = 'block';
    // calc.style.transform = 'scale(1)';
    calc.style.display = 'block'
    calc.classList.add('calcOpenC')
    calc.classList.remove('calcCloseC')

  }
  else{

    // calc.style.transform = 'scale(0)';
    calc.classList.add('calcCloseC')
    calc.classList.remove('calcOpenC')
    setTimeout(() => {
      calc.style.display = 'none'
    }, 300)

  }

})

// Product Listings...

let holder = document.querySelector('.productm');

for (let index = 0; index < 10; index++) {
  
  holder.innerHTML+= `
      <div class="product">
          <img src="../pages/Cart.jpg" height="230px" width="200px">
          <br>
          <div style="font-weight: 600; color: black">
            The Product ${index+1}
          </div>
          <div style="font-weight: 600; color: green">
            ${Math.trunc(Math.random()*500)}Rs
          </div>
      </div>`
  
}
