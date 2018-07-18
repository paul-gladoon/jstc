import { ElementFinder, $, by, element } from "../../node_modules/protractor";
import { Dropdown } from "../page_fragments/dropdown.fragment";

class MainMenu {
  private subProjectsDropdown: Dropdown
  private logo: ElementFinder
  private blog: ElementFinder
  private documentation: ElementFinder
  //-//-//-//-Documentation items-//-//-//-//
  private docUseJenkins: ElementFinder
  private docExtendJenkins: ElementFinder
  //---------------------------------------//
  private plugins: ElementFinder
  private useCases: ElementFinder
  //-//-//-//-//-Use-cases items-//-//-//-//
  private useCaseAndroid: ElementFinder
  private useCaseCC: ElementFinder
  private useCaseDocker: ElementFinder
  private useCaseEmbedded: ElementFinder
  private useCaseGitHub: ElementFinder
  private useCaseJava: ElementFinder
  private useCasePHP: ElementFinder
  private useCaseConDel: ElementFinder
  private useCasePython: ElementFinder
  private useCaseRuby: ElementFinder
  //---------------------------------------//
  private participate: ElementFinder
  private subProjects: ElementFinder
  //-//-//-//-Sub-projects items-//-//-//-//
  private subPOverview: ElementFinder
  private subPBlueOcean: ElementFinder
  private subPGSOC: ElementFinder
  private subPInfrastructure: ElementFinder
  private subPJAreaMeetups: ElementFinder
  private subPJX: ElementFinder
  private subPJRemoting: ElementFinder
  //---------------------------------------//
  private resources: ElementFinder
  //-//-//-//-//-Resources items-//-//-//-//-//
  private resAccManage: ElementFinder
  private resChat: ElementFinder
  private resIssueTracker: ElementFinder
  private resMailLists: ElementFinder
  private resEvents: ElementFinder
  private resWiki: ElementFinder
  private resSIGS: ElementFinder
  //---------------------------------------//
  private about: ElementFinder
  //-//-//-//-//-//-About items-//-//-//-//-//
  private security: ElementFinder
  private press: ElementFinder
  private awards: ElementFinder
  private conduct: ElementFinder
  private artwork: ElementFinder
  //---------------------------------------//
  private download: ElementFinder

  constructor() {
    this.logo = $('.navbar-brand[href*="https://jenkins.io"]')
    this.blog = $('.nav-link[href*="https://jenkins.io/node"]')
    this.documentation = element(by.cssContainingText('.nav-link.dropdown-toggle', 'Documentation'))
    //-//-//-//-Documentation items-//-//-//-//
    this.docUseJenkins = $('.dropdown-item[href="https://jenkins.io/doc"]')
    this.docExtendJenkins = $('.dropdown-item[href*="developer"]')
    //---------------------------------------//
    this.plugins = $('[href*="plugins.jenkins"]')
    this.useCases = element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases'))
    //-//-//-//-//-Use-cases items-//-//-//-//
    this.useCaseAndroid = $('.dropdown-item[href*="android"]')
    this.useCaseCC = $('.dropdown-item[href$="solutions/c"]')
    this.useCaseDocker = $('.dropdown-item[href$="solutions/docker"]')
    this.useCaseEmbedded = $('.dropdown-item[href$="solutions/embedded"]')
    this.useCaseGitHub = $('.dropdown-item[href$="solutions/github"]')
    this.useCaseJava = $('.dropdown-item[href$="solutions/java"]')
    this.useCasePHP = $('.dropdown-item[href$="solutions/php"]')
    this.useCaseConDel = $('.dropdown-item[href$="solutions/pipeline"]')
    this.useCasePython = $('.dropdown-item[href$="solutions/python"]')
    this.useCaseRuby = $('.dropdown-item[href$="solutions/ruby"]')
    //---------------------------------------//
    this.participate = $('[href*="participate"]')
    this.subProjects = element(by.cssContainingText('.nav-link.dropdown-toggle', 'Sub-projects'))
    //-//-//-//-Sub-projects items-//-//-//-//
    this.subProjectsDropdown = new Dropdown(this.subProjects, this.subPOverview)
    this.subPOverview = $('.dropdown-item[href$="projects/"]')
    this.subPBlueOcean = $('.dropdown-item[href$="blueocean/"]')
    this.subPGSOC = $('.dropdown-item[href$="gsoc/"]')
    this.subPInfrastructure = $('.dropdown-item[href$="infrastructure/"]')
    this.subPJAreaMeetups = $('.dropdown-item[href$="jam/"]')
    this.subPJX = $('.dropdown-item[href$="jenkins-x/"]')
    this.subPJRemoting = $('.dropdown-item[href$="remoting/"]')
    //---------------------------------------//
    this.resources = element(by.cssContainingText('.nav-link.dropdown-toggle', 'Resources'))
    //-//-//-//-//-Resources items-//-//-//-//-//
    this.resAccManage = $('.dropdown-item[href*="accounts"]')
    this.resChat = $('.dropdown-item[href*="chat"]')
    this.resIssueTracker = $('.dropdown-item[href*="issues"]')
    this.resMailLists = $('.dropdown-item[href*="lists"]')
    this.resEvents = $('.dropdown-item[href*="events"]')
    this.resWiki = $('.dropdown-item[href*="wiki"]')
    this.resSIGS = $('.dropdown-item[href*="sigs"]')
    //---------------------------------------//
    this.about = element(by.linkText('About'))
    //-//-//-//-//-//-About items-//-//-//-//-//
    this.security = $('.dropdown-item[href*="security"]')
    this.press = $('.dropdown-item[href*="press"]')
    this.awards = $('.dropdown-item[href*="awards"]')
    this.conduct = $('.dropdown-item[href*="conduct"]')
    this.artwork = $('.dropdown-item[href*="artwork"]')
    //---------------------------------------//
    this.download = $('.nav-link[href*="download"]')
  }

