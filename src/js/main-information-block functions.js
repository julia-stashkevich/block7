var mibExpandButton = document.querySelector(
  '.main-information-block__expand-button'
)
var mibExpandText = document.querySelector(
  '.main-information-block__expand-text'
)
var mibExpandIcon = document.querySelector(
  '.main-information-block__expand-icon'
)
var mibTextCreate = document.querySelector(
  '.main-information-block__text-create'
)
//Функция отслеживает размер экрана и блокирует кнопку "показать/скрыть" в main-information-block
export function checkWindow1366() {
  if (window.innerWidth >= 1366) {
    mibExpandButton.disabled = true
  } else {
    mibExpandButton.disabled = false
  }
}
// Функция изменяет кнопку "показать/скрыть" в main-information-block по клику на нее
export function mibButtonShowAndHide() {
  mibExpandButton.addEventListener('click', function () {
    if (mibExpandText.textContent == 'Читать далее') {
      mibExpandIcon.classList.add('rotated')
      mibExpandText.textContent = 'Скрыть'
      mibCreateText()
    } else {
      mibExpandIcon.classList.remove('rotated')
      mibExpandText.textContent = 'Читать далее'
      mibCreateText()
    }
  })
}

var textMin =
  'Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.'
var textMid =
  textMin +
  '\n\nМы успешно работаем с 1992 года и заслужили репутацию надежного партнера'
var textMax =
  textMid +
  ', что подтверждает большое количество постоянных клиентов.\nМы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.'

// Функция создает нужный объем текста в зависимости от размера экрана и положения кнопки "показать/скрыть" в main-information-block
export function mibCreateText() {
  if (window.innerWidth < 768 && mibExpandText.textContent === 'Читать далее') {
    mibTextCreate.innerText = textMin
  } else {
    if (window.innerWidth < 768 && mibExpandText.textContent == 'Скрыть') {
      mibTextCreate.innerText = textMax
    } else {
      if (
        window.innerWidth >= 768 &&
        window.innerWidth < 1366 &&
        mibExpandText.textContent == 'Читать далее'
      ) {
        mibTextCreate.innerText = textMid
      } else {
        if (
          window.innerWidth >= 768 &&
          window.innerWidth < 1366 &&
          mibExpandText.textContent == 'Скрыть'
        ) {
          mibTextCreate.innerText = textMax
        } else {
          if (
            window.innerWidth >= 1366 &&
            mibExpandText.textContent == 'Читать далее'
          ) {
            mibTextCreate.innerText = textMax
          } else {
            mibTextCreate.innerText = textMax
          }
        }
      }
    }
  }
}
