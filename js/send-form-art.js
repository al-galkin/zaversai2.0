// найдем форму
let commentForm = document.querySelector('.send-comment-form');
// найдем ленту, куда будут выводиться комментарии 
let commentsList = document.querySelector('.comments-list');
// Найдём поле ввода комментария
let textarea = document.querySelector('.send-comment-message-input');
// Найдём поле ввода имени и почты
let sendCommentName = document.querySelector('.send-comment-name');
let sendCommentEmail = document.querySelector('.send-comment-email');
// Найдём кнопку отправки
let btnJs = document.querySelector('.btn-js');


// добавление нового комментария

commentForm.onsubmit = function (evt) {
  //отменяем автоматическую отправку формы
  evt.preventDefault();
  //создаем новый элемент в списке с комментариями
  let newComment = document.createElement('li');
  //присваиваем ему отступ, как у остальных коммент-ев
  newComment.classList.add('comment-item');
  //изменяем текстовое содержимое элемента newComment на данные, полученные из поля ввода
  newComment.textContent = textarea.value;
  //очищаем поле ввода
  textarea.value = '';
  sendCommentName.value = '';
  sendCommentEmail.value = '';
  //добавляем новый комментарий
  commentsList.append(newComment);
};

// хотел сделать добавление аватаров и имен авторов комментариев - не получилось :(

//let commentItem = document.querySelector('.comment-item');
// commentItem.onsubmit = function (evt) {
//   evt.preventDefault();
//   let newDiv = document.createElement('div');
//   newDiv.classList.add('comment-wrap');
//   commentItem.append(newDiv);
// };
// 
// let commentWrap = document.querySelector('.comment-wrap');
//   commentWrap.onsubmit = function (evt) {
//   evt.preventDefault();
//   let newB = document.createElement('b');
//   newB.classList.add('comment-author');
//   newB.textContent = sendCommentName.value;
//   sendCommentName.value = '';
//   commentWrap.append(newB);
// };

 

// Покраска красным текста при наборе комментария:

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
