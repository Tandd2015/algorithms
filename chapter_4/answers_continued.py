# Parens Valid  Create a function that, given an input string str , returns a boolean whether parentheses in str are valid. 
# Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s" , return true . 
# Given "N(0(p)3" , return false : not every parenthesis is closed. Given "N(0)t ) 0(k" , return false , because the underlined ")" 
# is premature: there is nothing open for it to close.
def parens_valid(str1):
    parent_string= ""
    count=0
    for i in range(len(str1)):
        if str1[i] == "(":
            parent_string += "("
            count += 1
        if str1[i] == ")":
            parent_string += ")"
            count -= 1
        if count<0:
            return False
    if count == 0:
        return True
    else:
        return False

# print(parens_valid("Y(3(p)p(3)r)s")
# print(parens_valid("N(0(p)3"))
# print(parens_valid("N(0)t ) 0(k"))

# String: Is Palindrome  Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar" ,
# return true . Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!" , return false .
def string_palindrome(str2):
    for i in range(int(len(str2)/2)):
        if str2[i] != str2[len(str2)-1-i]:
            return False
        else:
            return True

def str_palindrome(str1):
    new_string= ""
    for i in range(len(str1)-1, -1, -1):
        new_string+=str1[i]
        print(new_string)
    if new_string == str1:
        return True
    else:
        return False
# print(string_palindrome("a x a"))
# print(string_palindrome("racecar"))
# print(string_palindrome("Dud"))
# print(string_palindrome("oho!"))
# print(str_palindrome("a x a"))
# print(str_palindrome("racecar"))
# print(str_palindrome("Dud"))
# print(str_palindrome("oho!"))

# Coin Change with Object  As before, given a number of U.S. cents, return the optimal configuration of coins, in an object. 
def coin_change(amount):
    coins ={
        'dollars':0,
        'fifty_centpieces':0,
        'quarters':0,
        'dimes':0,
        'nickels':0,
        'pennies':0
    }
    while amount >0:
        if amount >=100:
            amount -= 100
            coins["dollars"] +=1
        elif amount >= 50:
            amount -= 50
            coins["fifty_centpieces"]+=1
        elif amount>=25:
            amount-=25
            coins["quarters"] +=1
        elif amount>=10:
            amount-=10
            coins["dimes"] +=1
        elif amount>=5:
            amount-=5
            coins["nickels"] +=1
        else:
            amount-=1
            coins["pennies"] +=1
    return coins

# print(coin_change(1621))

def coin_change1(amount):
    coins={
        'quarters':0,
        'dimes':0,
        'nickels':0,
        'pennies':0
    }
    while amount>0:
        if amount >= 25:
            amount-=25
            coins['quarters']+=1
        elif amount >= 10:
            amount-=10
            coins['dimes']+=1
        elif amount >= 5:
            amount-=5
            coins['nickels']+=1
        else:
            amount-=1
            coins['pennies']+=1
    return coins

# print(coin_change1(65))

def objLength(obj):
    count=0
    for key in obj:
        count+=1
    return count

# print(objLength({ 'band': "Travis Shredd & the Good Ol’ Homeboys", 'style': "Country/Metal/Rap", 'album': "668: The Neighbor of the Beast", 'hometown':"Memphis", 'catchphrase':'Suck it!' }))

# Fibonacci: Given a number return that position's value in a fibonacci sequence
# [0,1,1,2,3,5,8]
# Last number - 1 + Last number - 2
# if number < 2:
def fib(num):
    fib_start=[0,1,1]
    if num < 2:
        return "Invalid fib"
    else:
        for i in range(3,num+1):
            fib_start.append(fib_start[i-1] + fib_start[i-2])
        return fib_start[num]
# print(fib(5))

