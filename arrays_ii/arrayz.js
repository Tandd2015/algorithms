// Array: Average (Warmup)
// (Warm-up) Always run through some quick algorithm problems before any coding interview, to get yourself warmed up. How about this one: return the average value of an array of unsorted numbers .
function average_array(arr){
    var sum=0;
    for(var i=0; i<arr.length; ++i){
        sum+=arr[i];
    }
    avg=sum/arr.length;
    return avg
};
// average_array([1,2,3,4,5])

function sum_of_array(arr){
    var sum=0;
    for(var i=0; i<arr.length; ++i){
        sum+=arr[i];
    }
    return sum
};
sum_of_array([1,2,3,4,5])

// Balance Point
// Write a function that returns whether the given array has a balance point between indices, 
// where one side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true ( between indices 3&4 ), but [1,2,4,2,1] → false .

function balance_point(arr){
    var total_sum = 0;
    var sum_list_front= 0; 
    var sum_list_back= 0;
    for(var i=0; i<arr.length; ++i){
        sum_list_front+=arr[i];
        sum_list_back=0;

        for(var k=i+1; k<arr.length; ++k){
            sum_list_back+=arr[k];
        }
        if(sum_list_front == sum_list_back){
            return true;
        }
    };
    return false;
};
// console.log(balance_point([1,2,4,2,1]))

// Balance Index
// Here, a balance point is on an index, not between indices. Return the balance index where sums are equal 
// on either side (exclude its own value). Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2 , but [9,9] → -1 .
function balanceIndex(arr){
    var left= right= index= 0;
    for(var i=0; i<arr.length; i++){
        left+=arr[i];
        index = i+1;
        right=0;
        // console.log(left, arr[i], right)
        for(var k=i+2; k<arr.length; k++){
            right+=arr[k];
            // console.log(right, arr[k], "kkkkkkkkk")
            if(left === right){
                return index;
            };
        };
    };
    return -1;
};
// console.log(balanceIndex([-2,5,7,0,3]))
// console.log(balanceIndex([-2,-2]))

// Array: Binary Search
// Given a sorted array and a value, return whether the array contains that value. Do not sequentially iterate the array. Instead, 
// ‘divide and conquer’, taking advantage of the fact that the array is sorted . As always, only use built-in functions that you are prepared to recreate (write yourself) on demand!

function binSearch(arr, val){
    var startPiont= 0;
    var endPiont= arr.length;
    var middlePiont= arr.length;
    while(startPiont<endPiont){
        middlePiont= Math.floor((startPiont + endPiont)/2);
        // console.log(middlePiont)
        if(arr[middlePiont] === val){
            return true;
        };
        if(val < arr[middlePiont]){
            endPiont = middlePiont;
            // console.log("hello", middlePiont);
        }else{
            startPiont = middlePiont + 1;
            // console.log(middlePiont, startPiont, endPiont)
        };
    };
    return false;
};
// console.log(binSearch([1,2,3,4,5,6,7,8,9,10], 11));

// Min of Sorted-Rotated
// You will be given a numerical array that has first been sorted, then rotated by an unknown amount. Find and return the minimum value in that array. 
// Don’t use built-in functions (surprise!). Given the input array ["Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"] ,
// you should return "Anna" . Remember, do not linearly iterate the array!

function minOfSortedRotated(arr){
    var start= 0;
    var end= arr.length-1;
    var middle= Math.floor((start + end)/2);
    while(end-start>1){
        middle= Math.floor((start + end)/2);
        if(arr[middle] > arr[end]){
            start= middle;
            console.log(start)
        }else{
            end= middle;
        };
    };
    return arr[end];
};
// console.log(minOfSortedRotated(["Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"]));

function flatenArr(arr){
    var newArr=[];
    for(var i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            for(var k=0; k<arr[i].length; k++){
                var temp= arr[i][k];
                newArr.push(temp);
            }
        }else{
            newArr.push(arr[i]);
        };
    };
    return newArr;
};
// console.log(flatenArr([1,[2,3],4,[]]))