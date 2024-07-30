const sortedList = [1,2,3,4,5,6,7,8,9]



const binarySearch = (list , searchMethod)=>{
    const len = list.length
    // console.log(searchMethod)
    if (len <= 2){
        for (let i = 0 ; i < list.length ; i++){
            if (list[i] == searchMethod){
                return i
            }
        }
    }else if (  len > 2 && len % 2 == 0){
        console.log('its here')
        const middleElement = list[(len/2)-1]
        console.log('midd' , middleElement)
        console.log(searchMethod , middleElement)
        if (searchMethod == middleElement){
            console.log('wow' , list.indexOf(middleElement))
            return (list.indexOf(middleElement))                             //! done
        }else if (searchMethod < middleElement){
            return binarySearch(list.slice(0 , list.indexOf(middleElement)) , searchMethod)
        }else{

        }
    }else if(len > 2 && len % 2 != 0){
        console.log('its here2')
        const middleElement = list[((len-1)/2)]
        // console.log('midd2' , middleElement)
        if (searchMethod == middleElement){
            return list.indexOf(middleElement)
        }else if (searchMethod < middleElement){
            // console.log('lower')
            return binarySearch(list.slice(0 , list.indexOf(middleElement)) , searchMethod)
    }
}
}


console.log(binarySearch(sortedList , 2))