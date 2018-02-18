var colors = {
  1: 'red',
  2: 'blue',
  3: 'black',
  4: 'orange',
  5: 'pink'
}

// Lets us listen for a click on the whole page (because it is added to document)
document.addEventListener('click', changeBackgroundColor)

function changeBackgroundColor () {
  // Generates a random number
  var colorChosen = Math.floor(Math.random() * 5) + 1;
  document.body.style.backgroundColor = colors[colorChosen];
}
