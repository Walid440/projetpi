import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { reclamations } from 'src/app/Model/reclamations';
import { user } from 'src/app/Model/user';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.css']
})
export class UpdateReclamationComponent implements OnInit {
  id!: number;
Reclam :reclamations=new reclamations();
public userlis:any;
user :user =new user(); 
  constructor(private rec : ReclamationService,private router:ActivatedRoute,private rout:Router) { }

  ngOnInit(): void {
    this.getlistUsers();
    this.user={
      id!:null,
  username!:null,
  
      
    }
    this.id=this.router.snapshot.params['id'];
    this.rec.getReclamtionByid(this.id).subscribe(data=>{
      this.Reclam=data;
      
    
    });
  }
  getlistUsers(){
     this.rec.getListOfUser().subscribe(res=>{this.userlis =res
    
   
    });
   }

   gotToFeedBackList(){
    this.rout.navigate(['/reclamations']);
  }
 updateRow(){
      this.rec.UpdateReclamation(this.id,this.Reclam).subscribe(
        data=>{
          this.gotToFeedBackList();
          
        }
      );
       
      
    }
}
