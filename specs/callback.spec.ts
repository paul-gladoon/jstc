import {CallBackModal} from '../page_objects/page_fragments/call.back.fragment'
import {BasePage} from '../page_objects/base.page'
import {MainPage} from '../page_objects/main.page'
import {browser} from 'protractor'
import {expect} from 'chai'

describe('Зфказать звонок', function () {
  const callBackModal = new CallBackModal()
  const basePage = new BasePage()
  const mainPage = new MainPage()

  beforeEach(async function() {
    await basePage.start()
  })

  it('Заказать звонок', async function() {
    const assertData = {
      name: 'кузя',
      phone: '1234567890',
      text: 'wert'

    }

    await mainPage.header.to.callBack()
    await callBackModal.setData(assertData.name, assertData.phone, assertData.text)
    const modalData = await callBackModal.getData()
    await callBackModal.to.orderCall()

    expect(assertData).deep.equal(modalData)
  })

 } )
