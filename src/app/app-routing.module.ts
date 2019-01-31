import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent, MyTweetsPagePageComponent} from './pages';

const routes: Routes = [
  {path: 'my-tweets', component: MyTweetsPagePageComponent},
  {path: '', component: HomePageComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
