import {ElementFinder, $, ElementArrayFinder, $$, browser, element, by, ExpectedConditions as EC, Key} from 'protractor'

enum DeliverySelects {
  typeOfDelivery = 'Тип доставки *',
  getFromRest = 'Забрать из ресторана',
  courierDelivery = 'Доставка курьером'
}

enum CashTypeSelects {
  paymentType = 'Тип оплаты *',
  cashType = 'Налично при получении заказа',
  bancCard = 'Банковской  картой  при  получении'
}

interface ICartPageData {
  phone: string
  name: string
  email: string
  note: string
  deliveryType: DeliverySelects
  cashType: CashTypeSelects
  city: string
  countPerson: string
}

class CartPage {
  private phone: ElementFinder
  private name: ElementFinder
  private email: ElementFinder
  private note: ElementFinder
  private deliveryType: ElementFinder
  private cashType: ElementFinder
  private city: ElementFinder
  private countPerson: ElementFinder
  private checkoutBtn: ElementFinder

  constructor() {
    this.phone = $('[name="tel"]')
    this.name = $('[name="firstName"]')
    this.email = $('.width100 [name="email"]')
    this.note = $('[name="userComment"]')
    this.deliveryType = $('[name="orderDeliveryTypeId"]')
    this.cashType = $('[name="orderPayTypeId"]')
    this.city = $('[name="city"]')
    this.countPerson = $('[name="account"]')
    this.checkoutBtn = $('.checkoutBtn')
  }

  public get set() {
    return {
      phone: async (text) => this.cleanAndSend(this.phone, text),
      name: async (text) => this.cleanAndSend(this.name, text),
      email: async (text) => this.cleanAndSend(this.email, text),
      note: async (text) => this.note.sendKeys(text),
      deliveryType: async (select: DeliverySelects) => {
        await this.deliveryType.click()
        await element(by.cssContainingText('option', select)).click()
      },
      cashType: async (select: CashTypeSelects) => {
        await this.cashType.click()
        await element(by.cssContainingText('option', select)).click()
      },
      city: async (text) => this.city.sendKeys(text),
      countPerson: async (text) => this.countPerson.sendKeys(text)
    }
  }

  public async clickBtn() {
    await this.checkoutBtn.click()
  }

  public async setFull(data: ICartPageData) {
    const deliverySelect = element(by.cssContainingText('option', data.deliveryType))
    const cashSelect = element(by.cssContainingText('option', data.cashType))
    await this.cleanAndSend(this.phone, data.phone)
    await this.cleanAndSend(this.name, data.name)
    await this.cleanAndSend(this.email, data.email)
    await this.note.sendKeys(data.note)
    await this.deliveryType.click()
    await browser.wait(EC.visibilityOf(deliverySelect), 5000, 'Delivery select not vis')
    await deliverySelect.click()
    await this.cashType.click()
    await browser.wait(EC.visibilityOf(cashSelect), 5000, 'Cash select not vis')
    await cashSelect.click()
    await this.city.sendKeys(data.city)
    await this.countPerson.sendKeys(data.countPerson)
    // await this.clickBtn()
  }

  public async getData() {
    return {
      phone: await this.phone.getAttribute('value'),
      name: await this.name.getAttribute('value'),
      email: await this.email.getAttribute('value'),
      note: await this.note.getAttribute('value'),
      deliveryType: await this.deliveryType.$('option[selected]').getAttribute('text'),
      // cashType: await this.cashType.$('option[selected]').getAttribute('value'),
      city: await this.city.getAttribute('value'),
      countPerson: await this.countPerson.getAttribute('value')
    }
  }

  public async changeCount(itemName: string, count: string) {
    await browser.wait(EC.visibilityOf($('.offerListBlock table')), 5000, 'table not vis')
    const fieldToSetCount = element(by.js(`
      const name = arguments[0]
      const titleList = document.querySelectorAll('td.title a')

      const foundedTitle = Array.prototype.filter.call(titleList, function(title) {
        if (title.innerText === name) {
           return title
        }
      })[0]

      const row = foundedTitle.parentNode.parentNode.parentNode
      const amountTd = row.querySelector('.amountTD')
      const countField = amountTd.querySelector('[name="offerModAmount"]')

      return countField
    `, itemName)) as ElementFinder

    await fieldToSetCount.sendKeys(Key.BACK_SPACE)
    await fieldToSetCount.sendKeys(count)
  }

  private async cleanAndSend(elem: ElementFinder, text: string) {
    await elem.clear()
    await elem.sendKeys(text)
  }

}

export {CartPage, DeliverySelects, CashTypeSelects, ICartPageData}
