class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length!==t.length){
            return false
        }
        const sSorted=s.split('').sort().join()
        const tSorted=t.split('').sort().join()


        if(sSorted===tSorted){
            return true
        }
        return false
    }
}
