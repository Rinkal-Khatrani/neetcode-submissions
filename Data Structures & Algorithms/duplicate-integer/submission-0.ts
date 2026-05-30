class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        for (let i = 0; i < nums.length; i++) {
            let temp = nums[i];
            for (let j = i + 1; j < nums.length; j++) {
                if (temp === nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }
}
