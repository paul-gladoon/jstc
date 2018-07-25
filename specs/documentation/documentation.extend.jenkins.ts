import { expect } from "chai";
import { MainMenu } from "../../page_objects/page_fragmnets/main.menu.fragment";
import { browser, $ } from 'protractor'
import { BasePage } from "../../page_objects/base.page";
import { DocExtendJenkins } from '../../page_objects/pages/documentation/documentation.extend.jenkins'

describe('Documentation - Extend Jenkins', () => {
  const basePage = new BasePage()
  const mainMenu = new MainMenu()
  const docExtendJenkins = new DocExtendJenkins()

  beforeEach(async () => {
    await basePage.start()
  })
  
  it('Documentation - Extend Jenkins - check page title #1 - "caption equal title"', async () => {
    await mainMenu.to.docExtendJenkins()
    const caption = await $('.col-12 h1').getText()
    const title = await browser.getTitle()
    expect(caption).equal(title)
  })

})