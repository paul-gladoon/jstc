import { ElementFinder, $ } from 'protractor'
import { step } from '../../decorator'

interface ISearch {
  city: string
}

class MainPage {

  private logo: ElementFinder

  constructor() {
    this.logo = $('.navbar-brand')
  }

  @step('Set data in search field')
  public async find(data: ISearch) {
    // TO DO
  }

}

export { MainPage }
