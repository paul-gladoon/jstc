import {ChangePasswordPage} from '../page_objects/change.password.page'
import {BasePage} from '../page_objects/base.page'
import {MainPage} from '../page_objects/main.page'
import {Login} from '../page_objects/page_fragments/login.fragment'
import {ProfilePage} from '../page_objects/profile.page'
import {$} from 'protractor'
import {expect} from 'chai'
import {Helper} from '../helpers/helper'

describe('rtrty', function () {

  const changePasswordPage = new ChangePasswordPage()
  const basePage = new BasePage()
  const mainPage = new MainPage()
  const login = new Login()
  const profilePage = new ProfilePage()
  const staticPass = '12345lena'
  const changedPass = '54321lena'
  const helper = new Helper()

  beforeEach(async function() {
    await basePage.start()
  })

  it('положительная авторизация', async function() {
    await mainPage.header.to.signIn()
    await login.autharization('egladunodua@gmail.com', staticPass)
    await mainPage.header.to.myAccount()
    await profilePage.to.changePassword()
    await changePasswordPage.setFull(staticPass, changedPass, changedPass)
    await mainPage.header.to.exit()
    await mainPage.header.to.signIn()
    await login.autharization('egladunodua@gmail.com', changedPass)

    const expEl = await helper.isVisible($('#userProfile'))

    expect(expEl).equal(true)
  })

  afterEach(async function() {
    await mainPage.header.to.myAccount()
    await profilePage.to.changePassword()
    await changePasswordPage.setFull(changedPass, staticPass, staticPass)
  })
})
