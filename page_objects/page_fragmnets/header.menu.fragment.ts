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
    this.forum = $('.b-head [href$="forums/"]')
    this.strip = $('.b-head [href*="lenta"]')
    this.salary = $('[href*="salaries"]')
    this.job = $('[href$="jobs.dou.ua/"]')
    this.calendar = $('.b-head [href*="calendar"]')
    this.telegram = $('[rel="nofollow"]')
    this.search = $('.search')
    this.loginReg = $('#login-link')
  }

  get to() {
    return {
      homePage: async () => await this.homePage.click(),
      main: async () => await this.main.click(),
      forum: async () => await this.forum.click(),
      strip: async () => await this.strip.click(),
      salary: async () => await this.salary.click(),
      job: async () => await this.job.click(),
      calendar: async () => await this.calendar.click(),
      telegram: async () => await this.telegram.click(),
      search: async () => await this.search.click(),
      loginReg: async () => await this.loginReg.click()
    }
  }
}

export { HeaderMenu }
