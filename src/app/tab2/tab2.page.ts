import { Component } from '@angular/core';
import { Triaje } from '../model';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  triajes: Triaje[] = [];

  newTriaje: Triaje = {
    peso: null,
    temperatura: null,
    presion: null,
    nivelSat: null,
    id: this.firestoreService.getId(),
    fecha: new Date()
  };
  private path = "Triajes/";

  constructor(
    public firestoreService: FirestoreService
  ) {}
  ngOnInit(){
    this.getTriajes();
  }

  guardarTriajes() {
    this.firestoreService.createDoc(this.newTriaje, this.path, this.newTriaje.id);
  }
  getTriajes(){
    this.firestoreService.getCollection<Triaje>(this.path).subscribe(res =>{
      this.triajes = res;
    });
  }
  

}
