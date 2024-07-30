
class  bug {
    constructor(){
        this.name = 'buggy'
        this.phrase = "Your debugger doesn't work with me!"
    }
}



const addSpeechAbility =(obj)=>{
    obj.speech = ()=>{
        console.log(`${obj.name} walks the walk and talks the talk!`)
    }
}

addSpeechAbility(bug)

console.log(bug.speech)
