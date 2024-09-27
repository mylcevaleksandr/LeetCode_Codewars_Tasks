import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {LeetcodeComponent} from './leetcode/leetcode.component';
import {CodewarsComponent} from './codewars/codewars.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    HomeComponent,
    LeetcodeComponent,
    CodewarsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ViewsModule {
}
