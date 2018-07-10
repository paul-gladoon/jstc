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
    this.main = $('.sel')
    this.forum = $('.b-head li:nth-child(3)')
    this.strip = $('.b-head li:nth-child(4)')
    this.salary = $('.b-head li:nth-child(5)')
    this.job = $('.b-head li:nth-child(6)')
    this.calendar = $('.b-head li:nth-child(7)')
    this.telegram = $('.b-head li:nth-child(8)')
    this.search = $('.b-head li:nth-child(9)')
    this.loginReg = $('#login-link')
  }

  public goToHomePage() {
    // TO DO
  }
  public goToMain() {
    // TO DO
  }
  public goToForum() {
    // TO DO
  }
  public goToStrip() {
    // TO DO
  }
  public goToSalary() {
    // TO DO
  }
  public goToJob() {
    // TO DO
  }
  public goToCalendar() {
    // TO DO
  }
  public goToTelegram() {
    // TO DO
  }
  public goToSearch() {
    // TO DO
  }
  public goToLoginReg() {
    // TO DO
  }
}

export { HeaderMenu }
