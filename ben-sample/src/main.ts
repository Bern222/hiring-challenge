//import { bootstrap } from '@angular/platform-browser-dynamic';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import {MdButtonToggleModule} from '@angular2-material/button-toggle/button-toggle';
import {MdButtonModule} from '@angular2-material/button/button';
import {MdCheckboxModule} from '@angular2-material/checkbox/checkbox';
import {MdRadioModule} from '@angular2-material/radio/radio';
import {MdSlideToggleModule} from '@angular2-material/slide-toggle/slide-toggle';
import {MdSliderModule} from '@angular2-material/slider/slider';
import {MdSidenavModule} from '@angular2-material/sidenav/sidenav';
import {MdListModule} from '@angular2-material/list/list';
import {MdGridListModule} from '@angular2-material/grid-list/grid-list';
import {MdCardModule} from '@angular2-material/card/card';
import {MdIconModule} from '@angular2-material/icon/icon';
import {MdProgressCircleModule} from '@angular2-material/progress-circle/progress-circle';
import {MdProgressBarModule} from '@angular2-material/progress-bar/progress-bar';
import {MdInputModule} from '@angular2-material/input/input';
import {MdTabsModule} from '@angular2-material/tabs/tabs';
import {MdToolbarModule} from '@angular2-material/toolbar/toolbar';
import {MdTooltipModule} from '@angular2-material/tooltip/tooltip';
import {MdRippleModule} from '@angular2-material/core/ripple/ripple';
import {PortalModule} from '@angular2-material/core/portal/portal-directives';
import {OverlayModule} from '@angular2-material/core/overlay/overlay-directives';
import {MdMenuModule} from '@angular2-material/menu/menu';
import {RtlModule} from '@angular2-material/core/rtl/dir';

import { AppComponent, environment } from './app/';
import { AngularFireModule } from 'angularfire2';
import { routing, appRoutingProviders } from './app/app.routing';
import { StartComponent } from './app/start.component';
import { GameComponent } from './app/game.component';
import { EndComponent } from './app/end.component';
import { FormsModule }   from '@angular/forms';



export const firebaseConfig = {
    apiKey: "AIzaSyA_WzHArLI4eoEbbaSmDw54YuuwKLDfNGI",
    authDomain: "gbtm-ce6ba.firebaseapp.com",
    databaseURL: "https://gbtm-ce6ba.firebaseio.com",
    storageBucket: "",
};



@NgModule({
  imports: [
    BrowserModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressCircleModule,
    MdRadioModule,
    MdRippleModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    OverlayModule,
    PortalModule,
    RtlModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing,
    FormsModule
  ],
  declarations: [AppComponent, StartComponent, EndComponent, GameComponent],
  providers: [appRoutingProviders],
  entryComponents: [AppComponent],
})


export class GBTMAppModule {

  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(AppComponent);
  }
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(GBTMAppModule);


//if (environment.production) {
//  enableProdMode();
//}

//bootstrap(AppComponent);
