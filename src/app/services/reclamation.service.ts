import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { reclamations } from '../Model/reclamations';
import { task } from '../Model/task';
  
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http: HttpClient) { }
  public getuser(id:number){
    return this.http.get<any>("http://localhost:8090/SpringMVC/task/"+id);
    
  }
  public getListOfUser(){
    return this.http.get<any>("http://localhost:8090/SpringMVC/getReclbyUser");
    
  }
  public getrec(){
    return this.http.get<reclamations>(" http://localhost:8090/SpringMVC/get-all-Claim");
    
  }
   
UpdateReclamation(id:number,feed : reclamations){
   return this.http.put<reclamations>("http://localhost:8090/SpringMVC/modify-Claim-byID/"+id,feed);
  }
  deleteReclamation(id:number){
return this.http.delete<reclamations>("http://localhost:8090/SpringMVC/remove-Claim/"+id );
  }
  getReclamtionByid(id :number){
return this.http.get<reclamations>("http://localhost:8090/SpringMVC/getRecByid/"+id);
  }
  createReclamation(id :number,rec : reclamations){
    return this.http.post<reclamations>("http://localhost:8090/SpringMVC/addClaim/"+id,rec);

  }
}   
