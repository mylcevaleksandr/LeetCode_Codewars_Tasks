import {Component, Input, OnInit} from '@angular/core';
import {createHelloWorld} from "../utils/leetCodeUtils/createHelloWorld.util";
import {shortestPalindrome} from "../utils/leetCodeUtils/shortestPalindrome.util";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardData: any;
  public instructions: string = '';
  public btnInstructions: string = 'Run';
  public userInput: string = '';
  public result: string = 'click Run to see the result here!';
  public textColor: string = '#000000';

  constructor() {
  }

  ngOnInit() {
    this.instructions = this.cardData.instructions;
    this.btnInstructions = this.cardData.btnInstructions;
  }

  public runUtilFunction(functionName: string) {
    if (functionName === "runCreateHelloWorld") {
      this.runCreateHelloWorld();
    }
    if (functionName === "generatePalindrome") {
      this.result = shortestPalindrome(this.userInput);
      this.userInput=''
    }
  }


  public runCreateHelloWorld(): void {
    const helloFunc = createHelloWorld();
    const {color, btnInstructions, result} = helloFunc('ff');
    this.textColor = color;
    this.btnInstructions = btnInstructions;
    this.result = result;
  }
}
