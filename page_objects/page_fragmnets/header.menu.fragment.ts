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
    this.main = $('a.sel')
    this.forum = $('.b-head>ul>li:nth-child(3)>a')
    this.strip = $('.b-head>ul>li:nth-child(4)>a')
    this.salary = $('.b-head>ul>li:nth-child(5)>a')
    this.job = $('.b-head>ul>li:nth-child(6)>a')
    this.calendar = $('.m-last')
    this.telegram = $('.m-hide.t-hide.tg')
    this.search = $('.search')
    this.loginReg = $('#login-link')
  }

  public goToHomePage() {
    // TO DO
  }
}

export { HeaderMenu }
