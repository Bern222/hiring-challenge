import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ScoreService } from './score.service';
import { routing, appRoutingProviders } from './app.routing';
import { Score } from './score';

@Component({
  selector: 'end',
  providers: [ScoreService],
  templateUrl: 'app/end.component.html',
  styleUrls: ['app/end.component.css']
})

export class EndComponent implements OnInit, OnDestroy {
  scores: FirebaseListObservable<any[]>;

  constructor(private scoreService: ScoreService, private router: Router) {
    this.scoreService.getScores().then(scores => this.scores = scores);
  }

  startAgain(){
    this.router.navigate(['/start']);
  }

  ngOnInit() {
      
  }

  ngOnDestroy() {
     
  }
}
