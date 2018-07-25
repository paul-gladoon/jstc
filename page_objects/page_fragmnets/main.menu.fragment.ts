import { $, element, by } from 'protractor'

class MainMenu {

  public get to() {
    return {
      home: async () => await $('.navbar-brand').click(),
      blog: async () => await $('.nav-link[href*="node"]').click(),
      docUseJenkins: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Documentation')).click()
        await $('.dropdown-item[href$="doc"]').click()
      },
      docExtendJenkins: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Documentation')).click()
        await $('.dropdown-item[href*="developer"]').click()
      },
      plugins: async () => await $('[href*="plugins.jenkins"]').click(),
      usCsAndroid: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href*="android"]').click()
      },
      usCsC: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href$="solutions/c"]').click()
      },
      usCsDocker: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href$="docker"]').click()
      },
      usCsEmbedded: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href$="embedded"]').click()
      },
      usCsGitHub: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href$="github"]').click()
      },
      usCsJava: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href$="java"]').click()
      },
      usCsPHP: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href$="php"]').click()
      },
      usCsConDelivery: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href$="pipeline"]').click()
      },
      usCsPython: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href$="python"]').click()
      },
      usCsRuby: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href$="ruby"]').click()
      },
      participate: async () => await $('[href*="participate"]').click(),
      subProjOverview: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Sub-projects')).click()
        await $('.dropdown-item[href$="projects/"]').click()
      },
      subProjBlueOcean: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Sub-projects')).click()
        await $('.dropdown-item[href$="blueocean/"]').click()
      },
      subProjGoogleSoC: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Sub-projects')).click()
        await $('.dropdown-item[href$="gsoc/"]').click()
      },
      subProjInfrastructure: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Sub-projects')).click()
        await $('.dropdown-item[href$="infrastructure/"]').click()
      },
      subProjJenAreaMeetups: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Sub-projects')).click()
        await $('.dropdown-item[href$="jam/"]').click()
      },
      subProjJenX: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Sub-projects')).click()
        await $('.dropdown-item[href$="jenkins-x/"]').click()
      },
      subProjJenRemoting: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Sub-projects')).click()
        await $('.dropdown-item[href$="remoting/"]').click()
      },
      resAccManag: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Resources')).click()
        await $('.dropdown-item[href*="accounts"]').click()
      },
      resChat: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Resources')).click()
        await $('.dropdown-item[href*="chat"]').click()
      },
      resIssueTracke: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Resources')).click()
        await $('.dropdown-item[href*="issues"]').click()
      },
      resMailList: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Resources')).click()
        await $('.dropdown-item[href*="lists"]').click()
      },
      resEvents: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Resources')).click()
        await $('.dropdown-item[href*="events"]').click()
      },
      resWiki: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Resources')).click()
        await $('.dropdown-item[href*="wiki"]').click()
      },
      resSpecInterestGroups: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Resources')).click()
        await $('.dropdown-item[href*="sigs"]').click()
      },
      aboutSecurity: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'About')).click()
        await $('.dropdown-item[href*="security"]').click()
      },
      aboutPress: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'About')).click()
        await $('.dropdown-item[href*="press"]').click()
      },
      aboutAwards: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'About')).click()
        await $('.dropdown-item[href*="awards"]').click()
      },
      aboutConduct: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'About')).click()
        await $('.dropdown-item[href*="conduct"]').click()
      },
      aboutArtwork: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'About')).click()
        await $('.dropdown-item[href*="artwork"]').click()
      },
      download: async () => await $('[href*="download"]').click()
    }
  }

}

export { MainMenu }
