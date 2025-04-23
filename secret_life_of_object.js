let finder = {
    find(array) {
        return array.some(v => v == this.value);
    },
        value: 5
    };
    console.log(finder.find([4, 5]));

let finder1 = {
    find(array) {
    return array.some(function(v) {
        return v == this.value; // <-- This is the key
    });
    },
    value: 5
}