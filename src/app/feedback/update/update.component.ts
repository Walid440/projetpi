import { Component, OnInit } from '@angular/core';
import { feedback } from 'src/app/Model/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';
import { ActivatedRoute, Router } from '@angular/router';
import { company } from 'src/app/Model/company';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
    id!: number;
Feedback :feedback=new feedback();
public userlis:any;
companies :company =new company(); 
   constructor(private feed : FeedbackService,private router:ActivatedRoute,private rout:Router) { }
   

  ngOnInit(): void {  
    this.getlistCompany();
    this.companies={
      id:null,
name:null
      
    }
    this.id=this.router.snapshot.params['id'];
    this.feed.getFeedbackByid(this.id).subscribe(data=>{
      this.Feedback=data;
      
    
    });
    
  }
  gotToFeedBackList(){
    this.rout.navigate(['/feedback']);
  }
 updateRow(){
      this.feed.UpdateFeedback(this.id,this.Feedback).subscribe(
        data=>{
          this.gotToFeedBackList();
          
        }
      );
       
      
    }
    getlistCompany(){
 
      this.feed.getcompany().subscribe(res=>this.userlis =res);
     }
    
}
