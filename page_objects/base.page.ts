import { ElementFinder, $, browser, ExpectedConditions as EC } from 'protractor'

class BasePage {

 private logo: ElementFinder

 constructor() {
   this.logo = $('.navbar-brand')
 }

 public async start() {
   await browser.get('/')
   await browser.wait(EC.visibilityOf(this.logo), 5000, `Waiting for ${this.logo}`)
 }
}

export { BasePage }
