function twoSum(nums, target) {
  
    const numIndices = new Map();
      
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numIndices.has(complement)) { 
            return [numIndices.get(complement), i];
        }
        numIndices.set(nums[i], i);
    }
    return [];
}


const nums = [3, 2, 4];
const target = 6;
console.log(twoSum(nums, target));  //En tapant "node main.js" dans le terminal, on aura un Output du type : [1, 2]
