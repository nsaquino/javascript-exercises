const removeFromArray = function(array, ...toDelete) {
    for (const arg of toDelete) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === arg){
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
