import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { CelluleModule } from './cellule/cellule.module'
import { ParticipantModule } from './participant/participant.module'

//  material modules
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';


import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component'

import { ApiService } from './services/api.service'
import { LoginService } from './services/login.service'
import { UserService } from './services/user.service'

import 'hammerjs';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './effects/login.effects';
import { GetUserEffects } from './effects/get-user.effects';
import { LoadCelluleEffects } from './effects/load-cellule.effects';
import { FeatureCelluleEffects } from './effects/feature-cellule.effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import { LoadParticipantEffects } from './effects/load-participant.effects';


export const firebaseConfig = {
    apiKey: "AIzaSyA74AWDb4rigIYoFg1LX7CYliUWGcgvyg8",
    authDomain: "aecpb-3a359.firebaseapp.com",
    databaseURL: "https://aecpb-3a359.firebaseio.com",
    projectId: "aecpb-3a359",
    storageBucket: "aecpb-3a359.appspot.com",
    messagingSenderId: "620701480121"
  };

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,

    UserComponent,
    HomeComponent,

    HeaderComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MatExpansionModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    CelluleModule,
    ParticipantModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MatListModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([LoginEffects]),
    EffectsModule.forFeature([GetUserEffects, LoadCelluleEffects, FeatureCelluleEffects, LoadParticipantEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'})
    // CelluleRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
