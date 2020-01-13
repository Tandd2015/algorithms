class node:
    def __init__(self,value):
        self.value= value
        self.next= None

class node_list:
    def __init__(self):
        self.head= None
    
    def add_node(self,value):
        if(self.head == None):
            self.head= node(value)
            return self
        runner= self.head
        while(runner.next):
            runner= runner.next
        runner.next= node(value)
    
    def list_look_up(self, val):
        runner=self.head
        while(runner):
            if runner.value == val:
                return True
            else:
                runner=runner.next
        return self

    def remove_front(self):
        runner=self.head
        if runner.next != None:
            print("self.head.value= (%s) is being removed from the singly linked list"%runner.value)
            self.head=runner.next
        return self

    def head_value(self):
        print(self.head.value)
        return self

    def list_count(self):
        count=0
        runner=self.head
        while(runner):
            count+=1
            runner=runner.next
        print(count)
        return count

    def list_max_min_avg(self):
        max= self.head.value
        min= self.head.value
        sum= 0
        runner= self.head
        while(runner):
            if max<runner.value:
                max= runner.value
            if min>runner.value:
                min= runner.value
            sum+=runner.value
            runner=runner.next
        avg=sum/self.list_count()
        print(max, min, avg)
        return self

    def last_value(self):
        runner= self.head
        while(runner):
            if runner.next == None:
                print(runner.value)
                return runner.value
            runner=runner.next

    def remove_from_back(self):
        runner= self.head
        if runner == None:
            return self
        elif runner.next == None:
            self.head= None
            return self
        else:
            while(runner.next.next != None):
                runner= runner.next
            runner.next= None
        return self

    def min_to_front(self):
        min= self.head.value
        runner=self.head
        temp= self.head
        while(runner):
            if min> runner.value:
                min= runner.value
            runner=runner.next
        self.head= temp
        self.head= min
        return self

    def dedupe_s_list(self):
        runner = self.head
        node_lister = []
        while(runner):
            if runner.value not in node_lister:
                node_lister.append(runner.value)
                runner = runner.next
        return self
first_node= node(5)

first_node_list= node_list()
first_node_list.add_node(7)
first_node_list.add_node(8)
first_node_list.add_node(2)
first_node_list.add_node(8)
first_node_list.add_node(10)

# first_node_list.remove_front()
# first_node_list.list_max_min_avg()
# first_node_list.last_value()
# first_node_list.remove_from_back()
# first_node_list.last_value()

# first_node_list.min_to_front()
# first_node_list.list_count()

# print(first_node_list.head.value)
# print(first_node_list.list_look_up(8))
# print(first_node_list)
# print(first_node_list.head.next.value)
first_node_list.dedupe_s_list()