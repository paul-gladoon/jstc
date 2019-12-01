import {ElementFinder, $, ElementArrayFinder, $$, browser, ExpectedConditions as EC} from 'protractor'
import {async} from 'q'

class ChangePasswordPage {
  private currentPassword: ElementFinder
  private newPassword: ElementFinder
  private returnNewPassword: ElementFinder
  private change: ElementFinder

  constructor () {
    this.currentPassword = $('[name="currentPassword"]')
    this.newPassword = $('[name="newPassword"]')
    this.returnNewPassword = $('[name="confirmPassword"]')
    this.change = $('.row .formButton button')

  }

  public get set() {
    return {
      currentPassword: async (text) => this.setText(this.currentPassword, text),
      newPassword: async (text) => this.setText(this.newPassword, text),
      returnNewPassword: async (text) => this.setText(this.returnNewPassword, text),

    }
  }

  public async clickChengBtn() {
    await this.change.click()
  }

  public async getPassword() {
    return {
      currentPassword: await this.currentPassword.getAttribute('value'),
      newPassword: await this.newPassword.getAttribute('value'),
      returnNewPassword: await this.returnNewPassword.getAttribute('value')
    }
  }

  public async setFull(currPass, newPass, retNewPass) {
    await this.currentPassword.sendKeys(currPass)
    await this.newPassword.sendKeys(newPass)
    await this.returnNewPassword.sendKeys(retNewPass)
    await this.clickChengBtn()
    await browser.wait(EC.visibilityOf($('.td2 [href="/change-password/"]')), 5000, 'change pass not visibl')
  }

  private async setText(element: ElementFinder, text: string) {
    await element.clear()
    await element.sendKeys(text)
  }

}

export {ChangePasswordPage}
