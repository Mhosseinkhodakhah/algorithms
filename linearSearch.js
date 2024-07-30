

const array = [1,5,6,9,8,7,4,5,15,2,3,66,9,8,7,4,1,2]


const linearSearching = (array , searchMethod)=>{
   for (let i = 0 ; i < array.length ; i++){
    // console.log(array[i])
    if (array[i] == searchMethod){
        return i
    } 
   }
}

// console.log(array)

console.log(linearSearching(array , 7))