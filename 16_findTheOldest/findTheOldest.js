const findTheOldest = function(people) {
    people.sort((a, b) => (('yearOfDeath' in b ? b.yearOfDeath : 2025) - b.yearOfBirth) - (('yearOfDeath' in a ? a.yearOfDeath : 2025) - a.yearOfBirth));
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
