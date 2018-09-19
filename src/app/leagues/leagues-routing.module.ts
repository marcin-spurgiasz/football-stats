import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LeaugeDetailComponent} from './leauge-detail/leauge-detail.component';

const leaguesRoutes: Routes = [
  {
    path: '', children: [
      {path: 'champions-league', component: LeaugeDetailComponent}]
  },
];

@NgModule({
  imports: [RouterModule.forChild(leaguesRoutes)],
  exports: [RouterModule],
})

export class LeaguesRoutingModule {
}
