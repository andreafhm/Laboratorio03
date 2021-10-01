import { Component } from '@angular/core';
import { Paciente } from '../model';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  pacientes: Paciente[] = [];

  newPaciente: Paciente = {
    nombre: '',
    fechaNac: '',
    estatura: null,
    direccion: '',
    id: this.firestoreService.getId(),
    fecha: new Date()
  };

 private path = "Pacientes/";

  constructor(
    public firestoreService: FirestoreService
  ) {}

  ngOnInit(){
    this.getPacientes();
  }

  guardarPaciente() {
    this.firestoreService.createDoc(this.newPaciente, this.path, this.newPaciente.id);
  }
  getPacientes(){
    this.firestoreService.getCollection<Paciente>(this.path).subscribe(res =>{
      this.pacientes = res;
    });
  }



}
