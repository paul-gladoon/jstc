import {browser, ExpectedConditions as EC, ElementFinder} from 'protractor'

class Helper {

  public async isVisible(element: ElementFinder) {
    await browser.wait(EC.visibilityOf(element), 5000, 'Element not visible')
    return element.isDisplayed()
  }

}

export {Helper}
