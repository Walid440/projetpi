import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { ActivatedRoute,Router } from '@angular/router';
import { reclamations } from 'src/app/Model/reclamations';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public userli:any;
   reclam!:reclamations;
  id !:number;
  
  constructor(private feed : ReclamationService, private router:ActivatedRoute,private rout:Router) { }

  ngOnInit(): void {
    this.getlist();
   }
  getlist(){
 
    this.feed.getrec().subscribe(res=>{this.userli =res});
   }
   
   deleteReclamation(id : any){
     this.feed.deleteReclamation(id).subscribe(data=>{
        this.getlist();
     })
      
     
   }
   updateFeedback(id : any){
     this.feed.UpdateReclamation(id,this.reclam).subscribe();
      
     
   }
   gotToFeedBackList(id:number){
     this.rout.navigate(['reclamation-update',id]);
   }
}
