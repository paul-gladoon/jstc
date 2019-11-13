import {Header} from '../page_objects/page_fragments/header.fragment'

class MainPage {

  public header: Header

  constructor() {
    this.header = new Header()
  }

}

export {MainPage}
