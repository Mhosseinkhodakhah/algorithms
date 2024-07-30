


class bubbleSort{
    constructor(bubble){
        this.bubble = bubble
    }

    sorting(list){
        if (this.bubble){
            if (list.indexOf(this.bubble) == (list.length-1)){
                return list
            }
            let bubble = list[list.indexOf(this.bubble)]
            let afterBubble = list[list.indexOf(this.bubble)+1]
            if (bubble > afterBubble){
                list[list.indexOf(this.bubble)] = afterBubble;
                list[list.indexOf(this.bubble)+1] = bubble
                this.sorting(list)
            }else{
                this.bubble = list[list.indexOf(this.bubble)+1]
                this.sorting(list)
            }
        }else{
            this.bubble = list[0];
            let bubble = list[list.indexOf(this.bubble)]
            let afterBubble = list[list.indexOf(this.bubble)+1]
            if (bubble > afterBubble){
                list[list.indexOf(this.bubble)] = afterBubble;
                list[list.indexOf(this.bubble)+1] = bubble
                this.sorting(list)
            }else{
                this.bubble = list[list.indexOf(this.bubble)+1]
                this.sorting(list)
            }
        }
       
    }

}