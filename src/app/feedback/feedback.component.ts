import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { feedback } from '../Model/feedback';
import { FeedbackService } from '../services/feedback.service';
import { ActivatedRoute,Router } from '@angular/router';
import { company } from '../Model/company';
import { data } from 'jquery';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  providers: [FeedbackService],
})
export class FeedbackComponent implements OnInit {
public userlis:any;
@Input() feedbac!:feedback;
id !:number;
companies:company =new company();
public pages!:Array<number>;
public page:number=0;
public feeds!:Array<any>;
dat:any;
private location!: Location
   constructor(private feed : FeedbackService, private router:ActivatedRoute,private rout:Router) { }
searchFeed!:feedback[];
ListFeed!:feedback[];
setPage(i: number,event:any)
  {
    
      event.preventDefault();
   
   
    this.page=i;
    this.getlist();
 
  }
  ngOnInit(): void {
     this.getlist();
     
    
    this.id=this.router.snapshot.params['id'];
    this.feed.getFeedbackByid(this.id).subscribe();
  }
  
getlist(){
 
 this.feed.getuser(this.page).subscribe(res=>{this.userlis =res
 
     this.ListFeed=res['content']
     
  this.pages=new Array(this.userlis['totalPages']);
   });
  
}
getFeedback(){
 
  this.feed.Paging(this.page).subscribe(res=>{
    this.userlis=res;

    
    this.pages=new Array(this.userlis['totalPages']);
    
 });
 }
exportPDF(id:number){
 
  this.feed.ExportPDFByid(id).subscribe(res=>{this.userlis =res });
 
}

search(query:any){
  this.ListFeed=(query)? this.ListFeed.filter(fe=>fe.content.includes(query)):this.ListFeed
  

}
deleteFeedback(id : any){
  this.feed.deleteFeed(id).subscribe(data=>{
    
     this.getlist();
  })
   
  
}
 
updateFeedback(id : any){
  this.feed.UpdateFeedback(id,this.feedbac).subscribe();
   
  
}
gotToFeedBackList(id:number){
  this.rout.navigate(['feedback-update',id]);
}
}
