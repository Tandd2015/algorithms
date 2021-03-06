function Node(val)
{
    this.val=val;
    this.next=null;
}
function SL()
{
    this.head=null;

    this.add=function(val)
    {
        if (this.head==null)
        {
            this.head=new Node(val);
        }
        else
        {
            runner=this.head;
            while(runner.next !=null)
            {
                runner=runner.next
            }
            runner.next= new Node(val);
        }
        return this;
    }
    this.length=function()
    {
        if(this.head == null) // if list is length 0
        {
            return 0;
        }
        else
        {
            counter=0;
            runner=this.head;
            
            while(runner != null)
            {
                counter++
                runner=runner.next
            }
            return counter;
        }
    }
    this.remove=function(val)
    {
        if(this.head.val==val)
        {
            this.head=head.next;
        }
        else
        {
            runner=this.head;
            while(runner.next != null)
            {
        
                if (runner.next.val==val)
                {
                    runner.next=runner.next.next;
                    break;
                }
                runner=runner.next;
            }
        }
        return this;
    }
    this.print=function()
    {
        runner=this.head;
        
        while(runner !=null)
        {
            console.log(runner.val);
            runner=runner.next;
        }
    }
    this.reverse=function()
    {
        if(this.head==null)             //list is empty
        {
            return;
        }  
        else
        {
            prev=null;
            runner=this.head;
            while(runner != null)
            {   
                
                next=runner.next;            //saves the rest of the list 
                runner.next=prev;            //points to the content that was previously behind it
                
                console.log("Next = " + next)
                console.log("Runner.next= "+runner.next)

                prev=runner;                // current runner will become the next runners previous
                runner=next;                //sets runner to be the first value of the rest of the list
            }
            this.head=prev;
        
        }  
        
        //
    }
//SList: Kth-Last Node
//Given k, return the value that is ‘k’ nodes from the list’s end. If given (list,1) , return the list’s last value. If given (list,4) , return the value at the node that has exactly 3 nodes following it.
//if we had a list of length 8
//5
this.kthLastNode=function(index)
    {
        var length=this.length();
        if(index > length || index < 1)
        {
            return;
        }

        var finalIndex=length-index  
        var count=0;
        //console.log(length);

        runner=this.head;
        while(count !=finalIndex)
        {
            //console.log(count)
            //console.log(runner.val);
            runner=runner.next;
           // console.log(runner.val);
            count++
        }
        return(runner.val);
    }

}
list= new SL();
list.add(8).add(10).add(5).add(7).add(25);
//list.print();
//list.reverse();
//list.print();
console.log(list.kthLastNode(0));
//list.remove(10);
//list.print();
//console.log(list);