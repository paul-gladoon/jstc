import {BasePage} from '../page_objects/base.page'
import {$, browser, ExpectedConditions as EC, $$} from 'protractor'
import {Login} from '../page_objects/page_fragments/login.fragment'
import {MainPage} from '../page_objects/main.page'
import {expect} from 'chai'

describe('проверка логина', function() {

    const basePage = new BasePage()
    const login = new Login()
    const mainPage = new MainPage()

    beforeEach(async function() {
        await basePage.start()
    })

    it('положительная авторизация', async function() {
        await mainPage.header.to.signIn()
        await login.autharization('egladunodua@gmail.com', '12345lena')

        await browser.sleep(4000)
    })
})
