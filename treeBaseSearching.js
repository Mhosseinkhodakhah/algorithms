
class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
  }
  


  class BinarySeachTree {
    constructor(){
      this.root = null
    }



    find(value){
        if(!this.root) return false     // if root didnt exist
        
        let current = this.root         // if root existed 
        let found = false               // found method should be flase
        while(current && !found){       // untill the method didnt found
              if(value < current.value){    // if  val < current root  
                current = current.left       //  make the left node to current root
               } else if(value > current.value){    // else
                  current = current.right       // make the right node to current
               } else {                         // if val == currentroot   => found was that
                    found = current
               } 
              
              }
      
          if(!found) return undefined;           
          return found                   // return the found
        
    
    }




    insert(value){
        var newNode = new Node(value);       // make the new node
        if(this.root === null){               // if this root was empty
            this.root = newNode;              // the new node assign to this root
            return this;
        }
        //! if we have the fucking root here
        let current = this.root;                 
        while(current){                      // proccess untill we have the root
            if(value === current.value) return undefined;    // if value == value of this root return undefind because we have this value
            if(value < current.value){                          // if value < value of this root 
                if(current.left === null){             // if this root had no left node
                    current.left = newNode;             // make this node of value the left child of this root 
                    return this; // return
                }
                current = current.left;           // if this root had left node => so the left node should be the new tree with current root
            } else {                             // if value > value of this root
                if(current.right === null){      // if this root had no rigth node
                    current.right = newNode;      // make this node of value the rigth child of this root
                    return this;
                } 
                current = current.right;         // 
            }
        }
    }
}