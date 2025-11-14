const sumAll = function(majorNumber, minorNumber) {
   if(!Number.isInteger(majorNumber) || !(majorNumber >= 0) || !Number.isInteger(minorNumber) || !(minorNumber >= 0)){
        return 'ERROR';
   }
   let sum = 0, temp;
   if(minorNumber > majorNumber){
    temp = majorNumber;
    majorNumber = minorNumber;
    minorNumber = temp;
   }
   for(let i = minorNumber ; i <= majorNumber ; i++){
    sum += i;
   }
   return sum;
};

// Do not edit below this line
module.exports = sumAll;
