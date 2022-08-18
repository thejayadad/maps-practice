



let triple = function(nums) {
    let sum = [];
    nums.map((num) => {
        sum.push(num * 3);
    })
    document.write(`[ ${sum}]`)

    return sum
};

console.log(triple([2, 7, 4])); 
console.log(triple([-5, 10, 0, 11])); 