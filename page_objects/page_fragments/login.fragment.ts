import {$, ExpectedConditions as EC, browser, ElementFinder} from 'protractor'

class Login {
  private email: ElementFinder
  private password: ElementFinder
  private loginBtn: ElementFinder
  private modalWindow: ElementFinder

  constructor() {
    this.email = $('[name="userEmail"]')
    this.password = $('[name="userPassword"]')
    this.loginBtn = $('.formButton.orange button')
    this.modalWindow = $('#authorizationForm .modal-content.clearfix')
  }

  public async autharization(email, password) {
    await browser.wait(EC.visibilityOf(this.modalWindow), 5000, 'stop')
    await this.email.sendKeys(email)
    await this.password.sendKeys(password)
    await this.loginBtn.click()
    await browser.wait(EC.invisibilityOf(this.modalWindow), 5000, 'stop')
  }
}

export {Login}
