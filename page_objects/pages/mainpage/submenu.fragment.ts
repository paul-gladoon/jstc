import { ElementFinder, $ } from 'protractor'

class SubMenu {
  private firstJob: ElementFinder
  private career: ElementFinder
  private jobMarket: ElementFinder
  private educationMarket: ElementFinder
  private top50: ElementFinder
  private employersRating: ElementFinder
  private universitiesRating: ElementFinder
  private booksRating: ElementFinder
  private languagesRating: ElementFinder

  private sm = '.b-index-links'

  constructor() {
    this.firstJob = $('[href*="1/?from=d"]')
    this.career = $('[href*="tags"]')
    this.jobMarket = $('.b-index-links [href*="articles/jobs"]')
    this.educationMarket = $('[href*="articles/it-s"]')
    this.top50 = $('.b-index-links [href*="-5"]')
    this.employersRating = $('.b-index-links [href*="ratings"]')
    this.universitiesRating = $('.b-index-links [href*="universities"]')
    this.booksRating = $('[href*="books-2017"]')
    this.languagesRating = $('[href*="language"]')
  }

  get to() {
    return {
      firstJob: async () => await this.firstJob.click(),
      career: async () => await this.career.click(),
      jobMarket: async () => await this.jobMarket.click(),
      educationMarket: async () => await this.educationMarket.click(),
      top50: async () => await this.top50.click(),
      employersRating: async () => await this.employersRating.click(),
      universitiesRating: async () => await this.universitiesRating.click(),
      booksRating: async () => await this.booksRating.click(),
      languagesRating: async () => await this.languagesRating.click()
    }
  }
}

export { SubMenu }
