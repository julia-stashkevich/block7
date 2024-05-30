var sbBrands = document.querySelector('.scroll-button-brands')
var sbTechnics = document.querySelector('.scroll-button-technics')
var sbTable = document.querySelector('.scroll-button-table')
var sbCommercial = document.querySelector('.scroll-button-commercial')
var blockBrands = document.querySelector('.group-buttons-brands')
var blockTechnics = document.querySelector('.company-button--big')
var blockTable = document.querySelector('.main-block__table-container')
var blockCommercial = document.querySelector('.commercial-offer__button')

sbBrands.addEventListener('click', () => {
  scrollButtonsBlocks('brands')
})
sbTechnics.addEventListener('click', () => {
  scrollButtonsBlocks('technics')
})
sbTable.addEventListener('click', () => {
  scrollButtonsBlocks('table')
})
sbCommercial.addEventListener('click', () => {
  scrollButtonsBlocks('commercial')
})
// Функция создает скролл экрана по клику кнопки на нужный блок
export function scrollButtonsBlocks(target) {
  if (target === 'brands') {
    blockBrands.scrollIntoView({ behavior: 'smooth' })
  } else if (target === 'technics') {
    blockTechnics.scrollIntoView({ behavior: 'smooth' })
  } else if (target === 'table') {
    blockTable.scrollIntoView({ behavior: 'smooth' })
  } else if (target === 'commercial') {
    blockCommercial.scrollIntoView({ behavior: 'smooth' })
  }
}
