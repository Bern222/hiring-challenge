import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SaveScoreService } from './save-score.service';
import { Score } from './score';

@Component({
  selector: 'game',
  providers: [SaveScoreService],
  templateUrl: 'app/game.component.html',
  styleUrls: ['app/game.component.css']
})

export class GameComponent implements OnInit, OnDestroy {
  curscore: Score = new Score();
  scoreTxt: string = "Score";
  showScoreTxt = false;
  private sub: Subscription;
  private sTimeout: number;
  private remainTime: number = 20;
  
  
  constructor(private route: ActivatedRoute, private router: Router, private saveScoreService: SaveScoreService) {
    this.sTimeout = setInterval(() => this.updateTime(), 1000);
  }

  updateTime(){
    this.remainTime--;
    if(this.remainTime == 0){
      clearInterval(this.sTimeout);
      this.gameFinished();
    }
  }

  ngOnInit() {
      this.sub = this.route
        .params
        .subscribe(params => {
          this.curscore.name = params['name'];
          this.curscore.score = params['score'];
        });
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }

    addToScore() {
      this.showScoreTxt = true;
      this.curscore.score++;
    }

    gameFinished(){
      this.saveScoreService.saveScore(this.curscore);
      
      this.router.navigate(['/end', this.curscore]);
    }

}
