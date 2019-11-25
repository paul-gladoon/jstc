import {$, ExpectedConditions as EC, browser, ElementFinder} from 'protractor'

class CallBackModal {
  private cancel: ElementFinder
  private name: ElementFinder
  private phone: ElementFinder
  private text: ElementFinder
  private orderCall: ElementFinder
  private window: ElementFinder

  constructor() {
    this.cancel = $('.close')
    this.name = $('.formInput [name="name"]')
    this.phone = $('.formInput [name="userTelephone"]')
    this.text = $('.formTextarea textarea')
    this.orderCall = $('.contactCenterForm-3 button')
    this.window = $('#contactCenterFormModal .modal-content ')
  }

  public async setData(name, phone, text) {
    await browser.wait(EC.visibilityOf(this.window), 5000, 'stop')
    await this.name.sendKeys(name)
    await this.phone.sendKeys(phone)
    await this.text.sendKeys(text)
  }

  public async getData() {
    return  {
      name: await this.name.getAttribute('value'),
      phone: await this.phone.getAttribute('value'),
      text: await this.text.getAttribute('value')
    }
  }

  public get to() {
    return {
      orderCall: async () => await this.orderCall.click(),
      cancel: async () => await this.cancel.click()
    }
  }

}

export {CallBackModal}
