


class config{
    constructor(feature , name){
        this.feature = feature,
        this.name = name
    }

    getConfig(){
        return ({
           featur : this.feature,
           name : this.name 
        })
    }
}



const config1 = new config('black rock feature' , 'music')
const config2 = new config('white metall feature' , 'car')

console.log(config1.getConfig())
console.log(config2.getConfig())