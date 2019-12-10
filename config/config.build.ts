import * as argsParser from 'minimist'
import { Logger } from 'protractor/built/logger'

const ENV_ARGS = argsParser(process.argv.slice(2))

/* tslint:disable:no-unused-expression */
!ENV_ARGS.l && (Logger.prototype.info = () => ({}))

const envToBrowser = () => {
  const browsersMap = {
    chrome: {
      browserName: 'chrome',
      maxInstances: 5,
      shardTestFiles: true,
      version: '65',
      chromeOptions: {
        args: [
          '--disable-gpu',
          '--disable-gpu-program-cache',
          '--disable-gpu-shader-disk-cache',
          '--process-per-tab',
          '--process-per-site'
        ]
      },
    },
    ie: {
      /* tslint:disable:object-literal-key-quotes */
      browserName: 'internet explorer',
      version: '11',
      maxInstances: 1,
      // INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS: true,
      shardTestFiles: true,
      // requireWindowFocus: true,
      'ie.browserCommandLineSwitches': '-private',
      // 'ie.ignoreProtectedModeSettings': true,
      'ie.ensureCleanSession': true,
      // 'ie.forceCreateProcessApi': true
    },
    firefox: {
      browserName: 'firefox',
      maxInstances: 8,
      shardTestFiles: true,
      version: '59'
    }
  }

  const envBrowserMap = {
    ie: ['ie'],
    all: ['ie', 'chrome', 'firefox'],
    firefox: ['firefox'],
    chrome: ['chrome'],
    modern: ['chrome', 'firefox'],
    iefirefox: ['ie', 'firefox'],
    iechrome: ['ie', 'chrome']
  }

  const runBrowsers = process.env.RUN_BROWSER || 'chrome'

  return envBrowserMap[runBrowsers].map((br) => browsersMap[br])
  /* tslint:enable:no-unused-expression */
}

const envToSpecs = () => {
  const specsMap = {
    full: ['./specs/order.spec.ts'],
    specific: [`./specs/${process.env.RUN_SPECIFIC}.ts`]
  }
  const suits = process.env.RUN_SUITS || 'full'

  return specsMap[suits]
}

function protractorConfigBuild() {
  const baseUrl = process.env.RUN_ENV || 'http://bento.com.ua/'

  const mochaOpts = {
    timeout: 300 * 1000,
    fullTrace: true,
    reporter: ENV_ARGS.l ? 'spec' : 'mocha-allure-reporter'
  }
  const multiCapabilities = envToBrowser()
  const specs = envToSpecs()

  return {
    specs,
    mochaOpts,
    baseUrl,
    multiCapabilities
  }
}

export { protractorConfigBuild }
