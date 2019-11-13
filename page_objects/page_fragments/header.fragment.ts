import {ElementFinder, $} from 'protractor'

enum HeaderElements {
  logo = 'logo',
  korzina = 'korzina'
}

class Header {

  private logo: ElementFinder
  private korzina: ElementFinder

  constructor() {
    this.logo = $('#logoBlock .logo')
    this.korzina = $('.cartBlock.st')
  }

  public async click(el: HeaderElements) {
    await this[el].click()
  }

  get clickOn() {
    return {
      logo: async () => this.logo.click()
    }
  }

}

export {Header, HeaderElements}
