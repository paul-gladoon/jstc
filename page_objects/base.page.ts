import { ElementFinder, $, browser, ExpectedConditions as EC } from 'protractor'

class BasePage {

 private homePageBtn: ElementFinder

 constructor() {
   this.homePageBtn = $('.logo')
 }

 public async start() {
   await browser.get('/')
   await browser.wait(EC.visibilityOf(this.homePageBtn), 5000, `Waiting for ${this.homePageBtn}`)
 }
}

export { BasePage }
