import { ElementFinder, $ } from 'protractor'

class News {
  //----------FrashNews----------//
  private goDigest4: ElementFinder
  private telegramChannels: ElementFinder
  private driverDev: ElementFinder
  private seniorCPlusPlus: ElementFinder
  private setUpCompany: ElementFinder
  //----------PopularNews----------//
  private select: ElementFinder
  private select1Monthe: ElementFinder
  private select3Monthe: ElementFinder
  private select12Monthe: ElementFinder
  private select240Monthe: ElementFinder
  private juniorDigest: ElementFinder
  private portrait: ElementFinder
  private salary: ElementFinder // три таких элемента на странице, но два оставшихся hidden
  private stadyAndWork: ElementFinder
  private relocate: ElementFinder

  constructor() {
    //----------FrashNews----------//
    this.goDigest4 = $('[href*="digests/go-digest-4/"]')
    this.telegramChannels = $('.link[href*="telegram-channels-list/"]')
    this.driverDev = $('.link[href*="from-driver-to-developer"]')
    this.seniorCPlusPlus = $('.l-articles .link[href*="from-driver-to-developer"]')
    this.setUpCompany = $('.l-articles .link[href*="how-to-set-up-company"]')
    //----------PopularNews----------//
    this.select = $('select')
    this.select1Monthe = $('[value="fp-articles_top1m"]')
    this.select3Monthe = $('[value="fp-articles_top3m"]')
    this.select12Monthe = $('[value="fp-articles_top12m"]')
    this.select240Monthe = $('[value="fp-articles_top240m"]')
    this.juniorDigest = $('[href*="portrait-2018/?from=d"]')
    this.portrait = $('.l-articles .link[href*="portrait-2018/?from=fp_top1"]')
    this.salary = $('.l-articles .link[href*="salary-report-june-july-2018"]')
    this.stadyAndWork = $('.link[href*="poland"]')
    this.relocate = $('.link[href*="relocate"]')
  }
  get toFrashNews() {
    return {
      //----------FrashNews----------//
      goDigest4: async () => await this.goDigest4.click(),
      telegramChannels: async () => await this.telegramChannels.click(),
      driverDev: async () => await this.driverDev.click(),
      seniorCPlusPlus: async () => await this.seniorCPlusPlus.click(),
      setUpCompany: async () => await this.setUpCompany.click(),
      //----------PopularNews----------//
      select: async () => await this.select.click(),
      select1Monthe: async () => await this.select1Monthe.click(),
      select3Monthe: async () => await this.select3Monthe.click(),
      select12Monthe: async () => await this.select12Monthe.click(),
      select240Monthe: async () => await this.select240Monthe.click(),
      juniorDigest: async () => await this.juniorDigest.click(),
      portrait: async () => await this.portrait.click(),
      salary: async () => await this.salary.click(),
      stadyAndWork: async () => await this.stadyAndWork.click(),
      relocate: async () => await this.relocate.click()
    }
  }
}

export { News }