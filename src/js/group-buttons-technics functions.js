var gbtButtons = document.querySelectorAll('.group-buttons-technics__button')
var gbtExpandButton = document.querySelector(
  '.group-buttons-technics__expand-button'
)
var gbtExpandIcon = document.querySelector(
  '.group-buttons-technics__expand-icon'
)
var gbtExpandText = document.querySelector(
  '.group-buttons-technics__expand-text'
)

// Функция изменяет кнопку "показать/скрыть" в group-buttons-technics по клику на нее
//+++++
export function gbtButtonShowAndHide() {
  gbtExpandButton.addEventListener('click', function () {
    if (gbtExpandText.textContent == 'Показать все') {
      gbtExpandIcon.classList.add('rotated')
      gbtExpandText.textContent = 'Скрыть'
      gbtShowButtons(4)
    } else {
      gbtExpandIcon.classList.remove('rotated')
      gbtExpandText.textContent = 'Показать все'
      gbtHowNeed()
    }
  })
}

// Функция вычисляет, сколько кнопок нужно показать в зависимости от размера экрана
export function gbtHowNeed() {
  if (window.innerWidth < 768) {
    gbtShowButtons(4)
  } else if (
    window.innerWidth >= 768 &&
    window.innerWidth < 1366 &&
    gbtExpandText.textContent == 'Показать все'
  ) {
    gbtShowButtons(3)
  } else if (
    window.innerWidth >= 1366 &&
    gbtExpandText.textContent == 'Показать все'
  ) {
    gbtShowButtons(4)
  }
}

// Функция скрывает кнопки в зависимости от размера экрана
export function gbtShowButtons(gbtNeedButtons) {
  gbtButtons.forEach((button, index) => {
    if (index < gbtNeedButtons) {
      button.classList.remove('hidden-position')
    } else {
      button.classList.add('hidden-position')
    }
  })
}

//Функция скрывает кнопку expand-button в зависимости от размера экрана и
// сбрасывает ее в исходное состояние при переходах между 768

export function gbtExpandButtonHidden() {
  if (window.innerWidth < 768) {
    gbtExpandText.textContent = 'Показать все'
    gbtExpandButton.classList.add('hidden-position')
    gbtExpandIcon.classList.remove('rotated')
    gbtExpandButton.disabled = false
  } else if (window.innerWidth >= 1366) {
    gbtExpandText.textContent = 'Показать все'
    gbtExpandButton.classList.remove('hidden-position')
    gbtExpandIcon.classList.remove('rotated')
    gbtExpandButton.disabled = true
  } else {
    gbtExpandButton.classList.remove('hidden-position')
    gbtExpandButton.disabled = false
  }
}
