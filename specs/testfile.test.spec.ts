import { browser } from 'protractor'
import { MainMenu } from '../page_objects/pages/main_page/main.menu.fragments'
import { BasePage } from '../page_objects/base.page'
import { async } from '../node_modules/@types/q'

describe('Some test', () => {
  const basePage = new BasePage()
  const mainMenu = new MainMenu()

  beforeEach(async () => {
    await basePage.start()
  })

  it('first test', async () => {
    await browser.sleep(1000)

  })

  it('second test', async () => {
    await mainMenu.selectItemsFromMainMenu()
  })

})
