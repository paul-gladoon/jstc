import { ElementFinder, $ } from 'protractor'
import { async } from '../../../node_modules/@types/q';

class DocExtendJenkins {
  private pageCaption: ElementFinder

  constructor() {
    this.pageCaption = $('.col-12 h1')
  }

  get to() {
    return{
      pageCaptionText: async () => this.pageCaption.getText()
    }
  }
}

export { DocExtendJenkins }