import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'details', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'details/:id', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'version1', loadChildren: './pages/version1/version1.module#Version1PageModule' },
  { path: 'todo-home', loadChildren: './pages/todo-home/todo-home.module#TodoHomePageModule' },
  { path: 'remboursement-home', loadChildren: './pages/remboursement-home/remboursement-home.module#RemboursementHomePageModule' },
  { path: 'jeux-home', loadChildren: './pages/jeux-home/jeux-home.module#JeuxHomePageModule' },
  { path: 'jeux-picolo', loadChildren: './pages/jeux-picolo/jeux-picolo.module#JeuxPicoloPageModule' },
  { path: 'jeux-jdr', loadChildren: './pages/jeux-jdr/jeux-jdr.module#JeuxJdrPageModule' },
  { path: 'jeux-jdr/:id', loadChildren: './pages/jeux-jdr/jeux-jdr.module#JeuxJdrPageModule' },
  { path: 'jeux-jdr-home', loadChildren: './pages/jeux-jdr-home/jeux-jdr-home.module#JeuxJdrHomePageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
