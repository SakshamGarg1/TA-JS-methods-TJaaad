// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];


/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf('101')

// - Find the last index of `9` in numbers
numbers.lastindexOf('9');
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(" ");
// - Add two new words in the strings array "called" and "sentance"
string.push('called');
string.push('sentance');

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(' ')

// - Remove the first word in the array (strings)
strings.unshift();
 
// - Find all the words that contain 'is' use string method 'includes'
let allIS = string.filter((string) => 
                         string.include('is')
                         );

// - Find all the words that contain 'is' use string method 'indexOf'
let allISAgain = string.filter((string)=>
                              string.includeOf('is') !==-1 );

// - Check if all the numbers in numbers array are divisible by three use array method (every)
[...number].every(num => num%3 ===0);

// -  Sort Array from smallest to largest
[...numbers].sort((a,b)=>a-b)

// - Remove the last word in strings
string.pop();

// - Find largest number in numbers
let largest =numbers.sort((a-b)=> a-b).pop();

// - Find longest string in strings
ley longestString= string.sort((a-b)=>a.length - b.length).pop();

// - Find all the even numbers
let even=number.filter((num) =>num%2===0);

// - Find all the odd numbers
let even=number.filter((num) =>num%2!==0);

// - Place a new word at the start of the array use (unshift)
string.unshift('New word!');

// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.spilce(3,7))


// - Make a subset of strings array ['a','collection']
strings.slice(3,5);

// - Replace 12 & 18 with 1221 and 1881
numbers.map((num)=> 
            {if(num=== 12){
            return 1221;}
           else if(num===18){
return 1881;
}else{
return num;
}
})

// - Replace words in strings array with the length of the word
let sringsLength = string.map(
(string)=> string.length
);


// - Find the sum of the length of words using above question
stringLength.reduce((acc,cv)=>{
acc =acc =cv;
return acc;
},0)
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let filteredCustomers = customer.filter()customer => customer.firstname.startWith("J"));

// - Create new array with only first name
let firstNameCustomers = customer.map((customers)=>
                                    customers.firstName);


// - Create new array with all the full names (ex: "Joe Blogs")
                                    '${customer.firstname} ${customer.lastname}' ;

// - Sort the array created above alphabetically
[...fullnameCustomers].sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.

