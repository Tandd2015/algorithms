function resetNegatives(arr){
    for(var i=0; i<arr.length; ++i){
        if(arr[i]<0){
            arr[i]=0;
        };
    };
    a
    console.log(arr);
    return arr;
};
resetNegatives([1,2,-1,-3]);

function moveForward(arr){
    for(var i=0; i<arr.length; ++i){
        arr[i]=arr[i+1];
    };
    arr[arr.length-1]= 0;
    console.log(arr);
    return arr;
};
moveForward([1,2,3]);

function returnReversed(arr){
    for(var i=0; i<arr.length/2; ++i){
        var temp=arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=temp;
    };
    console.log(arr);
    return arr;
};
returnReversed([1,2,3]);


function repeatTwice(arr){
    var new_arr=[];
    for(var i=0; i<arr.length; ++i){
        new_arr.push(arr[i],arr[i]);
    };
    console.log(new_arr);
    return new_arr;
};
repeatTwice([4,"Ulysses", 42, false]);