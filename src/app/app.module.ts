import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { CarComponent } from './car/car.component';
import { ChatComponent } from './chat/chat.component';
import { TripComponent } from './trip/trip.component';
import { InvitationComponent } from './invitation/invitation.component';
import { ForumComponent } from './forum/forum.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateComponent } from './feedback/update/update.component'
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './feedback/create/create.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
 
 

 import { NgChartsModule } from 'ng2-charts';
import { StatistiqueComponent } from './statistique/statistique.component';
import { ListComponent } from './reclamation/list/list.component';
import { CreateReclamationComponent } from './reclamation/create-reclamation/create-reclamation.component';
import { CalenderComponent } from './calender/calender.component';
import { ModalModule } from 'ngx-bootstrap/modal';
 import { CreateEventsComponent } from './events/create-events/create-events.component';
import { SearchCompanyComponent } from './search-Company/search-company.component';
import { UpdateReclamationComponent } from './reclamation/update-reclamation/update-reclamation.component';
const routes:Routes = [
  { path: 'cars' , component:CarComponent },
  { path: 'chat' , component:ChatComponent },
  { path: 'profile' , component:ProfileComponent },
  { path: 'trip' , component:TripComponent },
  { path: 'feedback' , component:FeedbackComponent },
  { path: 'SearchCompany' , component:SearchCompanyComponent },

  { path: 'reclamations' , component:ListComponent },
  { path: 'reclamations/:id' , component:ReclamationComponent },
  { path: 'create' , component:CreateComponent },
  { path: 'create-reclamation' , component: CreateReclamationComponent},
  { path: 'feedback-update/:id' , component:UpdateComponent },
  { path: 'reclamation-update/:id' , component:UpdateReclamationComponent },
  { path: 'forum' , component:ForumComponent },
  { path: 'invitation' , component:InvitationComponent },
  { path: 'statistique' , component:StatistiqueComponent },
  { path: 'Calendrier/:id' , component:CalenderComponent },
  { path: 'create-reclamation' , component: CreateReclamationComponent},
  { path: 'create-events' , component: CreateEventsComponent},
];
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    CarComponent,
    ChatComponent,
    TripComponent,
    InvitationComponent,
    ForumComponent,
    ProfileComponent,
    FeedbackComponent,
    UpdateComponent,
    CreateComponent,
    ReclamationComponent,
    StatistiqueComponent,
    ListComponent,
    CreateReclamationComponent,
    CalenderComponent,
    CreateEventsComponent,
    SearchCompanyComponent,
       UpdateReclamationComponent
  ],
  imports: [
    NgChartsModule,
  
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
