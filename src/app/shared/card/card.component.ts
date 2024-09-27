import {Component} from '@angular/core';
import {CodewarsUtil} from "../utils/codewars.util";
import {LeetcodeUtil} from "../utils/leetcode.util";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor() {
    const length = LeetcodeUtil.ArgsLength(1,2,3)
    const lengthTwo = LeetcodeUtil.ArgsLength(66,6)
    console.log(length);
    console.log(lengthTwo);
    const sum = CodewarsUtil.twoSum([1, 2, 3, 4, 5, 6, 7, 8,], 6);
    console.log(sum);
  }
}
