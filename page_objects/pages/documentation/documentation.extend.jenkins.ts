import { ElementFinder, $ } from 'protractor'

class DocExtendJenkins {
  private pageCaption: ElementFinder

  constructor() {
    this.pageCaption = $('.col-12 h1')
  }

  public async pageCaptionText() {
    return this.pageCaption.getText()
    }

  get to() {
    return{

    }
  }
}

export { DocExtendJenkins }