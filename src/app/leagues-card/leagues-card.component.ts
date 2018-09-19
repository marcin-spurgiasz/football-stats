import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-leagues-card',
  templateUrl: './leagues-card.component.html',
  styleUrls: ['./leagues-card.component.scss'],
})
export class LeaguesCardComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }


  onLeagueSelect() {
    console.log('ok');
    const url = 'http://api.football-data.org/v1/competitions/467';
    const headers = new HttpHeaders()
    // .set('Content-Type', 'application/json; charset=utf-8')
      .set('X-Auth-Token', 'a8f74313d3d34263b0d7b46b80cd5a74');

    this.http.get(url, {headers}).subscribe(result => console.log(result));

  }

}
