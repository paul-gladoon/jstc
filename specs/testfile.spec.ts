import { browser } from 'protractor'
import { BasePage } from '../page_objects/base.page'
import { MainMenu } from '../page_objects/page_fragments/main.menu.fragment';
import { Dropdown } from '../page_objects/page_fragments/dropdown.fragment';

describe('Some test', () => {
  const basePage = new BasePage()
  const mainMenu = new MainMenu()
  //const dropdown = new Dropdown(mainMenu.subProjects, mainMenu.subPOverview)

  beforeEach(async () => {
    await basePage.start()
  })

  it('first test', async () => {
    await browser.sleep(3000)
    await mainMenu.to.subProjectsDropdown
    await browser.sleep(3000)
    //await dropdown.method(mainMenu.subProjects, mainMenu.subPOverview)
  })

})
