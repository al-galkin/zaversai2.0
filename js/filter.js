let articles = document.querySelectorAll('.article-item');
let filter = document.querySelector('.filter');

filter.onchange = function () {
for (let arti of articles) {
  if (arti.dataset.category !== filter.value && filter.value !== 'all') {
    arti.classList.add('hidden');
   } else {
      arti.classList.remove('hidden');
    }
    console.log(filter.value);
 }
};

 