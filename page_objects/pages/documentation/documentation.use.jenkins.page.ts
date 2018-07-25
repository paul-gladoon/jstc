import { ElementFinder, $, browser } from '../../../node_modules/protractor'

class DocumentationUseJenkinsPage {

  private h1JenkinsUserDocumentation: ElementFinder
  private titleJenkinsUserDocumentation: string

  constructor() {
    this.h1JenkinsUserDocumentation = $('#jenkins-user-documentation')
  }

  public async selectH1JenkinsUserDocumentation() {
    return await this.h1JenkinsUserDocumentation.getText()
  }

  public async selectTitleJenkinsUserDocumentation() {
    return await browser.getTitle()
  }

}

export { DocumentationUseJenkinsPage }
