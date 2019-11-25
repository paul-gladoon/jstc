import {BasePage} from '../page_objects/base.page'
import {MainPage} from '../page_objects/main.page'
import {PersonalDataPage} from '../page_objects/personal.data.page'
import {Login} from '../page_objects/page_fragments/login.fragment'
import {ProfilePage} from '../page_objects/profile.page'
import {browser, $$} from 'protractor'
import {expect} from 'chai'

describe('заполнение персональных данных', function () {
  const basePage = new BasePage()
  const mainPage = new MainPage()
  const login = new Login()
  const personalData = new PersonalDataPage()
  const profilePage = new ProfilePage()

  beforeEach(async function() {
    await basePage.start()
  })

  it('положительная авторизация', async function() {
    await mainPage.header.to.signIn()
    await login.autharization('egladunodua@gmail.com', '12345lena')
    await mainPage.header.to.myAccount()
    await profilePage.to.personalData()

    const userData = {
      phone: '0930363341',
      name: 'Lena',
      surname: 'Гладун',
      street: 'Добровольского',
      home: '71',
      houseBuilding: '3',
      frontDoor: '3',
      flour: '7',
      roomNumber: '100'
    }

    await personalData.set.phone(userData.phone)
    await personalData.set.name(userData.name)
    await personalData.set.surname(userData.surname)
    await personalData.set.street(userData.street)
    await personalData.set.home(userData.home)
    await personalData.set.houseBuilding(userData.houseBuilding)
    await personalData.set.frontDoor(userData.frontDoor)
    await personalData.set.flour(userData.flour)
    await personalData.set.roomNumder(userData.roomNumber)
    await personalData.clickSaveBtn()

    const profileData = await personalData.getPersonalData()

    expect(userData).deep.equal(profileData)
  })
})
