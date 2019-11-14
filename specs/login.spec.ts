import {BasePage} from '../page_objects/base.page'
import {$, browser, ExpectedConditions as EC} from 'protractor'
import {Login} from '../page_objects/page_fragments/login.fragment'
import {Header} from '../page_objects/page_fragments/header.fragment'

describe('проверка логина', function() {

    const basePage = new BasePage()
    const login = new Login()
    const header = new Header()

    beforeEach(async function() {
        await basePage.start()
    })

    it('положительная авторизация', async function() {
        await header.goLink.signIn()
        await login.autharization('egladunodua@gmail.com', '12345lena')
        await browser.sleep(5000)

    })
})
