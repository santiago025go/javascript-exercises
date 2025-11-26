const fibonacci = function(position) {
    position = Number(position);
    if(position === NaN || position < 0) return 'OOPS';
    let secuence = [0, 1];
    for(let i = 2; i <= position ; i++){
        secuence[i] = secuence[i - 2] + secuence[i -1];
    }
    return secuence[position];
};

// Do not edit below this line
module.exports = fibonacci;
