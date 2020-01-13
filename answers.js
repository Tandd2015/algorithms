function setting_and_swapping(num, name){
    var myNumber=num, myName=name, temp=name;
    myName=myNumber, myNumber=temp;
    myNumber=myName, myName=temp;
};
// setting_and_swapping(42, "Daniel");

function print_range_of_numbers(start, finish){
    for(var i=start; i<=finish; ++i){
        console.log(i);
    };
};
// print_range_of_numbers(-52,1066);

function dont_worry(num, strg){
    for(var i=0; i<num; ++i){
        console.log(strg);
    };
};
// dont_worry(98,'good morning!');

function multiples_of_3_kinda(multiple, start, finish){
    for(var i=start; i<=finish; ++i){
        if(i%multiple === 0 && i != -1*multiple
            && i != -2*multiple && i != 0){
            console.log(i);
        };
    };
};
// multiples_of_3_kinda(3, -300, 0);

function printing_numbers_while(start, finish){
    while(start<=finish){
        console.log(start);
        ++start;
    };
};
// printing_numbers_while(2000, 5280);

function say_birthday(b_month, b_day){
    var c_day_e=0;
    for(var c_month=1; c_month<=12; ++c_month){
        if(c_month===1 || c_month===3 || c_month===5 || c_month===7
            || c_month===8 || c_month===10 || c_month===12){
                c_day_e=31;
        }
        else if(c_month===4 || c_month===6 || c_month===9 || c_month===11){
            c_day_e=30;
        }
        else{
            c_day_e=28;
        };
        for(var c_day_s=1; c_day_s<=c_day_e; ++c_day_s){
            if(c_month === 1 && c_day_s === 26){
                console.log("How did you know?");	
            }	
            else{
                console.log("Just another day....");
            };
        };
    };
};
// say_birthday(4,26);
function leap_year(input_year){
    if(input_year%4 === 0 && input_year%100 !== 0 ||
        input_year%4 === 0 && input_year%400 === 0){
            console.log("leap year");
    };
};
// leap_year(2000);

function print_and_count(multiple, start, finish){
    var count=0;
    for(var i=start; i<=finish; ++i){
        if(i%multiple === 0){
            count += 1;
            console.log(i);
        };
        if(i === finish){
            console.log(count);
        };
    };
};
// print_and_count(5, 512, 4096);

function multiples_of_6(multiple, start, finish){
    while(start<=finish){
        if(start%multiple === 0){
            console.log(start);
        };
        start++;
    };
};
// multiples_of_6(6, 0, 60000);

function counting_the_dojo_way(multiple1, multiple2, start, finish){
    var str1=" Coding", str2=" Dojo";
    for(var i=start; i<=finish; ++i){
        if(i%multiple1 === 0 && i%multiple2 === 0){   
            console.log(i + str1 + str2);
        }
        else if(i%multiple1 === 0){
            console.log(i + str1);
        }
        else{
            console.log(i);
        };
    };
};
// counting_the_dojo_way(5, 10, 1, 100);

function whatcha_know(input){
    var incoming=input;
    console.log(incoming);
};
// whatcha_know("incoming");
function whoa_t_S_huge(start, finish){
    var sum=0;
    if(start === -finish){
        console.log(sum);
    }
    else{
        for(var i=start; i<=finish; ++i){
            if(i%2 === 1 || i%2 === -1){
                sum+=i;
            };
        };
        console.log(sum);
    };
};
// whoa_t_S_huge(-300000, 300000);

function countdown_by_four(start, multiple, finish){
    var x = 0;
    while(start>=finish){
        if(start>0 && start!==x && start%multiple===0){
            console.log(start);
            start--;
        }
        else{
            start--;
            continue;
        };
    };
};
// countdown_by_four(2016, 4, -10);

function flexible_countdown(lowNum, highNum, mult){
    for(var i=highNum; i>=lowNum; --i){
        if(i%mult === 0){
            console.log(i);
        };
    };
};
// flexible_countdown(2, 9, 3);

function final_countdown(param1, param2, param3, param4){
    while(param2<=param3){
        if(param2%param1 === 0 && param2 !== param4){
            console.log(param2);
            param2++;
        }
        else{
            ++param2;
            continue;
        };
    };
};
// final_countdown(3, 5, 17, 9);

//
//
//
//
//
// Algorithm Book page 20 Starts

function countdown(number){
    var new_array=[], length=0;

    for(var i=number; 0<=i; --i){
        new_array.push(i);
    };
    length=new_array.length;
    console.log("Array is " + length + " indexs long!");
    return new_array;
};
// countdown(10);

function print_and_return(arr){
    for(var i=0; i<arr.length; ++i){
        if (arr[i]===arr[0]){
            console.log(arr[i]);
        }
        else if(arr[i]===arr[1]){
            return arr[i];
        };
    };
};
// print_and_return([3,6]);

function first_plus_length(arr){
    var sum=0;
    for(var i=0; i<arr.length; ++i){
        if(typeof arr[i] === 'string' && arr[i] === arr[0]){
            sum = "string value of ( " + arr[i] + " ) " + (arr[i] + arr.length);
        }
        else if(typeof arr[i] === 'number' && arr[i] === arr[0]){
            sum = "number value of ( " + arr[i] + " ) " + (arr[i] + arr.length);
        }
        else if(typeof arr[i] === 'boolean' && arr[i] === arr[0]){
            sum = "boolean value of ( " + arr[i] + " )" + (String(arr[i]) + arr.length);
        };
        return sum;
    };
};
// first_plus_length(['stringzz',false,5,5,5,'stringzz2']);

function values_greater_than_second(arr){
    var count=0;
    for(var i=0; i<arr.length; ++i){
        if(arr[i] > arr[1]){
            count++;
        }; 
    };
    return count; 
};
// values_greater_than_second([1,3,5,7,9,13]);

