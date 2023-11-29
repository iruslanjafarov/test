//Интерфейс
const type = prompt("Введите оператор");
const first = +prompt("Введите первое число", "Не указывайте второе число, если вы собираетесь извлечь корень или получить факториал, оставьте поле пустым");
const second = +prompt("Введите второе число", "Если вы собираетесь переводить в определённую систему счисления, введите ее");

//Модуль для факториала
function factorial(n, result = 1){
    if (!n){
        return result;
    } else {
        return factorial(n - 1, result * n);
    };
};

//Стандартные операции
switch(type) {
    case "+": alert(first + second); break //Сложение
    case "-": alert(first - second); break //Вычитание
    case "*": alert(first * second); break //Умножение
    case "/": alert(first / second); break //Деление
    case "%": alert(second * (first / 100)); break //Получение процента по формуле
    case "^": alert(first ** second); //Получение степени
    case "√": alert(Math.sqrt(first)); //Извлечение корня
    case "!": alert(factorial(first)); //Факториал
    case "01": alert(parseInt(toString(first), toString(second))); //Работа со системами счисления
};