let grayDiv = document.querySelector('.square');

grayDiv.addEventListener('click', changeColor);

function changeColor() {
  grayDiv.classList.toggle('gray');
  grayDiv.classList.toggle('pink');
}