  get to() {
    return {
      subProjectsDropdown: async function subProjectsDropdown() {
        await this.subProjects.click();
        await this.subPOverview.click();
      },
      logo: async () => await this.logo.click(),
      blog: async () => await this.blog.click(),
      documentation: async () => await this.documentation.click(),
      //-//-//-//-Documentation items-//-//-//-//
      docUseJenkins: async () => await this.docUseJenkins.click(),
      docExtendJenkins: async () => await this.docExtendJenkins.click(),
      //---------------------------------------//
      plugins: async () => await this.plugins.click(),
      useCases: async () => await this.useCases.click(),
      //-//-//-//-//-Use-cases items-//-//-//-//
      useCaseAndroid: async () => await this.useCaseAndroid.click(),
      useCaseCC: async () => await this.useCaseCC.click(),
      useCaseDocker: async () => await this.useCaseDocker.click(),
      useCaseEmbedded: async () => await this.useCaseEmbedded.click(),
      useCaseGitHub: async () => await this.useCaseGitHub.click(),
      useCaseJava: async () => await this.useCaseJava.click(),
      useCasePHP: async () => await this.useCasePHP.click(),
      useCaseConDel: async () => await this.useCaseConDel.click(),
      useCasePython: async () => await this.useCasePython.click(),
      useCaseRuby: async () => await this.useCaseRuby.click(),
      //---------------------------------------//
      participate: async () => await this.participate.click(),
      subProjects: async () => await this.subProjects.click(),
      //-//-//-//-Sub-projects items-//-//-//-//
      subProjectsDropdownOverviewItem: async () => await this.subProjectsDropdown,
      subPOverview: async () => await this.subPOverview.click(),
      subPBlueOcean: async () => await this.subPBlueOcean.click(),
      subPGSOC: async () => await this.subPGSOC.click(),
      subPInfrastructure: async () => await this.subPInfrastructure.click(),
      subPJAreaMeetups: async () => await this.subPJAreaMeetups.click(),
      subPJX: async () => await this.subPJX.click(),
      subPJRemoting: async () => await this.subPJRemoting.click(),
      //---------------------------------------//
      resources: async () => await this.resources.click(),
      //-//-//-//-//-Resources items-//-//-//-//-//
      resAccManage: async () => await this.resAccManage.click(),
      resChat: async () => await this.resChat.click(),
      resIssueTracker: async () => await this.resIssueTracker.click(),
      resMailLists: async () => await this.resMailLists.click(),
      resEvents: async () => await this.resEvents.click(),
      resWiki: async () => await this.resWiki.click(),
      resSIGS: async () => await this.resSIGS.click(),
      //---------------------------------------//
      about: async () => await this.about.click(),
      //-//-//-//-//-//-About items-//-//-//-//-//
      security: async () => await this.security.click(),
      press: async () => await this.press.click(),
      awards: async () => await this.awards.click(),
      conduct: async () => await this.conduct.click(),
      artwork: async () => await this.artwork.click(),
      //---------------------------------------//
      download: async () => await this.download.click()
    }
  }
}

export { MainMenu }