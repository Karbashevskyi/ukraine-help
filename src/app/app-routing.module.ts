import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/client/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'feed',
    loadChildren: () => import('./pages/client/feed/feed.module').then(m => m.FeedPageModule)
  },
  {
    path: 'target/:target',
    loadChildren: () => import('./pages/client/target/target.module').then(m => m.TargetPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./pages/client/form/form.module').then(m => m.FormPageModule)
  },
  {
    path: 'organization',
    loadChildren: () => import('./pages/client/organization/organization.module').then(m => m.OrganizationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
