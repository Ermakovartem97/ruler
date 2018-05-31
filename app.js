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
    inputCase.innerHTML = "<input id='firstInput' type='text' maxlength='1'  onchange='CheckA()' style='width: 20px' >";
    document.getElementById('firstInput').style.marginLeft = end / 2 + 'px';
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
    inputCase.innerHTML = "<span id='AInput'>" + a + "</span><input id='secondInput' type='text' maxlength='1' onchange='CheckB()' style='width: 20px' >";
    document.getElementById('AInput').style.marginLeft = 36 + a * cm / 2 -10 + 'px';
    document.getElementById('secondInput').style.marginLeft = begin + (end - begin) / 2 - 15 - (36 + a * cm / 2)  + 'px';
    document.getElementById('secondInput').style.top = '30px';
}

//Проверка ввода 1 числа
function CheckA() {
    let checkNumber = document.getElementById('firstInput').value;
    if (checkNumber !== a) {
        document.getElementById('firstNum').style.background = 'orange';
        document.getElementById('firstInput').style.color = 'red';
    }else {
        document.getElementById('firstNum').style.background = '';
        inputCase.innerHTML = '<span id="firstInput">' + a + '</spani>';

        SecoundLine();
    }
}

//Проверка ввода 2 числа
function CheckB() {
    let checkNumber = document.getElementById('secondInput').value;
    if (checkNumber !== b) {
        document.getElementById('secondNum').style.background = 'orange';
        document.getElementById('secondInput').style.color = 'red';
    }else {
        document.getElementById('secondNum').style.background = '';
        inputCase.innerHTML = "<span id='AInput'>" + a + "</span><span id='BInput'>" + b + "</span>";
        document.getElementById('AInput').style.marginLeft = 36 + a * cm / 2 -10 + 'px';
        document.getElementById('BInput').style.marginLeft = 36 + cm * a + (cm * sum - cm * a) / 2 - (36 + a * cm / 2) - 15 + 'px';
        document.getElementById('BInput').style.top = '30px';
        document.getElementById('sumNum').innerHTML = '<input id="answer" type="text" maxlength="2" onchange="CheckSum()" style="width: 40px">';
    }
}

//Проверка ввода суммы
function CheckSum() {
    let checkNumber = document.getElementById('answer').value;
    console.log(sum,checkNumber);
    if (checkNumber !== sum1){
        document.getElementById('answer').style.color = 'red';
    }else {
        document.getElementById('answer').style.color = '';
        document.getElementById('sumNum').innerHTML = "<span>" + sum + "</span>";
    }

}


//Создание двух чисел и суммы
const cm = 39;
let a = GettRandInt(6, 9);
let b = GettRandInt(11-a, 14-a);
let sum = parseInt(a) + parseInt(b);
let sum1 = sum+'';

//Создание уравнения
equation = document.getElementById('Eq');
equation.innerHTML = "<span id='firstNum'>" + a + "</span> + <span id='secondNum'>" + b + "</span> = <span id='sumNum'>?</span>";

//Создание переменных для рисования линий
let inputCase = document.getElementById("inputContainer");
let canvas = document.getElementById("line");
let context = canvas.getContext("2d");
context.lineWidth = 2;
context.strokeStyle = "red";

//Создание первой линии и поля ввода
FirstLine();



