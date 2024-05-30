var gbbButtons = document.querySelectorAll('.group-buttons-brands__button')
var gbbExpandButton = document.querySelector(
  '.group-buttons-brands__expand-button'
)
var gbbExpandIcon = document.querySelector('.group-buttons-brands__expand-icon')
var gbbExpandText = document.querySelector('.group-buttons-brands__expand-text')

// Функция изменяет кнопку "показать/скрыть" в group-buttons-brands по клику на нее
export function gbbButtonShowAndHide() {
  gbbExpandButton.addEventListener('click', function () {
    if (gbbExpandText.textContent == 'Показать все') {
      gbbExpandIcon.classList.add('rotated')
      gbbExpandText.textContent = 'Скрыть'
      gbbShowButtons(11)
    } else {
      gbbExpandIcon.classList.remove('rotated')
      gbbExpandText.textContent = 'Показать все'
      gbbHowNeed()
    }
  })
}
// Функция вычисляет, сколько кнопок нужно показать в зависимости от размера экрана
export function gbbHowNeed() {
  if (window.innerWidth < 768) {
    gbbShowButtons(11)
  } else if (
    window.innerWidth >= 768 &&
    window.innerWidth < 1366 &&
    gbbExpandText.textContent == 'Показать все'
  ) {
    gbbShowButtons(6)
  } else if (
    window.innerWidth >= 1366 &&
    gbbExpandText.textContent == 'Показать все'
  ) {
    gbbShowButtons(8)
  }
}

// Функция скрывает кнопки в зависимости от размера экрана
function gbbShowButtons(number) {
  //console.log('шоубаттонс работает')
  gbbButtons.forEach((button, index) => {
    if (index < number) {
      button.classList.remove('hidden-position')
    } else {
      button.classList.add('hidden-position')
    }
  })
}

//Функция скрывает кнопку expand-button в зависимости от размера экрана и
// сбрасывает ее в исходное состояние при переходах между 768

export function gbbExpandButtonHidden() {
  if (window.innerWidth < 768) {
    gbbExpandText.textContent = 'Показать все'

    gbbExpandButton.classList.add('hidden-position')
    gbbExpandIcon.classList.remove('rotated')
  } else {
    gbbExpandButton.classList.remove('hidden-position')
  }
}
