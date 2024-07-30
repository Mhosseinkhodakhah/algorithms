//! first type


const config = {
    start : ()=>{console.log('its start!!!')},
    finish : ()=>{consolelog('finished!!!')}
}


Object.freeze(config)

config.name == 'hello'

console.log(config)



////////////////////////////////////////////!
////////////////////////////////////////////!
//! second type

let instance;

class Config {
    constructor(){
        if (instance){
            return new Error('you cant make more than one instance from this object!!!')
        }
        instance = this;
    }

    start(){
        console.log('its start!!')
    }

    finish(){
        console.log('its finished!!!')
    }
}


const ins  = new Config()

const ins2 = new Config()

console.log('1' , ins.start())
console.log(new Config())