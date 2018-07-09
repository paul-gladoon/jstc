import { ElementFinder, $ } from 'protractor'

class HeaderMenu {
  private homePage: ElementFinder
  private main: ElementFinder
  private forum: ElementFinder
  private strip: ElementFinder
  private salary: ElementFinder
  private job: ElementFinder
  private calendar: ElementFinder
  private telegram: ElementFinder
  private search: ElementFinder
  private loginReg: ElementFinder

  constructor() {
    this.homePage = $('.logo')
  }

  public goToHomePage() {
    // TO DO
  }
}

export { HeaderMenu }
