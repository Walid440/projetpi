import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'chart.js';
import { CountType } from '../Model/CountType';
import { reclamations } from '../Model/reclamations';
import { task } from '../Model/task';
import { ReclamationService } from '../services/reclamation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../Model/user';
import { Form } from '@angular/forms';
@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  chart: any = [];
  myForm !: Form;
  id !:number;
  public dat : any;
  Reclamation :reclamations=new reclamations();
  Task :task=new task();  
  CounType :CountType=new CountType();
 User :user =new user();
  constructor(private rec : ReclamationService,private router:ActivatedRoute,private rout:Router) { }

  ngOnInit(): void {
    this.getlistUser();
    this.getlist(this.id);
   
  }
  getlistUser( ){
 
    this.rec.getListOfUser().subscribe(res=>this.dat =res);
   
   }
   gotToFeedBackList(id:number){
    this.rout.navigate(['reclamations',id]);
  }
  getlist(id:number){
          this.rec.getuser(id).subscribe(res=>{ this.dat=res});
            this.gotToFeedBackList(this.id);
        }
      }
