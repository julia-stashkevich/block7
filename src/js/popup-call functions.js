var overlayPopup = document.querySelector('.overlay')
var callButton = document.querySelector('.header-block__call-icon ')
var xButtonCall = document.querySelector('.popup__call--x-icon')
var callPopup = document.querySelector('.popup__call')
var body = document.querySelector('body')

//Функция показывает попап по клику call
export function showPopupCall() {
  callButton.addEventListener('click', function () {
    overlayPopup.style.display = 'block'
    callPopup.style.display = 'flex'
    body.classList.add('overflowBlocked')
  })
}

//Функция скрывает попап по клику X
export function hidePopupCall() {
  xButtonCall.addEventListener('click', function () {
    overlayPopup.style.display = 'none'
    callPopup.style.display = 'none'
    body.classList.remove('overflowBlocked')
  })
}
