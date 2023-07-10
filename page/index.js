const root = document.getElementById('root')

// const star = document.getElementsByClassName('star')



function getRandomPosition(element) {
  const x = document.body.offsetWidth - element.clientWidth;
  const y = document.body.offsetHeight - element.clientHeight;
  let randomX = Math.floor(Math.random() * x);
  let randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

function setRandomPosition(element) {
  const position = getRandomPosition(element);
  console.dir(position)
  element.style.top = position[0] + 'px';
  element.style.left = position[1] + 'px';
}

const elements = document.getElementsByClassName('star');
for (let i = 0; i < elements.length; i++) {
  setRandomPosition(elements[i]);
}