import { $, element, by } from 'protractor'
import { async } from '../../node_modules/@types/q'

class MainMenu {

  public get to() {
    return {
      home: async () => await $('.navbar-brand').click(),

      blog: async () => await $('.nav-item [href*=node]').click(),

      documentUseJenkins: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Documentation')).click()
        await $('.dropdown-item[href="https://jenkins.io/doc"]').click()
      },
      documentExtendJenkins: async () => await $('.dropdown-item[href$="developer"]').click(),
      plagins: async () => await $('.nav-link[href$="io/"]').click(),

      android: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href$="android"]').click()
      },
      c: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href$="solutions/c"]').click()
      },
      docker: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href$="docker"]').click()
      },
      embedded: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href$="embedded"]').click()
      },
      gitHub: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href$="github"]').click()
      },
      java: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href$="java"]').click()
      },
      php: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href$="php"]').click()
      },
      continuousDelivery: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href$="pipeline"]').click()
      },
      python: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href$="python"]').click()
      },
      ruby: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Use-cases')).click()
        await $('.dropdown-item[href$="ruby"]').click()
      },

      participate: async () => await $('.dropdown-item[href$="ruby"]').click(),

      overview: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Sub-projects')).click()
        await $('[href$="projects/"]').click()
      },
      blueOcean: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Sub-projects')).click()
        await $('[href$="blueocean/"]').click()
      },
      googleSummerOfCode: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Sub-projects')).click()
        await $('[href$="gsoc/"]').click()
      },
      infrastructure: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Sub-projects')).click()
        await $('[href$="infrastructure/"]').click()
      },
      jenkinsAreaMeetups: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Sub-projects')).click()
        await $('[href$="jam/"]').click()
      },
      jenkinsX: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Sub-projects')).click()
        await $('[href$="jenkins-x/"]').click()
      },
      jenkinsRemoting: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Sub-projects')).click()
        await $('[href$="remoting/"]').click()
      },

      accountManagement: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Resources')).click()
        await $('[href*="accounts"]').click()
      },
      chat: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Resources')).click()
        await $('[href$="chat"]').click()
      },
      issueTracker: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Resources')).click()
        await $('.dropdown-item[href*="issues"]').click()
      },
      maillingList: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Resources')).click()
        await $('[href$="lists"]').click()
      },
      events: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Resources')).click()
        await $('.dropdown-item[href$="events"]').click()
      },
      wiki: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Resources')).click()
        await $('.dropdown-item[href*="wiki"]').click()
      },
      specialInterestGroups: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'Resources')).click()
        await $('.dropdown-item[href$="sigs"]').click()
      },

      security: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'About')).click()
        await $('a.dropdown-item[href$="security"]').click()
      },
      press: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'About')).click()
        await $('[href$="press"]').click()
      },
      awards: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'About')).click()
        await $('a.dropdown-item[href$="awards"]').click()
      },
      conduct: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'About')).click()
        await $('[href$="conduct"]').click()
      },
      artwork: async () => {
        await element(by.cssContainingText('.nav-link.dropdown-toggle', 'About')).click()
        await $('[href$="artwork"]').click()
      },

      download: async () => await $('.nav-link.btn.btn-outline-secondary').click(),

    }
  }

}

export { MainMenu }
