import {$, $$, ElementArrayFinder, browser, element, by, ElementFinder, WebElement} from 'protractor'
import {isArray} from 'util'
import {Header} from './page_fragments/header.fragment'

class SearchPage {

  public header: Header

  constructor() {
    this.header = new Header()
  }

  public async addToBasket(itemName: string[] | string) {
    itemName = isArray(itemName) ? itemName : itemName.split(null)

    const cards = await element.all(by.js(function(itemNames) {
      const allCards = document.querySelectorAll('.item.col')

      return Array.prototype.filter.call(allCards, function(card) {
        const cardText = card.querySelector('.title').innerText

        if (itemNames.includes(cardText)) {
          return card
        }
      })
    }, itemName)) as ElementFinder[]

    for (const card of cards) {
      await card.$('button').click()
      await browser.sleep(2000)
      await $('.close').click()
      await browser.sleep(2000)
    }
  }
}

export {SearchPage}
