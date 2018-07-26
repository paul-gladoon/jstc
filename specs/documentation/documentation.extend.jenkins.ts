import { DocExtendJenkins } from '../../page_objects/pages/documentation/documentation.extend.jenkins'
import { MainMenu } from '../../page_objects/page_fragmnets/main.menu.fragment'
import { BasePage } from '../../page_objects/base.page'
import { browser, $ } from 'protractor'
import { expect } from 'chai'

describe('Documentation - Extend Jenkins', () => {
  const basePage = new BasePage()
  const mainMenu = new MainMenu()
  const docExtendJenkins = new DocExtendJenkins()

  beforeEach(async () => {
    await basePage.start()
    await mainMenu.to.docExtendJenkins()
  })
  
  it('Сheck page title #1 - "caption equal title"', async () => {
    expect(await docExtendJenkins.pageCaptionText()).equal(await browser.getTitle())
  })

  it('Сheck page title #2 - "caption include title"', async () => {
    expect(await docExtendJenkins.pageCaptionText()).include(await browser.getTitle())
  })

  it('Сheck page title #3 - "caption !== title is false"', async () => {
    expect(await docExtendJenkins.pageCaptionText() !== await browser.getTitle()).be.false
  })

  it('Сheck page title #4 - "caption === title is true"', async () => {
    expect(await docExtendJenkins.pageCaptionText() === await browser.getTitle()).be.true
  })

  it('Сheck page title #5 - "caption have string title"', async () => {
    expect(await docExtendJenkins.pageCaptionText()).have.string(await browser.getTitle())
  })
  
})