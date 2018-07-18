import { ElementFinder } from "../../node_modules/protractor";

class Dropdown {

  private dropdownBtn: ElementFinder
  private itemBtn: ElementFinder

  constructor(dropdownBtn, itemBtn) {
    this.dropdownBtn = dropdownBtn
    this.itemBtn = itemBtn
  }

  public async method() {
    await this.dropdownBtn.click()
    await this.itemBtn.click()
  }
}

export { Dropdown }