//@ts-noCheck

/****************************** USING MAP() ****************************/
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
/**********************************************************************/ 


let states = ["Florida", "california", "North Dakota", "South Dakota"];

//Kansas -> kansas
//example.com/North Dakota -> example.com/north-dakota

//urls: imperative version
function imperativeUrls(elements){
    let urls = []
    elements.forEach(function(element){
        urls.push(element.toLowerCase().split(/\s+/).join("-"));
    })
    return urls;
}

//console.log(imperativeUrls(states));

function functionalUrls(elements){
    return elements.map(element => element.toLowerCase().split(/\s+/).join("-"));
}

// console.log(functionalUrls(states));


// A functional solution to the code above, it's what functional programming is all about


function urlify(string){
    return string.toLowerCase().split(/\s+/).join("-");
}

function functionalUrls(elements){
    return elements.map(element => urlify(element));
}

/****************************** USING FILTER ****************************/
// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
/**********************************************************************/
// let states = ["Florida", "california", "North Dakota", "South Dakota"];
//finding single words from an array the, imperative version

function imperativeSingles(elements){
    let singles = [];
    elements.forEach(function(element){
        if(element.split(/\s+/).length === 1){
            singles.push(element);
        }
    });
    return singles;
}
// console.log(imperativeSingles(states));

//Know doing the same as the code above using filter

function imperativeSingles(elements){
    return elements.filter(element => element.split((/\s+/)).length === 1) 
    
}
console.log(imperativeSingles(states));

/****************************** USING REDUCE ****************************/
//The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
/**********************************************************************/
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// expected output: 10


/********************************************/
// let look at this again
const result = array1.reduce((total, n) => {
    total += n;
    return total;
}, 0); // reduce increments through the array starting from the initial value because the function is adding the current value 'n' to the previous value 'total' if the initial value was 5 the result would be 15 if the initial value was 10 the result would be 20. 


// console.log(result);

/********************************************/
//Now lets use this in a function

function functionalSum(elements){
    return elements.reduce((total, n) => { return total += n; },15); //with initial 15
}
console.log(functionalSum(array1));

/*****************************************************************************************/
// let states = ["Florida", "california", "North Dakota", "South Dakota"];
//checking lengths: imperative solution

function imperativeLengths(elements){
    let lengths = {}
    elements.forEach(function(element){
        lengths[element] = element.length;
    });
    return lengths;
}
// console.log(imperativeLengths(states));

// let states = ["Florida", "california", "North Dakota", "South Dakota"];
/****************************************/
//functional solution

function functionalLengths(elements){
    return elements.reduce((lengths, element) => {
        lengths[element] = element.length;
        return lengths;
    }, {"canada": 6, "New york": 8});
}

console.log(imperativeLengths(states));






















