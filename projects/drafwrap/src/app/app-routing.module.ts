import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'drafity',
    loadChildren: () => import('../../../cube-drafity/src/lib/drafity-view/drafity-view.module').then(m => m.DrafityViewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
