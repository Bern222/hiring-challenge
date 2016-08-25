import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Score } from './score';

@Component({
  selector: 'start',
  //providers: [ScoreService],
  templateUrl: 'app/start.component.html',
  styleUrls: ['app/start.component.css']
})

export class StartComponent {
  curscore = new Score();
  next = false;

  onNext() { this.next = true; }

  gotoGame() {
    this.curscore.score =0;
    this.router.navigate(['/game', this.curscore]);
  }

  constructor(private router: Router, private route: ActivatedRoute) {
    
  }
}
