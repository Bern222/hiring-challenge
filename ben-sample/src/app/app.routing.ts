import { Routes, RouterModule }   from '@angular/router';
import { StartComponent }  from './start.component';
import { GameComponent }  from './game.component';
import { EndComponent }  from './end.component';
import { AppComponent }  from './app.component';
import { Score }  from './score';


const appRoutes: Routes = [
  
  { path: '', component: StartComponent },
  { path: 'game', component: GameComponent, data: Score},
  { path: 'end', component: EndComponent, data: Score},
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);