import {BasePage} from '../page_objects/base.page'
import {MainPage} from '../page_objects/main.page'
import {Header} from '../page_objects/page_fragments/header.fragment'
import {expect} from 'chai'
import {browser, $, ExpectedConditions as EC} from 'protractor'

describe('Поиск по проекту', function () {
  const basePage = new BasePage()
  const mainPage = new MainPage()

  beforeEach(async function() {
    await basePage.start()
  })

  xit('001_positive_search. Позитивная проверка поиска по товарам', async function() {
    const currentUrl = await browser.getCurrentUrl()
    const expectedUrl = 'http://bento.com.ua/'
    const enteredData = 'Мисо суп'
    const searchField = $('.passive')
    const tovarTest =  $('a[href="/offer/miso-sup-o116/"]:not(.el)')

    expect(expectedUrl).equals(currentUrl)

    await searchField.sendKeys(enteredData)
    const getedText = await searchField.getAttribute('value')

    expect(enteredData).equals(getedText)

    await $('#headerSearch_form button').click()

    await browser.wait(EC.visibilityOf(tovarTest), 5000, 'В течении 5 сек не прогрузился товар')

    const tovarText = await tovarTest.getText()

    expect(enteredData).equals(tovarText)
  })

  it('002_positive_search. Позитивная проверка по товарам с переходом на искомый товар', async function() {
    const currentUrl = await browser.getCurrentUrl()
    const expectedUrl = 'http://bento.com.ua/'
    const enteredData = 'Мояши'
    const searchField = $('.passive')
    const tovarPhoto = $('.el[href="/offer/moyashi-o123/"]')
    const tovarTest = $('a[href="/offer/moyashi-o123/"]:not(.el)')
    const tovarMoyash = 'http://bento.com.ua/offer/moyashi-o123/'

    expect(expectedUrl).equals(currentUrl)
    await searchField.sendKeys(enteredData)
    const getedText = await searchField.getAttribute('value')

    expect(enteredData).equals(getedText)

    await $('#headerSearch_form button').click()

    await browser.wait(EC.visibilityOf(tovarPhoto), 5000, 'В течении 5 сек не прогрузился товар')

    const tovarText = await tovarTest.getText()

    expect(enteredData).equals(tovarText)

    await tovarPhoto.click()

    const tovarUrl = await browser.getCurrentUrl()

    expect(tovarMoyash).equals(tovarUrl)
    await mainPage.header.goLink.logo()
  })
})
