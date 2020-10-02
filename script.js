let counterPlus = 1;
let counterMinus = 1;
document.getElementById("plus").innerHTML = `Прибавить ${counterPlus}`;
document.getElementById("minus").innerHTML = `Вычесть ${counterMinus}`;
document.getElementById("counterText").innerHTML = `Счётчик:`;
let counter = 0;

function plus()  {
    scoreCount();
    document.getElementById("counter").innerHTML = `${counter += counterPlus}`;
    if (document.getElementById("counter").innerHTML === document.getElementById("requiredNumber").innerHTML) {
        congrats();
    }
    counterPlus += 2;
    document.getElementById("plus").innerHTML = `Прибавить ${counterPlus}`;
    
}

function minus() {
    scoreCount();
    document.getElementById("counter").innerHTML = `${counter -= counterMinus}`;
    if (document.getElementById("counter").innerHTML === document.getElementById("requiredNumber").innerHTML) {
        congrats();
    }
    if (counterMinus == 1) {
        counterMinus++;
    } else {
        counterMinus += 2;
    }
    document.getElementById("minus").innerHTML = `Вычесть ${counterMinus}`;
}

document.getElementById("counter").innerHTML = counter;

document.getElementById("newGame").innerHTML = `Новая игра`;
document.getElementById("resetScore").innerHTML = `Сбросить счёт`;
document.getElementById("makeNumber").innerHTML = `Загадать число`;
document.getElementById("requiredNumberText").innerHTML = `Нужно:`;
let requiredNumber = document.getElementById("requiredNumber").innerHTML;
requiredNumber = ``;


function makeNumber() {
    reset();
    let numberPreference = prompt("Моё число должно быть в промежутке от 0 до (макс. 1000):", 100);
    if (numberPreference > 1000) {
        alert("Слишком большое число, выберите не больше 1000 для вашего удобства");
        return document.getElementById("makeNumber").innerHTML = `Загадать число`;
    } else if  (numberPreference === null ||
                numberPreference === undefined) {
        alert("Вы не выбрали число.")
        return document.getElementById("makeNumber").innerHTML = `Загадать число`;
    } else if (numberPreference < 1) {
        alert("Нужно выбрать число больше нуля.");
    } else {
            let rand = Math.floor(Math.random() * (numberPreference - 1) + 1);
        document.getElementById("requiredNumber").innerHTML = rand;
        }
    document.getElementById("makeNumber").innerHTML = `Загадать другое число`;
    }


function reset() {
    counter = 0;
    counterMinus = 1;
    counterPlus = 1;
    score = 0;
    document.getElementById("counter").innerHTML = `${counter}`;
    document.getElementById("plus").innerHTML = `Прибавить ${counterPlus}`;
    document.getElementById("minus").innerHTML = `Вычесть ${counterMinus}`;
}

function newGame() {
    reset();
    document.getElementById("requiredNumber").innerHTML = ` `;
    document.getElementById("makeNumber").innerHTML = `Загадать число`;
}

function resetScore() {
    reset();
    document.getElementById("resetScore").innerHTML = `Сбросить счёт`;
}

let score = 0;
 
function scoreCount() {
    return score += 1;
 }

function congrats() {
    alert(`Вы победили! Количество нажатий: ${score}`);
 }

