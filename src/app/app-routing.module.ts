import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DETAIL, FAVORITES, MAIN } from './constants/paths';

const routes: Routes = [
  { path: MAIN, loadChildren: () => import('./components/pages/main/main.module').then(m => m.MainModule) },
  { path: `${DETAIL}/:id`, loadChildren: () => import('./components/pages/detail/detail.module').then(m => m.DetailModule) },
  { path: FAVORITES, loadChildren: () => import('./components/pages/favorites/favorites.module').then(m => m.FavoritesModule) },
  { path: '**', pathMatch: 'full', redirectTo: MAIN }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
