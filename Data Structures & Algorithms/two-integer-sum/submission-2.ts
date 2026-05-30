class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        let A = [];
        for (let i = 0; i < nums.length; i++) {
            A.push([nums[i], i]);
        }

        A.sort((a, b) => a[0] - b[0]);
        const result=[]
        let left=0
        let right=nums.length-1
        while(left<right){
            const sum=A[left][0]+A[right][0]
            if(sum===target){
                result.push(A[left][1])
                result.push(A[right][1])
                return result
            }
            else if(sum>target){
                right--
            }else{
                left++
            }
        }
        return result
    }
}
