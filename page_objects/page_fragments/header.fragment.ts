import {ElementFinder, $, ElementArrayFinder, $$, browser, ExpectedConditions as EC, by, element} from 'protractor'

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
  private myAccount: ElementFinder
  private exit: ElementFinder

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
    this.myAccount = $('#userProfile')
    this.exit = $('.fa.fa-sign-out')
  }

  public get to() {
    return {
      logo: async() => await this.logo.click(),
      basket: async() => {
        await this.basket.click()
        await browser.wait(EC.visibilityOf(element(by.cssContainingText('[itemprop="title"]', 'Корзина'))), 5000, 'Basket title not vis')
      },
      about: async() => await this.about.click(),
      cashDelivery: async() => await this.cashDelivery.click(),
      instruction: async() => await this.instruction.click(),
      signIn: async() => await this.signIn.click(),
      registration: async() => await this.registration.click(),
      callBack: async() => await this.callBack.click(),
      myAccount: async() => await this.myAccount.click(),
      exit: async() => {
        await this.exit.click()
        await browser.wait(EC.invisibilityOf(this.exit), 5000, 'Exit not invis')
      }
    }
  }

  public async search(text) {
    await this.searchField.sendKeys(text)
    await this.searchBtn.click()
    await browser.wait(EC.visibilityOf(element(by.cssContainingText('[itemprop="title"]', 'Поиск по сайту'))), 5000, 'Search title not vis')
  }

  public async menuCount() {
    return this.menu.count()
  }

  public async menuText() {
    return this.menu.getText()
  }
}

export {Header}