# sumToOne: Given an integer, add all values until the sum is less than 10. Example: sumToOne(928) returns 1, becasue 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.
# def sum_to_one(num):
#     # str_num= str(num)
#     # sum= 0
#     # while num >= 10:
#     #     for val in str_num:
#     #         sum += int(val)
#     #     num= sum
#     #     str_num= str(sum)
#     # return int(num)
#     str_num= str(num)
#     sum= 0
#     print(str_num)
#     for val in str_num:
#         if num >= 10:
#             sum += int(val)
#         else:
#             return num
#         num= sum
#     return int(num)
# print(sum_to_one(928))

def swap_pairs(some_list):
    # if len(some_list)%2 ==1:
    for i in range(0, len(some_list)-1, 2):
        some_list[i], some_list[i+1] = some_list[i+1], some_list[i]
    return some_list
# swap_pairs([1,2,3,4,5,2])

sorted_list= ['a','a','b','b','c','c','d','e','e','e','e']
def remove_duplicates(listed):
    new_list=[]
    new_list.append(listed[0])
    for i in range(1,len(listed)-1):
        if listed[i]!=listed[i-1]:
            new_list.append(listed[i])
    return listed
# print(remove_duplicates(sorted_list))

# Remove Blanks
# Create a function that, given a string, returns all of that string’s contents, but without blanks. If given the string
#  " Pl ayTha tF u nkyM usi c " , return "PlayThatFunkyMusic" .

def remove_blanks(a_string):
    return_string= ""
    for i in range(len(a_string)):
        if a_string[i] == " ":
            print("oh! This is a space!")
        else:
            return_string += a_string[i]
    return return_string
# print(remove_blanks(" Pl ayTha tF u nkyM usi c "))

# String: Get Digits
# Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
# Given "0s1a3y5w7h9a2t4?6!8?0" , the function should return the number 1357924680 .

def get_digits(a_string):
    num_string= ''
    for i in range(len(a_string)):
        if str.isdigit(a_string[i]):
            print('this is a number')
            num_string+=a_string[i]
        else:
            print(a_string[i])
    return num_string

# print(get_digits("0s1a3y5w7h9a2t4?6!8?0"))

# Acronyms
# Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given " there's no free lunch - gotta pay yer way. " , return "TNFL-GPYW" . 
# Given "Live from New York, it's Saturday Night!" , return "LFNYISN" .

def string(a_string):
    acronym=" "
    word= a_string.split(' ')
    for i in range(len(word)):
        if str(word[i]):
            word_temp = word
            acronym+=word[i][0].upper()
    return acronym
# print(string("Live from New York, it's Saturday Night!"))

# Max/Min/Average with Object  
# Given an array, return an object containing the array’s max, min and average values.
def max_to_min(list1):
    sum=0
    new_dict={
        'max':list1[0],
        'min':list1[0],
        'average':0
    }
    for i in range(len(list1)):
        # print(i,list1[i])
        if new_dict['max']<list1[i]:
            new_dict['max']=list1[i]
        if new_dict['min']>list1[i]:
            new_dict['min']=list1[i]
        sum+=list1[i]
    new_dict['average']=sum/len(list1)
    print(new_dict)
# max_to_min([2,3,5,7,9])

# Zip Arrays into Map  
# Associative arrays are sometimes called maps because a key (string) maps to a value. Given two arrays,
# create an associative array (map) containing keys of the first, and values of the second. For arr1 = ["abc", 3, "yo"] and 
# arr2 = [42, "wassup", true] , return {"abc": 42,  3: "wassup", "yo": true} .

def map(list1, list2):
    new_dict={}
    for i in range(len(list1)):
        new_dict[list1[i]] = list2[i]
    return new_dict
# print(map(["abc", 3, "yo"], [42, "wassup", True]))

# Invert Hash  
# Associative arrays are also called hashes (we’ll learn why later). Build invertHash(assocArr) to convert hash keys to values,
# and values to keys. Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"}, 
# return object {"Zaphod": "name", "high": "charm", "dicey": "morals"} . 

def assoc_arr(dict1):
    dict2={}
    for key in dict1:
        dict2[dict1[key]] = key 
    return dict2
print(assoc_arr({"name": "Zaphod", "charm": "high", "morals": "dicey"}))
