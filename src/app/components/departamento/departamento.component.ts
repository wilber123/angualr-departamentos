import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from 'src/app/service/departamento.service';
import { ActivatedRoute } from '@angular/router';

import { Departamento } from 'src/app/models/departamento';
import { Municipios } from 'src/app/models/municipios';
import {Router} from '@angular/router';


@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {
  
  idDepartamento!:string;
  selectedDevice:any;
  event:any;
  
  constructor(public departamentoService:DepartamentoService) { }
  
  ngOnInit(): void {      
 
    this.getDepartamento();    
    
  } 
  

getDepartamento(){
  this.departamentoService.getDepartamentos().subscribe(
     (res)=> {
      this.departamentoService.departamento= res;      
      console.log(res);
     },
     (err)=> console.error(err)
   );

  
 }

 getMunicipio(idDepartamento:number){
  this.departamentoService.getMunicipios(idDepartamento).subscribe(
    (res)=> {
     this.departamentoService.municipios= res;
    
     
     console.log(res);
    },
    (err)=> console.error(err)
  );

}
onChange(event: any): void {  
  console.log(event);
 this.getMunicipio(event);
 

 
  }
  
}




