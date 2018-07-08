import { browser } from 'protractor'
import { BasePage } from '../page_objects/base.page'

describe('Some test', () => {
  const basePage = new BasePage()

  beforeEach(async () => {
    await basePage.start()
  })

  it('first test', async () => {
    await browser.sleep(10000)

  })

})
