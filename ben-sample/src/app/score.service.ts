import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
//import { Score } from './score';

@Injectable()
export class ScoreService {

    scores: FirebaseListObservable<any[]>;
    af:AngularFire;
    //returnScores: Array<Score> = new Array<Score>();
    
    constructor ( aft: AngularFire){
      this.af = aft;
    } 

    getScores(): Promise<FirebaseListObservable<any[]>> {
      this.scores = this.af.database.list('scores');

      return Promise.resolve(this.scores);
      /*
      this.scores.forEach(i=>i.forEach(function(score){
        console.log(score.name);
        console.log(score.score);
        let curscore: Score = new Score();
        curscore.name = score.name;
        curscore.score = score.score;
        
        returnScores.push(curscore); // Lost scope
        }));
        //this.atemp.push({"name":"test","score":100});

      return Promise.resolve(this.returnScores);
      */
    }
}