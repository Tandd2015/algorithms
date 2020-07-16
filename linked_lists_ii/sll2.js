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
        if(this.head === null){
            return this.pushFront(value);
        }
        const nodeTwo= new Node(value);
        let runner= this.head;
        while(runner.next != null){
            runner= runner.next;
        }
        runner.next= nodeTwo;
        return this;
    }

    pushFront(value){
        const nodeOne= new Node(value);
        nodeOne.next= this.head;
        this.head = nodeOne;
        return this;
    }

    printList(){
        let runner = this.head;
        while(runner){
            console.log(runner.value)
            runner= runner.next
        }
        return this;
    }
    reverseList(){
        let runner= this.head;
        let list= new NodeList();
        while(runner!=null){
            list.pushFront(runner.value);
            runner=runner.next;
        }
        this.head= list.head;
        return this;
    }
    // returnK(value){
    //     let j=0;
    //     let nodeArr=[];
    //     let counter= 0;
    //     let runner= this.head;
    //     while(runner != null){
    //         counter+=1;
    //         nodeArr.push(runner.value);
    //         runner= runner.next;
    //     }
    //     j= count-value;
    //     console.log(nodeArr)
    //     return nodeArr[j]
    // }

    returnK(value){
        let j=0;
        let runnera = this.head;
        let runnerb = this.head;

        for(let index= 0; i<value; i++){
            runner= runner.next
        };
        while(runner!= null){
            count++;
            runnera= runnera.next;
            runnerb= runnerb.next;
        }
        console.log(runnerb.value)
        return this;
    }

    // SList: Is Palindrome
    // Return whether a list is a palindrome. String palindromes read the same front-to-back and back-to-front.
    //  Here, compare node values . N.B.: to be accurate in JavaScript, use === instead of == , since 1 == true == [1] == "1".
    // Second: you may not have plentiful memory. Can you solve this without an additional array?
    Palindrome(){
        let newListed= new NodeList();
        let runner= this.head;
        while(runner){
            
            newListed.pushFront(runner.value);
            runner= runner.next;
        }
        runner= this.head;
        let newRunner= newListed.head;
        while(runner){
            if(runner.value !== newRunner.value){
                return false;
            }
            else{
                runner= runner.next;
                newRunner= newRunner.next;
            }
        }
        console.log(newList, newListed);
        return true;
    }
}
const newList= new NodeList();
// newList.newNode1
// console.log(newList)
// newList.pushFront(10)
// newList.pushFront(12)
// newList.pushBack(5)
// newList.pushFront(13)
// console.log(newList)
'racecar'.split('').forEach(char => newList.pushFront(char));
console.log(newList.Palindrome())
