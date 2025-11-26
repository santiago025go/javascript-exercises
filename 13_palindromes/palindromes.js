const palindromes = function (str) {
    let permitedCharacters = 'abcdefghijklmnopqrstuvwxyz1234567890';
    str = str.toLowerCase().split('').filter((item) => permitedCharacters.includes(item)).join('');
    let strReversed = str.split('').reverse().join('');
    return str === strReversed;
};

// Do not edit below this line
module.exports = palindromes;
