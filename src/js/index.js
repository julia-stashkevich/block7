import Swiper from 'swiper'
import '../scss/style.scss'

import {
  showPopupBurger,
  hidePopupBurger,
  transitionCall,
  transitionConnect,
  burgerPosition
} from './burger functions.js'
import { showPopupCall, hidePopupCall } from './popup-call functions.js'
import {
  showPopupConnect,
  hidePopupConnect
} from './popup-connect functions.js'
import {
  mibButtonShowAndHide,
  mibCreateText,
  checkWindow1366
} from './main-information-block functions.js'
import {
  gbbButtonShowAndHide,
  gbbHowNeed,
  gbbExpandButtonHidden
} from './group-buttons-brands functions.js'
import {
  gbtButtonShowAndHide,
  gbtHowNeed,
  gbtExpandButtonHidden
} from './group-buttons-technics functions.js'
import { tableContainerShowAndHide } from './table-container functions.js'
import { scrollButtonsBlocks } from './scrolls-buttons-blocks.js'
import { destroySwiper, createSwiper } from './swiper.js'

// Burger
var burgerButton = document.querySelector('.header-block__burger-icon')
var xButton = document.querySelector('.burger__x-icon')
burgerButton.addEventListener('click', showPopupBurger)
xButton.addEventListener('click', hidePopupBurger)
var callBurgerButton = document.querySelector('.burger__call-icon')
var connectBurgerButton = document.querySelector('.burger__chat-icon ')
callBurgerButton.addEventListener('click', transitionCall)
connectBurgerButton.addEventListener('click', transitionConnect)

//Call-popup
var callButton = document.querySelector('.header-block__call-icon ')
var xButtonCall = document.querySelector('.popup__call--x-icon')
callButton.addEventListener('click', showPopupCall)
xButtonCall.addEventListener('click', hidePopupCall)

//Connect-popup
var connectButton = document.querySelector('.header-block__chat-icon')
var xButtonConnect = document.querySelector('.popup__connect--x-icon')
connectButton.addEventListener('click', showPopupConnect)
xButtonConnect.addEventListener('click', hidePopupConnect)

// Main information block
var mibExpandButton = document.querySelector(
  '.main-information-block__expand-button'
)
mibExpandButton.addEventListener('click', mibButtonShowAndHide)

//Group buttons brands
var gbbExpandButton = document.querySelector(
  '.group-buttons-brands__expand-button'
)
gbbExpandButton.addEventListener('click', gbbButtonShowAndHide)

//Group buttons technics
var gbtExpandButton = document.querySelector(
  '.group-buttons-technics__expand-button'
)
gbtExpandButton.addEventListener('click', gbtButtonShowAndHide)

// Scrolls buttons block
var sbBrands = document.querySelector('.scroll-button-brands')
var sbTechnics = document.querySelector('.scroll-button-technics')
var sbTable = document.querySelector('.scroll-button-table')
var sbCommercial = document.querySelector('.scroll-button-commercial')
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

// Swipers
var swiperCompanyBlock = document.querySelector('.swiper-company-block')
var swiperTechnicsBlock = document.querySelector('.swiper-technics-block')
var swiperCardBlock = document.querySelector('.swiper-card-block')

// All func load/resize
window.addEventListener('load', function () {
  createSwiper(swiperCompanyBlock)
  createSwiper(swiperTechnicsBlock)
  createSwiper(swiperCardBlock)
  burgerPosition()
  gbbExpandButtonHidden()
  gbtExpandButtonHidden()
  checkWindow1366()
  tableContainerShowAndHide()
  mibButtonShowAndHide()
  mibCreateText()
  gbbHowNeed()
  gbtHowNeed()
})
window.addEventListener('resize', function () {
  destroySwiper()
  burgerPosition()
  gbbExpandButtonHidden()
  gbtExpandButtonHidden()
  checkWindow1366()
  tableContainerShowAndHide()
  mibButtonShowAndHide()
  mibCreateText()
  gbbHowNeed()
  gbtHowNeed()
})
