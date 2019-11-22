import {ElementFinder, $, ElementArrayFinder, $$} from 'protractor'

class PersonalDataPage {
  private phone: ElementFinder
  private name: ElementFinder
  private surname: ElementFinder
  private street: ElementFinder
  private home: ElementFinder
  private houseBuilding: ElementFinder
  private frontDoor: ElementFinder
  private flour: ElementFinder
  private roomNumber: ElementFinder
  private saveBtn: ElementFinder

  constructor () {
   this.phone = $('.formInput [name="tel"]')
   this.name = $('.formInput [name="firstName"]')
   this.surname = $('.formInput [name="lastName"]')
   this.street = $('.formInput [name="street"]')
   this.home = $('.formInput [name="building"]')
   this.houseBuilding = $('.formInput [name="bulk"]')
   this.frontDoor = $('.formInput [name="front"]')
   this.flour = $('.formInput [name="floor"]')
   this.roomNumber = $('.formInput [name="apartment"]')
   this.saveBtn = $('.userDataCD button')
 }

  public get set() {
    return {
      phone: async (text) => this.phone.sendKeys(text),
      name: async (text) => this.name.sendKeys(text),
      surname: async (text) => this.surname.sendKeys(text),
      street: async (text) => this.street.sendKeys(text),
      home: async (text) => this.home.sendKeys(text),
      houseBuilding: async (text) => this.houseBuilding.sendKeys(text),
      frontDoor: async (text) => this.frontDoor.sendKeys(text),
      flour: async (text) => this.flour.sendKeys(text),
      roomNumder: async (text) => this.roomNumber.sendKeys(text)
    }

  }

  public async clickSaveBtn() {
    await this.saveBtn.click()
  }

}

export {PersonalDataPage}
