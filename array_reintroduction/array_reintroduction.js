function get_array(arr, y){
    var count=0;
    for(var i=0; i<arr.length; ++i){
        if(arr[i]>y){
            count++;
        };
    };
    console.log(count);
};
get_array([1,2,3,4,5,6],2);

function min_max_avg(arr){
    var min= max= avg=arr[0];
    for(var i=1; i<arr.length; ++i){
        if(arr[i]>max){
            max=arr[i];
        }
        else if(arr[i]<min){
            min=arr[i];
        };
        avg+=arr[i];
    };
    console.log(max,min,avg/arr.length);
};
min_max_avg([1,2,3,4,5,6]);

function replaceNegatives(arr){
    for(var i=0; i<arr.length; ++i){
        if(arr[i]<0){
            arr[i]='Dojo';
        };
    };
    console.log(arr);
    return arr;
};
replaceNegatives([1,2,-3,-5,5])

function removeVals(arr,start,end){
    var new_arr=[];
    for(var i=0; i<arr.length; i++){
        if(arr[i]<arr[start] || arr[i]>arr[end]){
            
            new_arr.push(arr[i]);
            console.log(arr, new_arr);
            return new_arr;
        };
    };
};
removeVals([20,30,40,50,60,70],2,4);

// // // Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  
// // For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
// function removeVals(arr, start, end){
//     // this one is tough and you can do it a lot of different ways!
//     var offset = end-start+1;
//     for (var i = start; i <= offset; i++){
//         arr[i] = arr[i+offset];
//     }
//     console.log(arr); // check out this console log to see how the array looks
//     // now we're going to lop off the same "offset" number of values from the end of the array
//     arr.length = arr.length - offset;
//     return arr;
// }
// var result = removeVals([20,30,40,50,60,70],2,4);
// console.log(result); 