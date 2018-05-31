//Функция выбирает рандомное целое число из диапазона
function GettRandInt(min, max) {
    return ((Math.random() * (max - min)) + min).toFixed();
}

//Функция создаёт первую линию и поле ввода
function FirstLine () {
    let end = 36 + cm * a;
    context.moveTo(36, 100);
    context.quadraticCurveTo(end / 2, -90, 36 + cm * a, 100);
    context.lineTo(end - 10, 100 -5);
    context.moveTo(end, 100);
    context.lineTo(end - 5, 100 - 10);
    context.stroke();

    //Добавление поля ввода
    inputCase.innerHTML = "<input id='firstInput' type='number' maxlength='1' onchange='CheckA()' style='width: 20px' >";
    inputCase.style.marginLeft = end / 2 + 'px';

}

//Функция создаёт вторую линию и поле ввода
function SecoundLine(){
    let begin = 36 + cm * a;
    let end = 36 + cm * sum;
    context.moveTo(36 + cm * a, 100);
    context.quadraticCurveTo(begin + (end - begin) / 2, -30,36 + cm * sum, 100);
    context.lineTo(end - 10, 100 -5);
    context.moveTo(end, 100);
    context.lineTo(end - 5, 100 - 10);
    context.stroke();

    //Добавление поля ввода
    //inputCase.innerHTML = "<input id='secondInput' type='number' maxlength='1' onchange='CheckB()' style='width: 20px' >";
    inputCase.style.marginLeft = begin + (end - begin) / 2 - 10 + 'px';
    inputCase.style.top = '5px';
}
//Проверка ввода 1 числа
function CheckA() {
    let checkNumber = document.getElementById('firstInput').value;
    if (checkNumber !== a) {
        document.getElementById('firstNum').style.background = 'orange';
        document.getElementById('firstInput').style.color = 'red';
    }else {
        document.getElementById('firstInput').parentNode.removeChild(document.getElementById('firstInput'));
        inputCase.innerHTML = '<span id="firstInput">' + a + '</spani>';
        SecoundLine();
    }
}

function CheckB() {
    let checkNumber = document.getElementById('secondInput').value;
    if (checkNumber !== b) {
        document.getElementById('secondNum').style.background = 'orange';
        document.getElementById('secondInput').style.color = 'red';
    }else {
        document.getElementById('secondInput').parentNode.removeChild(document.getElementById('secondInput'));
    }
}

//Создание двух чисел и суммы
const cm = 39;
let a = GettRandInt(6, 9);
let b = GettRandInt(11-a, 14-a);
let sum = parseInt(a) + parseInt(b);

//Создание уравнения
equation = document.getElementById('Eq');
equation.innerHTML = "<span id='firstNum'>" + a + "</span> + <span id='secondNum'>" + b + "</span> = <span>?</span>";

//Создание переменных для рисования линий
let inputCase = document.getElementById("inputContainer");
let canvas = document.getElementById("line");
let context = canvas.getContext("2d");
context.lineWidth = 2;
context.strokeStyle = "red";

//Создание первой линии и поля ввода
FirstLine();



