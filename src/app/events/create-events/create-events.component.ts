import { Component, OnInit } from '@angular/core';
 import { calendarevent } from 'src/app/Model/calendarevent';
import { user } from 'src/app/Model/user';
import { calendar } from 'src/app/Model/calender';
import { ActivatedRoute,Router } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {
  Events :calendarevent =new  calendarevent();
  
  idd!: any;
   
  users:user =new user();
   public userlist1:any;
   msg !: string;
  constructor(private rec : ReclamationService, private router:ActivatedRoute,private rout:Router) { }

  ngOnInit(): void {
    this.getlistUser();
  }
  getlistUser(){
 
    this.rec.getListOfUser().subscribe(res=>this.userlist1=res);
   }
   onSubmit(){
     console.log(this.Events);
     
  }
  SaveReclam(){  
    //this.users.id=this.idd;
    //this.rec.createReclamation(this.idd,this.Events).subscribe(res=> {
     // this.Events=res;
      // this.rout.navigate(['/reclamations']);
      //console.log(res);
  
  //}
    //);
}

}
