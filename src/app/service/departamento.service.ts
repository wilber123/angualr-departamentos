import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamento } from '../models/departamento';
import { Municipios } from '../models/municipios';
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private BASE_URL_DEP="https://pruebasasivamosffiebackend.ivolucion.com/api/common/ListDepartamento";
  private BASE_URL_MUN="https://pruebasasivamosffiebackend.ivolucion.com/api/common/ListMunicipiosByIdDepartamento?idDepartamento=";

  selectedDepartamento: Departamento={
    localizacionId:0,
    descripcion:''   
  };

  selectedMunicipio: Municipios={
    localizacionId:0,
    descripcion:''   
  };
  
  departamento!: Departamento[]; 
  cacheForecasts!: Departamento[];
  municipios!: Municipios[];
  
  constructor(private http:HttpClient) { }
 
 
  
  getDepartamentos() {
    return this.http.get<Departamento[]>(`${this.BASE_URL_DEP}`);
  }

  getDepartamento(localizacionId: number) {
    return this.http.get<Departamento[]>(`${this.BASE_URL_DEP}/${localizacionId}`);
  }

  getMunicipios(idDepartamento:number) {   
    return this.http.get<Municipios[]>(`${this.BASE_URL_MUN+idDepartamento}`);
   
  }
 
  
  
}
