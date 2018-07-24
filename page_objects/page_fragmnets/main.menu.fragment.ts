import { $, element, by } from 'protractor'

class MainMenu {

  public get to() {
    return {
      home: async () => await $('.navbar-brand').click(),
      documentUseJenkins: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Documentation')).click()
        await $('.dropdown-item[href="https://jenkins.io/doc"]').click()
      }
    }
  }

}

export { MainMenu }
