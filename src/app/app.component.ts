import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LeetCode_Codewars_Tasks';

  constructor() {
    console.log(this.twoSum(this.numsArr, this.target));
  }

  private numsArr = [2, 5, 7, 9, 13];
  private target = 9;

  private twoSum(nums: number[], target: number): number[] | null {
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
