import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'chart.js';
import { CountType } from '../Model/CountType';
 
import { task } from '../Model/task';
import { ReclamationService } from '../services/reclamation.service';
import { ActivatedRoute, Router } from '@angular/router';
 import { Form } from '@angular/forms';
import { reclamations } from '../Model/reclamations';
import { user } from '../Model/user';
@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
 chart: any = [];
 myForm !: Form;
 id !:number;
 public dat : any;
 Reclamation :reclamations=new reclamations();
 Task :task=new task();  
 CounType :CountType=new CountType();
User :user =new user();
  constructor(private rec : ReclamationService,private router:ActivatedRoute,private rout:Router) { Chart.register(...registerables);}
  
  
  ngOnInit(): void {
    this.chart={
    count:null,
    type:null,

    
  }

  this.id=this.router.snapshot.params['id'];
  this.rec.getuser(this.id).subscribe();
   
  
    this.getlist(this.id);
 this.getlistUser();    
 
    
  }
  getlist(id:number){
 let we=[];
      this.rec.getuser(id).subscribe(res=>{ this.dat=res
     let s=res.map((x: { count: any; })=>x.count)
    
     let y=res.map((x: { type: any; })=>x.type)
     console.log(res);
        this.chart = new Chart("canvas", {
          
          type: 'bar',
          data: {
            labels: y,
            datasets: [
              {
                data:s,
                borderColor: '#3e95cd',
                 label: "Statistique",
                backgroundColor: 'rgba(93, 175, 89, 0.1)',
                borderWidth: 1,
              },
            ],
          },
        });
      });
         
     }
     getlistUser( ){
 
      this.rec.getListOfUser().subscribe(res=>this.dat =res);
     }
     gotToFeedBackList(){
      this.rout.navigate(['/reclamations']);
    }
}
