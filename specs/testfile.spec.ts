import { browser } from 'protractor'
import { BasePage } from '../page_objects/base.page'
import { MainMenu } from '../page_objects/page_fragmnets/main.menu.fragment'
import { expect } from 'chai'

describe('Some test', () => {
  const basePage = new BasePage()
  const mainMenu = new MainMenu()

  beforeEach(async () => {
    //await basePage.start()
  })

  it('first test', async () => {
    //await mainMenu.to.docUseJenkins()
    //await browser.sleep(10000)
    const a = 5
    const b = 5

    expect(a + b === 10).to.equal(true)
  })

})
