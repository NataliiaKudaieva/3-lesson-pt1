var userAge = prompt('Сколько лет?');
var smoking = confirm('Ты куришь?');

if (userAge >= 18 && smoking) {
    alert('Ну и зря');
} else if (userAge >= 18 && !smoking) {
    alert('Так держать!');
} else if (userAge < 18 && smoking) {
    alert('Маме расскажу');
} else if (userAge < 18 && !smoking) {
    alert('Молодец, ну и не надо');
} else {
    alert('Только числа')
}
