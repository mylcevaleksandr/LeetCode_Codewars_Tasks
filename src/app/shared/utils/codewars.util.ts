export class CodewarsUtil {
  static twoSum(nums: number[], target: number): number[] | null {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complement: number = target - nums[i];
      if (numMap.has(complement)) {
        return [numMap.get(complement), i];
      }

      numMap.set(nums[i], i);
    }

    return null;
  }

}
