import { Component, OnInit } from '@angular/core';
import { reclamations } from 'src/app/Model/reclamations'; 
import { ReclamationService } from 'src/app/services/reclamation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { company } from 'src/app/Model/company';
import { user } from 'src/app/Model/user';
 
 @Component({
  selector: 'app-create-reclamation',
  templateUrl: './create-reclamation.component.html',
  styleUrls: ['./create-reclamation.component.css']
})
export class CreateReclamationComponent implements OnInit {

  constructor( private rec : ReclamationService, private router:ActivatedRoute,private rout:Router) { }
  Reclamation :reclamations =new reclamations();
  
  idd!: any;
   
  users:user =new user();
   public userlist1:any;
   msg !: string;
  ngOnInit(): void {
    this.getlistUser();
     
    JSON.stringify(this.idd);
  }
  SaveReclam(){  
    this.users.id=this.idd;
    this.rec.createReclamation(this.idd,this.Reclamation).subscribe(res=> {
      this.Reclamation=res;
       this.rout.navigate(['/reclamations']);
      console.log(res);
  
    });
}
getlistUser(){
 
  this.rec.getListOfUser().subscribe(res=>this.userlist1=res);
 }
 onSubmit(){
   console.log(this.Reclamation);
   
}
 
}
