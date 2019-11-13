import {BasePage} from '../page_objects/base.page'
import {$, browser, ExpectedConditions as EC} from 'protractor'

describe('проверка логина', function() {

    const basePage = new BasePage()

    beforeEach(async function() {    
        await basePage.start()
    })

    it('положительная авторизация', async function() {

        await $('#authorizationLink').click()
        await browser.wait(EC.visibilityOf($('#authorizationForm .modal-content.clearfix')), 5000, 'stop')
        await $('[name="userEmail"]').sendKeys('egladunodua@gmail.com')
        await $('[name="userPassword"]').sendKeys('12345lena')
        await $('.formButton.orange button').click()
        await browser.sleep(5000)
        


        
    })
    
})