import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LeetCode_Codewars_Tasks';

  constructor() {
    // console.log(this.CodewarsTwoSum(this.numsArr, this.target));

    console.log(this.LeetCodeArgsLength(...this.arguments));
    console.log(this.LeetCodeArgsLength(1, 2, 3))

  }

  private arguments = [null, {anyKey: 'Any value'}, 9, 'HelloWorld!'];
  private numsArr = [2, 5, 7, 9, 13];
  private target = 9;

  private CodewarsTwoSum(nums: number[], target: number): number[] | null {
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

  private LeetCodeArgsLength(...args: any[]): number {
    let argsLength = 0;

    if (args && args.length > 0) {
      argsLength = args.length;
      return argsLength;
    } else {
      return argsLength;
    }

  }
}
