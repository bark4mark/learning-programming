var inputElement = document.getElementById("your-input")

document.addEventListener('keypress', updateYourInput)

function updateYourInput (event) {
  inputElement.innerText = event.key
}
