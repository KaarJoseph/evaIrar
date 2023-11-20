import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Nota } from './domain/nota';


@Injectable({
  providedIn: 'root'
})
export class NotasService {


  private dbPath = '/notas'; 
  notas: Nota[] = []

  contactosRef: AngularFirestoreCollection<Nota>;

  constructor(private db: AngularFirestore) {
    this.contactosRef = db.collection(this.dbPath);
  }

  save(nota: Nota){
    this.notas.push(nota)
    console.log(this.notas)
    nota.uid = this.db.createId()
    this.create(nota)
  }

  getList(){
    return this.notas
  }

  
  getAll() {
    return this.contactosRef.valueChanges();
  }

  create(nota: Nota): any {
    return this.contactosRef.doc(nota.uid).set({ ...nota });
  }

  update(id: string, data: any): Promise<void> {
    return this.contactosRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.contactosRef.doc(id).delete();
  }
}
