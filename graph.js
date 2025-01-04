class node{
    constructor(value){
        this.value = value,
        this.manes = []
    }
}
// its a test for contrib
class addNode{
    constructor(){
        this.manes = []
    }

    addnode(value , manes){
        const NODE = new node();
        NODE.value = value;
        NODE.manes = [...manes]
        this.manes.push(value)
    }
} 


