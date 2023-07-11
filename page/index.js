
const root = document.getElementById('root')
const star = document.getElementsByClassName('star')
const earthBox = document.getElementsByClassName('earthBox')
console.dir(earthBox)

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


// window.addEventListener('scroll', function () {
//   console.log("scroll")
// })

earthBox[0].addEventListener('click', () => {
  console.log("click!")
  console.dir(document.styleSheets[0].cssRules[4])
  const animation = document.styleSheets[0].cssRules[4];

  function setRapidScroll() {
    animation.style.animationName = "rapidScroll"
  }

})
