var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
var image = new Image()
image.onload = function () {
  context.drawImage(image, 0, 0)
}

function loadImage () {
  image.src = 'pikachu.jpg'
}

document.addEventListener('keypress', (event) => {
  if(event.key === 'ArrowLeft') {
    console.log('You have pressed left')
    console.log(image)
  }
  if(event.key === 'ArrowRight') {
    console.log('You have pressed right')
    console.log(image)
  }
});
