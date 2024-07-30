



class selectionSort {
    constructor(min , index){
        this.min = min;
        this.index = index
    }


    sorting(list){
        if (this.min){
            const currentMethod = list[list.indexOf(this.min)] 
            const afterMethod = list[list.indexOf(this.min)+1]
            if (currentMethod > afterMethod){
                list[list.indexOf(currentMethod)] = afterMethod
                list[list.indexOf(afterMethod)] = currentMethod
                this.min = afterMethod
                this.sorting(list)
            }else{
                this.min = afterMethod
                this.sorting(list)
            }
        }else{
            this.min = list[0]
            const currentMethod = list[list.indexOf(this.min)] 
            const afterMethod = list[list.indexOf(this.min)+1]
            if (currentMethod > afterMethod){
                list[list.indexOf(currentMethod)] = afterMethod
                list[list.indexOf(afterMethod)] = currentMethod
                this.min = afterMethod
                this.sorting(list)
            }else{
                this.min = afterMethod
                this.sorting(list)
            }
        }
    }
}