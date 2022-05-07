import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../services/feedback.service';
 @Component({
  selector: 'app-search-company',
  templateUrl: './search-company.component.html',
  styleUrls: ['./search-company.component.css']
})
export class SearchCompanyComponent implements OnInit {
  public data : any;
  idCom !:number;

  constructor(private feed : FeedbackService,private router:ActivatedRoute,private rout:Router) { }

  ngOnInit(): void {
    this.getlist();
   }
  getlist(){
     
         this.feed.getallCalendar().subscribe(res=>{ this.data=res;
        
        
        });
        
        
      } gotToFeedBackList(id:number){
        this.rout.navigate(['Calendrier',this.idCom]);
      }

      getCompany(id:number){
        this.feed.getCalendar(id).subscribe(res=>{ this.data=res});
          this.gotToFeedBackList(this.idCom);
      }
    
     
}
