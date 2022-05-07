import { Component, OnInit } from '@angular/core';
import { feedback } from 'src/app/Model/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';
import { ActivatedRoute, Router } from '@angular/router';
import { company } from 'src/app/Model/company';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
FeedBack :feedback =new feedback();
  
id!: number;
 name!:any
companies :company =new company(); 
 public userlist:any;
 msg !: string;
  constructor(private feed : FeedbackService ,private rout:Router) { }

  ngOnInit(): void {
    this.getlistCompany();
    this.companies={
      id:null,
      name:null
      
      
    }
  }
SaveFeed(idd:number){

  this.feed.createFeedback(this.id,this.FeedBack).subscribe(data=>{
    this.rout.navigate(['/feedback']);
        this.FeedBack=data;
        this.msg = " ajouté avec succès"
  });

   
    
    
  
}
gotToFeedBackList(id:number){
  this.rout.navigate(['/create',id]);
  console.log(this.id);
}
onSubmit(){
  console.log(this.FeedBack);
   
}
getlistCompany(){
 
  this.feed.getcompany().subscribe(res=>this.userlist =res);
 }
}