function values_greater_t_second_g(arr){
    var count=0, new_array=[];
    if(arr.length === 1){
        new_array.push(arr)
        count++;
    }
    else if(arr.length > 1){
        for(var i=0; i<arr.length; ++i){
            if(arr[i] > arr[1]){
                new_array.push(arr[i]);
                count++;
            };
        }; 
    };
    console.log(count);
    return new_array; 
};
// values_greater_t_second_g([1,3,5,7,9,13]);

function this_length_that_value(num1, num2){
    var arr=[];
    for(var i=0; i<num1; ++i){
        console.log(i, num1);
    };
};
// this_length_that_value(3,6);

function fit_the_first_value(arr){
    if(arr[0] > arr.length){
        console.log("Too big!")
    }
    else if(arr[0] < arr.length){
        console.log("Too small!");
    }
    else if(arr[0] === arr.length){
        console.log("Just right!");
    }
}
// fit_the_first_value([6,2,3,-4,-5,-6])


function fahrenheitToCelsius(fDegrees){
    var cDegrees = ((fDegrees - 32) * (5/9));
    return cDegrees;	
};
// fahrenheitToCelsius(70);

function celsiusToFahrenheit(cDegrees){
    var fDegrees=(((9/5) * cDegrees) + 32);
    return console.log(fDegrees);
};
// celsiusToFahrenheit(30);

function makeItBig(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        };
    };
    return arr;
};
// makeItBig([-1,3,5,-5]);

function print_low_return_high(arr){ 
    var min= max= arr[0];
    for(var x = 1; x < arr.length; x++){
        if(arr[x] < min){
            min = arr[x];
        }
        if(arr[x] > max){
            max = arr[x];
        }
    }
    console.log(min);
    return max;
}
// print_low_return_high([-1, 3, 5, -5]);

function print_one_return_another(arr){
    console.log(arr[arr.length - 2]);
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            return arr[i];
        };
    };
};
// print_one_return_another([-1, 3, 5, -5]);

function double(arr){
    var newarr=[];
    for(var i = 0; i < arr.length; i++){
        arr[i] *= 2;
        newarr.push(arr[i]);
    };
    console.log(newarr);
};
// double([1, 2, 3]);

function countPositives(arr){
    var count=0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]>0){
            count++;
        };
    };
    arr[arr.length-1] = count;
    return arr;
};
// countPositives([-1,1,1,1])

function even_and_odds(arr){
    var odd_count= even_count= 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1){
            odd_count++;
            if(arr[i] % 2 !== 1){
                count= 0;
            };
            if(odd_count === 3){
                console.log("That's odd!");
                odd_count= 0;
            };
        };
        if(arr[i]%2 === 0){
            even_count++;
            if(arr[i]%2 !== 0){
                even_count= 0;
            };
            if(even_count===3){
                console.log("Even more so!");
                even_count= 0;
            };
        };
    };		
};
// even_and_odds([2, 6, 8, 1, 3, 5, 6, 7, 8, 9, 7, 5]);

function increment_the_seconds(arr){
    for(var i=0; i<arr.length; i++){
        if(i%2 !== 0){
            arr[i]++;
        };
    };
    return arr;
};
// increment_the_seconds([1, 2, 3, 4, 5, 6]);

function previous_lengths(arr){
    for(var i=arr.length-1; i>=0; --i){
        if(arr[i]===arr[arr.length-1]){
            arr[i]=0;
        }
        else{
            arr[i]=arr[i].length;
        };
    };
    console.log(arr);
};
// previous_lengths(["1","12","123","1234","12345","123456"])

function add_seven(arr){
    var new_arr = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i]===arr[0]){
            continue;
        }
        else if(arr[i] !== arr[0]){
            new_arr.push(arr[i]+7);
        };	
    };
    return(new_arr);
};
// add_seven([-1, 3, 5, -5]);

function reverse(arr){
    var temp=0;
    for(var i=0; i<arr.length/2; i++){
            temp=arr[i];    
            arr[i]=arr[(arr.length-1)-i];
            arr[(arr.length-1)-i]=temp;
    }
    return arr;
}
// reverse([3, 1, 6, 4, 2]);

function outlook_negative(arr){
    var newarr=[];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            arr[i]= 0-arr[i];
        }
        newarr.push(arr[i]);
    }
    return console.log(newarr);
}
// outlook_negative([1, -3, 5]);

function alwaysHungry(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){	
        if(arr[i]==="food"){
            console.log("yummy");
        };
        if(arr[i]!=="food"){
            count++;
            if(count===arr.length){
                console.log("I'm hungry");
            };
        };

    };

};
// alwaysHungry([9, "food", "food", 7]);
// alwaysHungry([9, 8, 7, 6]);

function swap_center(arr){ 
    if(arr.length%2===1 && arr.length<6){
        temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
    }
    else{
        temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
        
        temp = arr[arr.length - 4];
        arr[arr.length - 4] = arr[arr.length - 3];
        arr[arr.length - 3] = temp;
    }
    console.log(arr);
}
swap_center([true,42,"Ada",2,"pizza"]);
swap_center([1,2,3,4,5,6]);
swap_center([1,2,3,4,5,6,7,8,9,10,11,12]);

function scale_array(arr, num){ 
    for(var i = 0; i < arr.length; i++){
        arr[i] *= num;
    };
    return console.log(arr);
};
// scale_array([1, 2, 3, 4, 5, 6], 0);


if(arr.length%2===1 && arr.length<6){
    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
}
else{
    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    
    temp = arr[arr.length - 4];
    arr[arr.length - 4] = arr[arr.length - 3];
    arr[arr.length - 3] = temp;
}