// #1

function Animal1(name, legs, voice) { 
  this.name = name 
  this.legs = legs
  this.voice = voice
  this.myVoice = function () {
    console.log(this.voice)
  }
}

const tiger1 = new Animal1('Poc', 5, 'Rrrr')

tiger1.myVoice()


 // #2
class Animal2 {
  constructor(name, legs, voice) {
    this.name = name
    this.legs = legs
    this.voice = voice
   }
   myVoice() {
    console.log(this.voice)
  }  
}

const tiger2 = new Animal2('Poc', 6, 'gav gav' )

tiger2.myVoice()



