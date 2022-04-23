//make sure that what we received is usable for us. turn them into array. it was either an object or an array
const standardization = function (collection) {
    return ((collection instanceof Array) ? collection.slice() : Object.values(collection))
}

// const standardizedCollection = standardization(collection)

// const standardization = function (collection){
//if(collection instanceof Object){
//return Object.values(collection)
//} return collection
//}

const myEach = function (collection, callback) {
    //iterating over array (collection)
    const standardizedCollection = standardization(collection)
    for (let element of standardizedCollection) {
        callback(element)
    }
    // for (let i = 0; i < standardizedCollection.length; i++) {
    //     callback(standardizedCollection[i])
    // }
    return collection
    //return original collection
}

//created newArray variable that is an empty array. because we need to return the new array
//loop over our standardizedCollection array and pushed the callback return values into our newArray
//return newArray without modifying 
const myMap = function (collection, callback) {
    const standardizedCollection = standardization(collection)
    //create new array
    const newArray = []
    //loop
    for (let element of standardizedCollection) {
        newArray.push(callback(element))
    }
    return newArray
}

const myReduce = function (collection, callback, acc) {
    //making sure collection is a variable
    const standardizedCollection = standardization(collection)
    //make a copy so we don't modify the original array
    let copy = [...standardizedCollection]
    acc = acc || copy.shift();
    //loop over standardizedCollection
    for (let accessor in copy) {
        acc = callback(acc, copy[accessor], copy)
    }
    return acc
}

const myFind = function (collection, callback) {
    //make sure collection is a variable
    const standardizedCollection = standardization(collection)
    //loop through each value in collection and return the first one that passes the callback (truth test)
    for (let accessor in standardizedCollection) {
        let element = standardizedCollection[accessor]
        if (callback(element)) {
            return element
        }
    }
}

const myFilter = function (collection, callback) {
    //make sure collection is a variable
    const standardizedCollection = standardization(collection)
    //if no matching values are found, it returns an empty array
    const emptyArray = []
    //loop through each value in collection and returns the array of all the values that pass the callback.
    for (let accessor in standardizedCollection) {
        let element = standardizedCollection[accessor]
        if (callback(element)) {
            emptyArray.push(element)
        }
    }
    return emptyArray;
}

const mySize = function (collection) {
    //make sure collection is a variable
    const standardizedCollection = standardization(collection)
    //return the number of values in the collection
    const numberOfValues = standardizedCollection.length;
    return numberOfValues
}

const myFirst = function (collection, n = 1) {
    const standardizedCollection = standardization(collection)
    let count = 1;
    let array = [];
    // const nthOfArray = standardizedCollection.slice(0, n)
    for (let accessor in standardizedCollection) {
        if (count <= n) {
            array.push(standardizedCollection[accessor]);
            count++
        }
    }
    return array.length > 1 ? array : array[0]
}

const myLast = function (collection, n = 1) {
    const standardizedCollection = standardization(collection)
    let startingIndex = standardizedCollection.length - n;
    return n > 1 ? standardizedCollection.slice(startingIndex, standardizedCollection.length) : standardizedCollection[startingIndex]
}

const myKeys = function (collection) {
    // const standardizedCollection = standardization(collection)
    const newArray = Object.getOwnPropertyNames(collection)
    // console.log(newArray)
    return newArray
}

const myValues = function (collection) {
    const newArray = Object.values(collection)
    return newArray
}