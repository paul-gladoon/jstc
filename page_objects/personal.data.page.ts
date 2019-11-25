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
      phone: async (text) => this.cleanAndSet(this.phone, text),
      name: async (text) => this.cleanAndSet(this.name, text),
      surname: async (text) => this.cleanAndSet(this.surname, text),
      street: async (text) => this.cleanAndSet(this.street, text),
      home: async (text) => this.cleanAndSet(this.home, text),
      houseBuilding: async (text) => this.cleanAndSet(this.houseBuilding, text),
      frontDoor: async (text) => this.cleanAndSet(this.frontDoor, text),
      flour: async (text) => this.cleanAndSet(this.flour, text),
      roomNumder: async (text) => this.cleanAndSet(this.roomNumber, text)
    }
  }

  public async clickSaveBtn() {
    await this.saveBtn.click()
  }

  public async getPersonalData() {
    return {
      phone: await this.phone.getAttribute('value'),
      name: await this.name.getAttribute('value'),
      surname: await this.surname.getAttribute('value'),
      street: await this.street.getAttribute('value'),
      home: await this.home.getAttribute('value'),
      houseBuilding: await this.houseBuilding.getAttribute('value'),
      frontDoor: await this.houseBuilding.getAttribute('value'),
      flour: await this.flour.getAttribute('value'),
      roomNumber: await this.roomNumber.getAttribute('value')
    }
  }

  private async cleanAndSet(element: ElementFinder, text: string) {
    await element.clear()
    await element.sendKeys(text)
  }

}

export {PersonalDataPage}
