import {BasePage} from '../page_objects/base.page'
import {Login} from '../page_objects/page_fragments/login.fragment'
import {MainPage} from '../page_objects/main.page'
import {SearchPage} from '../page_objects/search.page'
import {CartPage, ICartPageData, DeliverySelects, CashTypeSelects} from '../page_objects/cart.page'
import {browser} from 'protractor'
import {expect} from 'chai'

describe('сделать заказ на сайте', function() {
  const basePage = new BasePage()
  const login = new Login()
  const mainPage = new MainPage()
  const searchPage = new SearchPage()
  const cartPage = new CartPage()

  beforeEach(async function() {
    await basePage.start()
  })

  it('положительный тест', async function() {
    const cartData: ICartPageData = {
      phone: '+38 (231) 456-78-90',
      name: 'Лена',
      email: 'hhjjjhjj@gmail.com',
      note: 'nbbnbn',
      deliveryType: DeliverySelects.getFromRest,
      cashType: CashTypeSelects.bancCard,
      city: 'KJHHJ',
      countPerson: '2'
    }

    await mainPage.header.to.signIn()
    await login.autharization('egladunodua@gmail.com', '12345lena')
    await mainPage.header.search('Маки')
    await searchPage.addToBasket('Кани маки ролл')
    await searchPage.header.to.basket()
    await cartPage.changeCount('Кани маки ролл', '5')

    await browser.sleep(5000)
    // await cartPage.setFull(cartData)
    // const result = await cartPage.getData()

    // expect(cartData).deep.equal(result)

  })

})
