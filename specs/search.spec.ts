import {BasePage} from '../page_objects/base.page'
import {expect} from 'chai'
import {browser, $, ExpectedConditions as EC} from 'protractor'

describe('Поиск по проекту', function () {
  const basePage = new BasePage()

  beforeEach(async function() {
    await basePage.start()
  })

  it('001_positive_search. Позитивная проверка поиска по товарам', async function() {
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
})
