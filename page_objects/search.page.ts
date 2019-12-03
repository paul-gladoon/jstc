import {$, $$, ElementArrayFinder, browser, element, by, ElementFinder, WebElement} from 'protractor'
import {isArray} from 'util'

class SearchPage {

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

    await cards.forEach(async function(card) {
      await card.$('button').click()
      await browser.sleep(2000)
      await $('.close').click()
    })
  }
}

export {SearchPage}
