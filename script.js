let disp = document.querySelector('.display');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

summ = 0;

for (let i = 0; i < array.length; i++) {
    summ += array[i];
};

disp.innerHTML = 'Array summ - ' + summ;
