import * as argsParser from 'minimist'

declare const allure: any
const ENV_ARGS = argsParser(process.argv.slice(2))

const step = ENV_ARGS.l ? stepLogger : allureStep

function stepLogger(msg) {
  return function(target: any, method: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    descriptor.value = async function(...args) {
      console.log('step _______________: ' + msg)
      console.log('method ____________: ' + target.constructor.name + '.' + method + '()')
      args.forEach((arg) => {
        console.log(JSON.stringify(arg, null, '\t'))
      })
      try {
        const result = await originalMethod.apply(this, args)
        return result
      } catch (error) {
        throw error
      }
    }
  }
}

function allureStep(msg) {
  return function(target, methodName, descriptor) {
    const originalMethod = descriptor.value
    const reporter = allure._allure
    descriptor.value = async function(...args) {
      const objArgs = args
      const stepMsg = msg
      reporter.startStep(stepMsg, Date.now())
      objArgs.forEach((arg, index) => {
        const param = JSON.stringify(arg, null, '\t')
        allure.createAttachment(`arg${index}`, param, 'application/json')
      })
      try {
        const result = await originalMethod.apply(this, objArgs)
        reporter.endStep('passed', Date.now())
        return result
      } catch (error) {
        allure.createAttachment('ERROR', error.toString(), 'text/plain')
        if (error.toString().includes('AssertionError')) {
          reporter.endStep('failed', Date.now())
        } else {
          reporter.endStep('broken', Date.now())
        }
        throw error
      }
    }
  }
}

export { step }
