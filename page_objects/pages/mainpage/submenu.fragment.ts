import { ElementFinder, $ } from 'protractor'

class SubMenu {
  private firstJob: ElementFinder
  private career: ElementFinder
  private laborMarket: ElementFinder
  private educationMarket: ElementFinder
  private top50: ElementFinder
  private ratingEmployers: ElementFinder
  private ratingUniversities: ElementFinder
  private ratingBooks: ElementFinder
  private ratingLanguages: ElementFinder
  private portrait: ElementFinder

  constructor() {
    this.firstJob = $('[href*="31/?from=doufp"]')
    this.career = $('[href*="IT/?from=doufp"]')
    this.laborMarket = $('[href*="trends-2017/?from=douf"]')
    this.educationMarket = $('[href*="16/?from=doufp"]')
    this.top50 = $('[href*="50-jan-2018/?from=doufp"]')
    this.ratingEmployers = $('[href*="ratings/?from=doufp"]')
    this.ratingUniversities = $('[href*="universities-2018/?from=doufp"]')
    this.ratingBooks = $('[href*="books-2017/?from=doufp"]')
    this.ratingLanguages = $('[href*="rating-jan-2018/?from=doufp"]')
    this.portrait = $('[href*="portrait-2018/?from=doufp"]')
  }

  get to() {
    return {
      firstJob: async () => await this.firstJob.click(),
      career: async () => await this.career.click(),
      laborMarket: async () => await this.laborMarket.click(),
      educationMarket: async () => await this.educationMarket.click(),
      top50: async () => await this.top50.click(),
      ratingEmployers: async () => await this.ratingEmployers.click(),
      ratingUniversities: async () => await this.ratingUniversities.click(),
      ratingBooks: async () => await this.ratingBooks.click(),
      ratingLanguages: async () => await this.ratingLanguages.click(),
      portrait: async () => await this.portrait.click(),

    }
  }
}

export { SubMenu }
