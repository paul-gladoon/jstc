import { ElementFinder, $, element, by, browser } from '../../../node_modules/protractor'

class MainMenu {

  private homePage: ElementFinder
  private blog: ElementFinder
  private documentation: ElementFinder
  private use: ElementFinder
  private extend: ElementFinder
  private plagins: ElementFinder
  private useCases: ElementFinder
  private android: ElementFinder
  private c: ElementFinder
  private docker: ElementFinder
  private embedded: ElementFinder
  private gitHub: ElementFinder
  private java: ElementFinder
  private php: ElementFinder
  private continuousDelivery: ElementFinder
  private python: ElementFinder
  private ruby: ElementFinder
  private participate: ElementFinder
  private subProjects: ElementFinder
  private overview: ElementFinder
  private blueOcean: ElementFinder
  private googleSummerOfCode: ElementFinder
  private infrastructure: ElementFinder
  private jenkinsAreaMeetups: ElementFinder
  private jenkinsX: ElementFinder
  private jenkinsRemoting: ElementFinder
  private resources: ElementFinder
  private accountManagement: ElementFinder
  private chat: ElementFinder
  private issueTracker: ElementFinder
  private maillingList: ElementFinder
  private events: ElementFinder
  private wiki: ElementFinder
  private specialInterestGroups: ElementFinder
  private about: ElementFinder
  private security: ElementFinder
  private press: ElementFinder
  private awards: ElementFinder
  private conduct: ElementFinder
  private artwork: ElementFinder
  private download: ElementFinder

  constructor() {
    this.homePage = $('.navbar-brand')
    this.blog = $('.nav-item [href*=node]')
    this.documentation = element(by.cssContainingText('.nav-link.dropdown-toggle', 'Documentation'))
    this.use = $('.dropdown-item[href$="doc"]')
    this.extend = $('.dropdown-item[href$="developer"]')
    this.plagins = $('.nav-link[href$="io/"]')
    this.useCases = element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases'))
    this.android = $('.dropdown-item[href$="android"]')
    this.c = $('.dropdown-item[href$="solutions/c"]')
    this.docker = $('.dropdown-item[href$="docker"]')
    this.embedded = $('.dropdown-item[href$="embedded"]')
    this.gitHub = $('.dropdown-item[href$="github"]')
    this.java = $('.dropdown-item[href$="java"]')
    this.php = $('.dropdown-item[href$="php"]')
    this.continuousDelivery = $('.dropdown-item[href$="pipeline"]')
    this.python = $('.dropdown-item[href$="python"]')
    this.ruby = $('.dropdown-item[href$="ruby"]')
    this.participate = $('[href$="participate"]')
    this.subProjects = element(by.cssContainingText('.nav-link.dropdown-toggle', 'Sub-projects'))
    this.overview = $('[href$="projects/"]')
    this.blueOcean = $('[href$="blueocean/"]')
    this.googleSummerOfCode = $('[href$="gsoc/"]')
    this.infrastructure = $('[href$="infrastructure/"]')
    this.jenkinsAreaMeetups = $('[href$="jam/"]')
    this.jenkinsX = $('[href$="jenkins-x/"]')
    this.jenkinsRemoting = $('[href$="remoting/"]')
    this.resources = element(by.cssContainingText('.nav-link.dropdown-toggle', 'Resources'))
    this.accountManagement = $('[href*="accounts"]')
    this.chat = $('[href$="chat"]')
    this.issueTracker = $('.dropdown-item[href*="issues"]')
    this.maillingList = $('[href$="lists"]')
    this.events = $('.dropdown-item[href$="events"]')
    this.wiki = $('.dropdown-item[href*="wiki"]')
    this.specialInterestGroups = $('.dropdown-item[href$="sigs"]')
    this.about = element(by.cssContainingText('.nav-link.dropdown-toggle', 'About'))
    this.security = $('a.dropdown-item[href$="security"]')
    this.press = $('[href$="press"]')
    this.awards = $('a.dropdown-item[href$="awards"]')
    this.conduct = $('[href$="conduct"]')
    this.artwork = $('[href$="artwork"]')
    this.download = $('.nav-link.btn.btn-outline-secondary')

  }

  public async selectItemsFromMainMenu() {
    await this.homePage.click()
    await this.blog.click()
    await this.documentation.click()
    await this.use.click()
    await this.documentation.click()
    await this.extend.click()
    await this.plagins.click()
    await this.useCases.click()
    await this.android.click()
    await this.useCases.click()
    await this.c.click()
    await this.useCases.click()
    await this.docker.click()
    await this.useCases.click()
    await this.embedded.click()
    await this.useCases.click()
    await this.gitHub.click()
    await this.useCases.click()
    await this.java.click()
    await this.useCases.click()
    await this.php.click()
    await this.useCases.click()
    await this.continuousDelivery.click()
    await this.useCases.click()
    await this.python.click()
    await this.useCases.click()
    await this.ruby.click()
    await this.participate.click()
    await this.subProjects.click()
    await this.overview.click()
    await this.subProjects.click()
    await this.blueOcean.click()
    await this.subProjects.click()
    await this.googleSummerOfCode.click()
    await this.subProjects.click()
    await this.infrastructure.click()
    await this.subProjects.click()
    await this.jenkinsAreaMeetups.click()
    await this.subProjects.click()
    await this.jenkinsX.click()
    await this.subProjects.click()
    await this.jenkinsRemoting.click()

    await this.resources.click()
    await this.accountManagement.click()

    await this.goHome()
    await this.resources.click()
    await this.chat.click()
    
    await this.goHome()
    await this.resources.click()
    await this.issueTracker.click()
    
    await this.goHome()
    await this.resources.click()
    await this.maillingList.click()
    
    await this.goHome()
    await this.resources.click()
    await this.events.click()
    
    await this.goHome()
    await this.resources.click()
    await this.wiki.click()
    
    await this.goHome()
    await this.resources.click()
    await this.specialInterestGroups.click()

    await this.goHome()
    await this.about.click()
    await this.security.click()
    await this.about.click()
    await this.press.click()
    await this.about.click()
    await this.awards.click()
    await this.about.click()
    await this.conduct.click()
    await this.about.click()
    await this.artwork.click()
    await this.download.click()

  }

  public async goHome() {
    await browser.get('/')
  }
}

export { MainMenu }
