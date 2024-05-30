var mainTable = document.querySelector('.main-block__table-container')
//Функция скрывает/показывает таблицу в зависимости от размера экрана
export function tableContainerShowAndHide() {
  if (window.innerWidth < 768) {
    mainTable.classList.add('hidden')
  } else {
    mainTable.classList.remove('hidden')
  }
}
