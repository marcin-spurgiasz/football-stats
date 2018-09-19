import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeaguesRoutingModule} from './leagues-routing.module';
import {LeaugeDetailComponent} from './leauge-detail/leauge-detail.component';
import {LeaguesCardComponent} from '../leagues-card/leagues-card.component';
import {LeagueCardComponent} from '../leagues-card/league-card/league-card.component';
import {LeaguesComponent} from './leagues.component';

@NgModule({
  declarations: [
    LeaguesCardComponent,
    LeagueCardComponent,
    LeaugeDetailComponent,
    LeaguesComponent
  ],
  imports: [
    CommonModule,
    LeaguesRoutingModule,
  ],
  exports: [
    LeaguesCardComponent,
    LeaugeDetailComponent,
  ],
})
export class LeaguesModule {
}
