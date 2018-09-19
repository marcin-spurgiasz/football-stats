import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {LeaguesComponent} from './leagues/leagues.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  // {path: 'home', component: HomeComponent},
  {path: 'leagues', component: LeaguesComponent},
  {path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
