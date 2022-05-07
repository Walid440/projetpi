import { Component, OnInit,ViewChild  } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // utilisé pour vérifier de type 'dayGridWeek', 'timeGridDay', 'listWeek'
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { FeedbackService } from '../services/feedback.service';
import { user } from '../Model/user';
import { calendar } from '../Model/calender';
import { Router,ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  modalRef?:BsModalRef;
  title:any;
  calendarOptions!: CalendarOptions ;
  Cal :calendar =new calendar();
  
  
  public dat : any=[];
  
  config={
    animated:true
  };
  @ViewChild('template') template!:string;
start :any=[];
id!:number;
  constructor(private feed : FeedbackService,private modalService:BsModalService,private Activate:ActivatedRoute,private router:Router,private rec : FeedbackService) { }

  ngOnInit(): void {
    this.dat={
      id:null,
      title:null,
      eventDateTime:null
     
    }
    this.id=this.Activate.snapshot.params['id'];
    this.feed.getCalendar(this.id).subscribe();
    this.getlistUser(this.id);
  }
  titreEven:any=[];
  evenDAte:any=[];
  handeleDateClick(arg:any)
  {  console.log(arg.event);

 this.title=arg.event._def.title;
  this.modalRef=this.modalService.show(this.template,this.config);
  this.start=arg.event.start;
 
  }
  getlistUser( id:number){
 
    this.rec.getCalendar(id).subscribe(res=>{this.dat =res;
    this.titreEven =res['events'].map ((x: { title: any; })=>x.title);
    this.evenDAte =res['events'].map((x: { eventDateTime: any; })=>x.eventDateTime);
    
    console.log(res);
    this.calendarOptions = {
    initialView: 'dayGridMonth',
    events:this.dat,
    eventClick:this.handeleDateClick.bind(this),
  };
 
    });
   
   }
}
