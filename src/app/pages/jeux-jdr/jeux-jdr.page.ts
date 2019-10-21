import { Component, OnInit } from '@angular/core';
import {Joueur, JdrService} from "../../services/jdr.service";
import {ActivatedRoute} from "@angular/router";
import {LoadingController, NavController} from "@ionic/angular";

@Component({
  selector: 'app-jeux-jdr',
  templateUrl: './jeux-jdr.page.html',
  styleUrls: ['./jeux-jdr.page.scss'],
})
export class JeuxJdrPage implements OnInit {

  joueur: Joueur = {
    pseudo: null,
    hp: 20,
    createdAt : new Date().getTime()
  }

  joueurId = null;

  constructor(private jdrService: JdrService, private route: ActivatedRoute,
              private loadingController: LoadingController,
              private nav: NavController) { }

  ngOnInit() {
    this.joueurId = this.route.snapshot.params['id'];
    if (this.joueurId) {
      this.loadJoueur();
    }
  }

  async loadJoueur() {

    const loading = await this.loadingController.create({
      // @ts-ignore
      content: 'Loading...'
    });
    await loading.present();

    this.jdrService.getJoueur(this.joueurId).subscribe(res => {
      loading.dismiss();
      this.joueur = res;
    });
  }

  async saveJoueur() {
    const loading = await this.loadingController.create({
      // @ts-ignore
      content: 'Saving...'
    });
    await loading.present();

    if (this.joueurId) {
      this.jdrService.updateJoueur(this.joueur, this.joueurId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('jeux-jdr-home');
      });
    } else {
      this.jdrService.addJoueur(this.joueur).then(() => {
        loading.dismiss();
        this.nav.navigateBack('jeux-jdr-home');
      });
    }
  }

}
