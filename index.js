const result = document.querySelector(".result");
const clearBtn = document.querySelector(".btn-clear");
const deletBtn = document.querySelector(".btn-delet");
//Numbers
const num0 = document.querySelector(".num0");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");
num0.addEventListener("click", (num0) => {
    if (result.value == 0) {
         let text = result.value;
        result.value = text.slice(0, -1);
}
result.value += num0.target.innerText;
})

num9.addEventListener("click", (num9) => {
    classRemove(result)
    if (result.value == "0") {
         let text = result.value;
        result.value = text.slice(0, -1);
}
result.value += num9.target.innerText;
})
num8.addEventListener("click", (num8) => {
      classRemove(result)
    if (result.value =="0") {
         let text = result.value;
        result.value = text.slice(0, -1);
}
result.value += num8.target.innerText;
})

num7.addEventListener("click", (num7) => {
      classRemove(result)
    if (result.value =="0") {
         let text = result.value;
        result.value = text.slice(0, -1);
}
result.value += num7.target.innerText;
})

num6.addEventListener("click", (num6) => {
      classRemove(result)
    if (result.value == "0") {
         let text = result.value;
        result.value = text.slice(0, -1);
}
result.value += num6.target.innerText;
})

num5.addEventListener("click", (num5) => {
      classRemove(result)
    if (result.value == "0") {
         let text = result.value;
        result.value = text.slice(0, -1);
}
result.value += num5.target.innerText;
})

num4.addEventListener("click", (num4) => {
      classRemove(result)
    if (result.value =="0") {
         let text = result.value;
        result.value = text.slice(0, -1);
}
result.value += num4.target.innerText;
})

num3.addEventListener("click", (num3) => {
      classRemove(result)
    if (result.value =="0") {
         let text = result.value;
        result.value = text.slice(0, -1);
}
result.value += num3.target.innerText;
})

num2.addEventListener("click", (num2) => {
    classRemove(result)
    if (result.value =="0") {
         let text = result.value;
        result.value = text.slice(0, -1);
}
result.value += num2.target.innerText;
})

num1.addEventListener("click", (num1) => {
    classRemove(result)
    if (result.value =="0") {
         let text = result.value;
        result.value = text.slice(0, -1);
}
result.value += num1.target.innerText;
})
//Operatings

//remain
const remain = document.querySelector(".remain");
remain.addEventListener("click", (remain) => {
  if (!result.classList.contains("operator")) {
      result.value += remain.target.innerText;
       classAdd(result);
    }
})
//dvide
const dvide = document.querySelector(".dvide");
dvide.addEventListener("click", (dvide) => {
 if (!result.classList.contains("operator")) {
      result.value += dvide.target.innerText;
       classAdd(result);
    }
})
//multiply
const multiply = document.querySelector(".multiply");
multiply.addEventListener("click", (multiply) => {
      if (!result.classList.contains("operator")) {
    result.value +="*";
       classAdd(result);
    }
  
})
//minus
const minus = document.querySelector(".minus");
minus.addEventListener("click", (minus) => {
    let text = result.value;
     if (!result.classList.contains("operator")) {
       result.value += minus.target.innerText;
       classAdd(result);
    }
})
//plus
const plus = document.querySelector(".plus");
plus.addEventListener("click", (plus) => {
      if (!result.classList.contains("operator")) {
       result.value += plus.target.innerText;
       classAdd(result);
    }

})

//equal
const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    let calculation = result.value;
    result.value = eval(calculation);
})

//decimal
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (decimal) => {
   if (!result.classList.contains("operator")) {
       result.value += decimal.target.innerText;
       classAdd(result);
    }
})

function classAdd(result) {
    result.classList.add("operator");
    
}
function classRemove(result) {
    result.classList.remove("operator");
}


// Buttonslar
clearBtn.addEventListener("click", () => {
    result.value = 0;
})
deletBtn.addEventListener("click", () => {
    let text = result.value;
    result.value = text.slice(0, -1);
})

// function Operator(check) {
//     text = result.value;
//     if (text.endWith("-")) {
//         check = true;
//     }
// }

