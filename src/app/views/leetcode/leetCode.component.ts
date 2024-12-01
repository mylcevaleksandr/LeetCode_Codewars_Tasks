import {Component} from '@angular/core';

@Component({
  selector: 'app-leetcode',
  templateUrl: './leetCode.component.html',
  styleUrls: ['./leetCode.component.scss']
})
export class LeetCodeComponent {

  public cardObjects = [
    {
      title: 'Create Hello World Function',
      description: 'Write a function createHelloWorld. It should return a new function that always returns "Hello World".',
      instructions: '',
      btnInstructions: 'Run',
      functionName: "runCreateHelloWorld",
      link: 'https://github.com/mylcevaleksandr/LeetCode_Codewars_Tasks/blob/master/src/app/shared/utils/leetCodeUtils/createHelloWorld.util.ts'
    },
    {
      title: 'Clear Parentheses',
      description: 'Given a string:"example(unwanted thing)example".Your task is to remove everything inside the parentheses as well as the parentheses themselves.The example above would return: "exampleexample"',
      instructions: 'Enter any string and include some characters in (parentheses).',
      input: true,
      btnInstructions: 'Run',
      functionName: "clearParentheses",
    },
    {
      title: "Shortest Palindrome",
      description: 'You are given a string s. You can convert s to a palindrome adding characters in front of it. Return the shortest palindrome you can find by performing this transformation.',
      instructions: 'Type in any word to see its palindrome',
      input: true,
      btnInstructions: 'Run',
      functionName: "generatePalindrome",
      link: "https://github.com/mylcevaleksandr/LeetCode_Codewars_Tasks/blob/master/src/app/shared/utils/leetCodeUtils/shortestPalindrome.util.ts"
    },
    {title: 'Card 1', description: 'Description 1', instructions: 'Instructions 1', btnInstructions: 'Run 1'},
    {title: 'Card 1', description: 'Description 1', instructions: 'Instructions 1', btnInstructions: 'Run 1'},
    {title: 'Card 1', description: 'Description 1', instructions: 'Instructions 1', btnInstructions: 'Run 1'},
    {title: 'Card 1', description: 'Description 1', instructions: 'Instructions 1', btnInstructions: 'Run 1'},
    {title: 'Card 1', description: 'Description 1', instructions: 'Instructions 1', btnInstructions: 'Run 1'},
  ];
}
