var overlay = document.querySelector('.overlay')
var xButton = document.querySelector('.burger__x-icon')
var xButtonCall = document.querySelector('.popup__call--x-icon')
var xButtonConnect = document.querySelector('.popup__connect--x-icon')
export function overlayClick() {
  document.addEventListener('click', function (event) {
    if (overlay.contains(event.target)) {
      console.log('click overlay')
      xButton.click()
      xButtonCall.click()
      xButtonConnect.click()
    }
  })
}
