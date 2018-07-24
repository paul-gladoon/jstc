import { browser } from 'protractor'
import { BasePage } from '../page_objects/base.page'
import { MainMenu } from '../page_objects/page_fragmnets/main.menu.fragment'

describe('Some test', () => {
  const basePage = new BasePage()
  const mainMenu = new MainMenu()

  beforeEach(async () => {
    await basePage.start()
  })

  it('first test', async () => {
    await mainMenu.to.documentUseJenkins()
    await browser.sleep(10000)
  })

})
