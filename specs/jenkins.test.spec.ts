import { BasePage } from '../page_objects/base.page'

describe('Jenkins test', () => {
  const basePage = new BasePage()

  beforeEach(async () => {
    await basePage.start()
  })

  it('First tets', async () => {
    // TO DO
  })
})
