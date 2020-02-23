import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeyComponent } from './hey/hey.component'

const routes: Routes = [
  {
    path:'hey',component:HeyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
