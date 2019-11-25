import {CallBackModal} from '../page_objects/page_fragments/call.back.fragment'
import {BasePage} from '../page_objects/base.page'
import {MainPage} from '../page_objects/main.page'
import {browser} from 'protractor'

describe('Зфказать звонок', function () {
  const callBackModal = new CallBackModal()
  const basePage = new BasePage()
  const mainPage = new MainPage()

  beforeEach(async function() {
    await basePage.start()
  })

  it('Заказать звонок', async function() {
    await mainPage.header.to.callBack()
    await callBackModal.setData('кузя', '1234567890', 'qwert')
    await callBackModal.to.orderCall()
  })

 } )
