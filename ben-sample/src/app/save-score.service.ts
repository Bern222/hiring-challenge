import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Score } from './score';

@Injectable()
export class SaveScoreService {

    scores: FirebaseListObservable<any[]>;
    af:AngularFire;
    //returnScores: Array<Score> = new Array<Score>();
    
    constructor ( aft: AngularFire){
      this.af = aft;
    } 

    saveScore(curscore: Score): Boolean {
      //this.scores = this.af.database.;
        const scores = this.af.database.list('scores');
        scores.push(curscore);
        return true;
    }
      
}
