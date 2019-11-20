import {ElementFinder, $, ElementArrayFinder, $$} from 'protractor'

class Header {
  private logo: ElementFinder
  private basket: ElementFinder
  private about: ElementFinder
  private cashDelivery: ElementFinder
  private instruction: ElementFinder
  private signIn: ElementFinder
  private registration: ElementFinder
  private callBack: ElementFinder
  private searchField: ElementFinder
  private searchBtn: ElementFinder
  private menu: ElementArrayFinder

  constructor() {
    this.logo = $('#logoBlock .logo')
    this.basket = $('.cartBlock.st')
    this.about = $('#headerCD .siteWidth [href="/page/about/"]')
    this.cashDelivery = $('#headerCD .siteWidth [href="/page/payment-and-delivery/"]')
    this.instruction = $('#headerCD .siteWidth [href="/page/instrukciya-po-registracii-p8/"]')
    this.signIn = $('#authorizationLink')
    this.registration = $('#registrationLink')
    this.callBack = $('.contactCenterBtn')
    this.searchField = $('[name="searchString"]')
    this.searchBtn = $('#headerSearch_form button')
    this.menu = $$('.mainManu.clearfix > li')
  }

  public get to() {
    return {
      logo: async() => await this.logo.click(),
      basket: async() => await this.basket.click(),
      about: async() => await this.about.click(),
      cashDelivery: async() => await this.cashDelivery.click(),
      instruction: async() => await this.instruction.click(),
      signIn: async() => await this.signIn.click(),
      registration: async() => await this.registration.click(),
      callBack: async() => await this.callBack.click()
    }
  }

  public async search(text) {
    await this.searchField.sendKeys(text)
    await this.searchBtn.click()
  }

  public async menuCount() {
    return this.menu.count()
  }

  public async menuText() {
    return this.menu.getText()
  }
}

export {Header}
