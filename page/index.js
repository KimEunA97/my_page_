const root = document.getElementById('root')

// const star = document.getElementsByClassName('star')

function getRandomPosition(element) {

  let diffX = document.body.offsetWidth - element.clientWidth;
  let diffY = document.body.offsetHeight - element.clientHeight
  var maxX = document.body.offsetWidth;
  var maxY = document.body.offsetHeight;
  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);
  return [randomX, randomY];
}

function setRandomPosition(element) {
  var position = getRandomPosition(element);
  console.log(position);
  element.style.left = position[0] + 'px';
  element.style.top = position[1] + 'px';
}

const elements = document.getElementsByClassName('star');
for (let i = 0; i < elements.length; i++) {
  setRandomPosition(elements[i]);
}