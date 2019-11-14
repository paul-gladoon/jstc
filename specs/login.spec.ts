import {BasePage} from '../page_objects/base.page'
import {$, browser, ExpectedConditions as EC} from 'protractor'
import {Login} from '../page_objects/page_fragments/login.fragment'

describe('проверка логина', function() {

    const basePage = new BasePage()
    const login = new Login()

    beforeEach(async function() {
        await basePage.start()
    })

    it('положительная авторизация', async function() {

        await login.autharization('egladunodua@gmail.com', '12345lena')
        await browser.sleep(5000)

    })
})
