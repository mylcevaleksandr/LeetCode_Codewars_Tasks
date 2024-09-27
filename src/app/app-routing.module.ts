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
      {path: '', component: HomeComponent},
      {path: 'leetcode', component: LeetcodeComponent},
      {path: 'codewars', component: CodewarsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
