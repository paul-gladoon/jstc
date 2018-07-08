/* tslint:disable:object-literal-sort-keys */
import { browser, Config } from 'protractor'
import { protractorConfigBuild } from './config.build'
import * as remote from 'selenium-webdriver/remote'

const conf: Config = {
  ...protractorConfigBuild(),
  // directConnect: true,
  // Connecting directly to ChromeDriverServer
  framework: 'mocha',
  // restartBrowserBetweenTests: true,
  allScriptsTimeout: 30 * 1000,
  seleniumAddress: 'http://localhost:4444/wd/hub', // local run
  // Needed to make async/await work. Disables control flow.
  SELENIUM_PROMISE_MANAGER: false,

  onPrepare: async () => {
    await browser.waitForAngularEnabled(false)
    const caps = await browser.getCapabilities()
    const browserName = caps.get('browserName')
    browser.___browserName = browserName
    await browser.manage().window().maximize()
    await browser.setFileDetector(new remote.FileDetector())
  }
}

exports.config = conf
