const removeFromArray = function(arr, ...elementsToRemove) {
    for(let i = 0 ; i < arr.length ; i++) {
        if(elementsToRemove.includes(arr[i])){
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
};

//function remove(arr, ...elementsToRemove) {
//    return arr.filter((item) => !elementsToRemove.includes(item));
//}

// Do not edit below this line
module.exports = removeFromArray;
