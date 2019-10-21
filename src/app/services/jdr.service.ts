import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export interface Joueur {
  pseudo: string;
  hp: number;
  createdAt: number;
}

@Injectable({
  providedIn: 'root'
})
export class JdrService {

  private joueursCollection: AngularFirestoreCollection<Joueur>;

  private joueurs: Observable<Joueur[]>;

  constructor(db: AngularFirestore ) {

    this.joueursCollection = db.collection<Joueur>('joueurs');

    this.joueurs = this.joueursCollection.snapshotChanges().pipe(
        map(actions => {
          // @ts-ignore
          return actions.map( a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data};
          });
        })
    );
  }

  getJoueurs() {
    return this.joueurs;
  }

  getJoueur(id) {
    return this.joueursCollection.doc<Joueur>(id).valueChanges();
  }

  updateJoueur(joueur: Joueur, id: string) {
    return this.joueursCollection.doc(id).update(joueur);
  }

  addJoueur(joueur: Joueur) {
    return this.joueursCollection.add(joueur);
  }

  removeJoueur(id) {
    return this.joueursCollection.doc(id).delete();
  }
}
