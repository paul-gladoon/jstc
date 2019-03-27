const fs = require('fs')
const path = require('path')

const walkSync = function(dir, filelist = [], directoryToSkip = []) {
  const files = fs.readdirSync(dir)
  files.forEach(function(file) {
    const isDirr = fs.statSync(path.join(dir, file)).isDirectory()
    const isSkipDir = directoryToSkip.some(function(item) {return file === item})
    if(isSkipDir) { /*empty statement*/}
    else if(isDirr) {
      filelist = walkSync(path.join(dir, file), filelist)
    } else {filelist.push(path.join(dir, file))}
  })
  return filelist
}

module.exports = {
  walkSync
}