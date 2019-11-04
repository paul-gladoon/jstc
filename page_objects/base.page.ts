import { ElementFinder, $, browser, ExpectedConditions as EC } from 'protractor'

class BasePage {

 private phone: ElementFinder

 constructor() {
   this.phone = $('.phone')
 }

 public async start() {
   await browser.get('/')
   await browser.wait(EC.visibilityOf(this.phone), 5000, `Waiting for ${this.phone}`)
 }
}

export { BasePage }
