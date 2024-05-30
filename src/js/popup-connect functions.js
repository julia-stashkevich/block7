var overlayPopup = document.querySelector('.overlay')
var connectButton = document.querySelector('.header-block__chat-icon')
var xButtonConnect = document.querySelector('.popup__connect--x-icon')
var connectPopup = document.querySelector('.popup__connection')
var body = document.querySelector('body')

//Функция показывает попап по клику connect
export function showPopupConnect() {
  connectButton.addEventListener('click', function () {
    overlayPopup.style.display = 'block'
    connectPopup.style.display = 'flex'
    body.classList.add('overflowBlocked')
  })
}
//Функция скрывает попап по клику X
export function hidePopupConnect() {
  xButtonConnect.addEventListener('click', function () {
    overlayPopup.style.display = 'none'
    connectPopup.style.display = 'none'
    body.classList.remove('overflowBlocked')
  })
}
