var overlayBurger = document.querySelector('.overlay')
var burgerButton = document.querySelector('.header-block__burger-icon')
var xButton = document.querySelector('.burger__x-icon')
var burger = document.querySelector('.burger')
var body = document.querySelector('body')
var callBurgerButton = document.querySelector('.burger__call-icon')
var connectBurgerButton = document.querySelector('.burger__chat-icon ')
var callButton = document.querySelector('.header-block__call-icon ')
var connectButton = document.querySelector('.header-block__chat-icon')

export function burgerPosition() {
  if (window.innerWidth >= 1366) {
    overlayBurger.style.display = 'none'
    burger.style.display = 'flex'
  } else {
    burger.style.display = 'none'
    overlayBurger.style.display = 'none'
  }
}

export function showPopupBurger() {
  burgerButton.addEventListener('click', function () {
    overlayBurger.style.display = 'block'
    burger.style.display = 'flex'
    body.classList.add('overflowBlocked')
  })
}

export function hidePopupBurger() {
  xButton.addEventListener('click', function () {
    if (window.innerWidth >= 1366) {
      overlayBurger.style.display = 'none'
      burger.style.display = 'flex'
      body.classList.remove('overflowBlocked')
    } else {
      overlayBurger.style.display = 'none'
      burger.style.display = 'none'
      body.classList.remove('overflowBlocked')
    }
  })
}

export function transitionCall() {
  callBurgerButton.addEventListener('click', function () {
    xButton.click()
    callButton.click()
  })
}
export function transitionConnect() {
  connectBurgerButton.addEventListener('click', function () {
    xButton.click()
    connectButton.click()
  })
}
