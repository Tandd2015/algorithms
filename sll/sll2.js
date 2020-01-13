class Node{
    constructor(value){
        this.value= value;
        this.next= null;
    }
}

class NodeList{
    constructor(){
        this.head= null;
    }
    pushBack(value){
    }
    pushFront(value){
        const nodeOne= new Node(value);
        nodeOne.next= this.head;
        this.head = node;
    }
}
const newList= new NodeList();
console.log(newList)
newList.pushFront(10)