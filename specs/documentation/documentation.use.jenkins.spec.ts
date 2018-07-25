import { MainMenu } from '../../page_objects/page_fragmnets/main.menu.fragment'
import { expect } from 'chai'
import { DocumentationUseJenkinsPage } from '../../page_objects/pages/documentation/documentation.use.jenkins.page'
import { browser } from '../../node_modules/protractor'
import { BasePage } from '../../page_objects/base.page'

describe('Documentation', () => {
  const basePage = new BasePage()
  const mainMenu = new MainMenu()
  const documentationUseJenkinsPage = new DocumentationUseJenkinsPage()

  beforeEach(async () => {
    await basePage.start()
  })
  
  it ('Documentation - Use Jenkins - check page title', async() => {
    await mainMenu.to.documentUseJenkins()
    await browser.sleep(5000)

    const h1JenkinsUserDocumentation: string = await documentationUseJenkinsPage.selectH1JenkinsUserDocumentation()
    const titleJenkinsUserDocumentation: string = await documentationUseJenkinsPage.selectTitleJenkinsUserDocumentation()
    expect(h1JenkinsUserDocumentation).to.equal(titleJenkinsUserDocumentation)
    expect(h1JenkinsUserDocumentation === titleJenkinsUserDocumentation).to.equal(true)
    expect(h1JenkinsUserDocumentation !== titleJenkinsUserDocumentation).to.equal(false)
    expect (h1JenkinsUserDocumentation).to.be.a('string')
    expect (titleJenkinsUserDocumentation).to.be.a('string')
    
  })

})
