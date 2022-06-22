
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
let items = null;

fetch('https://dummyjson.com/products').then(res=>res.json()).then(json=>{

    console.log(json.products)
    holder.innerHTML = '';
    for (let index = 0; index < json.products.length; index++) {

      holder.innerHTML+= `
          <div class="product"
           accessKey=${json.products[index].id}
            style="overflow: hidden">

              <div accessKey=${json.products[index].id}
              style="border-radius: 20px; background-position: center; background-image: url(${json.products[index].thumbnail || 'N/A'}); padding: 80px; background-size: cover"></div>
              <div accessKey=${json.products[index].id}
               style="font-weight: 600; color: black">
                ${json.products[index].title || 'N/A'}
              </div>
              <div accessKey=${json.products[index].id}>${
              json.products[index].rating >= 4.7 ? '⭐⭐⭐⭐⭐' : 
              json.products[index].rating >= 4.5 ? '⭐⭐⭐⭐' : 
              json.products[index].rating >= 4.3 ? '⭐⭐⭐' :
              json.products[index].rating >= 4.2 ? '⭐⭐' : 
              json.products[index].rating >= 4.1 ? '⭐' : '❌'
            }</div>
              <div style="font-weight: 600; color: green" accessKey=${json.products[index].id}>
                ${json.products[index].price || 'N/A'} USD/-
              </div>
          </div>`;
      
    }
    items = json.products;
})

document.addEventListener('click', (e) => {

  e.target.accessKey ? (
      localStorage.setItem('ID', e.target.accessKey),
      localStorage.setItem('ITEM', JSON.stringify(items[Number(e.target.accessKey)-1])),
      location.href = '/pages/item.html'
    
    ) : (null);

})
