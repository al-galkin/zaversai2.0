// найдем форму
let commentForm = document.querySelector('.write-me-form');
// Найдём поле ввода
let textarea = document.querySelector('.write-me-form-input-message');
// Найдём кнопку отправки
let btnJs = document.querySelector('.btn-js');



// Навешиваем на форму обработчик отправки 
textarea.oninput = function(evt) { 
    // Проверяем введённое значение на соответствие
    if (textarea.value.length < 10) {
    // Если значение #1 не подходит, отменяем автоматическую отправку формы
    evt.preventDefault();	
    btnJs.disabled = true;
    commentForm.classList.add('font-red');
  // Если значение #2 не подходит, отменяем автоматическую отправку формы
} else if (textarea.value.length > 100) {
	evt.preventDefault();	
    btnJs.disabled = true;
    commentForm.classList.add('font-red');

// Если оба значения подходят, то разрешаем автоматическую отправку формы   
} else { 
    btnJs.disabled = false;
    commentForm.classList.remove('font-red');
  }
};
