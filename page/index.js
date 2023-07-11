const root = document.getElementById('root')
const star = document.getElementsByClassName('star')
const earthBox = document.getElementsByClassName('earthBox')

//5초마다 별 위치 바뀜
function timeSetStars() {

  function getRandomPosition() {
    const maxX = document.body.clientWidth;
    const maxY = document.body.clientHeight - 200;
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);
    return [randomX, randomY];
  }

  function setRandomPosition(element) {
    var position = getRandomPosition(element);
    element.style.left = position[0] + 'px';
    element.style.top = position[1] + 'px';
  }

  const elements = document.getElementsByClassName('star');
  for (let i = 0; i < elements.length; i++) {
    setRandomPosition(elements[i]);
  }
}
setInterval(() => {
  timeSetStars();

}, 5000);
timeSetStars();

earthBox[0].addEventListener('click', () => {
  earthBox[0].classList.add('earthBoxAfterClick')
  const blackup = document.getElementsByClassName('introduceBox');
  const myName = document.getElementsByClassName('myName');

  setTimeout(() => {
    myName[0].style.transitionTimingFunction = "ease";
    myName[0].style.transitionDuration = "1s";
    myName[0].style.transitionDelay = "1s";

    myName[0].style.display = "flex";
    myName[0].style.opacity = "0";


    blackup[0].style.transitionTimingFunction = "ease";
    blackup[0].style.transitionDuration = "1s";
    blackup[0].style.transitionDelay = "1s";

    blackup[0].style.display = "flex";
    blackup[0].style.opacity = "0";

    setTimeout(() => {
      blackup[0].style.opacity = "1";
      myName[0].style.opacity = "1";

    }, 1000);
  }, 3000)


})

function openWeb(url) {
  window.open(url)
}