function push_front_array(arr, value){
    var temp=arr[0];
    for(var i=arr.length; i>0; --i){
        arr[i]=arr[i-1]
    };
    arr[0]=value;
    console.log(arr);
    return arr;
};
push_front_array([1,2,3,4], 7)

function pop_front(arr){
    var temp=arr[0];
    for(var i=0; i<arr.length-1; ++i){
        arr[i]= arr[i+1]
    }
    arr.length--;
    console.log(arr, temp);
    return temp;
}
pop_front([1,2,7,8])

function insertAt(arr,index,val){
    for(var i=arr.length-1; i>=index; --i){
        console.log(i);
        arr[i+1]=arr[i]
    };
    arr[index] = val;
    console.log(arr);
    console.log("hello")
    return arr;
};
insertAt([4,6,3,2],2,10)

// function insertAt(arr, idx, val){
//     for (var i = arr.length; i > idx; i--){
//         arr[i] = arr[i-1];
//     }
//     arr[idx] = val;
//     return arr;
// }
// console.log(insertAt([1,2,3], 2, 4));

function removeAt(arr,index){
    var temp=arr[index];
    for(var i=index+1; i<arr.length; ++i){
        arr[i-1]=arr[i];
    };
    arr.length--;
    // console.log(arr);
    return temp;

};
removeAt([1,2,3,4],2)

function swap_pairs(arr){
    var temp=0;
    if(arr.length%2===0){
        for(var i=0; i<arr.length; i+=2){
            temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
    }
    else{
        for(var i=0; i<arr.length-1; i+=2){ 
            temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        };
    };
    console.log(arr);
};
swap_pairs([1,2,3,4,5,6]);
swap_pairs(["Brendan",true,42])

function remove_duplicate(arr){
    var skip_counter= new_value_index=0;
    for(var i=1; i<arr.length; ++i){
        if(arr[new_value_index] != arr[i]){
            arr[new_value_index+1]=arr[i];
            ++new_value_index;
        };
    };
    arr.length= arr.length-(arr.length-new_value_index)+1;
    return arr;
};
remove_duplicate([1,2,2,3,3,3,4])

function min_to_front(arr){
    var min = arr[0], min_index=0;;
    for(var i=0; i<arr.length; ++i){
      if(arr[i] < min){
        min= arr[i];
        min_index= i;
      }
    }
    for(var i=min_index; i>0; --i){
      arr[i]= arr[i-1]
      }
    arr[0]= min;
    return arr;
  }
  console.log(min_to_front([4,2,1,3,5]));
  // should be [1,4,2,3,5]