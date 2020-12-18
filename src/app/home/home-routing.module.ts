import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AccountComponent } from './account/account.component';
import { ExploreComponent } from './explore/explore.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
      children: [
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'explore',
        component: ExploreComponent
      }
  
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
