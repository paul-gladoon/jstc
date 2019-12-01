import {ElementFinder, $, ElementArrayFinder, $$, browser} from 'protractor'

class ProfilePage {
  private orderList: ElementFinder
  private personalData: ElementFinder
  private changePassword: ElementFinder

  constructor() {
    this.orderList = $('.td2 [href="/order-list/"]')
    this.personalData = $('.td2 [href="/user/user-data/"]')
    this.changePassword = $('.td2 [href="/change-password/"]')
  }
  public get to() {
    return {
      orderList: async () => await this.orderList.click(),
      personalData: async () => await this.personalData.click(),
      changePassword: async () => await this.changePassword.click()
    }
  }
}

export {ProfilePage}
