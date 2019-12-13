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
  private salat: ElementFinder
  private sushi: ElementFinder
  private hot: ElementFinder
  private deserts: ElementFinder
  private drinks: ElementFinder
  private sets: ElementFinder
  private additionally: ElementFinder
  private nigiriSushi: ElementFinder
  private gunkanSushi: ElementFinder
  private sushimiSushi: ElementFinder
  private tamakiSushi: ElementFinder
  private makiSushi: ElementFinder
  private rollSushi: ElementFinder
  private hotRollSushi: ElementFinder
  private snacksHot: ElementFinder
  private supHot: ElementFinder
  private hotMealHot: ElementFinder
  private steerFryHot: ElementFinder
  private riceNoodlHot: ElementFinder

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
    this.salat = $('.mainManu [href*="salaty"]')
    this.sushi = $('.mainManu [href="/sushi-c54/"]')
    this.hot = $('.mainManu [href="/goryachie-c62/"]')
    this.deserts = $('.mainManu [href="/deserty-c46/"]')
    this.drinks = $('.mainManu [href="/napitki-c48/"]')
    this.sets = $('.mainManu [href*="sety"]')
    this.additionally = $('.mainManu [href*="/dopolnitelno-c72/"]')
    this.nigiriSushi = $('.mainManu [href="/nigiri-c55/"]')
    this.gunkanSushi = $('.mainManu [href="/gunkany-c56/"]')
    this.sushimiSushi = $('.mainManu [href="/sashimi-c57/"]')
    this.tamakiSushi = $('.mainManu [href="/temaki-c59/"]')
    this.makiSushi = $('.mainManu [href="/maki-sushi-c58/"]')
    this.rollSushi = $('.mainManu [href="/rolly-c5/"]')
    this.hotRollSushi = $('.mainManu [href="/teplye-rolly-c61/"]')
    this.snacksHot = $('.mainManu [href="/zakuski-c2/"]')
    this.supHot = $('.mainManu [href="/supy-c51/"]')
    this.hotMealHot = $('.mainManu [href="/goryachie-blyuda-c50/"]')
    this.steerFryHot = $('.mainManu [href="/stir-frayi-c52/"]')
    this.riceNoodlHot = $('.mainManu [href="/blyuda-iz-risa-i-lapshi-c53/"]')
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

  public get mainMenuTo() {
    return {
      salat: async() => await this.salat.click(),
      sushi: async() => await this.sushi.click(),
      nigiriSushi: async() => {
        await browser.actions().mouseMove(this.nigiriSushi).perform()
        await browser.wait(EC.visibilityOf(this.nigiriSushi), 5000, 'not vis mainMenu')
        await this.nigiriSushi.click()
      },
      hot: async() => await this.hot.click(),
      deserts: async() => await this.deserts.click(),
      drinks: async() => await this.drinks.click(),
      sets: async() => await this.sets.click()
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
