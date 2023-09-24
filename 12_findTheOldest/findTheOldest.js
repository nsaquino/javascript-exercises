const findTheOldest = function (obj) {
    const sorted = obj.sort((lastOne, nextOne) => {
        let lastOneComparisonYear;
        let nextOneComparisonYear;
        
        if (!lastOne.yearOfDeath) {
            lastOneComparisonYear = (new Date()).getFullYear();
        } else {
            lastOneComparisonYear = lastOne.yearOfDeath;
        }

        if (!nextOne.yearOfDeath) {
            nextOneComparisonYear = (new Date()).getFullYear();
        } else {
            nextOneComparisonYear = nextOne.yearOfDeath;
        }

        /* console.log(lastOne);
        console.log(nextOne); */

        ageLast = lastOneComparisonYear - lastOne.yearOfBirth;
        ageNext = nextOneComparisonYear - nextOne.yearOfBirth;

        return (ageLast > ageNext) ? -1 : 1;
    });

    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
