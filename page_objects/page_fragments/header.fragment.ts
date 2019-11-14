import {ElementFinder, $} from 'protractor'

class Header {
  private logo: ElementFinder
  private basket: ElementFinder

  constructor() {
    this.logo = $('#logoBlock .logo')
    this.basket = $('.cartBlock.st')
  }
}

export {Header}
