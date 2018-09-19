import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LeaguesCardComponent} from '../leagues-card/leagues-card.component';
import {LeaguesComponent} from '../leagues/leagues.component';
import {LeaugeDetailComponent} from '../leagues/leauge-detail/leauge-detail.component';

const coreRoutes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: '', component: LeaguesCardComponent},
      {
        path: 'leagues', component: LeaguesComponent, children: [
          {path: 'champions-league', component: LeaugeDetailComponent}
        ]
      },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule],
})

export class CoreRoutingModule {
}
