import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Score } from './score';
import { ScoreService } from './score.service';
import { routing, appRoutingProviders } from './app.routing';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  providers: [ScoreService],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  //scores: FirebaseListObservable<any[]>;
  
  constructor(private scoreService: ScoreService) {
    //this.scoreService.getScores().then(scores => this.scores = scores);
  }
}
