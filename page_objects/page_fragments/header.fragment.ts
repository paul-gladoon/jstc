import {ElementFinder, $} from 'protractor'
import { async } from 'q'

class Header {
  private logo: ElementFinder
  private basket: ElementFinder
  private about: ElementFinder
  private cashDelivery: ElementFinder
  private instruction: ElementFinder
  private signIn: ElementFinder
  private registration: ElementFinder
    
  constructor() {
    this.logo = $('#logoBlock .logo')
    this.basket = $('.cartBlock.st')
    this.about = $('#headerCD .siteWidth [href="/page/about/"]')
    this.cashDelivery = $('#headerCD .siteWidth [href="/page/payment-and-delivery/"]')
    this.instruction = $('#headerCD .siteWidth [href="/page/instrukciya-po-registracii-p8/"]')
    this.signIn = $('#authorizationLink')
    this.registration = $('#registrationLink')
  
  }

  public get goLink() { 
    return {
      logo: async() => await this.logo.click(),
      basket:async() => await this.basket.click(),
      about:async() => await this.about.click(),
      cashDelivery:async() => await this.cashDelivery.click(),
      instruction:async() => await this.instruction.click(),
      signIn:async() => await this.signIn.click(),
      registration:async() => await this.registration.click()
    }
  }

}

export {Header}
