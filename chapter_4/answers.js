function remove_blanks(string1){
    var return_string="";
    for(var i=0; i<string1.length; ++i){
        if(string1[i]!==" "){
            return_string+=string1[i];
        };
    };
    return return_string;
};
remove_blanks(" Pl ayTha tF u nkyM usi c ");

function string_get_digits(string2){
    var ret_string="";
    for(var i=0; i<string2.length; ++i){
        if(Number(string2[i]) || Number(string2[i])===0){
            ret_string+=string2[i]
        };
    };
    return Number(ret_string);
};
string_get_digits("0s1a3y5w7h9a2t4?6!8?0");

function acronyms(str4){
    return_str="";
    return_str+=str4[0].toUpperCase();
    for(let i=0; i<str4.length; ++i){
        if(str4[i]== " "){
            return_str += str4[i+1].toUpperCase()
        };
    };
    return return_str;
};
// console.log(acronyms(" there's no free lunch - gotta pay yer way. "))
console.log(acronyms("Live from New York, it's Saturday Night!"))

function createAcro(str){
    let newStr=str.split(" ");
    var acronym="";
    for (let i=0; i<newStr.length; i++){
        if(String(newStr[i])){
            let temp=newStr[i].split("");
            acronym+=temp[0];
        }
    }
 
    console.log(acronym.toUpperCase())
}
createAcro("Live from New York, it's Saturday Night!")


function count_non_spaces(str3){
    let count=0;
    for(let i=0; i<str3.length; ++i){
        if(str3[i]!==" "){
            ++count
        };
    };
    return count
};
console.log(count_non_spaces("Honey pie, you are driving me crazy" ))




