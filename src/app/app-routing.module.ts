import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {HomeComponent} from "./views/home/home.component";
import {LeetcodeComponent} from "./views/leetcode/leetcode.component";
import {CodewarsComponent} from "./views/codewars/codewars.component";

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'LeetCode_Codewars_Tasks/home', component: HomeComponent},
      {path: 'LeetCode_Codewars_Tasks/leetcode', component: LeetcodeComponent},
      {path: 'LeetCode_Codewars_Tasks/codewars', component: CodewarsComponent},
      {path: '', redirectTo: 'LeetCode_Codewars_Tasks/home', pathMatch: 'full'},
      {path: '**', redirectTo: 'LeetCode_Codewars_Tasks/home'},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
