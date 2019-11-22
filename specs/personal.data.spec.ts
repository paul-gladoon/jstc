import {BasePage} from '../page_objects/base.page'
import {MainPage} from '../page_objects/main.page'
import {Header} from '../page_objects/page_fragments/header.fragment'
import {expect} from 'chai'
import {browser, $, ExpectedConditions as EC} from 'protractor'
import {PersonalDataPage} from '../page_objects/personal.data.page'
import {Login} from '../page_objects/page_fragments/login.fragment'
import {ProfilePage} from '../page_objects/profile.page'

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
      phoneNum: '0930363341',
      userName: 'Lena',
      userSurname: 'Гладун',
      userStreet: 'Добровольского',
      userHomeNum: '71',
      userParad: '3',
      userDoor: '3',
      userFlour: '7',
      userRoom: '100'
    }

    await personalData.set.phone(userData.phoneNum)
    await personalData.set.name(userData.userName)
    await personalData.set.surname(userData.userSurname)
    await personalData.set.street(userData.userStreet)
    await personalData.set.home(userData.userHomeNum)
    await personalData.set.houseBuilding(userData.userParad)
    await personalData.set.frontDoor(userData.userDoor)
    await personalData.set.flour(userData.userFlour)
    await personalData.set.roomNumder(userData.userRoom)
    await personalData.clickSaveBtn()
  })
})
