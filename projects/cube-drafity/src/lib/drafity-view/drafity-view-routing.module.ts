import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {InnerViewComponent} from './inner-view/inner-view.component';


const routes: Routes = [{
  path: 'start',
  component: MainComponent,
  children: [
    {
      path: 'inner',
      component: InnerViewComponent,
      outlet: 'drafityout'
    }
  ]
}
,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrafityViewRoutingModule {
}

