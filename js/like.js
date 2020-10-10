let artLike = document.querySelector('.art-like');
let artLikeNumber = document.querySelector('.art-like-number');
let counter = 16;

artLikeNumber.textContent = 16;

artLike.onclick = function () {
	//если у кнопки есть класс
	if (artLike.classList.contains('checked')) {
	//то счетчик лайков уменьшаем
		counter = counter - 1; 
	} else {
	//иначе увеличиваем
  counter = counter + 1; 
  }
	//тексту лайков присваиваем "16" из макета
  artLikeNumber.textContent = counter;
  artLike.classList.toggle('checked'); 
};

// let artLike = document.querySelector('.art-like');
// let artLikeNumber = document.querySelector('.art-like-number');
// let counter = 16;

// artLikeNumber.textContent = 16;

// artLike.onclick = function () {
// 	//если у кнопки есть класс
// 	if (artLike.classList.contains('checked')) {
// 	//то счетчик лайков уменьшаем
// 		counter = counter - 1; 
// 	} else {
// 	//иначе увеличиваем
//   counter = counter + 1; 
//   }
// 	//тексту лайков присваиваем "16" из макета
//   artLikeNumber.textContent = counter;
//   artLike.classList.toggle('checked'); 
// };