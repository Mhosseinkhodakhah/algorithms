

class node:
    def __init__(self , value):
        self.value = value
        self.manes = []
        self.weigth = None

    def re(self):
        return ([self.value , self.manes , self.weigth ])


isinstance = 0

class addNode:
    def __init__(self):
        global isinstance
        print (isinstance)
        self.manes = []
        if (isinstance==1):
            raise Exception('you cant make the more than one instance from this object ... ')
        else : 
            isinstance+=1

    def add(self , value , manes  , weigth):
        print(value , manes , weigth)
        nodeIns = node(value)
        nodeIns.manes = manes
        nodeIns.weigth = weigth
        print(nodeIns.re())
        self.manes.append(nodeIns.re())
    
    def __repr__(self):
        return (f'${self.manes}')

nnn = addNode()
# nnn2 = addNode()

newNode = nnn.add("a" , [""] , 1 )
newNode2 = nnn.add("b" , ["a"] , 2)
newNode = nnn.add("c" , ["a" , "b"] , 3)

# newNode5 = nnn.add("c" )

print (nnn)




