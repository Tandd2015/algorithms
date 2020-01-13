function print1to255(){
    for(var i=1; i<=255; ++i){
        console.log(i);
    };
};
// print1to255();

function printMaxOfArray(arr){
    var max = arr[0];
    for(var idx=1; idx<arr.length; ++idx){
        if(arr[idx]>max){
            max=arr[idx];
        };
    };
    console.log(max);
};
// printMaxOfArray([2,5,-50]);

function printIntsAndSum0To255(){
    var sum=0;
    for(var i=0; i<=255; ++i){
        sum+=i;
        console.log("i:",i,"sum:",sum);
    };
};
// printIntsAndSum0To255();

function returnOddsArray1To255(){
    var arr=[];
    for(var i=1; i<=255; i+=2){
        arr.push(i);
    };
    return arr;
};
// returnOddsArray1To255();

function returnArrayCountGreaterThanY(arr, y){
    var count=0;
    for(var i=0; i<arr.length; ++i){
        if(arr[i]>y){
            ++count;
        };
    };
    console.log(count);
    return count;
};
// returnArrayCountGreaterThanY([1,2,3,4,5,6], 3);

function printMaxMinAverageArrayVals(arr){
    var max= min= avg=arr[0];
    for(var i=1; i<arr.length; ++i){
        avg+=arr[i];
        if(arr[i]>max){
            max=arr[i];
        }
        else if(arr[i]<min){
            min=arr[i];
        };
    };
    avg /= arr.length;
    console.log("Max:",max,"Min:",min,"Average:",avg);
};
// printMaxMinAverageArrayVals([2,4,6,8,10]);

function swapStringForArrayNegativeVals(arr){
    for(var i=0; i<arr.length; ++i){
        if(arr[i]<0){
            arr[i]="Dojo";
        };
    };
    return arr;
};
// swapStringForArrayNegativeVals([-1,-2,3,4,-1,9]);

function printOdds1To255(){
    for(var i=1; i<=255; i+=2){
        console.log(i);
    };
};
// printOdds1To255();

function printArrayVals(arr){
    for(var i=0; i<arr.length; i+=1){
        console.log(arr[i]);
    };
};
// printArrayVals([10,9,8,7,6,5,4,3]);

function printAverageOfArray(arr){
    var sum=0;
    for(var i=0; i<arr.length; ++i){
        sum+=i;
    };
    console.log(sum/=arr.length);
};
// printAverageOfArray([1,2,3,-1,-2,10]);

function squareArrayVals(arr){
    for(var i=0; i<arr.length; i++){
        arr[i]*=arr[i];
        // arr[i] = arr[i] * arr[i];
    };
    return arr;
};
// squareArrayVals([-3,0,1,2,4]);

function zeroOutArrayNegativeVals(arr){
    for(var i=0; i<arr.length; i+=1){
        if(arr[i]<0){
            arr[i]=0;
        };
    };
    return arr;
};
// zeroOutArrayNegativeVals([1,2,3,-1,-2,10]);

function shiftArrayValsLeft(arr){
    for(var i=0; i<arr.length; ++i){
        arr[i]=arr[i+1];
    };
    arr[arr.length-1]=0;
    console.log(arr);
};
// shiftArrayValsLeft([-3,0,1,5]);