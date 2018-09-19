import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-league',
  templateUrl: './league-card.component.html',
  styleUrls: ['./league-card.component.scss']
})
export class LeagueCardComponent implements OnInit {

  @Input('leagueName')
  leagueName: string;

  @Input('leagueLogo')
  leagueLogo: string;

  @Input('leagueLink')
  leagueLink: string;

  constructor() {
  }

  ngOnInit() {
  }
}
