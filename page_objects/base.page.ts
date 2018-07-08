import { ElementFinder, $, browser, ExpectedConditions as EC } from 'protractor'

class BasePage {

 private searchField: ElementFinder

 constructor() {
   this.searchField = $('#modal-filters')
 }

 public async start() {
   await browser.get('/')
   await browser.wait(EC.visibilityOf(this.searchField), 5000, `Waiting for ${this.searchField}`)
 }
}

export { BasePage }
